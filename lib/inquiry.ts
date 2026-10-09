// Inquiry form model + validation. Isomorphic: the form uses it for instant
// feedback and /api/inquiry uses it as the authoritative server-side check.

import { CONSULTING_GROUPS, THEMES_BY_ID, TRAINING_CATEGORIES } from "./content";

export const SERVICE_OPTIONS = [
  { value: "speaking", label: "Speaking Engagements" },
  { value: "training", label: "Training & Workshops" },
  { value: "consulting", label: "Organizational Consulting" },
  { value: "multiple", label: "Multiple / Not Sure Yet" },
] as const;

export const INQUIRER_TYPES = [
  { value: "organization", label: "Organization" },
  { value: "individual", label: "Individual" },
] as const;

export const AUDIENCE_SIZES = [
  { value: "under-25", label: "Under 25" },
  { value: "25-50", label: "25–50" },
  { value: "50-100", label: "50–100" },
  { value: "100-250", label: "100–250" },
  { value: "250-500", label: "250–500" },
  { value: "500+", label: "500+" },
] as const;

export const DELIVERY_OPTIONS = [
  { value: "in-person", label: "In person" },
  { value: "virtual", label: "Virtual" },
  { value: "hybrid", label: "Hybrid" },
  { value: "flexible", label: "Flexible" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under-1000", label: "Under $1,000" },
  { value: "1000-2500", label: "$1,000–$2,500" },
  { value: "2500-5000", label: "$2,500–$5,000" },
  { value: "5000-10000", label: "$5,000–$10,000" },
  { value: "10000+", label: "$10,000+" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const THEME_OTHER = "other";

export const LIMITS = {
  name: 120,
  email: 254,
  organization: 160,
  phone: 40,
  location: 160,
  summaryMin: 20,
  summaryMax: 1500,
} as const;

export interface Inquiry {
  // required
  fullName: string;
  email: string;
  inquirerType: string;
  organizationName: string; // required when inquirerType === "organization"
  serviceInterest: string;
  requestSummary: string;
  // optional
  phone: string;
  category: string;
  theme: string;
  audienceSize: string;
  preferredDate: string; // yyyy-mm-dd
  dateFlexible: boolean;
  eventLocation: string;
  deliveryFormat: string;
  budgetRange: string;
}

export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;

export const EMPTY_INQUIRY: Inquiry = {
  fullName: "",
  email: "",
  inquirerType: "",
  organizationName: "",
  serviceInterest: "",
  requestSummary: "",
  phone: "",
  category: "",
  theme: "",
  audienceSize: "",
  preferredDate: "",
  dateFlexible: false,
  eventLocation: "",
  deliveryFormat: "",
  budgetRange: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[\d\s\-+().]{7,25}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const has = (opts: readonly { value: string }[], v: string) =>
  opts.some((o) => o.value === v);

/** Category options depend on the service: consulting uses the five consulting groups. */
export function categoryOptions(service: string): { value: string; label: string }[] {
  return service === "consulting"
    ? CONSULTING_GROUPS.map((g) => ({ value: g.slug, label: g.title }))
    : TRAINING_CATEGORIES.map((c) => ({ value: c.slug, label: c.label }));
}

const str = (v: unknown) =>
  typeof v === "string" ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim() : "";

/** Normalize unknown input into an Inquiry-shaped object (no validation). */
export function normalizeInquiry(raw: Record<string, unknown>): Inquiry {
  return {
    fullName: str(raw.fullName),
    email: str(raw.email),
    inquirerType: str(raw.inquirerType),
    organizationName: str(raw.organizationName),
    serviceInterest: str(raw.serviceInterest),
    requestSummary: str(raw.requestSummary),
    phone: str(raw.phone),
    category: str(raw.category),
    theme: str(raw.theme),
    audienceSize: str(raw.audienceSize),
    preferredDate: str(raw.preferredDate),
    dateFlexible: raw.dateFlexible === true,
    eventLocation: str(raw.eventLocation),
    deliveryFormat: str(raw.deliveryFormat),
    budgetRange: str(raw.budgetRange),
  };
}

export function validateInquiry(d: Inquiry): InquiryErrors {
  const e: InquiryErrors = {};

  if (!d.fullName) e.fullName = "Full name is required.";
  else if (d.fullName.length > LIMITS.name) e.fullName = "Name is too long.";

  if (!d.email) e.email = "Email address is required.";
  else if (d.email.length > LIMITS.email || !EMAIL_RE.test(d.email))
    e.email = "Please enter a valid email address.";

  if (!has(INQUIRER_TYPES, d.inquirerType))
    e.inquirerType = "Please choose organization or individual.";
  else if (d.inquirerType === "organization") {
    if (!d.organizationName) e.organizationName = "Please enter your organization’s name.";
    else if (d.organizationName.length > LIMITS.organization)
      e.organizationName = "Organization name is too long.";
  }

  if (!has(SERVICE_OPTIONS, d.serviceInterest))
    e.serviceInterest = "Please select a service.";

  if (!d.requestSummary) e.requestSummary = "Please provide a brief summary of your request.";
  else if (d.requestSummary.length < LIMITS.summaryMin)
    e.requestSummary = `Please write at least ${LIMITS.summaryMin} characters.`;
  else if (d.requestSummary.length > LIMITS.summaryMax)
    e.requestSummary = `Please keep your summary under ${LIMITS.summaryMax} characters.`;

  if (d.phone && !PHONE_RE.test(d.phone)) e.phone = "Please enter a valid phone number.";

  if (d.category && !categoryOptions(d.serviceInterest === "consulting" ? "consulting" : "training").some((o) => o.value === d.category))
    e.category = "Please choose a category from the list.";

  if (d.theme) {
    const theme = THEMES_BY_ID[d.theme];
    if (d.theme !== THEME_OTHER && (!theme || theme.category !== d.category))
      e.theme = "Please choose a theme from the list.";
  }

  if (d.audienceSize && !has(AUDIENCE_SIZES, d.audienceSize))
    e.audienceSize = "Please choose an audience size from the list.";
  if (d.deliveryFormat && !has(DELIVERY_OPTIONS, d.deliveryFormat))
    e.deliveryFormat = "Please choose a delivery option from the list.";
  if (d.budgetRange && !has(BUDGET_OPTIONS, d.budgetRange))
    e.budgetRange = "Please choose a budget range from the list.";

  if (d.preferredDate) {
    const t = Date.parse(d.preferredDate + "T00:00:00Z");
    if (!DATE_RE.test(d.preferredDate) || Number.isNaN(t))
      e.preferredDate = "Please enter a valid date.";
  }
  if (d.eventLocation.length > LIMITS.location)
    e.eventLocation = "Location is too long.";

  return e;
}
