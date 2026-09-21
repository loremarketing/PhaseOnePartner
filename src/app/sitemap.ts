import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site";

/**
 * Served at /sitemap.xml, which returned a 404 until this file existed.
 *
 * Lists only indexable routes, and only URLs that answer 200.
 *
 * `/thank-you` is deliberately absent: it sends `noindex`, and listing a
 * noindexed URL in a sitemap is an "excluded by noindex tag" error in Search
 * Console rather than a helpful hint. `/home-v4` is absent for a different
 * reason now — it 301s to `/` (see next.config.ts), and a sitemap entry that
 * redirects is reported the same way. Do not add either back.
 */
const url = (path: string) => new URL(path, siteConfig.url).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: url("/"), changeFrequency: "weekly", priority: 1 },
    { url: url("/for-investors"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/for-founders"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/industries"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/about-us"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/contact"), changeFrequency: "yearly", priority: 0.7 },
    { url: url("/privacy-policy"), changeFrequency: "yearly", priority: 0.3 },
    { url: url("/terms-and-conditions"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
