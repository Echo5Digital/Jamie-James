import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import LinkButton from "@/components/LinkButton";
import HomeHero from "@/components/HomeHero";
import InActionSection from "@/components/InActionSection";
import ServiceCards from "@/components/ServiceCards";
import CategoriesSection from "@/components/CategoriesSection";
import ThemesSection from "@/components/ThemesSection";
import StickyStack from "@/components/StickyStack";
import BookingSection from "@/components/BookingSection";
import EventPhoto from "@/components/EventPhoto";
import { OPEN_ARMS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} | Speaker, Trainer & Consultant` },
  description:
    "Jamie James offers speaking, training and organizational consulting in trauma-informed care, leadership, mental health and child welfare — practical tools that strengthen people and organizations.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* 1 ── Hero and portrait */}
      <HomeHero />

      {/* 2 ── Three service cards */}
      <ServiceCards />

      {/* 3 ── Eight training category cards */}
      <CategoriesSection />

      {/* 4 ── About Jamie and Open Arms connections.
          Pinned: everything below slides up over it (see StickyStack). */}
      <StickyStack className="bg-accent">
      <Section variant="gold" paddingSize="xl" maxWidth="xl">
        <div className="flex flex-col items-start gap-12 lg:flex-row">
          <div className="mx-auto w-full max-w-xs flex-shrink-0 lg:mx-0 lg:max-w-sm">
            <EventPhoto photo="training2" sizes="(min-width: 1024px) 384px, 320px" showCaption={false} />
          </div>

          <div className="flex-1">
            <span className="mb-3 inline-block font-body text-xs font-bold uppercase tracking-widest text-primary">
              About Jamie
            </span>
            <h2 className="mb-5 font-heading text-2xl font-bold leading-tight text-primary sm:text-3xl">
              Jamie James is a speaker, trainer and organizational consultant
              with a passion for trauma-informed care, leadership, mental health
              and family and child welfare.
            </h2>
            <p className="mb-6 max-w-2xl font-body text-base leading-relaxed text-primary">
              Her speaking, training and consulting now have a dedicated home
              here, and they stay connected to Open Arms Initiative and Open
              Arms Foster Care.
            </p>
            <div className="mb-8">
              {/* Navy button: the usual gold one would disappear into this background */}
              <LinkButton href="/about-jamie" className="!bg-primary !text-background">
                Learn More About Jamie
              </LinkButton>
            </div>

            <div className="border-t border-primary/25 pt-6">
              <p className="mb-3 font-body text-xs font-bold uppercase tracking-widest text-primary">
                Connected organizations
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[OPEN_ARMS.initiative, OPEN_ARMS.fosterCare].map((o) => (
                  <li key={o.name} className="card-hover-sm rounded-md border border-white/70 bg-white p-4 shadow-md">
                    <a
                      href={o.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-secondary underline underline-offset-2 hover:text-primary"
                    >
                      {o.name}
                      <ExternalLink size={13} aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <p className="mt-1 font-body text-xs text-foreground/75">
                      For {o.serves}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
      </StickyStack>

      {/* Everything from here on sits in a higher layer, so it slides over the pinned About section
          as a rounded, shadowed sheet. (overflow-clip, not overflow-hidden: it must not become a
          scroll container, or the scroll-driven parallax inside would stop working.) */}
      <div className="relative z-10 overflow-clip rounded-t-[2rem] shadow-[0_-28px_60px_-18px_rgba(0,0,0,0.45)]">

      {/* 5 ── Selected themes */}
      <ThemesSection />

      {/* 6 ── Verified event proof */}
      <InActionSection />

      {/* 7 ── Booking process and final CTA */}
      <BookingSection />

      <section className="relative w-full overflow-hidden bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/50"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-heading text-3xl font-bold leading-tight text-background sm:text-4xl lg:text-5xl">
            Ready to Bring Jamie to Your Organization?
          </h2>
          <p className="mx-auto mb-10 max-w-xl font-body text-base text-background/80">
            Request availability for speaking, training or consulting.
          </p>
          <LinkButton href="/book" className="px-8 py-4">
            Request Availability →
          </LinkButton>
        </div>
      </section>
      </div>
    </>
  );
}
