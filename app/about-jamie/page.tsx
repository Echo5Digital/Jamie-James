import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import LinkButton from "@/components/LinkButton";
import EventPhoto from "@/components/EventPhoto";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/lib/content";
import { CREDENTIALS, OPEN_ARMS, PHOTOS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Jamie",
  description:
    "Meet Jamie James — speaker, trainer and organizational consultant with a passion for trauma-informed care, leadership, mental health and family and child welfare. Connected to Open Arms Initiative and Open Arms Foster Care.",
  alternates: { canonical: "/about-jamie" },
};

export default function AboutJamiePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Jamie James",
          url: `${SITE.url}/about-jamie`,
          mainEntity: {
            "@type": "Person",
            name: SITE.name,
            jobTitle: SITE.jobTitle,
          },
        }}
      />

      {/* Hero */}
      <Section variant="alternate" paddingSize="xl" maxWidth="2xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="order-2 flex-1 lg:order-1">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-secondary">
              {SITE.tagline}
            </p>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-primary sm:text-5xl">
              About Jamie
            </h1>
            <p className="max-w-lg font-body text-base leading-relaxed text-foreground/85">
              Practical tools and compassionate insight for healthier teams,
              stronger leaders and more resilient communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/book">Request Availability</LinkButton>
              <LinkButton href="/speaking" variant="outline">
                Explore Speaking
              </LinkButton>
            </div>
          </div>

          <div className="order-1 w-64 flex-shrink-0 sm:w-80 lg:order-2">
            <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-md border-4 border-background shadow-xl">
              <Image
                src={PHOTOS.portrait.src}
                alt={PHOTOS.portrait.alt}
                fill
                priority
                sizes="320px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-primary"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Biography */}
      <Section variant="default" paddingSize="xl" maxWidth="xl">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="mb-6 font-heading text-3xl font-bold leading-snug text-primary sm:text-4xl">
              A heart for people, a passion for healthier systems.
            </h2>
            <div aria-hidden="true" className="mb-8 h-0.5 w-12 bg-accent" />
            <div className="space-y-5 font-body text-base leading-relaxed text-foreground">
              <p>
                Jamie James is a speaker, trainer and organizational consultant
                whose work centers on trauma-informed care, leadership, mental
                health and family and child welfare.
              </p>
              <p>
                She works with organizations, schools, faith communities,
                families and clinicians, through speaking engagements,
                training and workshops, and organizational consulting.
              </p>
              <p>
                Jamie’s speaking, training and consulting were offered through
                Open Arms Initiative. This website gives them a dedicated home
                while keeping the connection to Open Arms Initiative and Open
                Arms Foster Care.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs lg:col-span-2 lg:max-w-none">
            <EventPhoto photo="training2" sizes="(min-width: 1024px) 400px, 320px" />
          </div>
        </div>
      </Section>

      {/* Approved credentials — shown only once Jamie supplies them */}
      {CREDENTIALS.length > 0 && (
        <Section variant="alternate" paddingSize="xl" maxWidth="xl">
          <h2 className="mb-6 font-heading text-2xl font-bold leading-snug text-primary sm:text-3xl">
            Credentials &amp; Experience
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            {CREDENTIALS.map((c) => (
              <div key={c.label} className="rounded-md border border-[#D9CCBA] bg-background p-5">
                <dt className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  {c.label}
                </dt>
                <dd className="mt-1 font-body text-sm text-foreground">{c.value}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {/* Services */}
      <Section variant={CREDENTIALS.length > 0 ? "default" : "alternate"} paddingSize="xl" maxWidth="xl">
        <h2 className="mb-8 font-heading text-3xl font-bold leading-snug text-primary sm:text-4xl">
          How Jamie Can Help
        </h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.slug} className="card-hover flex flex-col rounded-md border border-[#E0D6C8] bg-background p-6 shadow-sm">
              <h3 className="mb-2 font-heading text-lg font-semibold text-primary">{s.label}</h3>
              <p className="mb-4 flex-1 font-body text-sm leading-relaxed text-foreground/80">{s.summary}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 self-start font-body text-xs font-semibold uppercase tracking-widest text-secondary hover:text-primary"
              >
                Learn more<span className="sr-only"> about {s.label}</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Open Arms connections */}
      <Section variant={CREDENTIALS.length > 0 ? "alternate" : "default"} paddingSize="xl" maxWidth="xl">
        <div className="mb-10 max-w-2xl">
          <h2 className="mb-4 font-heading text-3xl font-bold leading-snug text-primary sm:text-4xl">
            Connected to Open Arms
          </h2>
          <p className="font-body text-base leading-relaxed text-foreground/80">
            Jamie’s work stays connected to Open Arms Initiative and Open Arms
            Foster Care. Requests for therapy or foster care services go to the
            organization that provides them.
          </p>
          <div aria-hidden="true" className="mt-5 h-0.5 w-12 bg-accent" />
        </div>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[OPEN_ARMS.initiative, OPEN_ARMS.fosterCare].map((o) => (
            <li
              key={o.name}
              className="card-hover flex flex-col overflow-hidden rounded-md border border-[#E0D6C8] bg-white shadow-md"
            >
              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-2 font-heading text-xl font-semibold text-primary">{o.name}</h3>
                <div aria-hidden="true" className="mb-4 h-0.5 w-8 bg-accent" />
                <p className="flex-1 font-body text-sm leading-relaxed text-foreground/80">
                  For {o.serves}.
                </p>
                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 self-start rounded-md bg-accent px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-widest text-primary shadow-md hover:brightness-105"
                >
                  Visit {o.name}
                  <ExternalLink size={13} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              <div aria-hidden="true" className="h-[3px] w-full bg-gradient-to-r from-accent via-secondary to-primary opacity-70" />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
