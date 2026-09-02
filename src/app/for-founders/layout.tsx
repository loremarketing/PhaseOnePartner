import type { Metadata } from "next";
import NavbarV4 from "@/components/layout/navbar-v4";

export const metadata: Metadata = {
  title: "Partners for Growth - PhaseOne Partners",
  description:
    "Partners for growth - Helping entrepreneurs achieve their vision.",
};

export default function ForFoundersLayout({
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
