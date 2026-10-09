import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Church, Sunset, Users } from "lucide-react";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import LinkButton from "@/components/LinkButton";
import EventPhoto from "@/components/EventPhoto";
import JsonLd from "@/components/JsonLd";
import { FaqList, faqSchema } from "@/components/Disclosure";
import { SPEAKING_THEME_IDS, THEMES_BY_ID, bookHref, categoryLabel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Speaking Engagements",
  description:
    "Request Jamie James for a speaking engagement at your event, conference or retreat. Explore speaking themes and audience fit; formats and availability are confirmed by Jamie.",
  alternates: { canonical: "/speaking" },
};

const audienceFit = [
  {
    icon: Users,
    label: "Conferences",
    description: "Keynotes and breakout sessions for larger audiences.",
  },
  {
    icon: Sunset,
    label: "Retreats",
    description: "Reflective sessions that help teams reconnect with purpose.",
  },
  {
    icon: CalendarDays,
    label: "Staff Days",
    description: "Skills-based sessions for staff, supervisors and organizational leaders.",
  },
  {
    icon: Church,
    label: "Faith & Community Events",
    description: "Sessions for faith communities and community organizations.",
  },
];

const faqItems = [
  {
    question: "What types of events can I request Jamie for?",
    answer:
      "You can request Jamie for an event, conference or retreat, including staff days and faith and community events. Specific formats and availability require Jamie’s confirmation.",
  },
  {
    question: "What topics does Jamie speak on?",
    answer:
      "Speaking themes draw on Jamie’s training areas, including leadership, burnout and compassion fatigue, trauma-informed care, mental health, and foster care. Describe your audience in the inquiry form.",
  },
  {
    question: "How do I request Jamie for a speaking engagement?",
    answer:
      "Use the Request Availability button to open the inquiry form with Speaking already selected. A request is not a confirmed booking; Jamie reviews it and follows up.",
  },
];

export default function SpeakingPage() {
  const themes = SPEAKING_THEME_IDS.map((id) => THEMES_BY_ID[id]);

  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Jamie James"
        title="Speaking Engagements"
        tagline="For your event, conference or retreat."
        actions={
          <LinkButton href={bookHref({ service: "speaking" })}>Request Availability →</LinkButton>
        }
      >
        <p>
          Specific formats and availability require Jamie’s confirmation. Use
          the inquiry form to tell Jamie about your event.
        </p>
      </PageHero>

      <Section variant="default" paddingSize="lg" maxWidth="xl">
        <div className="max-w-3xl">
          <h2 className="mb-5 font-heading text-3xl font-bold leading-snug text-primary sm:text-4xl">
            Speaking That Moves People to Action
          </h2>
          <div aria-hidden="true" className="mb-6 h-[3px] w-12 rounded-full bg-accent" />
          <p className="font-body text-base leading-relaxed text-foreground">
            Jamie’s speaking is designed to start meaningful conversations, build
            practical skills and leave an audience with tools they can use,
            whether the room is frontline staff, organizational leaders,
            educators or a faith community.
          </p>
        </div>
      </Section>

      {/* Audience fit */}
      <Section variant="alternate" paddingSize="lg" maxWidth="xl">
        <div className="mb-10 text-center">
          <p className="mb-2 font-body text-xs font-semibold uppercase tracking-widest text-accent-dark">
            Audience fit
          </p>
          <h2 className="font-heading text-3xl font-bold leading-snug text-primary sm:text-4xl">
            Where Jamie Speaks
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audienceFit.map(({ icon: Icon, label, description }) => (
            <li
              key={label}
              className="card-hover flex flex-col items-center rounded-md border border-[#E0D6C8] bg-background p-6 text-center shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-secondary/10">
                <Icon size={28} strokeWidth={1.6} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-primary">{label}</h3>
              <div aria-hidden="true" className="mb-3 h-[2px] w-8 rounded-full bg-accent" />
              <p className="font-body text-sm leading-relaxed text-foreground/80">{description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Speaking themes */}
      <Section variant="default" paddingSize="xl" maxWidth="xl" id="speaking-themes">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 font-body text-xs font-semibold uppercase tracking-widest text-accent-dark">
            Speaking themes
          </p>
          <h2 className="mb-3 font-heading text-3xl font-bold leading-snug text-primary sm:text-4xl">
            Themes Jamie Speaks On
          </h2>
          <p className="font-body text-base leading-relaxed text-foreground/80">
            These themes come from Jamie’s training categories. Choose one, or
            describe your own topic in the inquiry form.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((t) => (
            <li
              key={t.id}
              className="card-hover flex flex-col rounded-md border border-[#E0D6C8] bg-white p-6 shadow-sm"
            >
              <span className="mb-2 font-body text-[11px] font-semibold uppercase tracking-widest text-secondary">
                {categoryLabel(t.category)}
              </span>
              <h3 className="mb-2 font-heading text-lg font-semibold leading-snug text-primary">
                {t.label}
              </h3>
              <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-foreground/80">
                {t.description}
              </p>
              <Link
                href={bookHref({ service: "speaking", category: t.category, theme: t.id })}
                className="self-start font-body text-xs font-semibold uppercase tracking-widest text-secondary underline underline-offset-4 hover:text-primary"
              >
                Request this theme<span className="sr-only">: {t.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Real speaking media */}
      <Section variant="alternate" paddingSize="xl" maxWidth="xl" id="media">
        <div className="mb-10 max-w-2xl">
          <h2 className="mb-3 font-heading text-3xl font-bold leading-snug text-primary sm:text-4xl">
            Jamie in Action
          </h2>
          <p className="font-body text-base leading-relaxed text-foreground/80">
            Photos from Jamie’s own sessions.
          </p>
        </div>
        <div className="grid items-start gap-8 md:grid-cols-2">
          <EventPhoto photo="training1" sizes="(min-width: 768px) 50vw, 100vw" />
          <div className="flex flex-col gap-8">
            <EventPhoto photo="wide" sizes="(min-width: 768px) 50vw, 100vw" />
            <EventPhoto photo="training2" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </Section>

      {/* Availability inquiry */}
      <Section variant="primary" paddingSize="lg" maxWidth="xl" centered>
        <h2 className="mb-4 font-heading text-3xl font-bold leading-snug text-background sm:text-4xl">
          Ready to Bring Jamie to Your Event?
        </h2>
        <p className="mx-auto mb-8 max-w-xl font-body text-base leading-relaxed text-background/80">
          Tell Jamie about your event, audience and date. Formats and
          availability are confirmed by Jamie.
        </p>
        <LinkButton href={bookHref({ service: "speaking" })} className="px-8 py-4">
          Request Availability →
        </LinkButton>
      </Section>

      <Section variant="default" paddingSize="lg" maxWidth="xl">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font-heading text-3xl font-bold leading-snug text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <FaqList items={faqItems} />
        </div>
      </Section>
    </>
  );
}
