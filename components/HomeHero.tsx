import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import { PHOTOS } from "@/lib/site";

// Homepage banner: event-photo background under a deep navy overlay, text
// left, tall portrait right that overhangs into the section below on large screens.
export default function HomeHero() {
  return (
    <section className="relative w-full bg-primary">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          src={PHOTOS.heroBackground.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Navy wash (RGB 16, 42, 67): strongest behind the text, lighter toward the portrait */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        {/* Fade the top into the navbar's solid navy so there is no visible seam */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 pb-16 pt-6 lg:grid-cols-12 lg:gap-8 lg:pb-0 lg:pt-10">
          <div className="lg:col-span-7">
            <p className="mb-7 flex items-center gap-4 font-body text-xs font-medium uppercase tracking-[0.25em] text-background/90">
              <span aria-hidden="true" className="h-px w-12 flex-shrink-0 bg-accent" />
              <span>Jamie James · Speaker, Trainer &amp; Consultant</span>
            </p>
            <h1 className="mb-6 max-w-xl font-heading text-4xl font-medium leading-[1.15] text-background sm:text-5xl lg:text-[3.25rem]">
              Speaking and Training That Strengthen People and Organizations.
            </h1>
            <p className="mb-10 max-w-md font-body text-sm leading-relaxed text-background/80 sm:text-base">
              Practical tools. Compassionate insight. Real-world strategies for
              healthier teams, stronger leaders and more resilient communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <LinkButton href="/book" className="!rounded-none px-8 py-4">
                Request Availability
              </LinkButton>
              <LinkButton
                href="/training"
                variant="outline-light"
                className="!rounded-none !border !border-background/40 px-8 py-[15px]"
              >
                Explore Training
              </LinkButton>
            </div>
          </div>

          {/* Portrait: overhangs the next section on large screens */}
          <div className="relative z-10 mx-auto w-full max-w-sm lg:col-span-5 lg:mx-0 lg:-mb-16 lg:ml-auto lg:max-w-[440px]">
            <div className="img-zoom relative aspect-[3/4] w-full overflow-hidden bg-secondary/30 shadow-2xl">
              <Image
                src={PHOTOS.portrait.src}
                alt={PHOTOS.portrait.alt}
                fill
                priority
                sizes="(min-width: 1024px) 440px, 384px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
