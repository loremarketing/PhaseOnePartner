"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { HamburgerIcon } from "@/components/ui/hamburger-icon";
import MobileMenu from "@/components/layout/mobile-menu";
import NavDropdown from "@/components/layout/nav-dropdown";
import { navigation } from "@/components/layout/nav-items";

/**
 * Figma 1555:372 — a white pill floating over the hero.
 * Pill 1300x72 @ (70,20), rounded-[80px]; logo 172x40; links Poppins 14px #333;
 * CTA 212x40 with the #0224e9 → #011483 gradient.
 *
 * On desktop the pill is a single element that morphs into the CTA as you
 * scroll: the logo and links dissolve first, then the white pill collapses to
 * the button's width and its background fades to nothing. The CTA inverts as it
 * goes — gradient chip inside the white pill at rest, standalone white/outlined
 * button once the pill is gone — and grows an arrow on hover.
 *
 * Driven by `--fade` / `--shrink` custom properties written straight to the DOM
 * node (see globals.css), so the morph tracks scroll position without
 * re-rendering React on every frame.
 */
const LINKS = [
  { name: "For Capital Partners", href: "/for-investors" },
  { name: "For Business Owners", href: "/for-founders" },
];

/* Same entries, same icons, same panel as the marketing header — read from the
   shared tree so the two menus cannot drift apart again. */
const EXPLORE = navigation.find((i) => i.name === "Explore")?.dropdown ?? [];

/** scroll distance over which the pill fully becomes the button */
const MORPH_DISTANCE = 200;
/** links are gone by this much of the morph; the pill collapses after this */
const FADE_END = 0.35;
const SHRINK_START = 0.25;

export default function NavbarV4() {
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    let raf = 0;
    let settle: ReturnType<typeof setTimeout>;
    const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

    const apply = () => {
      raf = 0;
      const p = clamp01(window.scrollY / MORPH_DISTANCE);
      const fade = clamp01(1 - p / FADE_END);
      const shrink = clamp01((p - SHRINK_START) / (1 - SHRINK_START));
      el.style.setProperty("--fade", String(fade));
      el.style.setProperty("--shrink", String(shrink));
      // once the links are invisible, take them out of layout and the tab order
      el.dataset.faded = String(fade === 0);
      // only once the pill has finished collapsing may hover resize it
      el.dataset.collapsed = String(shrink === 1);
    };

    const onScroll = () => {
      // scroll and hover drive the same properties; while the wheel is moving
      // the scroll must win outright, or every frame animates toward the last
      el.dataset.scrolling = "true";
      clearTimeout(settle);
      settle = setTimeout(() => {
        el.dataset.scrolling = "false";
      }, 120);
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(settle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // The page carries its own CTAs (hero, process, access, founders). Showing the
  // floating header CTA at the same time reads as two competing asks, so it
  // ducks out of view while any of them is on screen and slides back after.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const targets = document.querySelectorAll("[data-page-cta]");
    if (!targets.length) return;

    // a Set, not a counter — repeated entries for the same element would
    // otherwise drift the count and strand the header CTA off screen
    const onScreen = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onScreen.add(entry.target);
          else onScreen.delete(entry.target);
        }
        el.dataset.ctaHidden = String(onScreen.size > 0);
      },
      // ignore the strip the floating CTA itself occupies, so a page CTA
      // scrolling up behind it doesn't keep it hidden after it has passed
      { rootMargin: "-90px 0px 0px 0px", threshold: 0 }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      data-collapsed="false"
      data-faded="false"
      data-scrolling="false"
      data-cta-hidden="false"
      className="v4-header absolute inset-x-0 top-0 z-50 px-6 pt-4 lg:fixed lg:px-[clamp(16px,4.861vw,70px)] lg:pt-5"
    >
      <nav className="v4-nav mx-auto flex h-14 w-full max-w-[1300px] items-center rounded-[80px] bg-white px-4 shadow-md lg:h-[72px] lg:px-6 lg:shadow-none">
        <Link href="/" className="v4-nav__fade shrink-0">
          <Image
            src="/logo.black.webp"
            alt="PhaseOne Partners"
            width={172}
            height={40}
            className="h-6 w-auto lg:h-[40px]"
            priority
          />
        </Link>

        {/* desktop links — centred in the pill */}
        <div className="v4-nav__fade hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex xl:gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="whitespace-nowrap font-poppins text-[15px] font-normal text-[#1a1a1a] transition-colors hover:text-[#0224e9]"
            >
              {l.name}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button
              type="button"
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-poppins text-[15px] font-normal text-[#1a1a1a] transition-colors hover:text-[#0224e9]"
              aria-expanded={exploreOpen}
            >
              Explore
              <ChevronDown
                className={`size-5 transition-transform duration-200 ${
                  exploreOpen ? "rotate-180" : ""
                }`}
                strokeWidth={1.5}
              />
            </button>

            <NavDropdown items={EXPLORE} open={exploreOpen} gap="tall" />
          </div>

          <Link
            href="/contact"
            className="whitespace-nowrap font-poppins text-[15px] font-normal text-[#1a1a1a] transition-colors hover:text-[#0224e9]"
          >
            Contact
          </Link>
        </div>

        {/* The one element that survives the morph. Its gradient, colours and
            width all live in globals.css because they are driven by the scroll
            vars; an inline `background-image` here would outrank the overlay
            that cross-fades the gradient against the white collapsed state. */}
        <span className="v4-nav__cta-slot ml-auto hidden shrink-0 lg:flex">
        <Link
          href="/contact"
          className="v4-nav__cta flex h-[40px] w-[180px] shrink-0 items-center justify-center rounded-[80px] font-manrope text-[14px] font-medium xl:w-[212px]"
        >
          Book a discovery session
        </Link>
        </span>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="-m-2.5 ml-auto p-2.5 text-[#333] lg:hidden"
        >
          {open ? (
            <X className="h-8 w-8" aria-hidden="true" />
          ) : (
            <HamburgerIcon className="h-8 w-8" />
          )}
        </button>
      </nav>

      {/* The same full-screen panel the rest of the site uses. This header
          previously dropped its own smaller card below the pill, which left
          the page showing through behind it and looked nothing like /. */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
