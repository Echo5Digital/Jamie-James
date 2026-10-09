// Server-only helpers for /api/inquiry: spam/duplicate guards and email delivery.
// In-memory guards are per server instance — good enough for a low-volume
// booking form; move to a shared store if the site is scaled out.

import { createHash } from "node:crypto";
import nodemailer from "nodemailer";
import { SITE } from "./site";
import { categoryLabel, THEMES_BY_ID } from "./content";
import {
  AUDIENCE_SIZES,
  BUDGET_OPTIONS,
  DELIVERY_OPTIONS,
  INQUIRER_TYPES,
  SERVICE_OPTIONS,
  THEME_OTHER,
  type Inquiry,
} from "./inquiry";

// ── spam / duplicate protection ─────────────────────────────────────────

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const DEDUPE_MS = 24 * 60 * 60 * 1000;
export const MIN_FILL_MS = 2500;

const hits = new Map<string, number[]>();
const delivered = new Map<string, number>();
const inFlight = new Set<string>();

export function rateLimited(ip: string, now = Date.now()): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
  }
  return recent.length > RATE_MAX;
}

export function dedupeKeys(d: Inquiry, clientKey: unknown): string[] {
  const content = createHash("sha256")
    .update(`${d.email.toLowerCase()}|${d.requestSummary.toLowerCase()}`)
    .digest("hex");
  const keys = [`c:${content}`];
  if (typeof clientKey === "string" && clientKey.length > 0 && clientKey.length <= 100)
    keys.push(`k:${clientKey}`);
  return keys;
}

export function isDuplicate(keys: string[], now = Date.now()): boolean {
  for (const [k, t] of delivered) if (now - t >= DEDUPE_MS) delivered.delete(k);
  return keys.some((k) => delivered.has(k) || inFlight.has(k));
}

export const markInFlight = (keys: string[]) => keys.forEach((k) => inFlight.add(k));
export const clearInFlight = (keys: string[]) => keys.forEach((k) => inFlight.delete(k));
export const markDelivered = (keys: string[], now = Date.now()) =>
  keys.forEach((k) => delivered.set(k, now));

// ── delivery ────────────────────────────────────────────────────────────

interface MailConfig {
  to: string;
  from: string;
  host: string;
  port: number;
  secure: boolean;
  user?: string;
  pass?: string;
}

export function mailConfig(): MailConfig | null {
  const to = process.env.INQUIRY_TO_EMAIL;
  const host = process.env.SMTP_HOST;
  if (!to || !host) return null;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER || undefined;
  return {
    to,
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    user,
    pass: process.env.SMTP_PASS || undefined,
    from: process.env.INQUIRY_FROM_EMAIL || user || to,
  };
}

const label = (opts: readonly { value: string; label: string }[], v: string) =>
  opts.find((o) => o.value === v)?.label ?? v;

function describe(d: Inquiry): string {
  const theme =
    d.theme === THEME_OTHER ? "Other / not listed" : d.theme ? THEMES_BY_ID[d.theme]?.label ?? d.theme : "";
  const date = d.preferredDate
    ? d.preferredDate + (d.dateFlexible ? " (flexible)" : "")
    : d.dateFlexible
      ? "Flexible"
      : "";
  const lines: [string, string][] = [
    ["Name", d.fullName],
    ["Email", d.email],
    ["Phone", d.phone],
    ["Inquiring as", label(INQUIRER_TYPES, d.inquirerType)],
    ["Organization", d.organizationName],
    ["Service", label(SERVICE_OPTIONS, d.serviceInterest)],
    ["Category", d.category ? categoryLabel(d.category) ?? d.category : ""],
    ["Theme / topic", theme],
    ["Audience size", d.audienceSize ? label(AUDIENCE_SIZES, d.audienceSize) : ""],
    ["Preferred date", date],
    ["Event location", d.eventLocation],
    ["Delivery", d.deliveryFormat ? label(DELIVERY_OPTIONS, d.deliveryFormat) : ""],
    ["Budget range", d.budgetRange ? label(BUDGET_OPTIONS, d.budgetRange) : ""],
  ];
  return (
    lines.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nRequest summary:\n${d.requestSummary}`
  );
}

export function describeForLog(d: Inquiry) {
  return describe(d);
}

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").slice(0, 80);

/** Sends the booking-inbox notification. Throws on failure. */
export async function deliverInquiry(cfg: MailConfig, d: Inquiry): Promise<void> {
  const transport = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: cfg.user ? { user: cfg.user, pass: cfg.pass } : undefined,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  await transport.sendMail({
    from: `"${SITE.name} website" <${cfg.from}>`,
    to: cfg.to,
    replyTo: `"${oneLine(d.fullName).replace(/"/g, "")}" <${d.email}>`,
    subject: `New inquiry: ${label(SERVICE_OPTIONS, d.serviceInterest)} — ${oneLine(d.fullName)}`,
    text:
      `${describe(d)}\n\n—\nSubmitted through the ${SITE.name} website inquiry form. ` +
      `This is a request, not a confirmed booking.`,
  });
}

/** Sends the acknowledgment to the person who submitted. Never throws. */
export async function sendAcknowledgment(cfg: MailConfig, d: Inquiry): Promise<boolean> {
  try {
    const transport = nodemailer.createTransport({
      host: cfg.host,
      port: cfg.port,
      secure: cfg.secure,
      auth: cfg.user ? { user: cfg.user, pass: cfg.pass } : undefined,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
    await transport.sendMail({
      from: `"${SITE.name}" <${cfg.from}>`,
      to: d.email,
      subject: `We received your request — ${SITE.name}`,
      text:
        `Hello ${oneLine(d.fullName)},\n\n` +
        `Thank you for contacting ${SITE.name}. We received your request about ` +
        `${label(SERVICE_OPTIONS, d.serviceInterest).toLowerCase()}.\n\n` +
        `Please note that a request is not a confirmed booking. Jamie will review it and follow up ` +
        `with you. Formats and availability are confirmed by Jamie.\n\n` +
        `Please do not reply with confidential patient, client or case details.\n\n` +
        `${SITE.name}\n${SITE.url}\n`,
    });
    return true;
  } catch (err) {
    console.error("[inquiry] acknowledgment failed:", (err as { code?: string }).code ?? "error");
    return false;
  }
}
