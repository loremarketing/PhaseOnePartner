"use client";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const sectionData = [
  {
    title: " Business Owners",
    subtitle: "A Smarter Way to Exit Your Business",
    description:
      "We don't just list your company and hope the right buyer comes along. We work with you to position the opportunity, find aligned capital partners, and manage the process all the way through.",
    features: [
      "Direct access to trusted capital partners",
      "End to end support",
      "Strategic preparation to frame your business correctly",
      "Respect for your timeline, privacy, and exit goals",
    ],
    buttonText: "Learn About Our Process",
  },
  {
    title: "Capital Partners",
    subtitle: "High-Quality Deals, Curated to Your MANDATE",
    description:
      "We bring you deals that are aligned with your mandate. Each one is pre-qualified, and ready to progress.",
    features: [
      "Targeted introductions based on sector, strategy, and scale",
      "Pre‑vetted opportunities with clearly aligned next steps",
      "Tailor made and purpose built materials, never generic IMs",
    ],
    buttonText: "View Our Approach",
  },
];

export default function InvestorFounder() {
  const mobileTagRef = useRef<HTMLImageElement>(null);
  const mobileHighlightRef = useRef<HTMLParagraphElement>(null);

  // Scroll animations for mobile only
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const mobileTag = mobileTagRef.current;
    const mobileHighlight = mobileHighlightRef.current;

    if (!mobileTag || !mobileHighlight) return;

    // Animate tag and text together
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mobileHighlight,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate tag on scroll
    tl.fromTo(
      mobileTag,
      {
        scale: 0.5,
        opacity: 0,
        y: -20,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );

    // Animate highlight text
    tl.fromTo(
      mobileHighlight,
      {
        opacity: 0,
        y: 10,
        backgroundColor: "transparent",
      },
      {
        opacity: 1,
        y: 0,
        backgroundColor: "#c0c8f9",
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4" // Start slightly before tag animation ends
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full pt-24 lg:pt-32 pb-12 bg-white z-20 rounded-t-4xl -mt-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center font-manrope">
          <div className="mb-8">
            <p className="tracking-wider text-primary font-light mb-4">
              PhaseOne Partners
            </p>
            {/* Desktop */}
            <div className="hidden xl:block">
              <h4 className="text-3xl lg:text-4xl xl:text-[62px] max-w-4xl mx-auto font-extrabold text-[#333333]">
                What does deal
              </h4>
              <div className="relative inline-flex items-start gap-3 text-3xl lg:text-4xl xl:text-[62px] font-extrabold text-[#333333]">
                <p>origination</p>
                <div className="relative inline-flex items-start">
                  <p className="bg-[#c0c8f9] rounded-l-lg px-2">mean for you</p>
                  <Image
                    src="/flag.svg"
                    alt="arrow-right"
                    width={400}
                    height={400}
                    className="absolute bottom-0 -right-[68px] w-[72px]"
                    style={{ minWidth: "auto" }}
                    priority
                    quality={100}
                  />
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="xl:hidden space-y-1.5">
              <h4 className="text-3xl max-w-4xl mx-auto font-extrabold text-[#333333] leading-[120%]">
                What does deal origination
              </h4>
              <div className="relative mt-1 flex gap-3 w-fit text-3xl max-w-4xl mx-auto font-extrabold text-[#333333]">
                <p
                  ref={mobileHighlightRef}
                  className="bg-[#c0c8f9] rounded-l-lg pl-2 pr-1 leading-[120%]"
                >
                  mean for you
                </p>
                <Image
                  ref={mobileTagRef}
                  src="/flag.svg"
                  alt="PhaseOne tag"
                  width={400}
                  height={400}
                  className="absolute bottom-0 -right-[35px] w-[37px]"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>

          <p className="text-xl lg:text-[25px] text-[#333333] font-poppins max-w-6xl mx-auto leading-relaxed text-pretty">
            PhaseOne Partners connects high-quality businesses with aligned
            capital providers and strategic acquirers.
          </p>
        </div>

        {/* Center align on mobile, left on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative pt-16">
          {sectionData.map((section, index) => (
            <div
              key={index}
              className={`
                bg-background z-10 flex flex-col p-10 lg:p-12 border-2 border-primary rounded-4xl font-manrope
                items-center text-center
                lg:items-start lg:text-left
              `}
            >
              <div className="z-10 w-full">
                <div className="mb-6">
                  <h2 className="text-3xl lg:text-[34px] font-extrabold text-primary mb-2">
                    For {section.title}
                  </h2>
                  <p className="text-lg text-black uppercase font-semibold tracking-wide">
                    {section.subtitle}
                  </p>
                </div>

                <div className="mb-8 flex-grow">
                  <p className="text-foreground leading-relaxed mb-6 text-lg font-manrope font-medium">
                    {section.description}
                  </p>

                  <ul
                    className={`space-y-3 text-foreground ${
                      index === 0 ? "" : "lg:pt-12"
                    } flex flex-col items-center text-center lg:items-start lg:text-left`}
                  >
                    {section.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex text-xl lg:font-extrabold font-semibold items-start"
                      >
                        <span className="mr-3 text-2xl">•</span>
                        <span className="text-[#333333]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button
                className="py-6  w-full lg:w-fit mx-auto px-12 rounded-full text-background border-border transition-all duration-200 mt-auto text-lg font-medium font-lato"
                asChild
              >
                <Link href={index === 0 ? "/for-founders" : "/for-investors"}>
                  {section.buttonText}
                </Link>
              </Button>
            </div>
          ))}
          <div className="absolute -top-16 -left-12 w-full h-full z-0">
            <Image
              src="/2nd-section-bg.png"
              alt="bg"
              width={1000}
              height={1000}
              className="object-cover opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
