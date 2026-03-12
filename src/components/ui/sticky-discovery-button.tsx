"use client";

import { useState, useEffect } from "react";
import AnimatedButton from "./animated-button";

export default function StickyDiscoveryButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 200px
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-sm border-b border-border shadow-md py-3 px-4 hidden lg:block">
      <div className="max-w-[1600px] mx-auto flex justify-center">
        <AnimatedButton text="Book a discovery session today " className="mx-auto" href="/contact" />
      </div>
    </div>
  );
}

