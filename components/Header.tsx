"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
  Youtube,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface SocialLink {
  id: "linkedin" | "facebook" | "instagram" | "youtube";
  label: string;
  href: string;
}

interface HeaderProps {
  businessName: string;
  navLinks: NavLink[];
  socialLinks?: SocialLink[];
  ctaLabel?: string;
  ctaHref?: string;
  avatarSrc: string;
}

const SOCIAL_ICONS: Record<SocialLink["id"], LucideIcon> = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

const linkBase =
  "font-body text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap hover:text-primary";

export default function Header({
  businessName,
  navLinks,
  socialLinks = [],
  ctaLabel = "Book Jamie",
  ctaHref = "/book",
  avatarSrc,
}: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  const linkColor = (href: string) =>
    isActive(href)
      ? "text-primary underline underline-offset-8 decoration-accent decoration-2"
      : "text-foreground/75";

  const socialIcons = (className: string, itemClass: string) => (
    <ul aria-label="Social media" className={className}>
      {socialLinks.map((s) => {
        const Icon = SOCIAL_ICONS[s.id];
        return (
          <li key={s.id}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} (opens in a new tab)`}
              className={itemClass}
            >
              <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="relative z-50 w-full bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 md:pb-8 md:pt-8 lg:px-8">
        {/* Phones: just the hamburger on the navy background.
            Tablet and up: the white pill with the photo poking above it. */}
        <div className="relative h-12 md:h-[var(--avatar-d)] md:[--avatar-d:6.5rem] md:[--pill-h:4.25rem]">
          <div className="flex h-full items-center justify-end md:absolute md:bottom-0 md:left-[calc(var(--avatar-d)/2)] md:right-0 md:h-[var(--pill-h)] md:justify-between md:rounded-full md:bg-white md:pl-[calc(var(--avatar-d)/2_+_0.75rem)] md:pr-6 md:shadow-md">
            {/* Desktop navigation */}
            <nav
              aria-label="Main"
              className="hidden flex-1 items-center justify-center gap-6 md:flex lg:gap-9"
            >
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setMenuOpen(true)}
                    onMouseLeave={() => setMenuOpen(false)}
                    onFocus={() => setMenuOpen(true)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null))
                        setMenuOpen(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Escape" && menuOpen) {
                        setMenuOpen(false);
                        toggleRef.current?.focus();
                      }
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <Link
                        href={link.href}
                        aria-current={pathname === link.href ? "page" : undefined}
                        className={`${linkBase} ${linkColor(link.href)}`}
                      >
                        {link.label}
                      </Link>
                      <button
                        ref={toggleRef}
                        type="button"
                        aria-expanded={menuOpen}
                        aria-controls="training-menu"
                        aria-label={`${link.label} categories`}
                        onClick={() => setMenuOpen((o) => !o)}
                        className="rounded p-1 text-foreground/75 hover:text-primary"
                      >
                        <ChevronDown
                          size={14}
                          strokeWidth={2}
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {menuOpen && (
                      <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                        <ul
                          id="training-menu"
                          className="overflow-hidden rounded-md border border-[#E0D6C8] bg-white py-2 shadow-xl"
                        >
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                aria-current={pathname === child.href ? "page" : undefined}
                                className="block px-4 py-2.5 font-body text-sm text-foreground/85 transition-colors duration-150 hover:bg-mint hover:text-primary"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`${linkBase} ${linkColor(link.href)}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Social icons: inside the pill on wide screens (tablets get them in the footer) */}
            {socialLinks.length > 0 &&
              socialIcons(
                "mr-4 hidden flex-shrink-0 items-center gap-0.5 border-l border-[#E0D6C8] pl-4 lg:flex",
                "flex h-8 w-8 items-center justify-center rounded-full text-foreground/70 transition-colors duration-200 hover:bg-mint hover:text-secondary"
              )}

            {/* Desktop CTA */}
            <div className="hidden flex-shrink-0 md:block">
              <Link
                href={ctaHref}
                className="inline-block rounded-full bg-accent px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-widest text-primary shadow-sm transition-all duration-200 hover:brightness-105"
              >
                {ctaLabel}
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="ml-auto rounded-md p-2 text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Photo, placed last so it sits above the pill. Its navy ring cuts a
              concentric bite out of the pill's left end. */}
          <Link
            href="/"
            aria-label={`${businessName} — home`}
            className="absolute left-0 top-0 z-10 hidden flex-shrink-0 overflow-hidden rounded-full bg-white ring-[6px] ring-primary md:block"
            style={{ width: "var(--avatar-d)", height: "var(--avatar-d)" }}
          >
            <Image
              src={avatarSrc}
              alt=""
              fill
              sizes="104px"
              priority
              className="object-cover"
              style={{ transform: "scale(1.2)", transformOrigin: "50% 38%" }}
            />
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-primary md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="block rounded-md px-3 py-2.5 font-body text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="ml-3 flex flex-col border-l border-white/20 pl-4">
                    {link.children
                      .filter((c) => c.href !== link.href)
                      .map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-3 py-2 font-body text-xs tracking-wide text-white/80 transition-colors duration-200 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="pb-1 pt-3">
              <Link
                href={ctaHref}
                onClick={() => setMobileOpen(false)}
                className="inline-block w-full rounded-md bg-accent px-5 py-3 text-center font-body text-xs font-semibold uppercase tracking-widest text-primary shadow-md transition-all duration-200 hover:brightness-105"
              >
                {ctaLabel}
              </Link>
            </div>
            {socialLinks.length > 0 &&
              socialIcons(
                "mt-3 flex items-center gap-1 border-t border-white/15 pt-4",
                "flex h-9 w-9 items-center justify-center rounded-full text-white/85 transition-colors hover:bg-white/10 hover:text-accent"
              )}
          </nav>
        </div>
      )}
    </header>
  );
}
