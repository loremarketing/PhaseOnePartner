import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site";

/**
 * Served at /robots.txt, which returned a 404 until this file existed.
 *
 * `/thank-you` is deliberately NOT disallowed here, even though it is noindex
 * and is left out of sitemap.ts.
 *
 * Disallow and noindex are not two ways of saying the same thing, and combining
 * them backfires: a crawler has to FETCH a page to read its `noindex`. Blocking
 * it in robots.txt means Google never sees the tag, so an already-indexed URL
 * stays in the index as a URL-only result with no way to remove it. Allow the
 * crawl, let the noindex do its job, and only consider a disallow once Search
 * Console reports the URL as "Excluded by 'noindex' tag".
 *
 * The same reasoning now covers `/home-v4`, which 301s to `/`: a crawler has to
 * fetch it to see the redirect and follow it to the new target. Disallowing it
 * would strand the old URL in the index pointing at a page it can no longer
 * confirm moved.
 *
 * One more trap before editing: robots rules resolve by LONGEST MATCH, not by
 * order. A bare `Allow: /` alongside a `Disallow: /` is a tie, and crawlers
 * break ties toward allow — silently reopening whatever you meant to close.
 * Keep disallow entries specific.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // POST-only mail relay; nothing to index.
      disallow: ["/api/"],
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
    host: siteConfig.url,
  };
}
