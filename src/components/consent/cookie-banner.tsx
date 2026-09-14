"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { readConsent, writeConsent } from "@/lib/analytics/consent";

/**
 * Cookie consent banner.
 *
 * The site fires GA4, Google Ads, GTM and the Meta Pixel, and the privacy
 * policy already promises that data is processed "with your explicit consent" —
 * so until this existed the site contradicted its own policy. Consent Mode v2
 * defaults everything to `denied` in the inline bootstrap (see
 * `src/app/layout.tsx`); this is where a visitor changes that.
 *
 * `position: fixed` keeps it out of normal flow, so it cannot shift the layout
 * of any existing page — it only overlays the bottom of the viewport.
 *
 * Accept and Reject are given equal visual weight on purpose. A "reject" that
 * is harder to find than "accept" is not valid consent under GDPR, and styling
 * it as an afterthought is the most common way banners fail an audit.
 */
export default function CookieBanner() {
  // Starts false so the server render and the first client render agree on
  // "nothing". Rendering the banner during SSR would be a hydration mismatch,
  // because the server cannot know whether this visitor has already chosen.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() !== null) return;

    // Wait for `load` rather than showing on mount. Two reasons, one of them
    // load-bearing:
    //
    // 1. Mounting during hydration perturbs layout while it is still settling.
    //    The homepage's GSAP entrance animation measures its scroll trigger
    //    once, in that same window, and fires only once — so a banner appearing
    //    mid-measurement made that animation fail to run about three times in
    //    five. Deferring until the page has loaded keeps the initial render
    //    byte-for-byte what it was before this component existed.
    // 2. A consent banner has no business competing with the page's own content
    //    for the first paint.
    const show = () => setVisible(true);

    if (document.readyState === "complete") {
      show();
      return;
    }
    window.addEventListener("load", show);
    return () => window.removeEventListener("load", show);
  }, []);

  if (!visible) return null;

  const choose = (analytics: boolean, ads: boolean) => {
    writeConsent({ analytics, ads });
    setVisible(false);
  };

  return (
    <div
      // Below the mobile menu's z-[150] so a full-screen menu still covers it,
      // above the sticky CTA's z-[100].
      className="fixed inset-x-0 bottom-0 z-[120] px-4 pb-4"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-text"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl bg-[#011483] px-5 py-4 font-manrope text-background shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5">
        <p id="cookie-banner-text" className="text-balance text-sm leading-relaxed text-background/95">
          We use cookies to understand how the site is used and to measure our
          marketing. You can accept or decline these.{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 hover:text-background"
          >
            Read our Privacy Policy
          </Link>
          .
        </p>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose(false, false)}
            className="cursor-pointer rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose(true, true)}
            className="cursor-pointer rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#011483] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
