import NavbarV4 from "@/components/layout/navbar-v4";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { INVESTOR_FAQS } from "@/components/pages/investor/investor-faqs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "For Capital Partners",
  description:
    "Proprietary, off-market deal flow from founder-led businesses before they reach the market. A dedicated origination engine that fills your pipeline in weeks rather than 12–18 months.",
  path: "/for-investors",
});

export default function ForinvestorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <FaqJsonLd faqs={INVESTOR_FAQS} />
      <NavbarV4 />
      {children}
    </div>
  );
}
