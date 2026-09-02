import type { Metadata } from "next";
import NavbarV4 from "@/components/layout/navbar-v4";

export const metadata: Metadata = {
  title: "AboutPhaseOne Partners- PhaseOne Partners",
  description:
    "Connecting founders and capital partners for lasting success.",
};

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

