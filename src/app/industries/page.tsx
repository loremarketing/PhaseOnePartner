import NavbarV4 from "@/components/layout/navbar-v4";
import ScrollReveal from "@/components/pages/home-v4/scroll-reveal";
import ExploreSectors from "@/components/pages/home-v4/explore-sectors";
import Hero from "@/components/pages/industries/hero";
import IndustrySection from "@/components/pages/industries/industry-section";
import ExpertiseCta from "@/components/pages/industries/expertise-cta";
import { INDUSTRIES } from "@/components/pages/industries/industries-data";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Industries We Service",
  description:
    "We partner with organisations across a diverse range of industries, helping founders and leadership teams unlock growth, improve operational performance, and create long-term value.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      {/* No <noscript> reveal override needed — see the note in /home-v4. */}
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
