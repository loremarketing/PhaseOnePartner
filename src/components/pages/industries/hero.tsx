/**
 * Figma 1583:2824 — the 1440x589 hero of the current industries design.
 *
 * Background is a vertical gradient #0224e9 → #011483 (node 1583:2825), not the
 * flat #0224e9 the first pass used.
 *
 * Over it sit two independently masked wave layers, both white at very low
 * alpha, taken verbatim from nodes 1583:2826 and 1583:2829:
 *
 *   large  1804.8x1339.4 at 7% white, rotated 70.49deg, centred in a
 *          1865.2x2148.4 box offset to (-607.9, -858.0)
 *   small  503x447 at 70% white * 20% opacity = 14% effective, upright
 *
 * Every length is expressed against a 1440-wide reference through `--u`, so the
 * whole composition scales with the viewport instead of being pinned to one
 * width — the hero is full-bleed, so 1 reference px is exactly 100vw/1440. The
 * masks only contribute alpha, which is why they compress so well as WebP.
 */
const REF = 1440;
/** one Figma pixel, in viewport terms */
const u = (n: number) => `calc(${n} * var(--u))`;

export default function Hero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden pb-16 pt-32 lg:min-h-[589px] lg:pb-[100px] lg:pt-[clamp(180px,17.5vw,252px)]"
      style={{
        "--u": `calc(100vw / ${REF})`,
        backgroundImage: "linear-gradient(180deg, #0224e9 0%, #011483 100%)",
      } as React.CSSProperties}
    >
      {/* Large sweep. Figma centres a 1804.8x1339.4 masked rect inside a
          1865.2x2148.4 box at (-607.9, -858.0) and rotates it 70.49deg; that
          collapses to one element pinned at the box's centre — (324.688,
          216.175) — and rotated about itself.
          The transform is inline rather than a `rotate-[70.49deg]` utility:
          Tailwind v4 emits that as the CSS `rotate` property, which composes
          differently from the `translate(-50%,-50%)` this needs. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10"
        style={{
          left: u(324.688),
          top: u(216.175),
          width: u(1804.773),
          height: u(1339.447),
          transform: "translate(-50%, -50%) rotate(70.49deg)",
          backgroundColor: "rgba(255,255,255,0.07)",
          maskImage: "url('/industries/hero-wave-lg.webp')",
          WebkitMaskImage: "url('/industries/hero-wave-lg.webp')",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          // Figma reports mask-size 1775.563x1596.867 at offset (79.898,
          // 479.039), but those describe the mask in its ORIGINAL uncropped
          // space — the exported PNG already has that crop baked in (its 0.800
          // aspect doesn't even match the 1.112 those numbers imply). Applying
          // them a second time pushes every line outside the element and the
          // layer renders empty. Stretching the export across the element is
          // what actually reproduces the design.
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskPosition: "0 0",
          WebkitMaskPosition: "0 0",
        }}
      />

      {/* smaller swirl, right of centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 opacity-20"
        style={{
          left: `calc(83.33% - ${u(32.62)})`,
          top: u(114.75),
          width: u(503),
          height: u(447),
          backgroundColor: "rgba(255,255,255,0.7)",
          maskImage: "url('/industries/hero-wave-sm.webp')",
          WebkitMaskImage: "url('/industries/hero-wave-sm.webp')",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: `${u(601)} ${u(603)}`,
          WebkitMaskSize: `${u(601)} ${u(603)}`,
          maskPosition: `${u(-50)} ${u(-68)}`,
          WebkitMaskPosition: `${u(-50)} ${u(-68)}`,
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 text-center lg:px-[clamp(24px,4.167vw,60px)]">
        <h1
          data-reveal
          className="font-manrope text-[32px] font-medium uppercase leading-[42px] lg:max-w-[867px] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(3rem,5.139vw,4.625rem)]"
        >
          <span className="text-white">Industries </span>
          <span className="text-[#0085f2]">We Service</span>
        </h1>

        <p
          data-reveal
          style={{ transitionDelay: "90ms" }}
          className="mt-6 font-inter text-[16px] font-normal leading-[26px] text-white lg:mt-[30px] lg:max-w-[865px] lg:text-[clamp(1.125rem,1.944vw,1.75rem)] lg:leading-[1.35]"
        >
          We partner with organisations across a diverse range of industries,
          helping founders and leadership teams unlock growth, improve
          operational performance, and create long-term value.
        </p>
      </div>
    </section>
  );
}
