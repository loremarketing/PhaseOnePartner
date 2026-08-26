import CtaButton from "./cta-button";

export default function FounderCta() {
  return (
    // Figma 1555:342 — 1440x633 artwork band
    <section
      className="relative flex w-full items-center overflow-hidden bg-[#0224e9] bg-cover bg-center py-16 lg:min-h-[633px] lg:py-20"
      style={{ backgroundImage: "url('/home-v4/founder-band-bg.webp')" }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 lg:px-[clamp(24px,4.167vw,60px)]">
        <h2 className="font-manrope text-[32px] font-medium leading-[42px] text-white lg:max-w-[1050px] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(2.875rem,4.861vw,4.375rem)]">
          Are you a founder considering an exit, succession or growth capital?
        </h2>
        <div className="mt-8 space-y-5 font-inter text-[16px] font-normal leading-[26px] text-white lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
          <p className="lg:max-w-[960px]">
            We introduce businesses to carefully selected capital partners whose
            investment strategy aligns with your goals.
          </p>
          <p className="lg:max-w-[849px]">
            PhaseOne works on behalf of investors, but we&apos;ll only introduce
            you to capital partners whose mandate genuinely fits.
          </p>
          <p className="font-semibold">
            No broker fees. No obligation. Completely confidential.
          </p>
        </div>
        <CtaButton
          href="/for-founders"
          className="mt-9 h-[50px] w-fit lg:w-[266px]"
        >
          For business owners
        </CtaButton>
      </div>
    </section>
  );
}
