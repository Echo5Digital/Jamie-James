import type { Metadata } from "next";
import { Suspense } from "react";
import { Info } from "lucide-react";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import OpenArmsRouting from "@/components/OpenArmsLinks";
import { FaqList, faqSchema } from "@/components/Disclosure";
import { SERVICES } from "@/lib/content";
import { SITE } from "@/lib/site";
import BookClient from "./BookClient";

export const metadata: Metadata = {
  title: "Book Jamie — Speaking, Training & Consulting",
  description:
    "Request availability for Jamie James’s speaking engagements, training and workshops, or organizational consulting. Use the shared inquiry form; a request is not a confirmed booking.",
  alternates: { canonical: "/book" },
};

const faqItems = [
  {
    question: "Is submitting this form a confirmed booking?",
    answer:
      "No. Submitting the form is a request, not a confirmed booking. Jamie reviews your request and follows up. Formats and availability are confirmed by Jamie.",
  },
  {
    question: "Should I include confidential client or patient details?",
    answer:
      "No. Please do not include confidential patient, client or case details in the inquiry form.",
  },
  {
    question: "I’m looking for therapy or foster care services. Is this the right place?",
    answer:
      "No. This form is for speaking, training and consulting requests. Requests for therapy or foster care services are handled by Open Arms Initiative and Open Arms Foster Care.",
  },
  {
    question: "What information do I need to submit a request?",
    answer:
      "Required: your name, email, whether you are inquiring as an organization or an individual, the service you are interested in, and a brief summary of your request. Optional details such as category or theme, audience size, preferred or flexible date, event location, delivery preference and budget range help Jamie respond more specifically.",
  },
];

export default function BookPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Book Jamie James — Speaking, Training & Consulting",
          url: `${SITE.url}/book`,
        }}
      />

      <PageHero
        eyebrow="Speaking · Training · Consulting"
        title="Book Jamie"
      >
        <p>
          Request availability for speaking, training or consulting. Fill out
          the form below and Jamie will review your request and follow up.
        </p>
      </PageHero>

      <Section variant="default" paddingSize="xl" maxWidth="xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3 lg:gap-16">
          {/* Sidebar */}
          <div className="flex flex-col gap-8 lg:col-span-1">
            <div>
              <h2 className="mb-3 font-heading text-2xl font-bold leading-snug text-primary md:text-3xl">
                Tell Us About Your Needs
              </h2>
              <div aria-hidden="true" className="mb-4 h-[2px] w-10 rounded-full bg-accent" />
              <p className="font-body text-sm leading-relaxed text-foreground/80">
                Planning a conference, staff training day, retreat or
                organizational initiative? Jamie would like to hear about it.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-md border border-[#D4C5AD] bg-[#EAE2D6] p-5">
              <div className="flex items-start gap-2">
                <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" aria-hidden="true" />
                <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  Before you submit
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                <li className="font-body text-xs leading-relaxed text-foreground/85">
                  Submitting this form is a <strong>request, not a confirmed
                  booking</strong>. Jamie will review it and follow up.
                </li>
                <li className="font-body text-xs leading-relaxed text-foreground/85">
                  Please <strong>do not include</strong> confidential patient,
                  client or case details.
                </li>
                <li className="font-body text-xs leading-relaxed text-foreground/85">
                  <OpenArmsRouting />
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                Services
              </h3>
              <ul className="flex flex-col gap-3">
                {SERVICES.map((s) => (
                  <li key={s.slug} className="border-l-2 border-accent pl-3">
                    <p className="font-body text-sm font-semibold text-primary">{s.label}</p>
                    <p className="font-body text-xs leading-relaxed text-foreground/75">{s.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Suspense
              fallback={
                <p className="font-body text-sm text-foreground/75" role="status">
                  Loading the inquiry form…
                </p>
              }
            >
              <BookClient />
            </Suspense>
          </div>
        </div>
      </Section>

      <Section variant="alternate" paddingSize="lg" maxWidth="md">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <div aria-hidden="true" className="mx-auto h-[2px] w-10 rounded-full bg-accent" />
        </div>
        <FaqList items={faqItems} />
      </Section>
    </>
  );
}
