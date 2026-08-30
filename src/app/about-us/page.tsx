import AboutUsHeroSection from "@/components/pages/about-us/hero-section";
import MissionSection from "@/components/pages/about-us/mission-section";
import WhatWeDoSection from "@/components/pages/about-us/what-we-do-section";
import OpportunitySection from "@/components/pages/about-us/opportunity-section";
import OurDifferenceSection from "@/components/pages/about-us/our-difference-section";
import MissionGoalsSection from "@/components/pages/about-us/mission-goals-section";
import CtaSection from "@/components/pages/about-us/cta-section";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative w-full overflow-hidden">
      <AboutUsHeroSection />
      <MissionSection />
      <WhatWeDoSection />
      <OpportunitySection />
      <Image
        src="/divider.webp"
        alt="Section divider"
        width={1000}
        height={1000}
        className="max-w-[1200px] mx-auto px-4 md:px-0 w-full h-full object-cover object-center"
      />
      <OurDifferenceSection />
      <Image
        src="/divider.webp"
        alt="Section divider"
        width={1000}
        height={1000}
        className="max-w-[1200px] mx-auto px-4 md:px-0 w-full h-full object-cover object-center"
      />
      <MissionGoalsSection />
      <CtaSection />
    </div>
  );
}
