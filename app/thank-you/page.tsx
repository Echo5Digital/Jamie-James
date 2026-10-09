import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Section from "@/components/Section";
import LinkButton from "@/components/LinkButton";

// Submission confirmation: kept out of search results and the sitemap.
export const metadata: Metadata = {
  title: "Request Received",
  description: "Your inquiry to Jamie James has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/50"
        />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-accent/20">
            <CheckCircle className="h-10 w-10 text-accent" aria-hidden="true" />
          </div>
          <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-background sm:text-5xl md:text-6xl">
            Thank You
          </h1>
          <p className="font-body text-lg leading-relaxed text-background/85 sm:text-xl">
            Your request has been received.
          </p>
        </div>
      </section>

      <Section variant="default" paddingSize="xl" maxWidth="md" centered>
        <div className="flex flex-col items-center gap-6 text-center">
          <div aria-hidden="true" className="h-[3px] w-12 rounded-full bg-accent" />
          <h2 className="font-heading text-2xl font-semibold leading-snug text-primary sm:text-3xl">
            What Happens Next
          </h2>
          <p className="max-w-lg font-body text-base leading-relaxed text-foreground/85">
            Jamie will review your request and follow up. A request is not a
            confirmed booking; formats and availability are confirmed by Jamie.
          </p>
          <p className="max-w-lg font-body text-sm leading-relaxed text-foreground/75">
            In the meantime, you’re welcome to explore:
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-body text-sm">
            {[
              { href: "/speaking", label: "Speaking Engagements" },
              { href: "/training", label: "Training & Workshops" },
              { href: "/consulting", label: "Consulting" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-semibold text-secondary underline underline-offset-4 transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section variant="alternate" paddingSize="lg" maxWidth="md" centered>
        <div className="flex flex-col items-center gap-6 text-center">
          <LinkButton href="/">
            <span className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Return to Home
            </span>
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
