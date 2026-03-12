import AnimatedButton from "@/components/ui/animated-button";
import Image from "next/image";

const Team = () => {
  const comparisonData = [
    {
      feature: "Direct access to capital partners",
      phaseOne:
        "Direct introductions to a small set of aligned, serious PE funds",
      traditional:
        "Broad auction to the highest bidder, often prioritising price over fit",
    },
    {
      feature: "Confidentiality",
      phaseOne:
        "Discreet, targeted outreach that protects your reputation and staff",
      traditional:
        "Widely marketed process with little control over who sees your information",
    },
    {
      feature: "Control of process",
      phaseOne: "Founder-led pace - you choose when and with whom to engage",
      traditional:
        "Broker-driven timelines designed to maximise speed and fees",
    },
    {
      feature: "Legacy and culture",
      phaseOne:
        "Focus on finding capital partners who respect your people and vision",
      traditional: "Legacy and culture often secondary to transaction value",
    },
    {
      feature: "Relationship building",
      phaseOne: "Early, trust-based conversations before formal negotiations",
      traditional:
        "Transaction-first approach with limited personal connection",
    },
    {
      feature: "Process efficiency",
      phaseOne:
        "Pre-qualified capital partners mean fewer wasted conversations",
      traditional:
        "Many exploratory calls with capital partners who may not be a fit",
    },
    {
      feature: "Incentives",
      phaseOne:
        "Paid for by the capital partners - no success fees, no pressure to transact",
      traditional:
        "Success fees drive pressure to close, even if not the best fit",
    },
  ];

  return (
    <section className="py-10 md:py-36 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            PhaseOne Partners works with Business Owners and Capital Partners
          </h2>
          <p className="text-xl md:text-[26px] max-w-4xl mx-auto">
            A side by side comparison of how we work differently to traditional
            brokers and in house sourcing teams.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-4xl lg:py-16 py-6 border-3 border-primary overflow-hidden shadow-lg bg-background">
          {/* Table Header */}
          <div className="grid grid-cols-3">
            <div className="p-4 md:p-6">
              {/* Empty header for first column */}
            </div>
            <div className="py-2 px-4 text-lg font-semibold rounded-t-3xl bg-primary flex items-center justify-center">
              <Image
                src="/logo.webp"
                alt="PhaseOne Partners"
                width={800}
                height={800}
                className="w-auto h-10 lg:h-12 object-contain max-w-full"
                quality={100}
              />
            </div>
            <div className="p-4 lg:text-[29px] text-[13px] lg:leading-[130%] leading-[120%] font-bold  text-center">
              Traditional Brokers or Advisors
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white">
            {comparisonData.map((row, index) => {
              const isOddRow = (index + 1) % 2 === 1;
              const rowBgColor = isOddRow ? "#dadffb" : "#EFF0FD";

              return (
                <div
                  key={index}
                  className="grid grid-cols-3"
                  style={{ backgroundColor: rowBgColor }}
                >
                  {/* Feature Name */}
                  <div className="p-4 md:px-6 py-4 md:py-6 lg:text-[20px] text-[13.5px] flex items-center font-medium text-black leading-[130%] break-words min-w-0 pr-2 md:pr-6">
                    {row.feature}
                  </div>

                  {/* PhaseOne Partners */}
                  <div className="p-4 md:px-6 py-4 md:py-6 lg:text-[20px] text-[15px] font-medium text-[#0224E9] leading-[130%] border-x-3 z-10 border-primary">
                    {/* Show icon on mobile, text on desktop */}
                    <div className="md:hidden flex items-center justify-center">
                      <Image
                        src="/icons/correct.svg"
                        alt="PhaseOne feature"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="hidden md:block">{row.phaseOne}</div>
                  </div>

                  {/* Traditional Brokers/Advisors */}
                  <div className="p-4 md:px-6 py-4 md:py-6 lg:text-[20px] text-[15px] font-medium text-black leading-[130%]">
                    {/* Show icon on mobile, text on desktop */}
                    <div className="md:hidden flex items-center justify-center">
                      <Image
                        src="/icons/cross.svg"
                        alt="Traditional brokers feature"
                        width={12}
                        height={14}
                        className="w-3 h-4"
                      />
                    </div>
                    <div className="hidden md:block">{row.traditional}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-3">
            <div className="p-4 md:p-6">
              {/* Empty header for first column */}
            </div>
            <div className="p-4 text-lg font-semibold rounded-b-3xl bg-primary flex items-center justify-center"></div>
            <div className="p-4 md:p-6">
              {/* Empty header for first column */}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 flex flex-col justify-center w-fit mx-auto items-center text-center">
          <h3 className="text-3xl md:text-[60px] font-extrabold text-primary mb-2">
            Next steps
          </h3>
          <p className="text-xl lg:text-[26px] font-medium mb-6">
            It all starts with one simple call.
          </p>
          <AnimatedButton
            text="Schedule Discovery Call"
            defaultBgColor="bg-primary"
            href="/contact"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
