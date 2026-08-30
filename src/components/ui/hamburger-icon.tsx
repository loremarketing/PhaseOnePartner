import React from "react";
import Image from "next/image";

interface HamburgerIconProps {
  className?: string;
}

export function HamburgerIcon({ className = "h-6 w-6" }: HamburgerIconProps) {
  return (
    <Image
      src="/icons/hamburge.webp"
      alt="Menu"
      width={24}
      height={24}
      className={className}
    />
  );
}

