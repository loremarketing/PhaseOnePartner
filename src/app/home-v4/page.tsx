import type { Metadata } from "next";
import NavbarV4 from "@/components/pages/home-v4/navbar-v4";
import ScrollReveal from "@/components/pages/home-v4/scroll-reveal";
import Hero from "@/components/pages/home-v4/hero";
import WhoWeWorkWith from "@/components/pages/home-v4/who-we-work-with";
import OriginationEngine from "@/components/pages/home-v4/origination-engine";
import EmbeddedCapability from "@/components/pages/home-v4/embedded-capability";
import Process from "@/components/pages/home-v4/process";
import WhyChoose from "@/components/pages/home-v4/why-choose";
import WhyOriginationMatters from "@/components/pages/home-v4/why-origination-matters";
import AccessCta from "@/components/pages/home-v4/access-cta";
import ExploreSectors from "@/components/pages/home-v4/explore-sectors";
import FounderCta from "@/components/pages/home-v4/founder-cta";

export const metadata: Metadata = {
  title: "PhaseOne Partners — Proprietary deal flow, before the market sees it",
  description:
    "Embedded within your investment team. We source proprietary off-market opportunities through dedicated buy-side origination, with direct founder access across your target sectors.",
};

export default function HomeV4() {
  return (
    <>
      {/* reveals start hidden, so guarantee the content is readable if the
          script never runs — ScrollReveal covers the no-IntersectionObserver
          and reduced-motion cases, but not JS being disabled outright */}
      <noscript>
        {/* eslint-disable-next-line react/no-danger */}
        <style
          dangerouslySetInnerHTML={{
            __html: "[data-reveal]{opacity:1!important;transform:none!important}",
          }}
        />
      </noscript>
      <ScrollReveal />
      <NavbarV4 />
      <Hero />
      <WhoWeWorkWith />
      <OriginationEngine />
      <EmbeddedCapability />
      <Process />
      <WhyChoose />
      <WhyOriginationMatters />
      <AccessCta />
      <ExploreSectors />
      <FounderCta />
    </>
  );
}
