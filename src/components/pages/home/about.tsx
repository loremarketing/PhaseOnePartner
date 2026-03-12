"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="pb-10 lg:pb-32 pt-12 max-w-[1400px] mx-auto px-6 lg:px-16 w-full space-y-[6vw]">
      <h3 className="text-center font-inter tracking-wide text-pretty font-bold text-[20px] md:text-3xl lg:text-[40px] lg:tracking-tight lg:leading-[150%] leading-[160%] ">
        <span className="text-primary">Independent by design.</span> <span className="text-primary">Aligned by intent.</span> We are not brokers chasing fees. We are <span className="text-primary">strategic partners</span> connecting <span className="text-primary">founders</span> and <span className="text-primary">capital partners</span> through <span className="text-primary">fit</span>, <span className="text-primary">clarity,</span> and <span className="text-primary">long term value</span>.
      </h3>
    </div>
  );
}
