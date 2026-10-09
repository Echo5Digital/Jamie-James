import type { MetadataRoute } from "next";
import { TRAINING_CATEGORIES } from "@/lib/content";
import { SITE } from "@/lib/site";

// Indexable public routes only. /thank-you is intentionally excluded (noindex).
// Launch scope is 17 routes: these 16 plus the confirmation page.
const ROUTES: string[] = [
  "/",
  "/about-jamie",
  "/speaking",
  "/training",
  ...TRAINING_CATEGORIES.map((c) => `/training/${c.slug}`),
  "/consulting",
  "/book",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route === "/" ? "" : route}`,
    lastModified: new Date(),
  }));
}
