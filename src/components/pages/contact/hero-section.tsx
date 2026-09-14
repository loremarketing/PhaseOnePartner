"use client";

import Image from "next/image";
import AnimatedButton from "@/components/ui/animated-button";

export default function ContactHeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0224e9] to-[#011483] min-h-[478px] lg:min-h-[600px] pt-[165px] lg:pt-[266.7px] pb-16 lg:pb-24">
        {/* Background decorative elements Image */}
        <div className="absolute top-50 -right-50 bottom-0 overflow-visible pointer-events-none z-0">
          <Image
            src="/images/About-us-images/Mask group.svg"
            alt=""
            width={1000}
            height={1000}
            className="h-full w-auto object-contain opacity-100"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="px-4 sm:px-6 lg:px-16 relative z-10 max-w-7xl mx-auto w-full text-center">
          <h1 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[74px] uppercase text-white mb-2 lg:mb-4">
            Contact PhaseOne Partners
          </h1>
          <p className="font-inter text-[16px] lg:text-[28px] text-white mb-4 lg:mb-8 max-w-[600px] lg:max-w-[800px] mx-auto">
            Get in touch with our team. We're here to help connect you with the right opportunities.
          </p>
        </div>
      </section>
    </div>
  );
}

