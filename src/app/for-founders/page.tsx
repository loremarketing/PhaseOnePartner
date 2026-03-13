"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedButton from "@/components/ui/animated-button";
import FAQSectionFounders from "@/components/pages/founder/faq-section-founders";
import { ImagePreloader } from "@/components/ui/image-preloader";
import { LazyBackgroundImage } from "@/components/ui/lazy-background-image";

export default function ForFounders() {
  const advantages = [
    {
      title: "Direct access to capital partners",
      description:
        "We connect you straight to vetted private equity funds and strategic buyers already investing in your industry. No broad auctions, no wasted time.",
      imageUrl: "/icons/database.svg", // Placeholder for icon
    },
    {
      title: "Fast, clean process",
      description:
        "Pre-qualified capital partners mean fewer distractions, no wasted presentations, and more time spent on serious opportunities.",
      imageUrl: "/icons/fast.svg", // Placeholder for icon
    },
    {
      title: "Confidential and targeted access",
      description:
        "Your reputation matters. We approach select aligned capital partners who want to speak with you directly, keeping the process discreet.",
      imageUrl: "/icons/target.svg", // Placeholder for icon
    },
    {
      title: "Aligned incentives",
      description:
        "We are paid by capital partners, not by pushing deals. Our goal is finding the right long-term match for your business.",
      imageUrl: "/icons/money.svg", // Placeholder for icon
    },
    {
      title: "Protecting your legacy",
      description:
        "We help match you with capital partners who share your vision and will look after your employees, customers, and the culture you've built.",
      imageUrl: "/icons/protection.svg", // Placeholder for icon
    },
    {
      title: "Relationships, not transactions",
      description:
        "We prioritise early, genuine conversations so you can assess cultural fit and alignment before formal discussions begin.",
      imageUrl: "/icons/relationship.svg", // Placeholder for icon
    },
  ];

  const phases = [
    {
      number: "01.",
      title: "Initial exploration and planning",
      description:
        "We meet to discuss your goals, review financials, and understand your business. Confidentiality agreements protect your information from the start.",
      duration: "2–4 weeks",
    },
    {
      number: "02.",
      title: "Early capital partner engagement",
      description:
        "We introduce you to carefully selected capital partners who have expressed genuine interest in your industry and business model. These are pre-qualified opportunities.",
      duration: "3–6 weeks",
    },
    {
      number: "03.",
      title: "Indicative offers/LOIs",
      description:
        "Investors provide an initial offer, subject to due diligence, for you to evaluate these proposals, comparing terms, valuation, and strategic fit for your business.",
      duration: "2–3 weeks",
    },
    {
      number: "04.",
      title: "Due diligence",
      description:
        "The investor will conduct thorough due diligence on the business, which encompases the commericial, financial, tax and legal aspects of your operations.",
      duration: "8–12 weeks",
    },
    {
      number: "05.",
      title: "Final negotiation and signing",
      description:
        "Once agreed, legal documents are prepared and the transaction is finalised with proper documentation.",
      duration: "3–5 weeks",
    },
    {
      number: "06.",
      title: "Completion and transition",
      description:
        "The deal closes and ownership transitions. We support the handover process, ensuring a smooth transition for your team, customers, and operations.",
      duration: "2–4 weeks and ongoing handover",
    },
  ];

  // Preload critical hero images
  const heroImages = [
    "/bg/partners-for-growth-hero-bg.png",
    "/foreman-or-worker-work-at-factory.jpg",
    "/founder-optimized-images/skilled-mechanic-working-on-large-truck-repair-2025-10-08-10-22-08-utc_11zon.webp",
    "/car-technician-check-engines-choose-quality-gear-2026-01-07-02-19-59-utc (1).jpg",
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <ImagePreloader images={heroImages} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0224e9] to-[#011483] min-h-[478px] lg:min-h-[976px] pt-[165px] lg:pt-[266.7px] overflow-hidden">
        {/* Wavy Background Image, centered and full size */}
        <Image
          src="/invester/founderpage-wave.png"
          alt="Hero Section Background Wave"
          fill
          priority
          className="absolute rotate-260 scale-180 mt-10 ml-10 object-contain object-center z-0
         opacity-40"
          style={{ zIndex: 0 }}
        />

        {/* Hero Content */}
        <div className="px-4 sm:px-6 lg:px-16 relative z-10 max-w-7xl mx-auto w-full text-center">
          <h1 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[74px] text-white uppercase mb-2 lg:mb-4">
            Partners FOR <span className="text-[#0085F2]">GROWTH</span>
          </h1>
          <p className="font-inter text-[16px] lg:text-[28px] text-white mb-4 lg:mb-8 max-w-[400px] lg:max-w-none mx-auto">
            Helping entrepreneurs achieve their vision.
          </p>
          <div className="w-fit mx-auto">
            <AnimatedButton
              text="Book a discovery session today "
              variant="inverse"
              href="/contact"
            />
          </div>
        </div>

        {/* Image Gallery - Grid Layout */}
        <div className="relative z-10 max-w-[1600px] mx-auto w-full mt-12 lg:mt-8 overflow-x-visible">
          <div className="flex gap-2 lg:gap-6 w-full justify-between px-4 lg:px-16">
            {/* 1st column  */}
            <div className="flex flex-col gap-2 lg:gap-6 w-[30%]">
              <LazyBackgroundImage
                src="/foreman-or-worker-work-at-factory.jpg"
                className="w-full h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="eager"
              />
              <LazyBackgroundImage
                src="/founder-optimized-images/grape-harvest-2025-02-21-17-07-43-utc_11zon.webp"
                className="w-full h-[72px] md:h-[236px] md:rounded-t-[12px] rounded-t-[6px]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="lazy"
              />
            </div>

            {/* 2nd column  */}
            <div className="flex flex-col items-center justify-end w-[40%]">
              <LazyBackgroundImage
                src="/founder-optimized-images/skilled-mechanic-working-on-large-truck-repair-2025-10-08-10-22-08-utc_11zon.webp"
                className="w-full h-[80%] md:rounded-t-[12px] rounded-t-[6px]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="eager"
              />
            </div>

            {/* 3rd column  */}
            <div className="flex flex-col gap-2 lg:gap-6 w-[30%]">
              <LazyBackgroundImage
                src="/car-technician-check-engines-choose-quality-gear-2026-01-07-02-19-59-utc (1).jpg"
                className="w-full h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="lazy"
              />
              <LazyBackgroundImage
                src="/founder-optimized-images/senior-male-warehouse-worker-or-a-supervisor-unloa-2025-10-09-08-16-48-utc_11zon.webp"
                className="w-full h-[72px] md:h-[236px] md:rounded-t-[12px] rounded-t-[6px]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="lazy"
              />
            </div>

            {/* absolute position left right images */}
            <div className="absolute top-1/2 -translate-y-1/2 md:left-[-270px] left-[-295px]">
              <LazyBackgroundImage
                src="/founder-optimized-images/technician-installing-air-conditioning-unit-at-res-2025-03-16-03-53-07-utc_11zon.webp"
                className="w-[300px] h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="lazy"
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 md:right-[-270px] right-[-295px]">
              <LazyBackgroundImage
                src="/images/colleagues-on-business-meeting-in-conference-room-2025-12-01-08-09-07-utc.jpg"
                className="w-[300px] h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-0 lg:py-24 mt-12 lg:mt-20 px-[15px] lg:px-[70px] bg-background">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 lg:space-y-[60px] text-center lg:text-left">
            <div className="space-y-5 lg:space-y-[40px]">
              <div className="space-y-4 lg:space-y-[30px]">
                <p className="font-manrope text-[#0224e9] text-[14px] lg:text-[16px] uppercase tracking-wide leading-[14px]">
                  What we do
                </p>
                <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-black">
                  We guide you through{" "}
                  <span className="text-[#0224e9]">
                    every phase of the process.
                  </span>
                </h2>
                <p className="font-inter font-medium text-[16px] lg:text-[28px] text-black leading-[26px] lg:leading-[36px] max-w-[399px] lg:max-w-[618px] mx-auto lg:mx-0">
                  Exiting a business can feel overwhelming, but you don't need
                  to go through it alone.
                </p>
              </div>
              <p className="font-inter text-[14px] lg:text-[18px] text-black leading-[24px] lg:leading-[28px] max-w-[389px] lg:max-w-none mx-auto lg:mx-0">
                With PhaseOne Partners, we manage the complexity at every stage,
                so you can stay focused on driving your business forward.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start pt-4">
              <AnimatedButton
                text="Learn how we help"
                href="#phases-of-deal"
                variant="primary"
              />
            </div>
          </div>
          <div className="relative z-10 h-[431px] lg:h-full w-full rounded-[12px] overflow-hidden">
            <Image
              src="/about/about-updated-images/founder-updated-images/investor-updated-images/woman-training-coach.webp"
              alt="Training Coach Woman"
              width={504}
              height={543}
              className="w-full h-full object-cover"
            />
          </div>
          {/* right side absolute position image */}
          <div className="absolute md:-top-32 -right-36 bottom-0 md:bottom-auto z-0">
            <Image
              src="/bg/partners-for-growth-2nd-section-bg.png"
              alt="Partners for Growth Hero Image"
              width={504}
              height={543}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="relative py-12 lg:py-20 px-[15px] lg:px-[70px] bg-[#f0f0f0] border-t border-b border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-16 space-y-5 lg:space-y-[40px]">
            <div className="space-y-4 lg:space-y-2">
              <p className="font-manrope text-[#0224e9] text-[14px] lg:text-[16px] uppercase tracking-wide">
                Benefits
              </p>
              <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-black">
                Our key <span className="text-[#0224e9]">advantages</span>
              </h2>
            </div>
          </div>

          {/* Mobile: Benefits Card */}
          <div className="max-w-4xl mx-auto lg:hidden">
            <div className="bg-background z-10 flex flex-col p-8 border-2 border-[#0224e9] rounded-[32px] font-manrope shadow-lg">
              <div className="mb-6">
                <ul className="space-y-4 text-foreground">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex items-start gap-4 w-full">
                        <div className="w-[35px] h-[35px] rounded flex-shrink-0 mt-1">
                          <Image
                            src={advantage.imageUrl}
                            alt={advantage.title}
                            width={35}
                            height={35}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-manrope font-semibold text-[16px] text-black mb-2">
                            {advantage.title}
                          </h4>
                          <p className="font-inter text-[14px] text-[#333333] leading-[24px]">
                            {advantage.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => {
              const isFirstRow = index < 3;
              const isSecondRow = index >= 3;
              const isFirstColumn = index % 3 === 0;
              const isThirdColumn = (index + 1) % 3 === 0;
              // const isSecondColumn = index % 3 === 1; // Unused

              // Determine which borders to show
              const borderTop = isFirstRow ? "none" : "1px solid #0000000D";
              const borderBottom = isSecondRow ? "none" : "1px solid #0000000D";
              const borderLeft = isFirstColumn ? "none" : "1px solid #0000000D";
              const borderRight = isThirdColumn
                ? "none"
                : "1px solid #0000000D";

              return (
                <div
                  key={index}
                  className="p-8 flex flex-col space-y-4"
                  style={{
                    borderTop,
                    borderBottom,
                    borderLeft,
                    borderRight,
                  }}
                >
                  <div className="w-[60px] h-[60px] flex-shrink-0">
                    <Image
                      src={advantage.imageUrl}
                      alt={advantage.title}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-manrope font-semibold text-[20px] text-black">
                    {advantage.title}
                  </h4>
                  <p className="font-inter text-[16px] text-[#333333] leading-[26px]">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE PHASES OF DOING A DEAL Section */}
      <section
        id="phases-of-deal"
        className="py-12 lg:py-20 px-[15px] lg:px-[70px] bg-white flex flex-col items-center justify-center"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="space-y-10 lg:space-y-[60px] flex flex-col justify-center h-full text-center lg:text-left">
            <div className="space-y-5 lg:space-y-[30px]">
              <p className="font-manrope text-[#0224e9] text-[14px] uppercase tracking-wide">
                THE PHASES OF DOING A DEAL
              </p>
              <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-black">
                From the first call to beyond the signed{" "}
                <span className="text-[#0224e9]">agreement</span>
              </h2>
              <p className="font-inter text-[14px] lg:text-[18px] text-black leading-[24px] lg:leading-[28px]">
                There are 6 simple phases of finding the right growth or
                succession partner.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start pt-4">
              <AnimatedButton
                text="Get started today"
                href="/contact"
                variant="primary"
              />
            </div>
          </div>

          {/* Phases Accordion */}
          <div className="w-full px-4 lg:px-0">
            <Accordion type="single" collapsible className="w-full z-10">
              {phases.map((phase, index) => (
                <AccordionItem
                  key={index}
                  value={`phase-${index}`}
                  className="border-b border-[#333333]/20"
                >
                  <AccordionTrigger className="hover:no-underline py-4 lg:py-6 cursor-pointer">
                    <div className="flex flex-col items-start w-full pr-4">
                      <div className="flex items-center gap-3 lg:gap-4 flex-1">
                        <h3 className="font-inter font-medium text-[16px] lg:text-[28px] text-[#333333] leading-[40.8px] text-left">
                          <span className="font-inter font-bold text-[#0224e9]">
                            {phase.number}
                          </span>{" "}
                          {phase.title}
                        </h3>
                      </div>
                      {phase.duration && (
                        <p className="font-manrope font-semibold text-[#0224e9] text-[12px] leading-[12px] whitespace-nowrap mt-[4px] lg:mt-[8px]">
                          {phase.duration}
                        </p>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-inter text-[14px] lg:text-[18px] text-[rgba(51,51,51,0.8)] leading-[22px] lg:leading-[28px] pb-4 lg:pb-6 mt-[-6px] text-left">
                    {phase.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSectionFounders />

      {/* A 15 minute conversation CTA Section */}
      <section className="relative py-12 lg:py-20 px-4 lg:px-16">
        <div className="max-w-[400px] lg:max-w-[1300px] mx-auto bg-gradient-to-b from-[#0224e9] to-[#011483] rounded-[9.846px] lg:rounded-[32px] p-8 lg:p-20 text-center relative overflow-hidden min-h-[351px] lg:min-h-[567px] flex items-center justify-center">
          {/* Background decorative elements */}
          <div className="absolute -left-20 lg:left-0 -bottom-8 lg:bottom-0">
            <Image
              src="/bg/partners-for-growth-get-started-desktop.png"
              alt="Partners for Growth A 15 minute conversation Background"
              width={584}
              height={730}
              className="w-fit h-[200px] lg:h-[280px] object-cover opacity-80 lg:opacity-100"
            />
          </div>
          <div className="absolute -right-8 -top-8 lg:right-0 lg:top-0">
            <Image
              src="/bg/partners-for-growth-get-started-2-desktop.png"
              alt="Partners for Growth A 15 minute conversation Background"
              width={584}
              height={730}
              className="w-fit h-[200px] lg:h-[300px] object-cover opacity-80 lg:opacity-100"
            />
          </div>

          <div className="relative z-10 space-y-4 lg:space-y-6">
            <p className="font-manrope text-white text-[10px] lg:text-[16px] uppercase tracking-wide">
              Next Step
            </p>
            <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-white">
              A 15 minute conversation
            </h2>
            <p className="font-inter text-[16px] lg:text-[18px] text-white leading-[26px] lg:leading-[28px] max-w-[359px] lg:max-w-[636px] mx-auto">
              We'll outline the signals we're seeing from aligned investors and
              help you understand whether there's real conviction behind your
              sector. You'll have immediate clarity on next steps.
            </p>
            <div className="flex justify-center pt-4">
              <AnimatedButton
                text="Get started today"
                href="/contact"
                variant="inverse"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
