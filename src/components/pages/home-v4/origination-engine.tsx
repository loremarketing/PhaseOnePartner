import Image from "next/image";

const PILLARS = [
  {
    title: "Deal origination",
    body: "Generate proprietary deal flow through a structured engine built to identify and engage opportunities long before they enter a formal process.",
    points: [
      "Founder relationships built through consistent, direct outreach",
      "Dedicated sourcing infrastructure that scales with your mandate",
      "Opportunities qualified against your investment criteria before introduction",
    ],
  },
  {
    title: "Market mapping",
    body: "Research-driven market intelligence that uncovers the sectors, businesses and acquisition themes others simply don't see.",
    points: [
      "Deep sector research and niche market intelligence",
      "Market maps aligned to your acquisition strategy",
      "Theme identification and prioritised acquisition opportunities",
    ],
  },
  {
    title: "Founder relationships",
    body: "Build trusted founder relationships through a disciplined, long-term outreach programme that creates access unavailable through traditional sale processes.",
    points: [
      "Consistent founder outreach across priority sectors",
      "Long-term relationship development before transaction intent",
      "Qualified introductions backed by market intelligence",
    ],
  },
];

export default function OriginationEngine() {
  return (
    // Figma 1555:347 — bg #f0f0f0 with a 1px #0224e9 border
    <section className="border-y border-[#0224e9] bg-[#f0f0f0] py-16 lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-[clamp(24px,4.167vw,60px)]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,680fr)_minmax(0,538fr)] lg:gap-[7.727%]">
          {/* The intro pins while the taller pillar column scrolls past it.
              `self-start` is what makes this work: a grid item stretches to the
              full row height by default, leaving sticky nothing to travel in.
              It releases at the bottom of the grid, i.e. the end of the section. */}
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <p className="font-manrope text-[14px] font-normal uppercase text-[#0224e9] lg:text-[16px]">
              What we do
            </p>
            <h2 className="mt-4 font-manrope text-[32px] font-medium leading-[42px] text-[#333] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(2.875rem,4.861vw,4.375rem)]">
              The <span className="text-[#0224e9]">origination engine</span>{" "}
              behind sophisticated investment strategies.
            </h2>
            <p className="mt-7 font-inter text-[16px] font-normal leading-[26px] text-[#333] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
              Our origination engine gives your team the research capability,
              market intelligence and founder access to scale off-market deal
              flow, without building an internal origination function.
            </p>
          </div>

          <div>
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className={i > 0 ? "mt-10 border-t border-[#0224e9]/20 pt-10" : ""}
              >
                <h3 className="font-manrope text-[18px] font-medium leading-[18px] text-[#0224e9] lg:text-[clamp(1.375rem,1.944vw,1.75rem)] lg:leading-[clamp(1.625rem,2.222vw,2rem)]">
                  {p.title}
                </h3>
                <p className="mt-3 font-inter text-[14px] font-normal leading-[24px] text-[#333] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
                  {p.body}
                </p>
                <ul className="mt-6 space-y-5">
                  {p.points.map((point) => (
                    <li key={point} className="flex gap-4">
                      <Image
                        src="/home-v4/check.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="mt-[6px] size-[24px] shrink-0"
                      />
                      <span className="font-inter text-[14px] font-normal leading-[24px] text-[#333] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
