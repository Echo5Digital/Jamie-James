import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { OPEN_ARMS, PHOTOS, SITE, SOCIAL_LINKS } from "@/lib/site";
import { TRAINING_CATEGORIES } from "@/lib/content";

const DESCRIPTION =
  "Jamie James offers speaking, training and organizational consulting in trauma-informed care, leadership, mental health and child welfare.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Speaker, Trainer & Consultant`,
    template: `%s | ${SITE.name}`,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} | Speaker, Trainer & Consultant`,
    description: DESCRIPTION,
    url: SITE.url,
    images: [{ url: PHOTOS.portrait.src, width: 1200, height: 1200, alt: PHOTOS.portrait.alt }],
  },
  twitter: { card: "summary" },
};

// Sitewide structured data: factual only (no address, phone or credentials).
const SITEWIDE_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    jobTitle: SITE.jobTitle,
    affiliation: [OPEN_ARMS.initiative, OPEN_ARMS.fosterCare].map((o) => ({
      "@type": "Organization",
      name: o.name,
      url: o.href,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  },
];

const FONT_HEADING = "Playfair Display";
const FONT_BODY = "Inter";
const GOOGLE_FONTS_HREF = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
  FONT_HEADING
)}:wght@400;500;600;700&family=${encodeURIComponent(FONT_BODY)}:wght@400;500;600&display=swap`;

// Navigation per the plan: Home | About Jamie | Speaking | Training | Consulting | Book Jamie.
// Resources stays hidden until approved content is ready. The eight training
// categories live inside the Training menu.
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Jamie", href: "/about-jamie" },
  { label: "Speaking", href: "/speaking" },
  {
    label: "Training",
    href: "/training",
    children: [
      { label: "All Training", href: "/training" },
      ...TRAINING_CATEGORIES.map((c) => ({
        label: c.label,
        href: `/training/${c.slug}`,
      })),
    ],
  },
  { label: "Consulting", href: "/consulting" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Enables the scroll-reveal start state before first paint (no flash).
            Without JavaScript this never runs, so content simply stays visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('reveal-js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
      </head>
      <body
        className="bg-background text-foreground antialiased font-body"
        style={
          {
            "--font-heading": `'${FONT_HEADING}', serif`,
            "--font-body": `'${FONT_BODY}', sans-serif`,
          } as React.CSSProperties
        }
      >
        {SITEWIDE_SCHEMA.map((schema, i) => (
          <JsonLd key={i} data={schema} />
        ))}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:font-semibold focus:text-primary"
        >
          Skip to main content
        </a>
        <Header
          businessName={SITE.name}
          navLinks={NAV_LINKS}
          socialLinks={SOCIAL_LINKS}
          avatarSrc={PHOTOS.portrait.src}
        />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
