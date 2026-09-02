"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";

/**
 * A stat figure that counts up once its card scrolls into view.
 *
 * Deliberately plain: a requestAnimationFrame loop writing textContent. No
 * animation library, no React state, so nothing re-renders and no Web
 * Animations are created or torn down — the browser only has to repaint a
 * short run of text, which it does inside a frame every time. An earlier pass
 * used NumberFlow, which spins each digit column as its own animation; at
 * anything approaching a per-frame count that meant cancelling and restarting
 * dozens of animations a second, and it juddered.
 *
 * The number sits absolutely over an invisible copy of the final figure, so
 * the box is the right size from the start and nothing beside it — the "*" on
 * the 90% card — shifts as the digits are added.
 *
 * The real figure is what renders on the server, so a crawler, or anyone with
 * JS switched off, reads "73,179" rather than "0". Zeroing happens in a layout
 * effect, i.e. before the browser paints, so there is no flash of the final
 * number first.
 */

// useLayoutEffect warns when React renders this on the server, and there is no
// layout to read there anyway.
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/** how long the climb takes, ms */
const DURATION = 2400;

/**
 * Ease in-out quad. An ease-out spends its whole budget on the tail: the
 * figure is within a rounding error of the target a third of the way in, so
 * the first frame you see is already in the tens of thousands and it looks
 * like it started somewhere arbitrary. This eases in from zero, spends the
 * middle climbing at a near-steady rate, and settles at the end.
 */
const ease = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

export default function StatNumber({
  value,
  prefix = "",
  suffix = "",
  delay = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  /** ms to hold before this one starts, so the three don't move as a block */
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  // Pinned locale: the server and the browser have to group digits the same
  // way or the markup they produce disagrees.
  const format = useMemo(() => {
    const nf = new Intl.NumberFormat("en-AU");
    return (n: number) => `${prefix}${nf.format(n)}${suffix}`;
  }, [prefix, suffix]);

  const final = format(value);

  useIsomorphicLayoutEffect(() => {
    // Only wind it back if we can tell when the card arrives. Without an
    // observer the number would sit at zero for good.
    if (typeof IntersectionObserver !== "undefined" && ref.current) {
      ref.current.textContent = format(0);
    }
  }, [format]);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;

    const run = () => {
      // Someone who asked for less motion still needs the number, just not the
      // 2.4 seconds of it.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = final;
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION);
        // the last frame writes the target itself, so it lands exact rather
        // than on whatever the easing rounds to
        el.textContent = t === 1 ? final : format(Math.round(value * ease(t)));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect(); // counts once, not on every pass
        timer = setTimeout(run, delay);
      },
      { threshold: 0.45 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [value, delay, final, format]);

  return (
    <span className="relative inline-block whitespace-nowrap">
      {/* holds the box at its final width so nothing reflows as digits arrive */}
      <span aria-hidden className="invisible">
        {final}
      </span>
      <span className="sr-only">{final}</span>
      <span aria-hidden ref={ref} className="absolute left-0 top-0">
        {final}
      </span>
    </span>
  );
}
