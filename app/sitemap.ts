import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Evaluated once at build, so every deploy stamps the sitemap with a truthful
 * lastmod instead of a date hardcoded in the source that silently goes stale.
 */
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
