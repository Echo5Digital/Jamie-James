"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import {
  User,
  Mail,
  Phone,
  Building2,
  FileText,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Layers,
  Tag,
  Monitor,
  AlertCircle,
  Info,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface BookClientProps {
  faqItems: FaqItem[];
}

interface FormValues {
  // Required
  fullName: string;
  email: string;
  organizationType: string;
  serviceInterest: string;
  requestSummary: string;
  // Optional
  phone: string;
  category: string;
  themeTopic: string;
  audienceSize: string;
  preferredDate: string;
  eventLocation: string;
  deliveryFormat: string;
  budgetRange: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  organizationType?: string;
  serviceInterest?: string;
  requestSummary?: string;
}

const initialValues: FormValues = {
  fullName: "",
  email: "",
  organizationType: "",
  serviceInterest: "",
  requestSummary: "",
  phone: "",
  category: "",
  themeTopic: "",
  audienceSize: "",
  preferredDate: "",
  eventLocation: "",
  deliveryFormat: "",
  budgetRange: "",
};

const inputBase =
  "w-full bg-background text-foreground font-body text-sm border border-[#C9B99A] rounded-md px-4 py-3 placeholder:text-[#8A7E72] focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-200";
const inputWithIcon = "pl-11";
const inputError = "border-red-600 focus:ring-red-400 focus:border-red-600";
const labelBase =
  "block font-body text-xs font-semibold uppercase tracking-widest text-primary mb-1.5";
const selectBase =
  "w-full bg-background text-foreground font-body text-sm border border-[#C9B99A] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-200 appearance-none cursor-pointer";

export default function BookClient({ faqItems }: BookClientProps) {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validate = (vals: FormValues): FormErrors => {
    const errs: FormErrors = {};
    if (!vals.fullName.trim()) errs.fullName = "Full name is required.";
    if (!vals.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!vals.organizationType)
      errs.organizationType = "Please select an option.";
    if (!vals.serviceInterest)
      errs.serviceInterest = "Please select a service.";
    if (!vals.requestSummary.trim()) {
      errs.requestSummary = "Please provide a brief summary.";
    } else if (vals.requestSummary.trim().length < 20) {
      errs.requestSummary = "Summary must be at least 20 characters.";
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const updated = { ...values, [name]: value };
    setValues(updated);
    if (touched[name]) setErrors(validate(updated));
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched: Record<string, boolean> = {};
    Object.keys(values).forEach((k) => (allTouched[k] = true));
    setTouched(allTouched);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setSubmitError(false);

    try {
      // Simulate form submission — replace with real endpoint
      await new Promise((res) => setTimeout(res, 1200));
      router.push("/thank-you");
    } catch {
      setSubmitError(true);
      setSubmitting(false);
    }
  };

  const fieldError = (field: keyof FormErrors) =>
    touched[field] && errors[field] ? (
      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700 font-body">
        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
        {errors[field]}
      </p>
    ) : null;

  return (
    <>
      {/* Form Section */}
      <Section variant="default" paddingSize="xl" maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
          {/* Left sidebar context */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary leading-snug mb-3">
                Tell Us About Your Needs
              </h2>
              <div className="w-10 h-[2px] bg-accent rounded-full mb-4" />
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                Whether you're planning a conference, staff training day,
                retreat, or organizational initiative — Jamie would love to
                hear from you.
              </p>
            </div>

            {/* Guidance Note */}
            <div className="bg-[#EAE2D6] border border-[#D4C5AD] rounded-md p-5 flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  Before You Submit
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                <li className="font-body text-xs text-foreground/75 leading-relaxed flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Submitting this form is a <strong>request, not a confirmed
                  booking</strong>. Jamie will review and follow up as soon as
                  possible.
                </li>
                <li className="font-body text-xs text-foreground/75 leading-relaxed flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Please <strong>do not include</strong> confidential patient,
                  client, or case details.
                </li>
                <li className="font-body text-xs text-foreground/75 leading-relaxed flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Looking for foster care or adoption resources? Visit{" "}
                  <a
                    href="https://www.openarmsinitiative.com"
                    className="text-secondary underline underline-offset-2 hover:text-primary transition-colors inline-flex items-center gap-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Arms Initiative
                    <ExternalLink className="w-3 h-3" />
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://www.openarmsfostercare.com"
                    className="text-secondary underline underline-offset-2 hover:text-primary transition-colors inline-flex items-center gap-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Arms Foster Care
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  .
                </li>
              </ul>
            </div>

            {/* Services quick reference */}
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-sm font-semibold text-primary uppercase tracking-widest">
                Services Available
              </h3>
              {[
                {
                  label: "Speaking Engagements",
                  desc: "Conferences, retreats, staff days, faith & community events",
                },
                {
                  label: "Training & Workshops",
                  desc: "Interactive, evidence-informed training for teams and leaders",
                },
                {
                  label: "Organizational Consulting",
                  desc: "Strategic support for lasting, sustainable organizational change",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border-l-2 border-accent pl-3"
                >
                  <p className="font-body text-sm font-semibold text-primary">
                    {s.label}
                  </p>
                  <p className="font-body text-xs text-foreground/60 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-md shadow-lg border border-[#D9CCBA] overflow-hidden">
              <div className="h-1.5 w-full bg-secondary" />
              <div className="p-6 md:p-10">
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  {/* ── Required Fields ── */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-1">
                      Required Information
                    </h3>
                    <p className="font-body text-xs text-foreground/55 mb-6">
                      Fields marked <span className="text-accent">*</span>{" "}
                      are required.
                    </p>

                    <div className="space-y-5">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className={labelBase}>
                          Full Name{" "}
                          <span className="text-accent">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72]" />
                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            autoComplete="name"
                            placeholder="Jane Smith"
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${inputBase} ${inputWithIcon} ${
                              touched.fullName && errors.fullName
                                ? inputError
                                : ""
                            }`}
                          />
                        </div>
                        {fieldError("fullName")}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className={labelBase}>
                          Email Address{" "}
                          <span className="text-accent">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72]" />
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="jane@organization.org"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${inputBase} ${inputWithIcon} ${
                              touched.email && errors.email ? inputError : ""
                            }`}
                          />
                        </div>
                        {fieldError("email")}
                      </div>

                      {/* Organization or Individual */}
                      <div>
                        <label
                          htmlFor="organizationType"
                          className={labelBase}
                        >
                          Organization or Individual{" "}
                          <span className="text-accent">*</span>
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                          <select
                            id="organizationType"
                            name="organizationType"
                            value={values.organizationType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${selectBase} pl-11 ${
                              touched.organizationType &&
                              errors.organizationType
                                ? inputError
                                : ""
                            }`}
                          >
                            <option value="">Select one</option>
                            <option value="organization">Organization</option>
                            <option value="individual">Individual</option>
                            <option value="faith-community">
                              Faith Community
                            </option>
                            <option value="government-agency">
                              Government Agency
                            </option>
                            <option value="school-district">
                              School / District
                            </option>
                            <option value="other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                        </div>
                        {fieldError("organizationType")}
                      </div>

                      {/* Service Interest */}
                      <div>
                        <label htmlFor="serviceInterest" className={labelBase}>
                          Service Interest{" "}
                          <span className="text-accent">*</span>
                        </label>
                        <div className="relative">
                          <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                          <select
                            id="serviceInterest"
                            name="serviceInterest"
                            value={values.serviceInterest}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${selectBase} pl-11 ${
                              touched.serviceInterest && errors.serviceInterest
                                ? inputError
                                : ""
                            }`}
                          >
                            <option value="">Select a service</option>
                            <option value="speaking">
                              Speaking Engagements
                            </option>
                            <option value="training">
                              Training &amp; Workshops
                            </option>
                            <option value="consulting">
                              Organizational Consulting
                            </option>
                            <option value="multiple">
                              Multiple / Not Sure Yet
                            </option>
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                        </div>
                        {fieldError("serviceInterest")}
                      </div>

                      {/* Request Summary */}
                      <div>
                        <label htmlFor="requestSummary" className={labelBase}>
                          Brief Request Summary{" "}
                          <span className="text-accent">*</span>
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8A7E72]" />
                          <textarea
                            id="requestSummary"
                            name="requestSummary"
                            rows={4}
                            placeholder="Share a bit about your goals, event, or the challenge you'd like Jamie to help address…"
                            value={values.requestSummary}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${inputBase} ${inputWithIcon} pt-3 resize-none leading-relaxed ${
                              touched.requestSummary && errors.requestSummary
                                ? inputError
                                : ""
                            }`}
                          />
                        </div>
                        <div className="flex items-start justify-between mt-1.5">
                          {fieldError("requestSummary") ?? <span />}
                          <span className="text-xs text-[#8A7E72] font-body ml-auto tabular-nums">
                            {values.requestSummary.length}/500
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#E0D6C8]" />

                  {/* ── Optional Fields ── */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-1">
                      Optional Details
                    </h3>
                    <p className="font-body text-xs text-foreground/55 mb-6">
                      These details help Jamie prepare a more tailored
                      response, but are not required.
                    </p>

                    <div className="space-y-5">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className={labelBase}>
                          Phone Number{" "}
                          <span className="text-[#8A7E72] normal-case tracking-normal font-normal">
                            (optional)
                          </span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72]" />
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            // placeholder is a generic format example, not a real number
                            placeholder="(555) 000-0000"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${inputBase} ${inputWithIcon}`}
                          />
                        </div>
                      </div>

                      {/* Two-column row: Category + Theme/Topic */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="category" className={labelBase}>
                            Category
                          </label>
                          <div className="relative">
                            <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                            <select
                              id="category"
                              name="category"
                              value={values.category}
                              onChange={handleChange}
                              className={`${selectBase} pl-11`}
                            >
                              <option value="">Select category</option>
                              <option value="leadership-wellness">
                                Leadership &amp; Workplace Wellness
                              </option>
                              <option value="trauma-mental-health">
                                Trauma &amp; Mental Health
                              </option>
                              <option value="foster-care-adoption">
                                Foster Care, Adoption &amp; Child Welfare
                              </option>
                              <option value="parenting-family">
                                Parenting &amp; Family
                              </option>
                              <option value="schools-youth">
                                Schools &amp; Youth Organizations
                              </option>
                              <option value="faith-ministry">
                                Faith &amp; Ministry
                              </option>
                              <option value="community-personal">
                                Community &amp; Personal Development
                              </option>
                              <option value="clinical">
                                Clinical Training
                              </option>
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="themeTopic" className={labelBase}>
                            Theme / Topic
                          </label>
                          <div className="relative">
                            <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72]" />
                            <input
                              id="themeTopic"
                              name="themeTopic"
                              type="text"
                              placeholder="e.g. Burnout & Resilience"
                              value={values.themeTopic}
                              onChange={handleChange}
                              className={`${inputBase} ${inputWithIcon}`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Two-column row: Audience Size + Preferred Date */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="audienceSize" className={labelBase}>
                            Audience Size
                          </label>
                          <div className="relative">
                            <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                            <select
                              id="audienceSize"
                              name="audienceSize"
                              value={values.audienceSize}
                              onChange={handleChange}
                              className={`${selectBase} pl-11`}
                            >
                              <option value="">Select size</option>
                              <option value="under-25">Under 25</option>
                              <option value="25-50">25–50</option>
                              <option value="50-100">50–100</option>
                              <option value="100-250">100–250</option>
                              <option value="250-500">250–500</option>
                              <option value="500+">500+</option>
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="preferredDate" className={labelBase}>
                            Preferred Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72]" />
                            <input
                              id="preferredDate"
                              name="preferredDate"
                              type="text"
                              placeholder="MM/DD/YYYY or flexible"
                              value={values.preferredDate}
                              onChange={handleChange}
                              className={`${inputBase} ${inputWithIcon}`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Event Location */}
                      <div>
                        <label htmlFor="eventLocation" className={labelBase}>
                          Event Location
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72]" />
                          <input
                            id="eventLocation"
                            name="eventLocation"
                            type="text"
                            placeholder="City, State or Online"
                            value={values.eventLocation}
                            onChange={handleChange}
                            className={`${inputBase} ${inputWithIcon}`}
                          />
                        </div>
                      </div>

                      {/* Two-column row: Delivery Format + Budget Range */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="deliveryFormat"
                            className={labelBase}
                          >
                            Delivery Format
                          </label>
                          <div className="relative">
                            <Monitor className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                            <select
                              id="deliveryFormat"
                              name="deliveryFormat"
                              value={values.deliveryFormat}
                              onChange={handleChange}
                              className={`${selectBase} pl-11`}
                            >
                              <option value="">Select format</option>
                              <option value="in-person">In-Person</option>
                              <option value="virtual">Virtual</option>
                              <option value="hybrid">Hybrid</option>
                              <option value="flexible">Flexible</option>
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="budgetRange" className={labelBase}>
                            Budget Range
                          </label>
                          <div className="relative">
                            <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                            <select
                              id="budgetRange"
                              name="budgetRange"
                              value={values.budgetRange}
                              onChange={handleChange}
                              className={`${selectBase} pl-11`}
                            >
                              <option value="">Select range</option>
                              <option value="under-1000">Under $1,000</option>
                              <option value="1000-2500">$1,000–$2,500</option>
                              <option value="2500-5000">$2,500–$5,000</option>
                              <option value="5000-10000">
                                $5,000–$10,000
                              </option>
                              <option value="10000+">$10,000+</option>
                              <option value="not-sure">Not Sure Yet</option>
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72] pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#E0D6C8]" />

                  {/* Guidance note (inline) */}
                  <div className="flex items-start gap-3 bg-[#EAE2D6] rounded-md px-4 py-3">
                    <Info className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="font-body text-xs text-foreground/70 leading-relaxed">
                      Submitting this form is a{" "}
                      <strong>request, not a confirmed booking</strong>. Please
                      do not include confidential patient, client, or case
                      details. Jamie will review your information and get back
                      to you as soon as possible.
                    </p>
                  </div>

                  {/* Submit error */}
                  {submitError && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-md px-4 py-3">
                      <AlertCircle className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
                      <p className="font-body text-xs text-red-700 leading-relaxed">
                        Something went wrong. Please try again or reach out
                        directly through the site's contact options.
                      </p>
                    </div>
                  )}

                  {/* Submit CTA */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={submitting}
                    disabled={submitting}
                  >
                    Submit Request
                  </Button>

                  <p className="font-body text-xs text-foreground/50 text-center leading-relaxed">
                    Your information is kept strictly confidential and will
                    never be shared with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="alternate" paddingSize="lg" maxWidth="md">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-primary mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-10 h-[2px] bg-accent rounded-full mx-auto" />
        </div>
        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-background border border-[#D9CCBA] rounded-md overflow-hidden shadow-sm"
            >
              <button
                type="button"
                aria-expanded={openFaq === i}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#F8F3EC] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
              >
                <span className="font-body text-sm font-semibold text-primary">
                  {item.question}
                </span>
                {openFaq === i ? (
                  <ChevronUp className="w-4 h-4 text-secondary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-secondary flex-shrink-0" />
                )}
              </button>
              {openFaq === i && (
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className="px-5 pb-5 border-t border-[#E0D6C8]"
                >
                  <p className="font-body text-sm text-foreground/75 leading-relaxed pt-4">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}