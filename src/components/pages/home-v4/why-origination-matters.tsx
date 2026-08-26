const STATS = [
  {
    value: "73,179",
    suffix: null,
    color: "#0224e9",
    weight: "font-bold",
    body: "mid-market companies operate in Australia, creating a deep but fragmented opportunity set.",
  },
  {
    value: "90%",
    suffix: "*",
    color: "#011483",
    weight: "font-semibold",
    body: "of business sales close off-market, without a public process, the best opportunities are found, not listed.",
  },
  {
    value: "$139B",
    suffix: null,
    color: "#3d70ff",
    weight: "font-semibold",
    body: "in private capital is managed across Australia, increasing competition for high-quality assets.",
  },
];

export default function WhyOriginationMatters() {
  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-[clamp(24px,4.167vw,60px)]">
        <p
          data-reveal
          className="font-manrope text-[14px] font-normal uppercase text-[#0224e9] lg:text-[16px]"
        >
          Why origination matters
        </p>
        <h2
          data-reveal
          style={{ transitionDelay: "90ms" }}
          className="mt-4 font-manrope text-[32px] font-medium leading-[42px] text-[#333] lg:max-w-[736px] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(2.875rem,4.861vw,4.375rem)]">
          Why origination matters in{" "}
          <span className="text-[#0224e9]">private markets</span>
        </h2>
        <p
          data-reveal
          style={{ transitionDelay: "180ms" }}
          className="mt-6 font-inter text-[16px] font-normal leading-[26px] text-[#333] lg:max-w-[776px] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
          In competitive markets, the best opportunities are rarely found through
          formal sale processes. Sophisticated capital partners invest in
          origination to access businesses earlier, build relationships before
          transaction intent, and reduce reliance on crowded auctions.
        </p>

        {/* Figma 1555:423-426 — bg #f0f0f0, h-282, rounded top only, 10px accent bar */}
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {STATS.map((s, i) => (
            <div
              key={s.value}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="flex flex-col"
            >
              <div className="flex flex-1 flex-col rounded-t-[12px] bg-[#f0f0f0] p-8 lg:min-h-[272px] lg:rounded-t-[32px] lg:px-10">
                <p
                  className={`font-manrope text-[60px] leading-[60px] lg:text-[clamp(3.5rem,5.556vw,5rem)] ${s.weight}`}
                  style={{ color: s.color }}
                >
                  {s.value}
                  {s.suffix && (
                    <span className="align-super text-[38px] lg:text-[50px]">
                      {s.suffix}
                    </span>
                  )}
                </p>
                <p className="mt-6 font-inter text-[14px] font-normal leading-[24px] text-[#333] lg:mt-10 lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
                  {s.body}
                </p>
              </div>
              <div
                className="h-[10px] w-full"
                style={{ backgroundColor: s.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
