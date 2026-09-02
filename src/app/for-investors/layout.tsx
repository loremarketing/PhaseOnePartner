import type { Metadata } from "next";
import NavbarV4 from "@/components/layout/navbar-v4";

export const metadata: Metadata = {
  title: "For Capital Partners - PhaseOne Partners",
  description:
    "For Capital Partners - Connecting you with founder-led businesses before they even reach the market.",
};

export default function ForinvestorsLayout({
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
