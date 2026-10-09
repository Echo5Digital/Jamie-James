import Link from "next/link";
import { ArrowRight, BookOpen, Building2, Mic } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/content";

const SERVICE_ICONS = { speaking: Mic, training: BookOpen, consulting: Building2 } as const;

// The three services under the banner. The whole card is one link (the "Learn
// more" link is stretched over it), and the group hover drives the icon tile,
// the gold rule and the arrow. Each card is wrapped in <Reveal> so it rises in
// as it scrolls into view, one after another.
export default function ServiceCards() {
  return (
    <Section variant="white" paddingSize="xl" maxWidth="xl">
      <h2 className="sr-only">Services</h2>
      <ul className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = SERVICE_ICONS[s.slug];
          return (
            <Reveal as="li" key={s.slug} delay={i * 150} className="flex">
              <div className="card-hover group relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#E0D6C8] bg-gradient-to-b from-white to-background p-8 shadow-sm has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-secondary has-[:focus-visible]:ring-offset-2">
                {/* Brand accent along the top edge (grows in on reveal) */}
                <span
                  aria-hidden="true"
                  className="reveal-line absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-accent via-secondary to-primary"
                />
                {/* Faint numeral watermark */}
                <span
                  aria-hidden="true"
                  className="reveal-num pointer-events-none absolute right-6 top-5 select-none font-heading text-7xl font-bold leading-none text-primary/[0.06]"
                >
                  0{i + 1}
                </span>

                <span className="reveal-icon mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-accent shadow-md transition-colors duration-300 group-hover:bg-accent group-hover:text-primary">
                  <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
                </span>

                <h3 className="mb-3 font-heading text-2xl font-bold leading-snug text-primary">
                  {s.label}
                </h3>
                <span
                  aria-hidden="true"
                  className="reveal-rule mb-4 block h-0.5 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20"
                />
                <p className="flex-1 font-body text-sm leading-relaxed text-foreground/80">
                  {s.summary}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#E0D6C8] pt-5">
                  <Link
                    href={s.href}
                    className="font-body text-xs font-semibold uppercase tracking-widest text-secondary transition-colors duration-200 after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
                  >
                    Learn more<span className="sr-only"> about {s.label}</span>
                  </Link>
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40 text-secondary transition-all duration-300 group-hover:translate-x-1 group-hover:border-accent group-hover:bg-accent group-hover:text-primary"
                  >
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
