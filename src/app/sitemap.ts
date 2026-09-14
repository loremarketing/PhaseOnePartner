import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site";

/**
 * Served at /sitemap.xml, which returned a 404 until this file existed.
 *
 * Lists only indexable routes. `/home-v4` and `/thank-you` are deliberately
 * absent: both send `noindex`, and listing a noindexed URL in a sitemap is an
 * "excluded by noindex tag" error in Search Console rather than a helpful hint.
 *
 * This is also the ONLY discovery path for `/industries` — that page is not
 * linked from the nav or the footer, so without this entry a crawler has no way
 * to reach it. If it ever gets an internal link, this stops being load-bearing.
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
