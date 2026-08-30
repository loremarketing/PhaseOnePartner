import Image from "next/image";

/**
 * The wave-line artwork in the top-right and bottom-left corners of the
 * gradient CTA cards — Figma 1583:340 (/home-v4 "Next Step") and 1583:2824
 * (/industries "Looking for industry specific expertise?").
 *
 * These are the same two exports the for-founders "Next Step" card already
 * uses, reused rather than re-exported so the three cards cannot drift apart.
 *
 * Two corner assets, not one full-bleed background: these cards size to their
 * copy, so a single stretched image would pull the artwork away from the
 * corners it is anchored to as the height changes. `w-auto` off a fixed height
 * keeps each ribbon's own aspect ratio intact.
 *
 * Render before the card's content, which needs `relative z-10` to sit above.
 */
export default function CtaWaves() {
  return (
    <>
      <Image
        src="/bg/partners-for-growth-get-started-desktop.webp"
        alt=""
        aria-hidden="true"
        width={384}
        height={319}
        className="pointer-events-none absolute bottom-0 left-0 h-[150px] w-auto max-w-none select-none opacity-80 lg:h-[300px] lg:opacity-100"
      />
      <Image
        src="/bg/partners-for-growth-get-started-2-desktop.webp"
        alt=""
        aria-hidden="true"
        width={349}
        height={368}
        className="pointer-events-none absolute right-0 top-0 h-[160px] w-auto max-w-none select-none opacity-80 lg:h-[340px] lg:opacity-100"
      />
    </>
  );
}
