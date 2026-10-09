import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, LifeBuoy, Map, Phone } from "lucide-react";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import LinkButton from "@/components/LinkButton";
import JsonLd from "@/components/JsonLd";
import { FaqList, faqSchema } from "@/components/Disclosure";
import { CONSULTING_GROUPS, bookHref } from "@/lib/content";
import { TOPICS_BY_ID } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Organizational Consulting",
  description:
    "Organizational consulting from Jamie James: workforce development, leadership coaching and staff wellness, program and policy development, trauma-informed organizational change, and behavioral health and foster care consultation.",
  alternates: { canonical: "/consulting" },
};

const engagementSteps = [
  {
    icon: Phone,
    title: "Discovery Call",
    subtitle: "Understand needs",
    description:
      "A focused conversation about your organization’s context, challenges and what you hope to achieve.",
  },
  {
    icon: ClipboardList,
    title: "Assessment",
    subtitle: "Identify strengths & gaps",
    description:
      "A look at your organization’s strengths, opportunities for growth and the areas that need attention.",
  },
  {
    icon: Map,
    title: "Plan",
    subtitle: "Create a tailored plan",
    description:
      "A consulting plan shaped around your goals, culture and timeline.",
  },
  {
    icon: LifeBuoy,
    title: "Implementation & Support",
    subtitle: "Ongoing guidance",
    description:
      "Support as your organization puts the plan into practice, with adjustments along the way.",
  },
];

const faqItems = [
  {
    question: "What types of organizations does Jamie consult with?",
    answer:
      "Jamie’s consulting supports leadership, organizational development, programs and staff wellness, including nonprofits, human-services organizations, behavioral health organizations and foster care programs.",
  },
  {
    question: "What are the five consulting areas?",
    answer: `${CONSULTING_GROUPS.map((g) => g.title).join("; ")}.`,
  },
  {
    question: "What does the consulting process look like?",
    answer:
      "It begins with a discovery call, followed by an assessment, a tailored plan, and implementation and support. The details are confirmed with Jamie for each engagement.",
  },
  {
    question: "How do I start a consulting conversation?",
    answer:
      "Use the Inquire About Consulting button to open the inquiry form with Consulting selected. A request is not a confirmed engagement; Jamie reviews it and follows up.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Consulting"
        title="Organizational Consulting"
        tagline="Strategy. People. Sustainable change."
        actions={
          <LinkButton href={bookHref({ service: "consulting" })}>Inquire About Consulting</LinkButton>
        }
      >
        <p>
          Support with leadership, organizational development, programs and
          staff wellness, in five areas.
        </p>
      </PageHero>

      {/* Five public groups */}
      <Section variant="alternate" paddingSize="xl" maxWidth="xl" id="focus-areas">
        <div className="mb-10">
          <h2 className="mb-3 font-heading text-3xl font-bold leading-tight text-primary md:text-4xl">
            Five Consulting Areas
          </h2>
          <div aria-hidden="true" className="h-[3px] w-12 rounded-full bg-accent" />
        </div>
        <ul className="flex flex-col gap-5">
          {CONSULTING_GROUPS.map((g) => (
            <li
              key={g.slug}
              className="card-hover-sm flex flex-col gap-4 rounded-md border border-[#E0D6C8] bg-background p-6 shadow-md md:flex-row md:items-start md:justify-between md:gap-8"
            >
              <div className="flex-1">
                <h3 className="mb-2 font-heading text-xl font-semibold leading-snug text-primary">
                  {g.title}
                </h3>
                <p className="mb-3 font-body text-sm leading-relaxed text-foreground/85">
                  {g.description}
                </p>
                <p className="font-body text-xs leading-relaxed text-foreground/75">
                  <span className="font-semibold text-primary">Includes: </span>
                  {g.offerings.map((id) => TOPICS_BY_ID[id].title).join(" · ")}
                </p>
              </div>
              <Link
                href={bookHref({ service: "consulting", category: g.slug })}
                className="flex-shrink-0 self-start whitespace-nowrap font-body text-xs font-semibold uppercase tracking-widest text-secondary underline underline-offset-4 hover:text-primary"
              >
                Inquire about this area<span className="sr-only">: {g.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Engagement process */}
      <Section variant="primary" paddingSize="xl" maxWidth="xl" id="engagement-process">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold leading-tight text-background md:text-4xl">
            The Engagement Process
          </h2>
          <p className="mx-auto max-w-xl font-body text-sm leading-relaxed text-background/80">
            A four-step process, shaped around your organization.
          </p>
          <div aria-hidden="true" className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-accent" />
        </div>
        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {engagementSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="card-hover-dark relative flex flex-col gap-4 rounded-md border border-background/20 bg-background/10 px-6 py-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-accent font-heading text-sm font-bold text-primary shadow-md"
                >
                  {i + 1}
                </span>
                <div className="mt-2 flex h-11 w-11 items-center justify-center rounded-md bg-secondary/30 text-accent">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 font-heading text-lg font-semibold leading-snug text-background">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-accent">
                    {step.subtitle}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-background/85">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section variant="default" paddingSize="xl" maxWidth="xl" id="faq">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font-heading text-3xl font-bold leading-tight text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
          <FaqList items={faqItems} />
        </div>
      </Section>

      <Section variant="alternate" paddingSize="xl" maxWidth="xl" id="consulting-cta">
        <div className="flex flex-col items-center justify-between gap-8 rounded-md border border-[#E0D6C8] bg-background px-8 py-10 shadow-lg md:flex-row md:px-12 md:py-14">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="mb-4 font-heading text-3xl font-bold leading-tight text-primary md:text-4xl">
              Ready to start the conversation?
            </h2>
            <p className="font-body text-sm leading-relaxed text-foreground/85">
              Submit a consulting inquiry and Jamie will follow up to explore how
              she can support your organization’s goals.
            </p>
          </div>
          <LinkButton href={bookHref({ service: "consulting" })} className="whitespace-nowrap px-8 py-4">
            Inquire About Consulting
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
