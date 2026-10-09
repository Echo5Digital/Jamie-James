import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Mic } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { TRAINING_CATEGORIES } from "@/lib/content";
import { PHOTOS, SITE } from "@/lib/site";

const FEATURES = [
  {
    icon: Mic,
    title: "Speaking Engagements",
    body: "Events, conferences and retreats. Formats and availability are confirmed by Jamie.",
  },
  {
    icon: BookOpen,
    title: "Training & Workshops",
    body: "Practical education tailored to an audience, across eight categories.",
  },
];

// Homepage "Jamie in Action": deep navy section with three blocks that stack as
// intro → photos → details on phones, and sit as two columns on large screens
// (photos on the left spanning both rows). Everything reveals on scroll.
export default function InActionSection() {
  return (
    <section
      aria-labelledby="in-action-heading"
      className="w-full overflow-x-clip bg-primary px-4 py-24 text-background sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
        {/* 1 ── Intro */}
        <div className="lg:col-start-2 lg:row-start-1 lg:self-end lg:pb-8">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-background/90">
              <Mic size={15} className="reveal-icon text-accent" aria-hidden="true" />
              Speaking &amp; Training
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2
              id="in-action-heading"
              className="mb-5 font-heading text-4xl font-bold leading-tight text-background md:text-5xl"
            >
              Jamie in{" "}
              <span className="relative inline-block text-accent">
                Action
                <span
                  aria-hidden="true"
                  className="reveal-line absolute -bottom-1.5 left-0 h-[3px] w-full origin-left rounded-full bg-accent/60"
                />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="max-w-xl font-body text-base leading-relaxed text-background/85">
              Photos from Jamie’s own training sessions. See the speaking themes
              and audiences, or request availability for your event.
            </p>
          </Reveal>
        </div>

        {/* 2 ── Photos with the overlapping badge */}
        <figure className="lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
          <div className="relative mx-auto grid max-w-lg grid-cols-2 gap-4 lg:max-w-none">
            <Reveal variant="left">
              <div className="img-zoom parallax-a relative aspect-[3/5] overflow-hidden rounded-[1.75rem] bg-white/5">
                <Image
                  src={PHOTOS.training1.src}
                  alt={PHOTOS.training1.alt}
                  fill
                  sizes="(min-width: 1024px) 280px, 45vw"
                  className="object-cover object-[50%_55%]"
                />
              </div>
            </Reveal>
            <Reveal variant="right" delay={150}>
              <div className="img-zoom parallax-b relative aspect-[3/5] overflow-hidden rounded-[1.75rem] bg-white/5">
                <Image
                  src={PHOTOS.training2.src}
                  alt={PHOTOS.training2.alt}
                  fill
                  sizes="(min-width: 1024px) 280px, 45vw"
                  className="object-cover object-[50%_40%]"
                />
              </div>
            </Reveal>

            {/* Badge: a thick border in the section colour makes it look cut out of the photos.
                The outer box centres it; the inner Reveal does the springy pop. */}
            <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
              <Reveal variant="pop" delay={500}>
                <div className="w-[8.5rem] rounded-2xl border-[10px] border-primary bg-[#143354] px-3 py-5 text-center sm:w-40">
                  <p className="font-heading text-4xl font-bold leading-none text-background sm:text-5xl">
                    <CountUp to={TRAINING_CATEGORIES.length} delay={550} />
                  </p>
                  <p className="mt-2 font-heading text-sm font-semibold leading-tight text-accent">
                    Training Categories
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={400}>
            <figcaption className="mx-auto mt-8 max-w-lg font-body text-xs leading-relaxed text-background/75 lg:max-w-none">
              {PHOTOS.training1.caption}
            </figcaption>
          </Reveal>
        </figure>

        {/* 3 ── Details */}
        <div className="lg:col-start-2 lg:row-start-2 lg:self-start">
          <ul className="mb-9 grid gap-4 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={i * 150} className="flex">
                <div className="card-hover-dark flex-1 rounded-lg border border-white/10 bg-[#143354] p-5">
                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="reveal-icon mb-3 text-accent"
                    aria-hidden="true"
                  />
                  <h3 className="mb-1.5 font-heading text-base font-semibold text-accent">{title}</h3>
                  <p className="font-body text-sm leading-relaxed text-background/85">{body}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={150}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
              <Link
                href="/book?service=speaking"
                className="group inline-flex items-center gap-3 rounded-full bg-accent py-2 pl-6 pr-2 font-body text-xs font-semibold uppercase tracking-widest text-primary transition-all duration-200 hover:brightness-105"
              >
                Request Availability
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>
              <Link
                href="/speaking"
                className="inline-flex items-center rounded-full border border-background/40 px-6 py-3 font-body text-xs font-semibold uppercase tracking-widest text-background transition-colors duration-200 hover:bg-background hover:text-primary"
              >
                About Speaking
              </Link>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex items-center gap-3 border-t border-white/15 pt-6">
              <span className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white/30">
                <Image
                  src={PHOTOS.portrait.src}
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover"
                  style={{ transform: "scale(1.2)", transformOrigin: "50% 38%" }}
                />
              </span>
              <p className="font-body leading-tight">
                <span className="block font-heading text-sm font-semibold text-background">
                  {SITE.name}
                </span>
                <span className="block text-xs text-background/75">{SITE.jobTitle}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
