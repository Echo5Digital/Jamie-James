import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import LinkButton from "@/components/LinkButton";
import { ICONS } from "@/components/icons";
import { TRAINING_CATEGORIES } from "@/lib/content";
import { PHOTOS } from "@/lib/site";

// Homepage "Training Categories": a deep navy section over a darkened, blurred
// photo, with a centred heading and eight dark cards (gold icon, white title,
// gold bottom edge). Everything reveals on scroll.
export default function CategoriesSection() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="relative w-full overflow-hidden bg-primary px-4 py-24 text-background sm:px-6 lg:px-8"
    >
      {/* Background: blurred photo under a heavy navy wash, a warm glow and soft light streaks */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src={PHOTOS.wide.src}
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover opacity-50 blur-[6px]"
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,154,98,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.04)_46%,transparent_62%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <p className="mb-5 flex items-center justify-center gap-3 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              <span aria-hidden="true" className="h-4 w-0.5 bg-accent" />
              Training &amp; Workshops
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="categories-heading"
              className="mb-5 font-heading text-4xl font-medium leading-tight text-background md:text-5xl"
            >
              Eight Training
              <br />
              <span className="italic text-accent">Categories</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto max-w-xl font-body text-sm leading-relaxed text-background/80 sm:text-base">
              Eight categories, each with its own audience and featured themes.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINING_CATEGORIES.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <Reveal as="li" key={c.slug} delay={(i % 4) * 110 + (i >= 4 ? 120 : 0)} className="flex">
                <Link
                  href={`/training/${c.slug}`}
                  className="card-hover-dark group relative flex flex-1 flex-col items-center border border-white/5 border-b-[3px] border-b-accent bg-[#0B2036]/85 px-6 pb-8 pt-9 text-center backdrop-blur-[2px]"
                >
                  <Icon
                    size={38}
                    strokeWidth={1.25}
                    aria-hidden="true"
                    className="reveal-icon mb-5 text-accent transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="font-body text-[1.05rem] font-medium leading-snug text-background">
                    {c.label}
                  </h3>
                  {c.faithIntegrated && (
                    <span className="mt-1.5 font-body text-[10px] font-semibold uppercase tracking-widest text-accent">
                      Faith-integrated
                    </span>
                  )}
                  <p className="mt-3 font-body text-sm leading-relaxed text-background/75">
                    {c.tagline}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-body text-[11px] font-semibold uppercase tracking-widest text-accent">
                    Explore Training
                    <ArrowRight
                      size={13}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <LinkButton href="/training" variant="outline-light">
              View All Training →
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
