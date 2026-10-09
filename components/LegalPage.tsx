import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Section from "@/components/Section";
import LinkButton from "@/components/LinkButton";
import { SITE } from "@/lib/site";

export interface LegalSection {
  id: string;
  icon: LucideIcon;
  title: string;
  body: ReactNode;
}

export default function LegalPage({
  icon: HeaderIcon,
  title,
  intro,
  sections,
  contactNote,
}: {
  icon: LucideIcon;
  title: string;
  intro: string;
  sections: LegalSection[];
  contactNote: string;
}) {
  return (
    <>
      <Section variant="primary" paddingSize="lg" maxWidth="md" centered>
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-accent">
            <HeaderIcon size={28} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <h1 className="font-heading text-3xl font-bold leading-tight text-background md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl font-body text-base leading-relaxed text-background/85">{intro}</p>
          <p className="font-body text-xs text-background/75">Last updated: {SITE.policiesUpdated}</p>
        </div>
      </Section>

      <div aria-hidden="true" className="h-1 w-full bg-gradient-to-r from-accent via-secondary to-primary opacity-80" />

      <Section variant="default" paddingSize="xl" maxWidth="md">
        <div className="flex flex-col gap-12">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`}>
                {i > 0 && <div className="mb-12 border-t border-[#E0D6C8]" />}
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2
                      id={`${s.id}-heading`}
                      className="mb-1 font-heading text-2xl font-semibold leading-snug text-primary md:text-3xl"
                    >
                      {s.title}
                    </h2>
                    <div aria-hidden="true" className="mb-4 h-[2px] w-10 rounded-full bg-accent" />
                    <div className="space-y-4 font-body text-sm leading-relaxed text-foreground md:text-base">
                      {s.body}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section variant="alternate" paddingSize="md" maxWidth="md">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="font-body text-sm leading-relaxed text-foreground/85">{contactNote}</p>
          <LinkButton href="/book" className="flex-shrink-0 whitespace-nowrap">
            Contact Jamie
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
