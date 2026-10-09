import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import LinkButton from "@/components/LinkButton";
import ThemeListItem from "@/components/ThemeListItem";
import EventPhoto from "@/components/EventPhoto";
import JsonLd from "@/components/JsonLd";
import { Disclosure, FaqList, faqSchema } from "@/components/Disclosure";
import { ICONS } from "@/components/icons";
import {
  TRAINING_CATEGORIES,
  bookHref,
  categoryFaqs,
  getCategory,
  publishedTopics,
  themesFor,
} from "@/lib/content";
import type { TrainingCategorySlug } from "@/lib/topics";

function mustGet(slug: TrainingCategorySlug) {
  const cat = getCategory(slug);
  if (!cat) throw new Error(`Unknown training category: ${slug}`);
  return cat;
}

// SEO titles and descriptions live here on the page, separate from topic labels.
export function categoryMetadata(slug: TrainingCategorySlug): Metadata {
  const cat = mustGet(slug);
  const [a, b, c] = themesFor(slug).map((t) => t.label);
  return {
    title: `${cat.label} Training`,
    description: `${cat.label} training from Jamie James: ${a}, ${b}, ${c} and more. Request this training for your audience.`,
    alternates: { canonical: `/training/${slug}` },
  };
}

export default function CategoryPage({ slug }: { slug: TrainingCategorySlug }) {
  const cat = mustGet(slug);
  const Icon = ICONS[cat.icon];
  const themes = themesFor(slug);
  const themesWithTopics = themes
    .map((t) => ({ theme: t, topics: publishedTopics(t) }))
    .filter((x) => x.topics.length > 0);
  const faqs = categoryFaqs(cat);
  const others = TRAINING_CATEGORIES.filter((c) => c.slug !== slug);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* Audience-specific introduction */}
      <PageHero
        eyebrow={cat.faithIntegrated ? "Training & Workshops · Faith-integrated" : "Training & Workshops"}
        title={cat.label}
        tagline={cat.tagline}
        actions={
          <>
            <LinkButton href={bookHref({ service: "training", category: slug })}>
              Request This Training
            </LinkButton>
            <LinkButton href="#featured-themes" variant="outline-light">
              See Featured Themes
            </LinkButton>
          </>
        }
      >
        <p>{cat.intro}</p>
      </PageHero>

      {/* Five featured themes with short descriptions */}
      <Section variant="default" paddingSize="xl" id="featured-themes">
        <div className="mb-10 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary md:text-4xl">
            Featured Themes
          </h2>
          <div aria-hidden="true" className="mx-auto h-[2px] w-12 rounded-full bg-accent" />
        </div>

        <ul className="mx-auto flex max-w-3xl flex-col gap-4">
          {themes.map((t) => (
            <ThemeListItem
              key={t.id}
              icon={Icon}
              title={t.label}
              description={t.description}
              faithIntegrated={t.faithIntegrated && !cat.faithIntegrated}
              requestHref={bookHref({ service: "training", category: slug, theme: t.id })}
            />
          ))}
        </ul>

        {/* Optional "View all topics" accordion — collapsed by default */}
        {themesWithTopics.length > 0 && (
          <div className="mx-auto mt-6 max-w-3xl">
            <Disclosure summary="View all topics">
              <p className="mb-5 font-body text-xs leading-relaxed text-foreground/70">
                Related topics within each theme. Titles are examples of sessions;
                content is tailored to your audience.
              </p>
              <div className="flex flex-col gap-6">
                {themesWithTopics.map(({ theme, topics }) => (
                  <div key={theme.id}>
                    <h3 className="mb-2 font-heading text-sm font-semibold text-primary">
                      {theme.label}
                    </h3>
                    <ul className="space-y-1.5">
                      {topics.map((topic) => (
                        <li key={topic.id} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                          />
                          <span className="font-body text-sm leading-relaxed text-foreground">
                            {topic.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Disclosure>
          </div>
        )}
      </Section>

      {/* Outcomes and formats — confirmed with Jamie per request until approved copy exists */}
      <Section variant="mint" paddingSize="lg" id="formats-outcomes">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 font-heading text-2xl font-bold text-primary md:text-3xl">
            Formats &amp; Outcomes
          </h2>
          <p className="font-body text-base leading-relaxed text-foreground/80">
            Learning outcomes, session formats and delivery options are
            confirmed with Jamie for each request. Describe your audience and
            goals in the inquiry form and they will be shaped around them.
          </p>
        </div>
      </Section>

      {/* Relevant proof — only where real proof exists for this audience */}
      {cat.proof && (
        <Section variant="default" paddingSize="lg" id="proof">
          <div className="mx-auto max-w-md">
            <h2 className="mb-5 text-center font-heading text-2xl font-bold text-primary md:text-3xl">
              {cat.proof.heading}
            </h2>
            <EventPhoto photo={cat.proof.photo} sizes="(min-width: 768px) 448px, 100vw" />
          </div>
        </Section>
      )}

      {/* FAQs */}
      <Section variant="alternate" paddingSize="xl" id="faq">
        <div className="mb-10 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div aria-hidden="true" className="mx-auto h-[2px] w-12 rounded-full bg-accent" />
        </div>
        <div className="mx-auto max-w-3xl">
          <FaqList items={faqs} />
        </div>
      </Section>

      {/* Prefilled inquiry CTA */}
      <Section variant="primary" paddingSize="xl" id="request-cta" centered>
        <h2 className="mb-5 font-heading text-3xl font-bold leading-tight text-background md:text-4xl lg:text-5xl">
          Ready to Bring This Training to Your Team?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl font-body text-base leading-relaxed text-background/80">
          Request this training and the inquiry form opens with{" "}
          {cat.label} already selected. A request is not a confirmed booking.
        </p>
        <LinkButton href={bookHref({ service: "training", category: slug })} className="px-8 py-4">
          Request This Training
        </LinkButton>
      </Section>

      {/* Internal links to the other categories */}
      <Section variant="default" paddingSize="md">
        <h2 className="mb-4 font-heading text-lg font-semibold text-primary">
          Explore other training categories
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {others.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/training/${c.slug}`}
                className="font-body text-sm text-secondary underline underline-offset-2 hover:text-primary"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
