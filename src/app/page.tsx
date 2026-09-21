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
 * The v4 homepage. `/home-v4` no longer exists as a route — it 301s here, see
 * the `redirects()` block in next.config.ts.
 *
 * The title and description are the ones `/` has been carrying, NOT the preview
 * copy `/home-v4` used. The page's content changed; the URL's search targeting
 * did not, and "Deal Origination for Private Capital" is the keyword-bearing
 * title this URL has accumulated signals against. The v4 preview title was
 * "Proprietary deal flow, before the market sees it" if that is ever wanted
 * instead — it reads better but carries no keyword.
 *
 * The previous homepage's sections still exist in src/components/pages/home/
 * and are now imported by nothing, kept on disk so this swap can be reverted
 * with a single file.
 */
export const metadata = buildMetadata({
  title: "Deal Origination for Private Capital",
  description:
    "Proprietary, off-market deal origination across Australia and New Zealand, connecting founder-led businesses with the right capital partners.",
  path: "/",
});

export default function Home() {
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
