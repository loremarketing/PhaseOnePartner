import type { Metadata } from "next";
import NavbarV4 from "@/components/layout/navbar-v4";
import ScrollReveal from "@/components/pages/home-v4/scroll-reveal";
import ExploreSectors from "@/components/pages/home-v4/explore-sectors";
import Hero from "@/components/pages/industries/hero";
import IndustrySection from "@/components/pages/industries/industry-section";
import ExpertiseCta from "@/components/pages/industries/expertise-cta";
import { INDUSTRIES } from "@/components/pages/industries/industries-data";

export const metadata: Metadata = {
  title: "Industries We Service — PhaseOne Partners",
  description:
    "We partner with organisations across a diverse range of industries, helping founders and leadership teams unlock growth, improve operational performance, and create long-term value.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* reveals start hidden, so guarantee the content is readable if the
          script never runs — see /home-v4 for the same failsafe */}
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
      {/* the component carries no top padding — on the home page it follows a
          section that already supplies the gap. Here it butts straight up
          against the hero band, so the gap has to come from the caller. */}
      <ExploreSectors
        lead="Explore sectors"
        accent="we work with"
        className="pt-16 lg:pt-14"
      />
      {INDUSTRIES.map((industry, i) => (
        <IndustrySection key={industry.slug} industry={industry} index={i} />
      ))}
      <ExpertiseCta />
    </>
  );
}
