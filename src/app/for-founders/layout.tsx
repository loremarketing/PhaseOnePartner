import NavbarV4 from "@/components/layout/navbar-v4";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { FOUNDER_FAQS } from "@/components/pages/founder/founder-faqs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "For Business Owners",
  description:
    "Direct access to vetted private equity funds and strategic buyers already investing in your industry. No broad auctions, no wasted presentations — a fast, confidential process built around your goals.",
  path: "/for-founders",
});

export default function ForFoundersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <FaqJsonLd faqs={FOUNDER_FAQS} />
      <NavbarV4 />
      {children}
    </div>
  );
}
