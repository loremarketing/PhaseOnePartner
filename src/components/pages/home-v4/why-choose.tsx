import Image from "next/image";

const ROWS = [
  {
    label: "Proprietary deal flow",
    phaseOne:
      "Origination engine delivering exclusive off-market opportunities before formal processes begin.",
    traditional:
      "Heavily reliant on intermediated opportunities and competitive sale processes.",
  },
  {
    label: "Research capability",
    phaseOne:
      "Dedicated research capability providing continuous market intelligence, niche mapping and acquisition themes.",
    traditional:
      "Research capacity constrained by internal resources and competing priorities.",
  },
  {
    label: "Market coverage",
    phaseOne:
      "Continuous market mapping across fragmented sectors to uncover opportunities others overlook.",
    traditional:
      "Coverage typically limited to existing networks and active mandates.",
  },
  {
    label: "Founder access",
    phaseOne:
      "Long-term founder relationships developed through structured outreach and consistent engagement.",
    traditional:
      "Relationships are often built only once an opportunity is already in market.",
  },
  {
    label: "Competitive advantage",
    phaseOne:
      "Earlier access to opportunities through proprietary research, intelligence and founder relationships.",
    traditional:
      "Often competing alongside multiple buyers once processes are underway.",
  },
  {
    label: "Extension of your team",
    phaseOne:
      "Embedded as a dedicated origination partner working alongside your investment team.",
    traditional:
      "Internal teams balance origination alongside execution, portfolio management and transactions.",
  },
];

const body =
  "font-inter text-[16px] font-normal leading-[26px] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]";

export default function WhyChoose() {
  return (
    // Figma 1555:346 — bg #f0f0f0 with a 1px #0224e9 border
    <section className="border-y border-[#0224e9] bg-[#f0f0f0] py-16 lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-[clamp(24px,4.167vw,60px)]">
        <div className="text-center">
          <p className="font-manrope text-[14px] font-normal uppercase text-[#0224e9] lg:text-[16px]">
            The PhaseOne Partners difference
          </p>
          <h2 className="mx-auto mt-4 font-manrope text-[32px] font-medium leading-[42px] text-[#333] lg:max-w-[895px] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(2.875rem,4.861vw,4.375rem)]">
            Why investment firms choose{" "}
            <span className="text-[#0224e9]">PhaseOne Partners</span>
          </h2>
          <p className={`mx-auto mt-6 text-[#333] lg:max-w-[692px] ${body}`}>
            A comparison of how our origination engine complements internal
            investment teams and delivers access traditional deal sourcing
            cannot.
          </p>
        </div>

        {/* ---------- desktop ---------- */}
        <div className="mt-14 hidden lg:block">
          <div className="relative grid grid-cols-[minmax(0,1fr)_33.788%_minmax(0,1fr)]">
            {/* raised gradient card behind the middle column — Figma 1555:466 */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 top-0 w-[33.788%] -translate-x-1/2 rounded-[32px]"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #0224e9 2.885%, #788bf6 100%)",
              }}
            />

            {/* header */}
            <div className="flex items-center pb-8 pr-10">
              <span className="font-manrope text-[clamp(1.375rem,2.222vw,2rem)] font-bold leading-[1.1] text-[#333]">
                What matters
              </span>
            </div>
            <div className="relative z-10 flex items-center justify-center px-8 pb-8 pt-10">
              <Image
                src="/logo.webp"
                alt="PhaseOne Partners"
                width={214}
                height={50}
                className="h-[50px] w-auto brightness-0 invert"
              />
            </div>
            <div className="flex items-center pb-8 pl-10">
              <span className="font-manrope text-[clamp(1.375rem,2.222vw,2rem)] font-semibold leading-[1.1] text-[#333]">
                Traditional deal sourcing
              </span>
            </div>

            {ROWS.map((row, i) => (
              <div key={row.label} className="contents">
                <div
                  className={`flex min-h-[117px] items-center border-t border-[#333]/15 pr-10 ${
                    i === ROWS.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="font-manrope text-[clamp(1.125rem,1.667vw,1.5rem)] font-semibold leading-[1.1] text-[#333]">
                    {row.label}
                  </span>
                </div>

                <div
                  className={`relative z-10 flex min-h-[117px] items-center gap-4 px-8 ${
                    i > 0 ? "border-t border-white/25" : ""
                  }`}
                >
                  <Image
                    src="/home-v4/check-alt.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-[24px] shrink-0"
                  />
                  <p className={`text-white ${body}`}>{row.phaseOne}</p>
                </div>

                <div
                  className={`flex min-h-[117px] items-center gap-4 border-t border-[#333]/15 pl-10 ${
                    i === ROWS.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="flex size-[24px] shrink-0 items-center justify-center rounded-full bg-[#333]">
                    <Image src="/home-v4/cross.svg" alt="" width={11} height={11} className="size-[11px]" />
                  </span>
                  <p className={`text-[#333] ${body}`}>{row.traditional}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- mobile — Figma 1555:974ff: compact icon table ---------- */}
        <div className="relative mt-10 lg:hidden">
          {/* gradient column behind the middle track — Figma 1555:1140 (w-127) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 w-[127px] -translate-x-1/2 rounded-[12px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #0224e9 2.885%, #788bf6 100%)",
            }}
          />

          <div className="relative grid grid-cols-[minmax(0,1fr)_127px_minmax(0,1fr)] items-stretch">
            <div className="flex items-center pb-5 pr-3">
              <span className="font-manrope text-[18px] font-bold text-[#333]">
                What matters
              </span>
            </div>
            <div className="flex items-center justify-center pb-5 pt-4">
              <Image
                src="/logo.webp"
                alt="PhaseOne Partners"
                width={103}
                height={24}
                className="h-[24px] w-auto brightness-0 invert"
              />
            </div>
            <div className="flex items-center justify-center pb-5 pl-3">
              <span className="text-center font-manrope text-[14px] font-bold leading-[17px] text-[#333]">
                Traditional deal sourcing
              </span>
            </div>

            {ROWS.map((row, i) => (
              <div key={row.label} className="contents">
                <div
                  className={`flex min-h-[58px] items-center border-t border-[#333]/15 pr-3 ${
                    i === ROWS.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="font-manrope text-[14px] font-semibold leading-[24px] text-[#333]">
                    {row.label}
                  </span>
                </div>

                <div className="flex min-h-[58px] items-center justify-center">
                  <Image
                    src="/home-v4/check-alt.svg"
                    alt="Included"
                    width={24}
                    height={24}
                    className="size-[24px] shrink-0"
                  />
                </div>

                <div
                  className={`flex min-h-[58px] items-center justify-center border-t border-[#333]/15 pl-3 ${
                    i === ROWS.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="flex size-[24px] shrink-0 items-center justify-center rounded-full bg-[#333]">
                    <Image src="/home-v4/cross.svg" alt="Not included" width={11} height={11} className="size-[11px]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
