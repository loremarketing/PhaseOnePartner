"use client";
import AnimatedButton from "@/components/ui/animated-button";
import Image from "next/image";

export default function ThankYouPage() {
  return (
    <section className="w-full h-full pt-28 pb-32 max-w-[1800px] mx-auto px-6 lg:px-16 lg:min-h-screen [@media(min-width:1600px)]:min-h-auto relative z-10 bg-[#f0f0f0] lg:flex lg:items-center lg:justify-center">
      <div className="flex flex-col justify-center text-foreground gap-3 font-manrope text-center mx-auto max-w-full">
        <div className="flex justify-center mb-6 z-10">
          <Image
            src="/logo.black.webp"
            alt="PhaseOne Logo"
            width={800}
            height={300}
            className="w-full max-w-[300px] md:max-w-[500px] h-auto object-contain"
            priority
          />
        </div>
        <div className="space-y-6 lg:mt-12 mt-6 z-10">
          <p className="text-3xl lg:text-[36px] font-bold font-manrope lg:leading-[100%]">
            Thank You!
          </p>
          <p className="text-xl lg:text-[29.57px]">
            Your submission has been received. We'll be in touch shortly.
          </p>
        </div>
        <div className="lg:mt-12 mt-6 w-fit mx-auto">
          <AnimatedButton
            text="Back to Home"
            className="mx-auto"
            href="/"
          />
        </div>
      </div>
    </section>
  );
}
