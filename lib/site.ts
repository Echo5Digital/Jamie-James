// Site-wide constants. Anything that still needs a decision from Jamie is
// driven by an environment variable or an empty list so nothing placeholder
// ever renders publicly.

export const SITE = {
  name: "Jamie James",
  // Domain is not final yet — set NEXT_PUBLIC_SITE_URL once chosen.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamiejames.com").replace(/\/$/, ""),
  tagline: "Speaker · Trainer · Consultant",
  jobTitle: "Speaker, Trainer & Organizational Consultant",
  // Approved public contact address. When empty, no mailto link is rendered.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  policiesUpdated: "October 9, 2026",
} as const;

export type SocialId = "linkedin" | "facebook" | "instagram" | "youtube";

// Jamie's approved social profiles. An icon is shown only when its URL is set
// (NEXT_PUBLIC_*_URL), so the site never links to a profile that doesn't exist.
// Each env var is referenced literally so Next can inline it.
export const SOCIAL_LINKS: { id: SocialId; label: string; href: string }[] = (
  [
    { id: "linkedin", label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL },
    { id: "facebook", label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL },
    { id: "instagram", label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
    { id: "youtube", label: "YouTube", href: process.env.NEXT_PUBLIC_YOUTUBE_URL },
  ] as { id: SocialId; label: string; href?: string }[]
).filter((s): s is { id: SocialId; label: string; href: string } => Boolean(s.href));

// Therapy and foster-care service requests go to the appropriate organization,
// not to this site's inquiry form. Update `serves` if Jamie says otherwise.
export const OPEN_ARMS = {
  initiative: {
    name: "Open Arms Initiative",
    href: "https://www.openarmsinitiative.com",
    serves: "therapy and counseling services",
  },
  fosterCare: {
    name: "Open Arms Foster Care",
    href: "https://www.openarmsfostercare.com",
    serves: "foster care services",
  },
} as const;

// Approved credentials only. Empty until Jamie supplies them — the About page
// renders the section only when this has entries.
export const CREDENTIALS: { label: string; value: string }[] = [];

// Real photography supplied by Jamie (public/images).
export const PHOTOS = {
  portrait: {
    src: "/images/jamie-james.jpg",
    alt: "Portrait of Jamie James smiling",
    width: 1200,
    height: 1200,
  },
  // Collage of event photos, used only as a heavily overlaid banner background.
  heroBackground: {
    src: "/images/leading-through-weight-wide.jpg",
    alt: "", // decorative
    width: 1600,
    height: 600,
  },
  // Wide still of Jamie smiling; used only as a heavily overlaid section background.
  themesBackground: {
    src: "/images/Image_20260817_203931_705.jpeg",
    alt: "", // decorative
    width: 1280,
    height: 720,
  },
  training1: {
    src: "/images/speaking-training-session-1.jpeg",
    alt: "Jamie James presenting to a seated audience at an Open Arms Foster Care training session",
    caption: "Presenting at an Open Arms Foster Care training session, August 14, 2026.",
    width: 3024,
    height: 4032,
  },
  training2: {
    src: "/images/speaking-training-session-2.jpeg",
    alt: "Jamie James speaking with open hands in front of a projected slide while attendees listen",
    caption: "Leading a session for a room of attendees.",
    width: 3024,
    height: 4032,
  },
  wide: {
    src: "/images/speaking-session-wide.jpeg",
    alt: "Jamie James smiling as she speaks to an audience in a training room",
    caption: "Speaking to a staff audience.",
    width: 1280,
    height: 720,
  },
} as const;
