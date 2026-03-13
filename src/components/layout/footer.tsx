"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message: "Stay in the loop" }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };
  return (
    <footer className="bg-[#F9F9F9] py-8 sm:py-12 lg:pt-24 mb-6 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* FollowPhaseOne PartnersSection */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-start">
            <div className="text-[16px] sm:text-[12px] font-extrabold mb-2 flex gap-4 items-center">
              <p>Follow PhaseOne Partners</p>
              {/* Desktop: Facebook and LinkedIn only */}
              <div className="hidden lg:flex gap-2 items-center">
                <Link
                  href="https://www.facebook.com/61581009058267/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logo/facebook.svg"
                    alt="facebook"
                    width={13}
                    height={13}
                    className="w-4 h-4 sm:w-[13px] sm:h-[13px]"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/phaseone-partners/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logo/linkedin.svg"
                    alt="linkedin"
                    width={13}
                    height={13}
                    className="w-4 h-4 sm:w-[13px] sm:h-[13px]"
                  />
                </Link>
              </div>
            </div>
            <h3 className="text-[28px] sm:text-[24px] lg:text-[28px] font-inter font-bold text-primary mb-4">
              Stay in the loop
            </h3>
            <form onSubmit={handleSubmit} className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 sm:px-4 py-2 text-[16px] border rounded-l-lg focus:outline-none flex-1 min-w-0"
              />
              <button type="submit" className="cursor-pointer bg-primary rounded-r-lg px-4 py-3 flex items-center justify-center">
                <Image
                  src="/icons/right-long-arrow.svg"
                  alt="right arrow"
                  width={50}
                  height={50}
                  className="w-fit h-4"
                />
              </button>
            </form>
            {status === "success" && (
              <p className="text-green-500 mt-2">Thanks for subscribing!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 w-full lg:w-auto justify-items-center lg:justify-items-start">
            {/* PhaseOne Partnerss */}
            <div className="text-center lg:text-left">
              <h4 className="font-extrabold text-[16px] sm:text-[18px] lg:text-[28px] mb-4 sm:mb-6 lg:mb-8">
                PhaseOne Partnerss
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    href="/for-founders"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    For Business Owners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-investors"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    For Capital Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div className="text-center lg:text-left lg:pl-[36px]">
              <h4 className="font-extrabold text-[16px] sm:text-[18px] lg:text-[28px] mb-4 sm:mb-6 lg:mb-8">
                Explore
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    href="/about-us"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    About PhaseOne Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="text-center lg:text-left lg:pl-[30px]">
              <h4 className="font-extrabold text-[16px] sm:text-[18px] lg:text-[28px] mb-4 sm:mb-6 lg:mb-8">
                Legal
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get in touch */}
            <div className="text-center lg:text-left">
              <h4 className="font-extrabold text-[16px] sm:text-[18px] lg:text-[28px] mb-4 sm:mb-6 lg:mb-8">
                Get in touch
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <a
                    href="tel:+61416825603"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Call PhaseOne Partners
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@phaseonepartners.com.au"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Email PhaseOne Partners
                  </a>
                </li>
              </ul>
              {/* Mobile: Social media icons under EmailPhaseOne Partners*/}
              <div className="flex gap-2 items-center justify-center lg:hidden mt-4">
                <Link
                  href="https://www.facebook.com/61581009058267/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logo/facebook.svg"
                    alt="facebook"
                    width={13}
                    height={13}
                    className="w-4 h-4 sm:w-[13px] sm:h-[13px]"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/phaseone-partners/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logo/linkedin.svg"
                    alt="linkedin"
                    width={13}
                    height={13}
                    className="w-4 h-4 sm:w-[13px] sm:h-[13px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mb-8 sm:mb-12 text-center lg:text-left">
          <p className="italic text-sm sm:text-base font-inter leading-relaxed">
            PhaseOne Partners provides origination and introduction services
            only. We work exclusively with wholesale capital partners, such as private
            equity funds, and our role is limited to facilitating connections
            with businesses. We do not provide financial product advice, recommendations, or deal
            structuring services. All investment assessments and decisions are
            made independently by the fund, or manager.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-between items-center pt-4 gap-2 sm:gap-0">
          <div className="text-[14px] sm:text-[16px] font-inter font-medium text-center lg:text-left">
            © 2026 PhaseOne Partners. All Rights Reserved
          </div>
          <div className="text-[12px] sm:text-[16px] font-inter font-medium text-center">
            Website Designed and Built by{" "}
            <Link
              href="https://loremarketing.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              LORE Marketing Agency
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
