import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";
import { normalizeInquiry, validateInquiry } from "@/lib/inquiry";
import {
  clearInFlight,
  dedupeKeys,
  deliverInquiry,
  describeForLog,
  isDuplicate,
  mailConfig,
  markDelivered,
  markInFlight,
  MIN_FILL_MS,
  rateLimited,
  sendAcknowledgment,
} from "@/lib/inquiry-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY = 20_000;

function fail(status: number, error: string, extra: Record<string, unknown> = {}) {
  return NextResponse.json(
    { ok: false, error, ...extra },
    { status, headers: { "Cache-Control": "no-store" } }
  );
}

// Shown when we cannot accept or deliver a request, so the visitor is never
// left believing a request went through.
const alternateContact = SITE.contactEmail || undefined;

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip))
    return fail(429, "Too many requests. Please wait a few minutes and try again.");

  let raw: Record<string, unknown>;
  try {
    const text = await req.text();
    if (text.length > MAX_BODY) return fail(413, "That request is too large.");
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    raw = parsed as Record<string, unknown>;
  } catch {
    return fail(400, "We couldn’t read that request. Please try again.");
  }

  // Honeypot: real visitors never see or fill this field. Bots get a quiet
  // success so they don't learn to adapt, and nothing is delivered.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  }

  const startedAt = Number(raw.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS)
    return fail(400, "Please take a moment to review your request, then submit again.");

  const data = normalizeInquiry(raw);
  const errors = validateInquiry(data);
  if (Object.keys(errors).length > 0)
    return fail(400, "Please correct the highlighted fields.", { errors });

  const keys = dedupeKeys(data, raw.key);
  if (isDuplicate(keys))
    return NextResponse.json({ ok: true, duplicate: true }, { headers: { "Cache-Control": "no-store" } });

  const cfg = mailConfig();
  if (!cfg) {
    if (process.env.NODE_ENV !== "production") {
      // Local development only: no mail server configured, so show what would be sent.
      console.log("[inquiry:dev] would deliver:\n" + describeForLog(data));
      return NextResponse.json({ ok: true, devMode: true });
    }
    console.error("[inquiry] delivery is not configured (INQUIRY_TO_EMAIL / SMTP_HOST).");
    return fail(503, "Online requests are temporarily unavailable.", { alternateContact });
  }

  markInFlight(keys);
  try {
    await deliverInquiry(cfg, data);
  } catch (err) {
    clearInFlight(keys);
    console.error("[inquiry] delivery failed:", (err as { code?: string }).code ?? "error");
    return fail(502, "We couldn’t deliver your request.", { alternateContact });
  }
  markDelivered(keys);
  clearInFlight(keys);

  // Acknowledgment is best effort; the request itself was already delivered.
  await sendAcknowledgment(cfg, data);

  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
