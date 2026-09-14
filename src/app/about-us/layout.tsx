import NavbarV4 from "@/components/layout/navbar-v4";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "PhaseOne Partners is an independent deal origination firm connecting founder-led Australian and New Zealand businesses with the right capital partners — through fit, clarity and long-term value.",
  path: "/about-us",
});

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <NavbarV4 />
      {children}
    </div>
  );
}

