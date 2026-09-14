import type { Metadata } from "next";

import { siteConfig } from "@/lib/config/site";
import { ogImageUrl } from "@/lib/og";

/**
 * Build a Next `Metadata` object from a page's title and description, filled out
 * with the Open Graph / Twitter / canonical boilerplate every route needs.
 *
 *   export const metadata = buildMetadata({
 *     title: "Contact Us",
 *     description: "…",
 *     path: "/contact",
 *   });
 *
 * `path` is what makes the canonical correct, so pass it on every indexable
 * route. Omitting it leaves the page with no canonical at all, which is the
 * state the whole site was in before this helper existed.
 *
 * `noIndex` sets `noindex, nofollow`. A route that opts into it must ALSO be
 * left out of `sitemap.ts` — a noindexed URL listed in a sitemap is reported as
 * an error in Search Console.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path,
  eyebrow,
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  /** Route path, e.g. "/contact". Drives `alternates.canonical` and `og:url`. */
  path?: string;
  /** Uppercase label above the title on the share card. */
  eyebrow?: string;
  /** Override the share image (defaults to the dynamic /og card). */
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const url = path ? new URL(path, siteConfig.url).toString() : siteConfig.url;
  // Titles read "<page> | PhaseOne Partners"; the homepage passes a title that
  // already carries the brand, so it opts out by passing `title: undefined`.
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  const ogImage = image ?? ogImageUrl({ title: title ?? siteConfig.name, eyebrow });

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url,
      locale: siteConfig.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
