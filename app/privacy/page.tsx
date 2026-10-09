import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Link from "next/link";
import { ShieldCheck, Database, Lock, Cookie, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Jamie James",
  description:
    "Read Jamie James's privacy policy to understand how information collected through this website is used, stored, and protected.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="bg-background min-h-screen">
        {/* Page Header */}
        <Section variant="primary" paddingSize="lg" maxWidth="md" centered>
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-2">
              <ShieldCheck className="w-7 h-7 text-accent" aria-hidden="true" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight">
              Privacy Policy
            </h1>
            <p className="font-body text-base text-background/75 max-w-xl leading-relaxed">
              This policy explains how Jamie James collects, uses, stores, and
              protects information gathered through this website, and how you can
              reach out with any privacy-related questions.
            </p>
            <p className="font-body text-xs text-background/50 mt-1">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </Section>

        {/* Divider accent */}
        <div className="h-1 w-full bg-gradient-to-r from-accent via-secondary to-primary opacity-80" />

        {/* Policy Body */}
        <Section variant="default" paddingSize="xl" maxWidth="md">
          <div className="flex flex-col gap-14">

            {/* 1 — Data Collection */}
            <article
              id="data-collection"
              aria-labelledby="data-collection-heading"
              className="flex flex-col gap-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-md bg-secondary/10 text-secondary mt-1">
                  <Database className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h2
                    id="data-collection-heading"
                    className="font-heading text-2xl md:text-3xl font-semibold text-primary leading-snug mb-1"
                  >
                    Data Collection
                  </h2>
                  <div className="w-10 h-[2px] bg-accent rounded-full mb-4" />
                  <div className="font-body text-sm text-foreground leading-relaxed space-y-4">
                    <p>
                      When you interact with this website — for example, by
                      submitting an inquiry form, requesting availability, or
                      sending a message — certain personal information may be
                      collected. This may include:
                    </p>
                    <ul className="list-none space-y-2 pl-0">
                      {[
                        "Your full name",
                        "Your email address",
                        "Your phone number (if provided)",
                        "The name of your organization or institution",
                        "The content of your message or inquiry",
                        "Any other information you voluntarily share in the form",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Information is collected only when you voluntarily submit it
                      through a contact or booking form on this site. Browsing the
                      site without submitting a form does not result in personal
                      data collection beyond what may be captured by standard
                      analytics tools (see the Cookies &amp; Analytics section
                      below).
                    </p>
                    <p>
                      This information is used solely to respond to your inquiry,
                      provide information about speaking, training, or consulting
                      services, and follow up on submitted requests in a timely
                      manner.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Divider */}
            <div className="border-t border-[#E0D6C8]" />

            {/* 2 — Data Use and Protection */}
            <article
              id="data-use"
              aria-labelledby="data-use-heading"
              className="flex flex-col gap-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-md bg-secondary/10 text-secondary mt-1">
                  <Lock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h2
                    id="data-use-heading"
                    className="font-heading text-2xl md:text-3xl font-semibold text-primary leading-snug mb-1"
                  >
                    Data Use &amp; Protection
                  </h2>
                  <div className="w-10 h-[2px] bg-accent rounded-full mb-4" />
                  <div className="font-body text-sm text-foreground leading-relaxed space-y-4">
                    <p>
                      Information you provide through this website is used
                      exclusively for the purpose of responding to your inquiry
                      and facilitating any services you have requested. Your
                      personal data will not be used for marketing to unrelated
                      third parties, nor will it be sold, rented, or traded.
                    </p>
                    <p>
                      Specifically, the information you share is used to:
                    </p>
                    <ul className="list-none space-y-2 pl-0">
                      {[
                        "Respond to questions and booking inquiries",
                        "Coordinate speaking engagements, training sessions, or consulting arrangements",
                        "Communicate relevant information about your request",
                        "Follow up as needed to complete a booking or consultation",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Your data is stored securely and access is limited to those
                      who need it to respond to your inquiry. Reasonable technical
                      and organizational measures are in place to protect your
                      information against unauthorized access, loss, or misuse.
                    </p>
                    <p>
                      <strong className="font-semibold text-primary">
                        Your information is never sold or shared with third
                        parties
                      </strong>{" "}
                      for commercial, marketing, or other purposes. It is kept
                      confidential and used only in connection with your
                      interaction with Jamie James.
                    </p>
                    <p>
                      If you would like your information to be removed from our
                      records at any time, please reach out using the contact
                      details provided at the bottom of this page.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Divider */}
            <div className="border-t border-[#E0D6C8]" />

            {/* 3 — Cookies and Analytics */}
            <article
              id="cookies"
              aria-labelledby="cookies-heading"
              className="flex flex-col gap-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-md bg-secondary/10 text-secondary mt-1">
                  <Cookie className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h2
                    id="cookies-heading"
                    className="font-heading text-2xl md:text-3xl font-semibold text-primary leading-snug mb-1"
                  >
                    Cookies &amp; Analytics
                  </h2>
                  <div className="w-10 h-[2px] bg-accent rounded-full mb-4" />
                  <div className="font-body text-sm text-foreground leading-relaxed space-y-4">
                    <p>
                      This website may use cookies and similar tracking
                      technologies to help understand how visitors interact with
                      the site. These tools may collect anonymous, aggregated data
                      such as:
                    </p>
                    <ul className="list-none space-y-2 pl-0">
                      {[
                        "Pages visited and time spent on the site",
                        "General geographic region (country or region level)",
                        "Device type and browser used",
                        "Referring website or search engine",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      This information is used solely to improve the website
                      experience and understand which content is most useful to
                      visitors. It is not linked to any personally identifiable
                      information unless you have submitted a form.
                    </p>
                    <p>
                      <strong className="font-semibold text-primary">
                        Managing your preferences:
                      </strong>{" "}
                      Most web browsers allow you to control cookies through their
                      settings. You may choose to disable cookies or receive a
                      warning before a cookie is stored. Please note that
                      disabling cookies may affect the functionality of some
                      features on this site. Refer to your browser's help
                      documentation for instructions on managing cookie settings.
                    </p>
                    <p>
                      This site does not use cookies for advertising or
                      retargeting purposes.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Divider */}
            <div className="border-t border-[#E0D6C8]" />

            {/* 4 — Contact for Privacy Concerns */}
            <article
              id="privacy-contact"
              aria-labelledby="privacy-contact-heading"
              className="flex flex-col gap-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-md bg-secondary/10 text-secondary mt-1">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2
                    id="privacy-contact-heading"
                    className="font-heading text-2xl md:text-3xl font-semibold text-primary leading-snug mb-1"
                  >
                    Privacy Questions &amp; Concerns
                  </h2>
                  <div className="w-10 h-[2px] bg-accent rounded-full mb-4" />
                  <div className="font-body text-sm text-foreground leading-relaxed space-y-4">
                    <p>
                      If you have any questions about this Privacy Policy, would
                      like to request access to or deletion of your personal
                      information, or have concerns about how your data is being
                      handled, please do not hesitate to reach out.
                    </p>
                    <p>
                      You may contact Jamie James directly through the booking and
                      inquiry form on this website, and your message will be
                      responded to promptly.
                    </p>
                  </div>

                  {/* Contact CTA card */}
                  <div className="mt-8 bg-[#EAE2D6] border border-[#D9CCBA] rounded-md p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    <div>
                      <p className="font-heading text-primary text-lg font-semibold leading-snug">
                        Have a privacy-related question?
                      </p>
                      <p className="font-body text-sm text-foreground/70 mt-1">
                        Use the contact form to reach out — all messages are
                        handled confidentially.
                      </p>
                    </div>
                    <Link
                      href="/book"
                      className="flex-shrink-0 inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-md shadow-md hover:brightness-95 active:scale-95 transition-all duration-200 whitespace-nowrap"
                    >
                      Contact Jamie
                    </Link>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </Section>

        {/* Policy note bar */}
        <Section variant="alternate" paddingSize="sm" maxWidth="md">
          <p className="font-body text-xs text-foreground/60 leading-relaxed text-center">
            This Privacy Policy is provided for informational purposes and may be
            updated periodically to reflect changes in practice or applicable
            requirements. Continued use of this website following any updates
            constitutes acceptance of the revised policy. Please check this page
            occasionally for the most current version.
          </p>
        </Section>
      </main>

      <Footer />
    </>
  );
}