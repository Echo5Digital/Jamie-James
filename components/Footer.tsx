import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface FooterLink {
  label: string;
  route: string;
}

interface FooterProps {
  businessName?: string;
  tagline?: string;
  affiliations?: { label: string; route: string }[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  footerLinks?: FooterLink[];
}

const defaultFooterLinks: FooterLink[] = [
  { label: "Home", route: "/" },
  { label: "About Jamie", route: "/about-jamie" },
  { label: "Speaking", route: "/speaking" },
  { label: "Training", route: "/training" },
  { label: "Leadership & Workplace Wellness", route: "/training/leadership-workplace-wellness" },
  { label: "Consulting", route: "/consulting" },
  { label: "Book Jamie", route: "/book" },
  { label: "Privacy Policy", route: "/privacy" },
  { label: "Terms of Use", route: "/terms" },
];

const defaultAffiliations = [
  { label: "Open Arms Initiative", route: "https://www.openarmsinitiative.com" },
  { label: "Open Arms Foster Care", route: "https://www.openarmsfostercare.com" },
];

export default function Footer({
  businessName = "Jamie James",
  tagline = "Speaker · Trainer · Consultant",
  affiliations = defaultAffiliations,
  socialLinks = {
    linkedin: "#",
    twitter: "#",
    email: "mailto:hello@jamiejames.com",
  },
  footerLinks = defaultFooterLinks,
}: FooterProps) {
  const primaryLinks = footerLinks.filter(
    (l) =>
      !["Privacy Policy", "Terms of Use"].includes(l.label) &&
      l.label !== "Leadership & Workplace Wellness"
  );
  const subLinks = footerLinks.filter((l) =>
    ["Leadership & Workplace Wellness"].includes(l.label)
  );
  const legalLinks = footerLinks.filter((l) =>
    ["Privacy Policy", "Terms of Use"].includes(l.label)
  );

  return (
    <footer className="bg-primary text-background">
      {/* CTA band */}
      <div className="border-b border-secondary/40">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-xl md:text-2xl text-background leading-snug">
              Ready to Bring Jamie to Your Organization?
            </p>
            <p className="font-body text-sm text-background/70 mt-1">
              Let's create meaningful change together.
            </p>
          </div>
          <Link
            href="/book"
            className="inline-block bg-accent text-primary font-body text-xs font-semibold uppercase tracking-widest px-7 py-3 rounded-md shadow-md transition-opacity hover:opacity-90"
          >
            Request Availability →
          </Link>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-heading text-2xl text-background tracking-tight">
            {businessName}
          </Link>
          <p className="font-body text-sm text-background/70 leading-relaxed">
            {tagline}
          </p>
          <p className="font-body text-sm text-background/60 leading-relaxed">
            Compassionate. Practical. Real-world strategies for healthier teams,
            stronger leaders and more resilient communities.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-4 mt-2">
            {socialLinks?.linkedin && (
              <a
                href={socialLinks.linkedin}
                aria-label="LinkedIn"
                className="text-background/60 hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
            {socialLinks?.twitter && (
              <a
                href={socialLinks.twitter}
                aria-label="Twitter"
                className="text-background/60 hover:text-accent transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
            {socialLinks?.email && (
              <a
                href={socialLinks.email}
                aria-label="Email Jamie"
                className="text-background/60 hover:text-accent transition-colors"
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Navigation column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-sm uppercase tracking-widest text-accent mb-1">
            Navigation
          </h4>
          {primaryLinks.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="font-body text-sm text-background/75 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Training column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-sm uppercase tracking-widest text-accent mb-1">
            Training
          </h4>
          <Link
            href="/training"
            className="font-body text-sm text-background/75 hover:text-accent transition-colors"
          >
            All Training
          </Link>
          {subLinks.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="font-body text-sm text-background/75 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/training/trauma-mental-health"
            className="font-body text-sm text-background/75 hover:text-accent transition-colors"
          >
            Trauma &amp; Mental Health
          </Link>
          <Link
            href="/training/foster-care-adoption"
            className="font-body text-sm text-background/75 hover:text-accent transition-colors"
          >
            Foster Care, Adoption &amp; Child Welfare
          </Link>
          <Link
            href="/training/parenting-family"
            className="font-body text-sm text-background/75 hover:text-accent transition-colors"
          >
            Parenting &amp; Family
          </Link>
        </div>

        {/* Affiliations + contact column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-sm uppercase tracking-widest text-accent mb-1">
            Affiliations
          </h4>
          {affiliations.map((a) => (
            <a
              key={a.route}
              href={a.route}
              className="font-body text-sm text-background/75 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {a.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-secondary/30 flex flex-col gap-2">
            <h4 className="font-heading text-sm uppercase tracking-widest text-accent">
              Book Jamie
            </h4>
            <p className="font-body text-xs text-background/60 leading-relaxed">
              Available for conferences, retreats, staff days, and faith &amp;
              community events.
            </p>
            <Link
              href="/book"
              className="mt-1 self-start bg-accent text-primary font-body text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-md shadow transition-opacity hover:opacity-90"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-background/50">
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            {affiliations.map((a, i) => (
              <span key={a.route} className="flex items-center gap-2">
                {i > 0 && <span className="text-background/30 select-none">·</span>}
                <a
                  href={a.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-background/50 hover:text-accent transition-colors"
                >
                  {a.label}
                </a>
              </span>
            ))}
            {legalLinks.map((link) => (
              <span key={link.route} className="flex items-center gap-2">
                <span className="text-background/30 select-none">·</span>
                <Link
                  href={link.route}
                  className="font-body text-xs text-background/50 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </span>
            ))}
            <span className="flex items-center gap-2">
              <span className="text-background/30 select-none">·</span>
              <Link
                href="/book"
                className="font-body text-xs text-background/50 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}