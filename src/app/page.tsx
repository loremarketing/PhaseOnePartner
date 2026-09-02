import HomeVideo from "@/components/pages/home/video";
import About from "@/components/pages/home/about";
import HeroSection from "@/components/pages/home/hero-section";
import Team from "@/components/pages/home/team";
import InvestorFounder from "@/components/pages/home/investor-founder";
import { WhoWeAre } from "@/components/pages/home/who-we-are";
import BlogSection from "@/components/pages/home/blog-section";
import { Spotlight } from "@/components/ui/spotlight-new";
import NavbarV4 from "@/components/layout/navbar-v4";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavbarV4 />
      <HeroSection />
      <InvestorFounder />
      <HomeVideo />
      <Image
        src="/divider.webp"
        alt="Who we are"
        width={1000}
        height={1000}
        className="max-w-[1200px] mx-auto px-4 md:px-0 w-full h-full object-cover object-center"
      />
      <div className="hidden">
        <WhoWeAre />
      </div>
      <Team />
      <Image
        src="/divider.webp"
        alt="Who we are"
        width={1000}
        height={1000}
        className="max-w-[1200px] mx-auto px-4 md:px-0 w-full h-full object-cover object-center"
      />
      {/* <BlogSection /> */}
      <About />
    </>
  );
}
