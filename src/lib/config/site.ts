/**
 * One source of truth for the facts that appear in metadata, structured data
 * and the social share card.
 *
 * Everything here is either published on the site already or is a verifiable
 * company detail — the legal name and ABN come from the terms page, the phone
 * and email from the footer. Nothing is invented: this object feeds
 * `Organization` JSON-LD, which search engines read as the business's own
 * published contact details.
 */
export const siteConfig = {
  name: "PhaseOne Partners",
  legalName: "PhaseOne Partners Pty Ltd",
  /** From `src/app/terms-and-conditions/page.tsx` — "PhaseOne Partners Pty Ltd (ABN 97 679 376 464)". */
  abn: "97 679 376 464",
  description:
    "PhaseOne Partners connects founder-led businesses with the right capital partners through proprietary, off-market deal origination across Australia and New Zealand.",
  /**
   * The canonical origin, `www` included.
   *
   * The apex currently 307s here, and the footer's own link is the www form, so
   * this is the host every canonical, `og:url` and sitemap entry must use. A
   * canonical pointing at a host that redirects is a page telling Google not to
   * rank it.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.phaseonepartners.com.au",
  locale: "en_AU",
  phone: "+61416825603",
  email: "info@phaseonepartners.com.au",
  /** Verified profiles, used for `Organization.sameAs`. */
  sameAs: [
    "https://www.linkedin.com/company/phaseone-partners/",
    "https://www.facebook.com/61581009058267/about/",
  ],
  /** Drawn on the share card and used as the OG eyebrow. */
  eyebrow: "Deal Origination · Australia & New Zealand",
} as const;

export type SiteConfig = typeof siteConfig;
