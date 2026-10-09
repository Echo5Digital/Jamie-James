"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  label: string;
  route: string;
  children?: NavLink[];
}

interface HeaderProps {
  businessName?: string;
  navLinks?: NavLink[];
  ctaLabel?: string;
  ctaRoute?: string;
  avatarSrc?: string;
}

const defaultNavLinks: NavLink[] = [
  { label: "Home", route: "/" },
  { label: "About Jamie", route: "/about-jamie" },
  { label: "Speaking", route: "/speaking" },
  {
    label: "Training",
    route: "/training",
    children: [
      { label: "All Training", route: "/training" },
      {
        label: "Leadership & Workplace Wellness",
        route: "/training/leadership-workplace-wellness",
      },
      { label: "Trauma & Mental Health", route: "/training/trauma-mental-health" },
      {
        label: "Foster Care, Adoption & Child Welfare",
        route: "/training/foster-care-adoption",
      },
      { label: "Parenting & Family", route: "/training/parenting-family" },
      {
        label: "Schools & Youth Organizations",
        route: "/training/schools-youth-organizations",
      },
      { label: "Faith & Ministry", route: "/training/faith-ministry" },
      {
        label: "Community & Personal Development",
        route: "/training/community-personal-development",
      },
      { label: "Clinical Training", route: "/training/clinical-training" },
    ],
  },
  { label: "Consulting", route: "/consulting" },
];

export default function Header({
  businessName = "Jamie James",
  navLinks = defaultNavLinks,
  ctaLabel = "Book Jamie",
  ctaRoute = "/book",
  avatarSrc = "/images/jamie-james.jpg",
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-primary relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div
          className="relative [--avatar-d:5.5rem] [--pill-h:3.5rem] md:[--avatar-d:6.5rem] md:[--pill-h:4.25rem]"
          style={{ height: "var(--avatar-d)" }}
        >
          {/* White pill nav bar, bottom-aligned so the avatar pokes up above it */}
          <div
            className="absolute bottom-0 bg-white rounded-full shadow-md flex items-center justify-between pr-4 md:pr-6"
            style={{
              left: "calc(var(--avatar-d) / 2)",
              right: 0,
              height: "var(--pill-h)",
              paddingLeft: "calc(var(--avatar-d) / 2 + 0.75rem)",
            }}
          >
            {/* Concave notch: a patch the size of the avatar's radius,
                colored like the page background, masked with a radial
                gradient centered on the avatar's own center (the pill's
                top-left corner) so the circle's curve is cut out of the
                pill, letting it hug the bottom of the avatar. */}
            <div
              className="absolute bg-primary pointer-events-none"
              style={{
                left: 0,
                top: 0,
                width: "calc(var(--avatar-d) / 2)",
                height: "calc(var(--avatar-d) / 2)",
                maskImage:
                  "radial-gradient(circle at 0 0, transparent calc(var(--avatar-d) / 2), black calc(var(--avatar-d) / 2))",
                WebkitMaskImage:
                  "radial-gradient(circle at 0 0, transparent calc(var(--avatar-d) / 2), black calc(var(--avatar-d) / 2))",
              }}
            />
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1 gap-8 lg:gap-10">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.route}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={link.route}
                      className="flex items-center gap-1 font-body text-sm font-medium text-foreground/70 hover:text-primary tracking-wide transition-colors duration-200 whitespace-nowrap"
                    >
                      {link.label}
                      <ChevronDown size={14} strokeWidth={2} />
                    </Link>
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                        <div className="bg-white rounded-md shadow-xl border border-[#E0D6C8] overflow-hidden py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.route}
                              href={child.route}
                              className="block px-4 py-2.5 font-body text-sm text-foreground/80 hover:bg-mint hover:text-primary transition-colors duration-150"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.route}
                    href={link.route}
                    className="font-body text-sm font-medium text-foreground/70 hover:text-primary tracking-wide transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block flex-shrink-0">
              <Link
                href={ctaRoute}
                className="inline-block bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full shadow-sm hover:brightness-105 transition-all duration-200"
              >
                {ctaLabel}
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden ml-auto text-primary focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Avatar, placed last so it sits above both the notch and the pill */}
          <Link
            href="/"
            aria-label={businessName}
            className="absolute left-0 top-0 z-10 flex-shrink-0 rounded-full ring-4 ring-primary overflow-hidden bg-white"
            style={{
              width: "var(--avatar-d)",
              height: "var(--avatar-d)",
            }}
          >
            <Image
              src={avatarSrc}
              alt={businessName}
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <div key={link.route}>
                <Link
                  href={link.route}
                  onClick={() => setMobileOpen(false)}
                  className="block font-body text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 tracking-wide transition-colors duration-200 px-3 py-2.5 rounded-md"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="flex flex-col pl-4 border-l border-white/10 ml-3">
                    {link.children.slice(1).map((child) => (
                      <Link
                        key={child.route}
                        href={child.route}
                        onClick={() => setMobileOpen(false)}
                        className="font-body text-xs text-white/65 hover:text-white tracking-wide transition-colors duration-200 px-3 py-2 rounded-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href={ctaRoute}
                onClick={() => setMobileOpen(false)}
                className="inline-block w-full text-center bg-accent text-primary font-body font-semibold text-xs uppercase tracking-widest px-5 py-3 rounded-md shadow-md hover:brightness-105 transition-all duration-200"
              >
                {ctaLabel}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
