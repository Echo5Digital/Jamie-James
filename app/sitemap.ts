import type { MetadataRoute } from "next";

// Injected by project-writer.ts from the planned page list — deterministic,
// not AI-authored, so it always matches the routes that actually exist.
const SITE_URL = "https://example.com";
const ROUTES: string[] = ["/","/about-jamie","/speaking","/training","/training/leadership-workplace-wellness","/consulting","/book","/thank-you","/privacy","/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
  }));
}
