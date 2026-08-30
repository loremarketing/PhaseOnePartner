import CtaButton from "@/components/pages/home-v4/cta-button";
import CtaWaves from "@/components/pages/home-v4/cta-waves";

/**
 * Figma 1555:4452 / 1583:2824 — 1320x613 card, radius 32, linear gradient
 * #0224e9 → #8394f4, with the wave-line artwork in the top-right and
 * bottom-left corners (see CtaWaves).
 *
 * pageCta={false}: this sits inside the page, and the navbar's floating CTA
 * already ducks for the same ask — see cta-button.tsx.
 */
export default function ExpertiseCta() {
  return (
    <section className="bg-white pb-16 lg:pb-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-[clamp(24px,4.167vw,60px)]">
        <div
          className="relative isolate flex items-center overflow-hidden rounded-[24px] px-4 py-16 text-center lg:min-h-[613px] lg:rounded-[32px] lg:px-16 lg:py-20"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #0224e9 0%, #8394f4 100%)",
          }}
        >
          <CtaWaves />

          <div className="relative z-10 flex w-full flex-col items-center">
            <h2
              data-reveal
              className="font-manrope text-[28px] font-medium leading-[36px] text-white lg:max-w-[737px] lg:text-[clamp(2.25rem,4.444vw,4rem)] lg:leading-[clamp(2.625rem,4.861vw,4.375rem)]"
            >
              Looking for industry specific expertise?
            </h2>
            <p
              data-reveal
              style={{ transitionDelay: "90ms" }}
              className="mt-5 font-inter text-[16px] font-medium leading-[26px] text-white lg:mt-10 lg:max-w-[835px] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]"
            >
              We work with organizations across a wide range of sectors,
              delivering tailored strategies designed to support growth,
              operational efficiency, and long-term success.
            </p>
            <div data-reveal style={{ transitionDelay: "180ms" }}>
              <CtaButton
                href="/contact"
                pageCta={false}
                className="mt-9 h-[50px] lg:mt-[60px] lg:w-[266px]"
              >
                Speak with our team
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
