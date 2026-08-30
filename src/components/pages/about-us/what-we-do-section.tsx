import Image from "next/image";
import { Briefcase, BarChart2, FileText, Layers } from "lucide-react";

export default function WhatWeDoSection() {
  const services = [
    {
      title: "Deal origination",
      description:
        "Sourcing and qualifying high-potential on- and off-market opportunities.",
      icon: Briefcase,
    },
    {
      title: "Industry and niche research",
      description:
        "In-depth market mapping and analysis where value is emerging.",
      icon: BarChart2,
    },
    {
      title: "Transaction support",
      description:
        "Managing stakeholder engagement and deal progression with diligence, discretion, and expertise.",
      icon: FileText,
    },
    {
      title: "Buy and build",
      description:
        "Enhancing platform strategies through add-on sourcing, integration planning, and ongoing support.",
      icon: Layers,
    },
  ];

  return (
    <section className="relative py-12 lg:py-20 px-[15px] lg:px-[70px] bg-[#F0F0F0] border-t border-b border-[#0224E9]">
      <Image
        src="/2nd-section-bg.webp"
        alt=""
        width={1000}
        height={1000}
        className="opacity w-full h-full object-coatin pointer-events-none absolute top-0 scale-150 bottom-0 right-0 left-0 flex justify-center z-[-1] select-none"
        priority
      />
      <div className=" bg-[#F0F0F0] z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[400px]">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-5 lg:space-y-6 h-full text-center lg:text-left">
            <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px]">
              <span className="text-foreground">What</span>{" "}
              <span className="text-[#0224e9]">we do</span>
            </h2>
            <p className="font-inter text-[14px] lg:text-[18px] text-foreground/80 leading-[24px] lg:leading-[28px]">
              We design origination programs that extend reach and sharpen focus
              for capital partners, while guiding founders through every stage of
              engagement.
            </p>
          </div>

          {/* Right Column - Services List */}
          <div className="space-y-0">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index}>
                  <div className="py-6 lg:py-8">
                    <div className="flex items-start gap-4">
                      <IconComponent className="text-[#0224e9] pt-2 w-8 h-8 lg:w-6 lg:h-6 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-manrope font-bold text-[18px] lg:text-[24px] text-foreground mb-2 lg:mb-3">
                          {service.title}
                        </h3>
                        <p className="font-inter text-[14px] lg:text-[16px] text-foreground/70 leading-[22px] lg:leading-[24px]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < services.length - 1 && (
                    <div className="border-t #33333333 opacity-200"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
