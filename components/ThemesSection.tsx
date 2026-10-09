import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { HOME_THEME_IDS, THEMES_BY_ID, categoryLabel } from "@/lib/content";
import { PHOTOS } from "@/lib/site";

// Homepage "Selected Themes" with a photo of Jamie as the background.
//
// The source is a 1280×720 video still, so it must not be stretched: on large
// screens it is shown as a left-hand panel at close to its natural size (about
// 1.15×), fading into the navy where the content sits. Small screens use it
// full-bleed behind a flat navy wash, where it stays crisp enough.
export default function ThemesSection() {
  const themes = HOME_THEME_IDS.map((id) => THEMES_BY_ID[id]);

  return (
    <section
      aria-labelledby="themes-heading"
      className="relative w-full overflow-hidden bg-primary px-4 py-24 text-background sm:px-6 lg:px-8"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {/* Small screens: full-bleed photo under an even navy wash */}
        <div className="bg-drift absolute inset-0 lg:hidden">
          <Image
            src={PHOTOS.themesBackground.src}
            alt=""
            fill
            // `cover` draws the image far wider than the screen (the section is tall),
            // so tell Next the real drawn width or it serves a too-small copy.
            sizes="2000px"
            quality={90}
            className="object-cover object-[45%_25%]"
          />
        </div>
        <div className="absolute inset-0 bg-primary/85 lg:hidden" />

        {/* Large screens: a photo panel on the left, faded out toward the content */}
        <div className="absolute inset-y-0 left-0 hidden w-[58%] [mask-image:linear-gradient(90deg,#000_55%,transparent_100%)] lg:block">
          <Image
            src={PHOTOS.themesBackground.src}
            alt=""
            fill
            // The panel is ~58vw wide, but `cover` fits the image to the section's
            // height, so it is drawn ~1500px wide. Ask for that, not for 58vw, so
            // the full-resolution original is served instead of a downscaled copy.
            sizes="1600px"
            quality={92}
            className="object-cover object-[42%_30%] [filter:contrast(1.07)_saturate(1.1)]"
          />
        </div>
        {/* Light wash over Jamie, solid navy behind the content */}
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(16,42,67,0)_0%,rgba(16,42,67,0.14)_28%,rgba(16,42,67,0.86)_47%,rgba(16,42,67,0.96)_100%)] lg:block" />

        {/* Soft vignettes and a warm glow */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(196,154,98,0.14),transparent_55%)]" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />

      <div className="relative mx-auto grid max-w-6xl lg:grid-cols-12">
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              <span aria-hidden="true" className="h-4 w-0.5 bg-accent" />
              From the eight categories
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="themes-heading"
              className="mb-5 font-heading text-4xl font-medium leading-tight text-background md:text-5xl"
            >
              Selected <span className="italic text-accent">Themes</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mb-10 max-w-xl font-body text-sm leading-relaxed text-background/85 sm:text-base">
              A few of the themes Jamie trains on. Each one sits inside a
              training category where you can see the full set.
            </p>
          </Reveal>

          <ul className="flex flex-col gap-3">
            {themes.map((t, i) => (
              <Reveal as="li" key={t.id} variant="right" delay={150 + i * 110}>
                <Link
                  href={`/training/${t.category}`}
                  className="card-hover-dark group flex w-full items-center gap-5 rounded-xl border border-white/15 bg-white/[0.07] px-5 py-4 backdrop-blur-md"
                >
                  <span
                    aria-hidden="true"
                    className="w-11 flex-shrink-0 font-heading text-3xl font-bold leading-none text-accent/60 transition-colors duration-300 group-hover:text-accent"
                  >
                    0{i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block font-body text-[11px] font-semibold uppercase tracking-widest text-accent">
                      {categoryLabel(t.category)}
                    </span>
                    <span className="block font-heading text-lg font-semibold leading-snug text-background sm:text-xl">
                      {t.label}
                    </span>
                  </span>
                  <span className="flex flex-shrink-0 items-center gap-3">
                    <span className="hidden font-body text-[11px] font-semibold uppercase tracking-widest text-background/80 sm:inline">
                      Explore Training
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-background transition-all duration-300 group-hover:translate-x-1 group-hover:border-accent group-hover:bg-accent group-hover:text-primary"
                    >
                      <ArrowRight size={15} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
