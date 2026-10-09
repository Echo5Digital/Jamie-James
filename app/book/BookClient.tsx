"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AlertCircle,
  Building2,
  Calendar,
  ChevronDown,
  DollarSign,
  FileText,
  Layers,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Tag,
  User,
  Users,
} from "lucide-react";
import Button from "@/components/Button";
import {
  AUDIENCE_SIZES,
  BUDGET_OPTIONS,
  DELIVERY_OPTIONS,
  EMPTY_INQUIRY,
  INQUIRER_TYPES,
  LIMITS,
  SERVICE_OPTIONS,
  THEME_OTHER,
  categoryOptions,
  validateInquiry,
  type Inquiry,
  type InquiryErrors,
} from "@/lib/inquiry";
import { THEMES_BY_ID, categoryLabel, getCategory, themesFor } from "@/lib/content";
import { SITE } from "@/lib/site";
import type { TrainingCategorySlug } from "@/lib/topics";

type FieldName = keyof Inquiry;

const inputBase =
  "w-full bg-background text-foreground font-body text-sm border border-field rounded-md px-4 py-3 placeholder:text-field focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-200";
const selectBase = `${inputBase} appearance-none cursor-pointer pr-10`;
const withIcon = "pl-11";
const inputError = "border-red-700 focus:ring-red-400 focus:border-red-700";
const labelBase =
  "block font-body text-xs font-semibold uppercase tracking-widest text-primary mb-1.5";
const iconBase =
  "pointer-events-none absolute left-3.5 w-4 h-4 text-field";

/** Build the initial form state from ?service=&category=&theme= (topic buttons). */
function initialFrom(params: URLSearchParams | null): { values: Inquiry; prefilled: string[] } {
  const v: Inquiry = { ...EMPTY_INQUIRY };
  const get = (k: string) => params?.get(k) ?? "";
  const cat = get("category");
  const theme = THEMES_BY_ID[get("theme")];

  let service: string = SERVICE_OPTIONS.some((o) => o.value === get("service")) ? get("service") : "";
  if (!service) {
    if (categoryOptions("consulting").some((o) => o.value === cat)) service = "consulting";
    else if (getCategory(cat) || theme) service = "training";
  }
  v.serviceInterest = service;
  if (categoryOptions(service).some((o) => o.value === cat)) v.category = cat;
  if (theme && service !== "consulting") {
    if (!v.category) v.category = theme.category;
    if (theme.category === v.category) v.theme = theme.id;
  }

  const prefilled: string[] = [];
  if (v.serviceInterest)
    prefilled.push(SERVICE_OPTIONS.find((o) => o.value === v.serviceInterest)?.label ?? "");
  if (v.category) prefilled.push(categoryLabel(v.category) ?? "");
  if (v.theme) prefilled.push(THEMES_BY_ID[v.theme]?.label ?? "");
  return { values: v, prefilled: prefilled.filter(Boolean) };
}

function newKey() {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

interface SubmitProblem {
  message: string;
  alternateContact?: string;
}

export default function BookClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [init] = useState(() => initialFrom(searchParams));
  const [values, setValues] = useState<Inquiry>(init.values);
  const [honeypot, setHoneypot] = useState("");
  const [startedAt] = useState(() => Date.now());
  const [key] = useState(newKey);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [serverErrors, setServerErrors] = useState<InquiryErrors>({});
  const [problem, setProblem] = useState<SubmitProblem | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const alertRef = useRef<HTMLDivElement>(null);

  const errors: InquiryErrors = { ...validateInquiry(values), ...serverErrors };
  const show = (f: FieldName) => (touched[f] || attempted) && errors[f] ? errors[f] : undefined;

  const isConsulting = values.serviceInterest === "consulting";
  const catOptions = categoryOptions(values.serviceInterest);
  const trainingCategory =
    !isConsulting && values.category ? (values.category as TrainingCategorySlug) : null;
  const themeOptions = trainingCategory && getCategory(trainingCategory) ? themesFor(trainingCategory) : [];
  const today = new Date().toISOString().slice(0, 10);

  const update = (patch: Partial<Inquiry>) => {
    setValues((prev) => ({ ...prev, ...patch }));
    setServerErrors((prev) => {
      const next = { ...prev };
      for (const k of Object.keys(patch)) delete next[k as FieldName];
      return next;
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    if (name === "dateFlexible") return update({ dateFlexible: checked });
    if (name === "serviceInterest") {
      const stillValid = categoryOptions(value).some((o) => o.value === values.category);
      return update({
        serviceInterest: value,
        ...(stillValid ? {} : { category: "", theme: "" }),
      });
    }
    if (name === "category") return update({ category: value, theme: "" });
    update({ [name]: value } as Partial<Inquiry>);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const ariaFor = (f: FieldName) => ({
    "aria-invalid": show(f) ? true : undefined,
    "aria-describedby": show(f) ? `${f}-error` : undefined,
  });

  const fieldError = (f: FieldName) =>
    show(f) ? (
      <p id={`${f}-error`} className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-800">
        <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
        {show(f)}
      </p>
    ) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setAttempted(true);
    setProblem(null);
    if (Object.keys(validateInquiry(values)).length > 0) {
      setProblem({ message: "Please correct the highlighted fields and submit again." });
      requestAnimationFrame(() => alertRef.current?.focus());
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot, startedAt, key }),
      });
      let json: { ok?: boolean; error?: string; errors?: InquiryErrors; alternateContact?: string } | null = null;
      try {
        json = await res.json();
      } catch {
        json = null;
      }
      if (res.ok && json?.ok) {
        router.push("/thank-you");
        return;
      }
      if (json?.errors) setServerErrors(json.errors);
      setProblem({
        message: json?.error ?? "We couldn’t send your request.",
        alternateContact: json?.alternateContact ?? (SITE.contactEmail || undefined),
      });
    } catch {
      setProblem({
        message: "We couldn’t reach the server. Please check your connection and try again.",
        alternateContact: SITE.contactEmail || undefined,
      });
    }
    setSubmitting(false);
    requestAnimationFrame(() => alertRef.current?.focus());
  };

  const req = <span className="text-red-800" aria-hidden="true"> *</span>;
  const opt = (
    <span className="font-normal normal-case tracking-normal text-foreground/70"> (optional)</span>
  );

  return (
    <div className="overflow-hidden rounded-md border border-[#D9CCBA] bg-background shadow-lg">
      <div className="h-1.5 w-full bg-secondary" />
      <div className="p-6 md:p-10">
        <form onSubmit={handleSubmit} noValidate className="space-y-8" aria-label="Inquiry form">
          {init.prefilled.length > 0 && (
            <p className="rounded-md bg-mint px-4 py-3 font-body text-xs leading-relaxed text-foreground/85">
              Your selection is filled in: <strong>{init.prefilled.join(" › ")}</strong>.
              You can change it below.
            </p>
          )}

          {/* Spam trap: hidden from people, visible to simple bots */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Website
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </label>
          </div>

          {/* ── Required ── */}
          <div>
            <h2 className="mb-1 font-heading text-lg font-bold text-primary">Required Information</h2>
            <p className="mb-6 font-body text-xs text-foreground/75">
              Fields marked <span className="text-red-800">*</span> are required.
            </p>

            <div className="space-y-5">
              <div>
                <label htmlFor="fullName" className={labelBase}>Full Name{req}</label>
                <div className="relative">
                  <User className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                  <input
                    id="fullName" name="fullName" type="text" autoComplete="name" required
                    placeholder="Jane Smith" maxLength={LIMITS.name}
                    value={values.fullName} onChange={handleChange} onBlur={handleBlur}
                    className={`${inputBase} ${withIcon} ${show("fullName") ? inputError : ""}`}
                    {...ariaFor("fullName")}
                  />
                </div>
                {fieldError("fullName")}
              </div>

              <div>
                <label htmlFor="email" className={labelBase}>Email Address{req}</label>
                <div className="relative">
                  <Mail className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                  <input
                    id="email" name="email" type="email" autoComplete="email" required
                    placeholder="jane@organization.org" maxLength={LIMITS.email}
                    value={values.email} onChange={handleChange} onBlur={handleBlur}
                    className={`${inputBase} ${withIcon} ${show("email") ? inputError : ""}`}
                    {...ariaFor("email")}
                  />
                </div>
                {fieldError("email")}
              </div>

              <div>
                <label htmlFor="inquirerType" className={labelBase}>Organization or Individual{req}</label>
                <div className="relative">
                  <Building2 className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                  <select
                    id="inquirerType" name="inquirerType" required
                    value={values.inquirerType} onChange={handleChange} onBlur={handleBlur}
                    className={`${selectBase} ${withIcon} ${show("inquirerType") ? inputError : ""}`}
                    {...ariaFor("inquirerType")}
                  >
                    <option value="">Select one</option>
                    {INQUIRER_TYPES.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown className={`${iconBase} right-3.5 left-auto top-1/2 -translate-y-1/2`} aria-hidden="true" />
                </div>
                {fieldError("inquirerType")}
              </div>

              {values.inquirerType === "organization" && (
                <div>
                  <label htmlFor="organizationName" className={labelBase}>Organization Name{req}</label>
                  <div className="relative">
                    <Building2 className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                    <input
                      id="organizationName" name="organizationName" type="text" autoComplete="organization" required
                      placeholder="Your organization" maxLength={LIMITS.organization}
                      value={values.organizationName} onChange={handleChange} onBlur={handleBlur}
                      className={`${inputBase} ${withIcon} ${show("organizationName") ? inputError : ""}`}
                      {...ariaFor("organizationName")}
                    />
                  </div>
                  {fieldError("organizationName")}
                </div>
              )}

              <div>
                <label htmlFor="serviceInterest" className={labelBase}>Service Interest{req}</label>
                <div className="relative">
                  <Layers className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                  <select
                    id="serviceInterest" name="serviceInterest" required
                    value={values.serviceInterest} onChange={handleChange} onBlur={handleBlur}
                    className={`${selectBase} ${withIcon} ${show("serviceInterest") ? inputError : ""}`}
                    {...ariaFor("serviceInterest")}
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown className={`${iconBase} right-3.5 left-auto top-1/2 -translate-y-1/2`} aria-hidden="true" />
                </div>
                {fieldError("serviceInterest")}
              </div>

              <div>
                <label htmlFor="requestSummary" className={labelBase}>Brief Request Summary{req}</label>
                <div className="relative">
                  <FileText className={`${iconBase} top-3.5`} aria-hidden="true" />
                  <textarea
                    id="requestSummary" name="requestSummary" rows={5} required
                    placeholder="Share your goals, event or the challenge you’d like Jamie to help with. Please don’t include confidential patient, client or case details."
                    maxLength={LIMITS.summaryMax}
                    value={values.requestSummary} onChange={handleChange} onBlur={handleBlur}
                    className={`${inputBase} ${withIcon} resize-none leading-relaxed ${show("requestSummary") ? inputError : ""}`}
                    {...ariaFor("requestSummary")}
                  />
                </div>
                <div className="mt-1.5 flex items-start justify-between">
                  {fieldError("requestSummary") ?? <span />}
                  <span className="ml-auto font-body text-xs tabular-nums text-foreground/70">
                    {values.requestSummary.length}/{LIMITS.summaryMax}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E0D6C8]" />

          {/* ── Optional ── */}
          <div>
            <h2 className="mb-1 font-heading text-lg font-bold text-primary">Optional Details</h2>
            <p className="mb-6 font-body text-xs text-foreground/75">
              These help Jamie prepare a more specific response.
            </p>

            <div className="space-y-5">
              <div>
                <label htmlFor="phone" className={labelBase}>Phone Number{opt}</label>
                <div className="relative">
                  <Phone className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                  <input
                    id="phone" name="phone" type="tel" autoComplete="tel"
                    placeholder="(555) 000-0000" maxLength={LIMITS.phone}
                    value={values.phone} onChange={handleChange} onBlur={handleBlur}
                    className={`${inputBase} ${withIcon} ${show("phone") ? inputError : ""}`}
                    {...ariaFor("phone")}
                  />
                </div>
                {fieldError("phone")}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="category" className={labelBase}>
                    {isConsulting ? "Consulting Area" : "Category"}{opt}
                  </label>
                  <div className="relative">
                    <Tag className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                    <select
                      id="category" name="category"
                      value={values.category} onChange={handleChange} onBlur={handleBlur}
                      className={`${selectBase} ${withIcon} ${show("category") ? inputError : ""}`}
                      {...ariaFor("category")}
                    >
                      <option value="">{isConsulting ? "Select an area" : "Select a category"}</option>
                      {catOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <ChevronDown className={`${iconBase} right-3.5 left-auto top-1/2 -translate-y-1/2`} aria-hidden="true" />
                  </div>
                  {fieldError("category")}
                </div>

                {!isConsulting && (
                  <div>
                    <label htmlFor="theme" className={labelBase}>Theme / Topic{opt}</label>
                    <div className="relative">
                      <FileText className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                      <select
                        id="theme" name="theme"
                        disabled={themeOptions.length === 0}
                        value={values.theme} onChange={handleChange} onBlur={handleBlur}
                        className={`${selectBase} ${withIcon} disabled:cursor-not-allowed disabled:opacity-60 ${show("theme") ? inputError : ""}`}
                        {...ariaFor("theme")}
                      >
                        <option value="">
                          {themeOptions.length === 0 ? "Choose a category first" : "Select a theme"}
                        </option>
                        {themeOptions.map((t) => (
                          <option key={t.id} value={t.id}>{t.label}</option>
                        ))}
                        {themeOptions.length > 0 && (
                          <option value={THEME_OTHER}>Other / not listed (describe above)</option>
                        )}
                      </select>
                      <ChevronDown className={`${iconBase} right-3.5 left-auto top-1/2 -translate-y-1/2`} aria-hidden="true" />
                    </div>
                    {fieldError("theme")}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="audienceSize" className={labelBase}>Audience Size{opt}</label>
                  <div className="relative">
                    <Users className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                    <select
                      id="audienceSize" name="audienceSize"
                      value={values.audienceSize} onChange={handleChange}
                      className={`${selectBase} ${withIcon}`}
                    >
                      <option value="">Select size</option>
                      {AUDIENCE_SIZES.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <ChevronDown className={`${iconBase} right-3.5 left-auto top-1/2 -translate-y-1/2`} aria-hidden="true" />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className={labelBase}>Preferred Date{opt}</label>
                  <div className="relative">
                    <Calendar className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                    <input
                      id="preferredDate" name="preferredDate" type="date" min={today}
                      value={values.preferredDate} onChange={handleChange} onBlur={handleBlur}
                      className={`${inputBase} ${withIcon} ${show("preferredDate") ? inputError : ""}`}
                      {...ariaFor("preferredDate")}
                    />
                  </div>
                  {fieldError("preferredDate")}
                  <label className="mt-2 flex items-center gap-2 font-body text-xs text-foreground/85">
                    <input
                      type="checkbox" name="dateFlexible"
                      checked={values.dateFlexible} onChange={handleChange}
                      className="h-4 w-4 rounded border-field accent-secondary"
                    />
                    My date is flexible
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="eventLocation" className={labelBase}>Event Location{opt}</label>
                <div className="relative">
                  <MapPin className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                  <input
                    id="eventLocation" name="eventLocation" type="text"
                    placeholder="City, State or Online" maxLength={LIMITS.location}
                    value={values.eventLocation} onChange={handleChange} onBlur={handleBlur}
                    className={`${inputBase} ${withIcon} ${show("eventLocation") ? inputError : ""}`}
                    {...ariaFor("eventLocation")}
                  />
                </div>
                {fieldError("eventLocation")}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="deliveryFormat" className={labelBase}>Delivery Preference{opt}</label>
                  <div className="relative">
                    <Monitor className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                    <select
                      id="deliveryFormat" name="deliveryFormat"
                      value={values.deliveryFormat} onChange={handleChange}
                      className={`${selectBase} ${withIcon}`}
                    >
                      <option value="">Select an option</option>
                      {DELIVERY_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <ChevronDown className={`${iconBase} right-3.5 left-auto top-1/2 -translate-y-1/2`} aria-hidden="true" />
                  </div>
                </div>

                <div>
                  <label htmlFor="budgetRange" className={labelBase}>Budget Range{opt}</label>
                  <div className="relative">
                    <DollarSign className={`${iconBase} top-1/2 -translate-y-1/2`} aria-hidden="true" />
                    <select
                      id="budgetRange" name="budgetRange"
                      value={values.budgetRange} onChange={handleChange}
                      className={`${selectBase} ${withIcon}`}
                    >
                      <option value="">Select a range</option>
                      {BUDGET_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <ChevronDown className={`${iconBase} right-3.5 left-auto top-1/2 -translate-y-1/2`} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E0D6C8]" />

          <p className="rounded-md bg-[#EAE2D6] px-4 py-3 font-body text-xs leading-relaxed text-foreground/85">
            Submitting this form is a <strong>request, not a confirmed booking</strong>.
            Please do not include confidential patient, client or case details.
            Jamie will review your request and follow up.
          </p>

          {problem && (
            <div
              ref={alertRef}
              tabIndex={-1}
              role="alert"
              className="flex items-start gap-3 rounded-md border border-red-300 bg-red-50 px-4 py-3"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-800" aria-hidden="true" />
              <div className="font-body text-xs leading-relaxed text-red-900">
                <p className="font-semibold">{problem.message}</p>
                {!Object.keys(errors).length && (
                  <p className="mt-1">
                    {problem.alternateContact ? (
                      <>
                        You can also reach Jamie at{" "}
                        <a className="underline" href={`mailto:${problem.alternateContact}`}>
                          {problem.alternateContact}
                        </a>
                        .
                      </>
                    ) : (
                      "Your request was not sent. Please try again in a few minutes."
                    )}
                  </p>
                )}
              </div>
            </div>
          )}

          <Button type="submit" variant="primary" size="lg" fullWidth loading={submitting} disabled={submitting}>
            Submit Request
          </Button>

          <p className="text-center font-body text-xs leading-relaxed text-foreground/75">
            We use your details only to respond to your request. See our{" "}
            <Link href="/privacy" className="underline hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
