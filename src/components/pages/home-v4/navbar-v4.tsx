"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

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

const EXPLORE = [
  { name: "About", href: "/about-us" },
  { name: "Terms and Conditions", href: "/terms-and-conditions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

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
      className="v4-header absolute inset-x-0 top-0 z-50 px-4 pt-4 lg:fixed lg:px-[clamp(16px,4.861vw,70px)] lg:pt-5"
    >
      <nav className="v4-nav mx-auto flex h-[64px] w-full max-w-[1300px] items-center rounded-[80px] bg-white px-5 lg:h-[72px] lg:px-6">
        <Link href="/" className="v4-nav__fade shrink-0">
          <Image
            src="/logo.black.png"
            alt="PhaseOne Partners"
            width={172}
            height={40}
            className="h-[32px] w-auto lg:h-[40px]"
            priority
          />
        </Link>

        {/* desktop links — centred in the pill */}
        <div className="v4-nav__fade hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex xl:gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="whitespace-nowrap font-poppins text-[14px] font-normal text-[#333] transition-colors hover:text-[#0224e9]"
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
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-poppins text-[14px] font-normal text-[#333] transition-colors hover:text-[#0224e9]"
              aria-expanded={exploreOpen}
            >
              Explore
              <ChevronDown className="size-5" strokeWidth={1.5} />
            </button>
            {exploreOpen && (
              <div className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-[#0224e9]/15 bg-white p-2 shadow-lg">
                  {EXPLORE.map((e) => (
                    <Link
                      key={e.name}
                      href={e.href}
                      className="block rounded-xl px-3 py-2 font-poppins text-[14px] text-[#333] transition-colors hover:bg-[#0224e9]/5 hover:text-[#0224e9]"
                    >
                      {e.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="whitespace-nowrap font-poppins text-[14px] font-normal text-[#333] transition-colors hover:text-[#0224e9]"
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
          <span className="v4-nav__cta-arrow" aria-hidden="true">
            <svg
              viewBox="0 0 12.5828 8.58345"
              className="h-[10px] w-[14px] shrink-0"
              fill="currentColor"
            >
              <path d="M12.4121 4.70383C12.6397 4.47623 12.6397 4.10722 12.4121 3.87962L8.70318 0.170698C8.47558 -0.0568995 8.10657 -0.0568995 7.87897 0.170698C7.65137 0.398296 7.65137 0.767306 7.87897 0.994904L11.1758 4.29173L7.87897 7.58855C7.65137 7.81615 7.65137 8.18516 7.87897 8.41275C8.10657 8.64035 8.47558 8.64035 8.70318 8.41275L12.4121 4.70383ZM0 4.29173V4.87453H12V4.29173V3.70892H0V4.29173Z" />
            </svg>
          </span>
        </Link>
        </span>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="ml-auto text-[#333] lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* mobile sheet */}
      {open && (
        <div className="mx-auto mt-2 w-full max-w-[1300px] rounded-[24px] bg-white p-5 shadow-lg lg:hidden">
          <div className="mb-4 flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-[#333]"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-poppins text-[15px] text-[#333]"
              >
                {l.name}
              </Link>
            ))}
            {EXPLORE.map((e) => (
              <Link
                key={e.name}
                href={e.href}
                onClick={() => setOpen(false)}
                className="font-poppins text-[15px] text-[#333]"
              >
                {e.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="font-poppins text-[15px] text-[#333]"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0224e9 0%, #011483 100%)",
              }}
              className="mt-2 inline-flex h-[46px] items-center justify-center rounded-[80px] font-manrope text-[15px] font-medium text-white"
            >
              Book a discovery session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
