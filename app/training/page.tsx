import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import LinkButton from "@/components/LinkButton";
import TrainingCategoryCard from "@/components/TrainingCategoryCard";
import JsonLd from "@/components/JsonLd";
import { FaqList, faqSchema } from "@/components/Disclosure";
import { ICONS } from "@/components/icons";
import { TRAINING_CATEGORIES, bookHref, themesFor } from "@/lib/content";

export const metadata: Metadata = {
  title: "Training & Workshops",
  description:
    "Jamie James’s training and workshops are organized into eight categories for organizations, families, schools, faith communities, clinicians and more. Explore featured themes and request training.",
  alternates: { canonical: "/training" },
};

const faqItems = [
  {
    question: "How many training categories are there?",
    answer: `Eight: ${TRAINING_CATEGORIES.map((c) => c.label).join(", ")}. Each has its own page with five featured themes.`,
  },
  {
    question: "Are trainings available in person, virtually, or both?",
    answer:
      "You can note a delivery preference in the inquiry form. Delivery options are confirmed with Jamie.",
  },
  {
    question: "Can Jamie create a custom training for our organization?",
    answer:
      "If a specific topic isn’t listed, describe what you need in the inquiry form and Jamie can discuss a custom training or speaking option.",
  },
];

const GROUPS = [
  {
    id: "organizations-families",
    heading: "For organizations and families",
    variant: "mint" as const,
  },
  {
    id: "schools-professional",
    heading: "For schools and professional audiences",
    variant: "default" as const,
  },
];

export default function TrainingPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />

      <PageHero
        eyebrow="Jamie James"
        title="Training & Workshops"
        tagline="Eight categories. Tailored to your audience."
        actions={<LinkButton href={bookHref({ service: "training" })}>Request Availability</LinkButton>}
      >
        <p>
          Practical education tailored to an audience, organized into eight
          categories. Each category has its own page with five featured themes.
        </p>
      </PageHero>

      {GROUPS.map((g) => (
        <Section key={g.id} variant={g.variant} paddingSize="xl" maxWidth="xl" id={g.id}>
          <h2 className="mb-8 font-heading text-2xl font-bold text-primary md:text-3xl">
            {g.heading}
          </h2>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TRAINING_CATEGORIES.filter((c) => c.group === g.id).map((c) => (
              <li key={c.slug}>
                <TrainingCategoryCard
                  icon={ICONS[c.icon]}
                  label={c.label}
                  href={`/training/${c.slug}`}
                  faithIntegrated={c.faithIntegrated}
                  themes={themesFor(c.slug).map((t) => t.label)}
                  cta="Explore Training"
                />
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <Section variant="primary" paddingSize="lg" maxWidth="xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-2 font-heading text-2xl font-bold leading-snug text-background md:text-3xl">
              Don’t see what you need?
            </h2>
            <p className="font-body text-sm leading-relaxed text-background/80">
              Describe your audience and goals in the inquiry form. Jamie can
              discuss a custom training or speaking option.
            </p>
          </div>
          <LinkButton href={bookHref({ service: "training" })}>Request Availability</LinkButton>
        </div>
      </Section>

      <Section variant="default" paddingSize="lg" maxWidth="xl">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
          <FaqList items={faqItems} />
        </div>
      </Section>
    </>
  );
}
