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

/** Build the relative path to the OG image route for a page. */
export function ogImageUrl({ title, eyebrow }: OgParams): string {
  const sp = new URLSearchParams();
  sp.set("t", title);
  if (eyebrow) sp.set("k", eyebrow);
  return `${OG_PATH}?${sp.toString()}`;
}
