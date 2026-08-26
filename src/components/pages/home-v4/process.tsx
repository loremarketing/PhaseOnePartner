import CtaButton from "./cta-button";
import WaveLines from "./wave-lines";

const STEPS = [
  {
    title: "Mandate & area qualification",
    body: "Align to your thesis and qualify the target areas.",
    owner: "PhaseOne leads",
  },
  {
    title: "Market screening",
    body: "Map the niche and screen the full addressable market.",
    owner: "PhaseOne leads",
  },
  {
    title: "Outreach & vendor engagement",
    body: "Engage owners directly and discreetly.",
    owner: "PhaseOne leads",
  },
  {
    title: "Information collection & introduction",
    body: "Qualify, gather data and make the introduction through to NBIO.",
    owner: "PhaseOne leads",
  },
  {
    title: "Diligence on target",
    body: "We support diligence on the targets you pursue.",
    owner: "You lead · we support",
  },
  {
    title: "Terms & execution",
    body: "Alongside you through structuring to signing.",
    owner: "You lead · we support",
  },
  {
    title: "Post completion & bolt-ons",
    body: "We re-engage to originate the next bolt-on, helping build out your platform.",
    owner: "PhaseOne · bolt-ons",
  },
];

export default function Process() {
  return (
    <section id="our-process" className="bg-white py-16 lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-[clamp(24px,4.167vw,60px)]">
        <p
          data-reveal
          className="font-manrope text-[14px] font-normal uppercase text-[#0224e9] lg:text-[16px]"
        >
          Our process
        </p>
        <h2
          data-reveal
          style={{ transitionDelay: "90ms" }}
          className="mt-4 font-manrope text-[32px] font-medium leading-[42px] text-[#333] lg:max-w-[937px] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(2.875rem,4.861vw,4.375rem)]">
          A white-label engine that plugs into your{" "}
          <span className="text-[#0224e9]">investment process.</span>
        </h2>
        <p
          data-reveal
          style={{ transitionDelay: "180ms" }}
          className="mt-6 font-inter text-[16px] font-normal leading-[26px] text-[#333] lg:max-w-[890px] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
          A clear, repeatable path from mandate to completion, and we stay on to
          originate the bolt-ons that build out your platform.
        </p>

        {/* rows — Figma 1555:733ff: bg #0224e9/5, rounded-[24px], h-140, 20px gap */}
        <ol className="mt-12 space-y-5">
          {STEPS.map((step) => {
            const isSupport = step.owner.startsWith("You lead");
            return (
              // mobile (Figma 1555:862): 115px card, badge pinned top-right,
              // title wrapping beside it. Desktop: single 140px row.
              <li
                key={step.title}
                data-reveal
                className="relative flex min-h-[115px] flex-col justify-center rounded-[12px] bg-[#0224e9]/5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 lg:min-h-[140px] lg:rounded-[24px] lg:px-10 lg:py-0"
              >
                <div className="sm:flex-1">
                  <h3 className="max-w-[180px] font-inter text-[18px] font-medium leading-[28px] text-[#333] sm:max-w-none lg:text-[clamp(1.375rem,1.944vw,1.75rem)] lg:leading-[clamp(2rem,2.833vw,2.55rem)]">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-inter text-[14px] font-normal leading-[24px] text-[#333]/80 lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
                    {step.body}
                  </p>
                </div>
                <span
                  className={`absolute right-5 top-5 inline-flex h-[26px] w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-[1000px] px-4 font-inter text-[12px] font-medium leading-[16px] text-[#333]/80 sm:static lg:text-[16px] lg:font-semibold ${
                    isSupport ? "bg-[#f0f0f0]" : "bg-[#0224e9]/10"
                  }`}
                >
                  {step.owner}
                </span>
              </li>
            );
          })}
        </ol>

        {/* closing strip — Figma 1555:559: bg #0224e9/5, rounded-[24px], h-145, black heading */}
        <div
          data-reveal
          className="relative isolate mt-5 overflow-hidden rounded-[12px] bg-[#0224e9]/5 lg:rounded-[24px]">
          <WaveLines
            className="bg-[#0224e9]/10"
            style={{
              left: "15%",
              top: "-62%",
              width: "103%",
              height: "389%",
              transform: "rotate(-9.18deg)",
            }}
          />
          <div className="relative flex flex-col gap-6 px-5 py-6 lg:min-h-[145px] lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-0">
            <h3 className="font-manrope text-[24px] font-medium leading-[34px] text-black lg:text-[clamp(1.75rem,2.778vw,2.5rem)] lg:leading-[clamp(2.125rem,3.264vw,2.9375rem)]">
              Accelerate your timeline
              <br className="hidden lg:block" /> to first deal with PhaseOne
              Partners
            </h3>
            <CtaButton
              href="/contact"
              className="h-[50px] w-full shrink-0 text-[18px] sm:w-auto lg:h-[60px] lg:w-[305px]"
            >
              Book a discovery session
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
