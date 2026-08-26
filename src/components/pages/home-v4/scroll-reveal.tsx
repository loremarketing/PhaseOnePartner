"use client";

import { useEffect } from "react";

/**
 * Mounted once per page. Finds every `[data-reveal]` element and flips it to
 * `data-revealed="true"` the first time it enters the viewport; the actual fade
 * and rise live in globals.css.
 *
 * Deliberately one observer over attributes rather than a wrapper component per
 * element: the sections stay server components (no client bundle, no extra DOM
 * nodes), and nothing has to become polymorphic to reveal an <li> or a grid cell.
 *
 * Stagger is per-element via an inline `transitionDelay`, and is only worth
 * setting for items that enter together — a stacked list arrives one row at a
 * time, so a per-index delay there would just feel laggy.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els.length) return;

    const reveal = (el: HTMLElement) => {
      el.dataset.revealed = "true";
    };

    // Nothing should be able to leave content permanently invisible: without
    // IntersectionObserver, or with reduced motion asked for, show everything.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement);
          io.unobserve(entry.target); // reveal once, never re-hide
        }
      },
      // fire a little before the element is fully on screen, so the motion
      // reads as "arriving with the scroll" rather than catching up after it
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
