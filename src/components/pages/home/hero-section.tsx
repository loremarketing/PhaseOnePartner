"use client";
import AnimatedButton from "@/components/ui/animated-button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-full pt-28 lg:pt-40 pb-32 lg:pb-36 max-w-[1800px] mx-auto px-6 lg:px-16 lg:min-h-screen [@media(min-width:1600px)]:min-h-auto relative z-10 bg-[#f0f0f0]">
      <div className="absolute bottom-0 inset-x-0 lg:inset-x-auto lg:right-0 lg:w-[80vw] w-full h-full max-h-[100vh] z-0">
        <div className="w-full h-full relative">
          <Image
            src="/hero-bg-chroped-2.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
            className="w-fit absolute bottom-0 h-full max-h-[1000px] lg:max-h-[800px] right-0"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center text-foreground gap-3 font-manrope text-center mx-auto max-w-full">
        <div className="flex justify-center mb-6 z-10">
          <Image
            src="/logo.black.png"
            alt="PhaseOne Logo"
            width={800}
            height={300}
            className="w-full max-w-[300px] md:max-w-[500px] h-auto object-contain"
            priority
          />
        </div>
        <div className="space-y-6 lg:mt-12 mt-6 z-10">
          <p className="text-3xl lg:text-[36px] font-bold font-manrope lg:leading-[100%]">
            The new era of{" "}
            <span
              className="underline"
              style={{
                textDecorationColor: "oklch(42.69% 0.24 269.16)", // matches --primary
                textUnderlineOffset: "4px",
                textDecorationThickness: "4px",
              }}
            >
              deal origination
            </span>{" "}
            starts here.
          </p>
          {/* <p className="text-xl  lg:text-[29.57px] ">
            We connect only the right businesses with the right capital partners
          </p> */}
        </div>
        <div className="lg:mt-12 mt-6 w-fit mx-auto">
          <AnimatedButton
            text="Book a discovery session today"
            className="mx-auto"
            href="/contact"
          />
        </div>
      </div>
    </section>
  );
}
