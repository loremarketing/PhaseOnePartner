// Helper for the dynamic social-share image route (src/app/og/route.tsx).
//
// A page builds an `/og?…` URL in its metadata via `ogImageUrl()`. Next resolves
// the relative path against `metadataBase` (set by buildMetadata) when it renders
// <meta property="og:image">, so crawlers receive an absolute URL.

export type OgParams = {
  /** Headline rendered large on the card. */
  title: string;
  /** Small uppercase label above it. Defaults to the site eyebrow in the route. */
  eyebrow?: string;
};

const OG_PATH = "/og";

/**
 * Build the relative path to the OG image route for a page.
 *
 * Spaces are encoded as %20, via encodeURIComponent, and NOT with
 * URLSearchParams — whose toString() emits `+` for a space, per
 * application/x-www-form-urlencoded.
 *
 * That distinction is load-bearing. `+` in a query string is ambiguous: a space
 * under form encoding, a literal plus under RFC 3986. LinkedIn's crawler
 * normalises the og:image URL before fetching it and re-encodes the `+` to
 * %2B — which this route then correctly decodes back to a literal plus, so the
 * card rendered "Industries+We+Service". Worse, with no spaces left the
 * headline became one unbreakable token and overflowed the card.
 *
 * %20 has only one meaning, so nothing downstream can reinterpret it. Confirmed
 * against LinkedIn's Post Inspector; other scrapers (opengraph.xyz) fetched the
 * URL verbatim and never showed the bug, which is why it only broke on the one
 * channel that matters most here.
 */
export function ogImageUrl({ title, eyebrow }: OgParams): string {
  const parts = [`t=${encodeURIComponent(title)}`];
  if (eyebrow) parts.push(`k=${encodeURIComponent(eyebrow)}`);
  return `${OG_PATH}?${parts.join("&")}`;
}
