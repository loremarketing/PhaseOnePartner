"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AnimatedButton from "./animated-button";

export default function StickyDiscoveryButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasV4Nav, setHasV4Nav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 200px
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pages built on the v4 navbar already have this CTA: the nav pill itself
  // morphs into it on scroll. A second floating button — and the full-width bar
  // behind it — would sit on top of that morph.
  //
  // Detected from the DOM rather than matched against a list of routes: this
  // component lives in the root layout, so a route list silently goes stale
  // every time another page adopts the v4 header. The page's markup is
  // committed before any effect runs, on first paint and on client-side
  // navigation alike, so the query is safe here.
  useEffect(() => {
    setHasV4Nav(!!document.querySelector(".v4-header"));
  }, [pathname]);

  if (hasV4Nav) return null;
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-sm border-b border-border shadow-md py-3 px-4 hidden lg:block">
      <div className="max-w-[1600px] mx-auto flex justify-center">
        <AnimatedButton text="Book a discovery session today " className="mx-auto" href="/contact" />
      </div>
    </div>
  );
}
