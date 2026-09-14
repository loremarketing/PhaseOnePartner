import NavbarV4 from "@/components/layout/navbar-v4";
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
import { buildMetadata } from "@/lib/seo/metadata";

/**
 * noindex while this lives alongside the current homepage.
 *
 * The two pages target the same intent, so leaving both indexable splits their
 * ranking signals. It is deliberately still reachable so the page can be
 * previewed — the 301 to `/` is staged (commented) in next.config.ts and goes
 * live the day v4 replaces the homepage. If you remove the noindex, also add
 * this route back to `src/app/sitemap.ts`.
 */
export const metadata = buildMetadata({
  title: "Proprietary deal flow, before the market sees it",
  description:
    "Embedded within your investment team. We source proprietary off-market opportunities through dedicated buy-side origination, with direct founder access across your target sectors.",
  path: "/home-v4",
  noIndex: true,
});

export default function HomeV4() {
  return (
    <>
      {/* The <noscript> style that used to sit here is no longer needed: the
          reveal rules in globals.css are now scoped to `html.js-reveal`, a
          class only added when JavaScript runs, so anything without JS gets the
          finished state by default rather than needing an override. */}
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
