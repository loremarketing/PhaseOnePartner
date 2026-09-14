import Link from "next/link";

import NavbarV4 from "@/components/layout/navbar-v4";
import AnimatedButton from "@/components/ui/animated-button";
import { buildMetadata } from "@/lib/seo/metadata";

/**
 * 404s previously fell through to Next's built-in page — unbranded, no header,
 * no footer, and no way back into the site. A dead end on a marketing site
 * leaks every visitor who lands on a stale or mistyped URL.
 *
 * noindex because Next serves this body with a 404 status on any unmatched
 * path; without it, a crawler that renders one soft-404 could index the shell.
 *
 * Built only from components already in use (the gradient hero from the legal
 * pages, `AnimatedButton` from the thank-you page) so it introduces no new
 * design language.
 */
export const metadata = buildMetadata({
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist or has moved. Head back to the PhaseOne Partners homepage.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen bg-background">
      <NavbarV4 />

      <section className="relative bg-gradient-to-b from-[#0224e9] to-[#011483] min-h-[300px] lg:min-h-[400px] pt-[165px] lg:pt-[200px] pb-12 lg:pb-16">
        <div className="px-4 sm:px-6 lg:px-16 relative z-10 max-w-7xl mx-auto w-full text-center">
          <h1 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[74px] text-white uppercase mb-4 lg:mb-6">
            Page Not Found
          </h1>
          <p className="font-inter text-[16px] lg:text-[18px] leading-[26px] text-white/85 max-w-[640px] mx-auto">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-fit mx-auto">
            <AnimatedButton text="Back to Home" className="mx-auto" href="/" />
          </div>

          <p className="mt-10 font-inter text-[16px] leading-[26px] text-[#333333]">
            Or head straight to{" "}
            <Link href="/for-founders" className="text-[#0224e9] underline">
              For Business Owners
            </Link>
            ,{" "}
            <Link href="/for-investors" className="text-[#0224e9] underline">
              For Capital Partners
            </Link>
            , or{" "}
            <Link href="/contact" className="text-[#0224e9] underline">
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
