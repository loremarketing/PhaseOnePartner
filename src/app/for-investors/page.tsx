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
import FAQSectioninvestors from "@/components/pages/investor/faq-section-investors";
import { ImagePreloader } from "@/components/ui/image-preloader";
import { LazyBackgroundImage } from "@/components/ui/lazy-background-image";

export default function Forinvestors() {
  const advantages = [
    {
      title: "Proprietary deal flow",
      description:
        "Access to off-market and founder-led opportunities that aren't showing up in traditional auctions or brokered processes.",
      imageUrl: "/icons/database.svg",
    },
    {
      title: "Faster pipeline build",
      description:
        "A dedicated origination engine that can ramp up quickly, filling your funnel in weeks rather than the 12–18 months it can take to build in-house.",
      imageUrl: "/icons/fast.svg",
    },
    {
      title: "Sharper sector coverage",
      description:
        "Deep industry insight allowing you to identify, prioritise, and pursue the right industries, subsectors, and niches with precision.",
      imageUrl: "/icons/target.svg",
    },
    {
      title: "Trusted founder engagement",
      description:
        "Experienced outreach that builds trust with business owners, creating authentic entry points and more time to understand their goals.",
      imageUrl: "/icons/money.svg",
    },
    {
      title: "Scalable, flexible resourcing",
      description:
        "Dial origination activity up or down based on fund cycles and portfolio demands, without the fixed cost of a permanent team.",
      imageUrl: "/icons/protection.svg",
    },
    {
      title: "Better use of investment team time",
      description:
        "By outsourcing the top of the funnel, your capital partners stay focused on diligence, execution, and value creation.",
      imageUrl: "/icons/relationship.svg",
    },
  ];

  const phases = [
    {
      number: "01.",
      title: "Mandate and calibration",
      description:
        "Conversations start with deep industry research and alignment with yOur key objectives. From there, we build a target map, and identify key next steps.",
      duration: "1–2 weeks",
    },
    {
      number: "02.",
      title: "Market outreach",
      description:
        "We introduce you to carefully selected capital partners who have expressed genuine interest in your industry and business model. These are pre-qualified opportunities, not cold calls.",
      duration: "3–6 weeks",
    },
    {
      number: "03.",
      title: "First conversations",
      description:
        "Interested capital partners provide initial offers and letters of intent. We help you evaluate these proposals, comparing terms, valuation, and strategic fit for your business.",
      duration: "2–3 weeks",
    },
    {
      number: "04.",
      title: "Diligence on live targets",
      description:
        "Selected capital partners conduct thorough due diligence. We coordinate the process, ensuring all necessary documentation is prepared and questions are answered efficiently.",
      duration: "8–12 weeks",
    },
    {
      number: "05.",
      title: "Terms and execution",
      description:
        "We facilitate final negotiations on terms, valuation, and deal structure. Once agreed, legal documents are prepared and the transaction is finalised with proper documentation.",
      duration: "3–5 weeks",
    },
    {
      number: "06.",
      title: " Post completion support",
      description:
        "The deal closes and ownership transitions. We support the handover process, ensuring a smooth transition for your team, customers, and operations.",
      duration: "2–4 weeks, then as needed",
    },
  ];

  // Preload critical hero images
  const heroImages = [
    "/bg/investers-1st-section-bg.png",
    "/Mask group (2).png",
    "/images/colleagues-on-business-meeting-in-conference-room-2025-12-01-08-09-07-utc.jpg",
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <ImagePreloader images={heroImages} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0224e9] to-[#011483] min-h-[478px] lg:min-h-[976px] pt-[165px] lg:pt-[200.7px]">
        {/* Background decorative elements Image */}
        <div className="absolute bottom-0 w-full max-w-[800px] right-0 overflow-hidden pointer-events-none hidden lg:block">
          <Image
            src="/bg/investers-1st-section-bg.png"
            alt="Partners for Growth Hero Background"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            priority
            fetchPriority="high"
            quality={85}
          />
        </div>
        {/* Mask group decorative element */}
        <div className="absolute top-50 -right-50 bottom-0 overflow-visible pointer-events-none z-0">
          <Image
            src="/Mask group (2).png"
            alt="Mask group"
            width={1000}
            height={1000}
            className="h-full w-auto object-contain opacity-100"
            priority
            fetchPriority="high"
            quality={85}
          />
        </div>

        {/* Hero Content */}
        <div className="px-4 sm:px-6 lg:px-16 relative z-10 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
          <h1 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[74px] text-white uppercase mb-2 lg:mb-4">
            Leading Investors <br />{" "}
            <span
              className=""
              style={{
                textDecorationThickness: "1.5px",
              }}
            >
              Don’t Wait
            </span>{" "}
            for Deals.
          </h1>
          <p className="font-inter text-[16px] lg:text-[28px] text-white mb-4 lg:mb-8 max-w-[400px] lg:max-w-3xl mx-auto">
            PhaseOne Partners connects you with high quality, off-market
            businesses in the niches and industries that meet your mandate.
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
                src="/investor-optimized-images/warehouse-worker-driver-in-uniform-delivery-and-lo-2024-11-29-23-36-18-utc_11zon.webp"
                className="w-full h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="eager"
              />
              <LazyBackgroundImage
                src="/investor-optimized-images/technician-and-engineer-working-on-a-windmill-turb-2025-09-22-12-07-12-utc_11zon.webp"
                className="w-full h-[72px] md:h-[236px] md:rounded-t-[12px] rounded-t-[6px]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="lazy"
              />
            </div>

            {/* 2nd column  */}
            <div className="flex flex-col item-center justify-end w-[40%]">
              <LazyBackgroundImage
                src="/images/colleagues-on-business-meeting-in-conference-room-2025-12-01-08-09-07-utc.jpg"
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
                src="/investor-optimized-images/anonymous-male-factory-workers-working-in-industri-2025-01-09-06-04-48-utc_11zon.webp"
                className="w-full h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="lazy"
              />
              <LazyBackgroundImage
                src="/investor-optimized-images/two-caucasian-professional-technician-or-engineer-2025-03-07-05-05-38-utc_11zon.webp"
                className="w-full h-[72px] md:h-[236px] md:rounded-t-[12px] rounded-t-[6px]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="lazy"
              />
            </div>

            {/* absolute poition left right images */}
            <div className="absolute top-1/2 -translate-y-1/2 md:left-[-270px] left-[-295px]">
              <LazyBackgroundImage
                src="/investor-optimized-images/group-of-diverse-businesspeople-standing-in-meetin-2025-03-26-13-30-41-utc_11zon.webp"
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
                src="/investor-optimized-images/metal-sheet.webp"
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
      <section className="relative py-12 lg:py-24 mt-4 lg:mt-8 px-[15px] lg:px-[70px] bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 lg:space-y-[60px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="space-y-5 lg:space-y-[40px]">
              <div className="space-y-4 lg:space-y-[30px]">
                <p className="font-manrope text-[#0224e9] text-[14px] lg:text-[16px] uppercase tracking-wide leading-[14px]">
                  What we do
                </p>
                <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-black">
                  We connect you with{" "}
                  <span className="text-[#0224e9]">opportunities</span> that
                  meet your mandate.
                </h2>
                <p className="font-inter font-medium text-[16px] lg:text-[28px] text-black leading-[26px] lg:leading-[36px] max-w-[399px] lg:max-w-[618px] mx-auto lg:mx-0">
                  Most capital partners wait for opportunities to come to
                  market. PhaseOne Partners focuses on building relationships
                  early, uncovering founder led businesses before a sale is even
                  on the table.
                </p>
              </div>
              <p className="font-inter text-[14px] lg:text-[18px] text-black leading-[24px] lg:leading-[28px] max-w-[389px] lg:max-w-none mx-auto lg:mx-0">
                We provide access to high quality, off market opportunities that
                align with your mandate and investment horizon. Every
                introduction is handled with discretion, structure, and a focus
                on long term value.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start w-full">
              <Button
                className="bg-[#0224e9] text-white hover:bg-[#0224e9]/90 rounded-full px-[22px] py-[10px] h-[44px] lg:h-[48px] text-[12px] lg:text-[18px] font-manrope font-medium"
                asChild
              >
                <Link href="#phases-of-deal">Learn how we help</Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-[12px] z-10 h-[431px] lg:h-full w-full flex flex-col justify-center overflow-hidden">
            <Image
              src="/about/about-updated-images/founder-updated-images/investor-updated-images/businesspeople-discussing-strategy-on-couch.webp"
              alt="Businesspeople discussing strategy on couch"
              width={504}
              height={543}
              className="w-full h-full max-h-[620px] object-cover rounded-[12px]"
            />
          </div>
          {/* rihgt side absolute position image */}
          <div className="absolute md:top-22 bottom-0 -right-0 md:bottom-auto z-0">
            <Image
              src="/bg/investers-2nd-section-bg.png"
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
        <div className="bg-[#f0f0f0] z-30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 lg:mb-16 space-y-5 lg:space-y-[40px]">
              <div className="space-y-4 lg:space-y-2">
                <p className="font-manrope text-[#0224e9] text-[14px] lg:text-[16px] uppercase tracking-wide">
                  Benefits
                </p>
                <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-black">
                  What you get with
                  <br />
                  <span className="text-[#0224e9]">PhaseOne Partners</span>
                </h2>
              </div>
            </div>

            {/* Mobile: Benefits Card */}
            <div className="max-w-4xl mx-auto lg:hidden">
              <div className="bg-background z-10 flex flex-col p-8 border-2 border-[#0224e9] rounded-[32px] font-manrope shadow-lg">
                <div className="mb-6">
                  <ul className="space-y-4 text-foreground">
                    {advantages.map((advantage, index) => (
                      <li
                        key={index}
                        className="flex items-center text-left w-full"
                      >
                        <div className="flex items-center gap-4 w-full">
                          <div className="w-[35px] h-[35px] rounded flex-shrink-0 mt-1 flex items-center justify-center">
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

                // Determine which borders to show
                const borderTop = isFirstRow ? "none" : "1px solid #0000000D";
                const borderBottom = isSecondRow
                  ? "none"
                  : "1px solid #0000000D";
                const borderLeft = isFirstColumn
                  ? "none"
                  : "1px solid #0000000D";
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
        </div>
      </section>

      {/* THE PHASES OF DOING A DEAL Section */}
      <section
        id="phases-of-deal"
        className="relative py-12 lg:py-20 px-[15px] lg:px-[70px] bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-10 lg:space-y-[60px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="space-y-5 lg:space-y-[30px]">
              <p className="font-manrope text-[#0224e9] text-[14px] uppercase tracking-wide">
                THE PHASES OF DOING A DEAL
              </p>
              <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-black">
                From the first call to beyond the signed{" "}
                <span className="text-[#0224e9]">agreement</span>
              </h2>
              <p className="font-inter text-[14px] lg:text-[18px] text-black leading-[24px] lg:leading-[28px] mx-auto lg:mx-0">
                There are 6 simple phases of sourcing that we deliver on, with
                clarity and momentum.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start w-full">
              <Button
                className="bg-[#0224e9] text-white hover:bg-[#0224e9]/90 rounded-full px-[22px] py-[10px] h-[44px] lg:h-[48px] text-[12px] lg:text-[18px] font-manrope font-medium"
                asChild
              >
                <Link href="/contact"> Get started today</Link>
              </Button>
            </div>
          </div>

          {/* Phases Accordion */}
          <div className="relative flex flex-col items-center w-full">
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
                  <AccordionContent className="font-inter text-[14px] lg:text-[18px] text-[rgba(51,51,51,0.8)] leading-[22px] lg:leading-[28px] pb-4 lg:pb-6 mt-[-6px]">
                    {phase.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Left side decorative element */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-15vw] z-[0] pointer-events-none">
              <Image
                src="/bg-2.png"
                alt="Left side decorative element"
                width={584}
                height={730}
                className="w-fit h-[400px] object-cover"
              />
            </div>

            {/* Overlay image */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-5vw] z-1 pointer-events-none opacity-100">
              <Image
                src="/bg/partners-for-growth-3nd-section.png"
                alt="Partners for Growth A 15 minute conversation Background"
                width={1200}
                height={1200}
                className="w-fit h-[520px] object-cover opacity-100"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSectioninvestors />

      {/* Page Break Line */}
      <div className="w-full px-4 lg:px-16 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#0224e9] to-transparent opacity-50 blur-[1px]"></div>
        </div>
      </div>

      {/* A 15 minute conversation CTA Section */}
      <section className="relative py-12 lg:py-20 px-4 lg:px-16">
        <div className="max-w-[400px] lg:max-w-[1300px] mx-auto bg-gradient-to-b from-[#0224e9] to-[#011483] rounded-[9.846px] lg:rounded-[32px] p-8 lg:p-20 text-center relative overflow-hidden min-h-[351px] lg:min-h-[567px] flex items-center justify-center">
          {/* Background decorative elements */}
          <div className="absolute -left-8 -bottom-8 lg:left-0 lg:bottom-0">
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

          <div className="relative z-10 space-y-4 lg:space-y-6 flex flex-col items-center justify-center w-full">
            <p className="font-manrope text-white text-[10px] lg:text-[16px] uppercase tracking-wide">
              Next Step
            </p>
            <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-white">
              <span className="block">A 15 minute</span>
              <span className="block">conversation</span>
            </h2>
            <p className="font-inter text-[16px] lg:text-[18px] text-white leading-[26px] lg:leading-[28px] max-w-[359px] lg:max-w-[741px] mx-auto">
              See what PhaseOne Partners can unlock for your next investment.
              We'll align with your mandate and priorities, setting the
              foundation for a tailored origination pipeline.
            </p>
            <div className="flex justify-center w-full">
              <Button
                className="bg-white text-[#0224e9] hover:bg-[#0224e9] hover:text-white transition-colors rounded-full px-[22px] py-[10px] h-[44px] lg:h-[48px] text-[12px] lg:text-[18px] font-manrope font-medium w-full max-w-xs"
                asChild
              >
                <Link href="/contact"> Get started today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
