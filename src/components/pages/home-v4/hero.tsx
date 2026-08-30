import CtaButton from "./cta-button";
import WaveLines from "./wave-lines";

/**
 * Figma 1555:351 (1440x940). The desktop block is laid out in normal flow rather
 * than absolutely positioned so it reflows on sub-1440 laptops; the vertical
 * rhythm below reproduces the Figma offsets (eyebrow 295 / h1 339 / body 491 /
 * buttons 592) and scales proportionally under 1440.
 */
export default function Hero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden "
      style={{
        backgroundImage:
          "linear-gradient(180.81deg, rgb(2,36,233) 1.06%, rgb(255,255,255) 98.96%)",
      }}
    >
      {/* white ribbon — Figma 1555:354: white @ 20%, masked, x -81 / y 188 / 2010.6 x 680.6 */}
      <WaveLines
        className="bg-white/20"
        style={{
          left: "-5.625%",
          top: "20%",
          width: "139.63%",
          height: "72.4%",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-10 pt-36 lg:px-[clamp(24px,4.167vw,60px)] lg:pb-[clamp(80px,20.7vw,208px)] lg:pt-[clamp(180px,20.486vw,295px)]">
        <p
          data-reveal
          className="font-manrope text-[14px] font-normal uppercase leading-[22px] text-white lg:text-[16px]"
        >
          Deal origination for private capital · Australia &amp; New Zealand
        </p>

        <h1
          data-reveal
          style={{ transitionDelay: "90ms" }}
          className="mt-5 font-manrope text-[32px] font-bold uppercase leading-[42px] text-white sm:text-[40px] lg:mt-[22px] lg:max-w-[903px] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(3rem,5.139vw,4.625rem)]">
          Proprietary deal flow, before the market sees it.
        </h1>

        <p
          data-reveal
          style={{ transitionDelay: "180ms" }}
          className="mt-6 font-inter text-[16px] font-normal leading-[26px] text-white lg:mt-1 lg:max-w-[843px] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
          Embedded within your investment team. We source proprietary off-market
          opportunities through dedicated buy-side origination, with direct
          founder access across your target sectors.
        </p>

        {/* pageCta={false}: the navbar's pill finishes morphing into its floating
            CTA while the hero is still on screen. Letting these two duck it away
            would hide that button at the exact moment the transform lands. */}
        <div
          data-reveal
          style={{ transitionDelay: "270ms" }}
          className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-[45px]"
        >
          <CtaButton href="/contact" className="lg:w-[264px]" pageCta={false}>
            Book a discovery session
          </CtaButton>
          <CtaButton
            href="#our-process"
            variant="secondary"
            className="lg:w-[189px]"
            pageCta={false}
          >
            Our process
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
