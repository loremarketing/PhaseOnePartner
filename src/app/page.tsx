import HomeVideo from "@/components/pages/home/video";
import About from "@/components/pages/home/about";
import HeroSection from "@/components/pages/home/hero-section";
import Team from "@/components/pages/home/team";
import InvestorFounder from "@/components/pages/home/investor-founder";
import BlogSection from "@/components/pages/home/blog-section";
import { Spotlight } from "@/components/ui/spotlight-new";
import NavbarV4 from "@/components/layout/navbar-v4";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo/metadata";

// The homepage title carries the brand itself rather than having it appended,
// so it opts out of the "<page> | PhaseOne Partners" pattern the other routes use.
export const metadata = buildMetadata({
  title: "Deal Origination for Private Capital",
  description:
    "Proprietary, off-market deal origination across Australia and New Zealand, connecting founder-led businesses with the right capital partners.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <NavbarV4 />
      <HeroSection />
      <InvestorFounder />
      <HomeVideo />
      <Image
        src="/divider.webp"
        alt=""
        width={1000}
        height={1000}
        className="max-w-[1200px] mx-auto px-4 md:px-0 w-full h-full object-cover object-center"
      />
      <Team />
      <Image
        src="/divider.webp"
        alt=""
        width={1000}
        height={1000}
        className="max-w-[1200px] mx-auto px-4 md:px-0 w-full h-full object-cover object-center"
      />
      {/* <BlogSection /> */}
      <About />
    </>
  );
}
