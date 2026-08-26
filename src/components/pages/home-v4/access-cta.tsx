import CtaButton from "./cta-button";

export default function AccessCta() {
  return (
    <section className="bg-white pb-16 lg:pb-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-[clamp(24px,4.167vw,60px)]">
        {/* Figma 1555:434 — 1320x613, rounded-[32px], artwork background */}
        <div
          data-reveal
          className="relative flex items-center overflow-hidden rounded-[32px] bg-[#0224e9] bg-cover bg-center px-4 py-16 text-center lg:min-h-[613px] lg:px-16 lg:py-20"
          style={{ backgroundImage: "url('/home-v4/cta-access-bg.webp')" }}
        >
          <div className="flex w-full flex-col items-center">
            <p className="font-manrope text-[14px] font-normal uppercase text-white lg:text-[16px]">
              Next Step
            </p>
            <h2 className="mt-5 font-manrope text-[32px] font-medium leading-[42px] text-white lg:max-w-[737px] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(2.875rem,4.861vw,4.375rem)]">
              Access opportunities before the market does.
            </h2>
            <p className="mt-6 font-inter text-[16px] font-medium leading-[26px] text-white lg:max-w-[582px] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
              Partner with Australia&apos;s specialist buy-side origination team,
              powered by an origination engine built to scale your deal flow.
            </p>
            <CtaButton
              href="/contact"
              className="mt-9 h-[50px] lg:w-[266px]"
            >
              Book a discovery session
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
