import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { OPEN_ARMS, PHOTOS, SITE, SOCIAL_LINKS, type SocialId } from "@/lib/site";

const SOCIAL_ICONS: Record<SocialId, LucideIcon> = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About Jamie", href: "/about-jamie" },
  { label: "Book Jamie", href: "/book" },
];

const headingClass =
  "mb-5 flex items-center gap-3 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-accent";

const circleButton =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-background/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-primary";

// Same look as the rest of the site: deep navy, a gold hairline and warm glow
// (like the Themes section), the section container edges, and the same
// staggered scroll-in.
export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-primary text-background">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(196,154,98,0.13),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />

      {/* Side padding sits OUTSIDE the max-w-6xl box, exactly like <Section>, so the
          footer's content lines up with the sections above it at every width. */}
      <div className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <Reveal className="sm:col-span-2 lg:col-span-5">
          <div className="mb-5 flex items-center gap-4">
            <span className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-accent ring-offset-2 ring-offset-primary">
              <Image
                src={PHOTOS.portrait.src}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
                style={{ transform: "scale(1.2)", transformOrigin: "50% 38%" }}
              />
            </span>
            <span>
              <Link
                href="/"
                className="block font-heading text-3xl leading-none tracking-tight text-background transition-colors hover:text-accent"
              >
                {SITE.name}
              </Link>
              <span className="mt-2 block font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                {SITE.tagline}
              </span>
            </span>
          </div>
          <p className="mb-6 max-w-sm font-body text-sm leading-relaxed text-background/80">
            Speaking and training that strengthen people and organizations.
          </p>

          {SOCIAL_LINKS.length > 0 && (
            <ul aria-label="Social media" className="mb-5 flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICONS[s.id];
                return (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} (opens in a new tab)`}
                      className={circleButton}
                    >
                      <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}

          {SITE.contactEmail && (
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="inline-flex items-center gap-2 font-body text-sm text-background/85 transition-colors hover:text-accent"
            >
              <Mail size={16} aria-hidden="true" />
              {SITE.contactEmail}
            </a>
          )}
        </Reveal>

        {/* Navigation */}
        <Reveal delay={120} className="lg:col-span-2 lg:col-start-7">
          <nav aria-label="Footer">
            <h2 className={headingClass}>
              <span aria-hidden="true" className="h-4 w-0.5 bg-accent" />
              Navigation
            </h2>
            <ul className="flex flex-col gap-3.5">
              {mainLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2.5 font-body text-sm text-background/85 transition-colors duration-200 hover:text-accent"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-3 bg-accent/60 transition-all duration-300 group-hover:w-6 group-hover:bg-accent"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        {/* Open Arms */}
        <Reveal delay={240} className="lg:col-span-4 lg:col-start-9">
          <h2 className={headingClass}>
            <span aria-hidden="true" className="h-4 w-0.5 bg-accent" />
            Open Arms
          </h2>
          <p className="mb-4 font-body text-xs leading-relaxed text-background/75">
            Jamie’s work stays connected to both organizations.
          </p>
          <ul className="flex flex-col gap-3">
            {[OPEN_ARMS.initiative, OPEN_ARMS.fosterCare].map((o) => (
              <li key={o.name}>
                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover-dark group flex items-center justify-between gap-4 rounded-xl border border-white/15 bg-white/[0.07] px-5 py-4 backdrop-blur-md"
                >
                  <span className="min-w-0">
                    <span className="block font-heading text-lg font-semibold leading-snug text-background">
                      {o.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                    <span className="mt-0.5 block font-body text-xs text-background/75">
                      For {o.serves}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/30 text-background transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-primary"
                  >
                    <ExternalLink size={15} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 py-6 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-background/75">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-body text-xs text-background/80 transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body text-xs text-background/80 transition-colors hover:text-accent"
            >
              Terms of Use
            </Link>
            <a href="#main-content" aria-label="Back to top" className={circleButton}>
              <ArrowUp size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
