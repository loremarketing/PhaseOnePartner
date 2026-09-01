"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";

/**
 * A sector pill, which points at a band on /industries.
 *
 * When that band is already on the current page, the jump is handed to Lenis,
 * which owns scrolling for the whole app (see components/smooth-scrolling).
 *
 * Two things NOT to reach for here. `scroll-behavior: smooth` on <html> fights
 * Lenis for control of the same scroll and makes the entire site feel wrong,
 * not just this link. Native scrollIntoView has the same problem on a smaller
 * scale. Lenis has to drive.
 *
 * Coming from another page there is nothing to animate — it is a page load,
 * and the browser lands on the band directly.
 */
export default function SectorLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenis = useLenis();
  const [path, hash] = href.split("#");

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // leave modified clicks (new tab, etc.) to the browser
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (pathname !== path || !hash || !lenis) return;

    const target = document.getElementById(hash);
    if (!target) return;

    event.preventDefault();
    // Lenis doesn't read scroll-margin, so pass the band's own value across as
    // an offset — that is what keeps the heading clear of the fixed header.
    const clearance = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    lenis.scrollTo(target, { offset: -clearance, immediate: reduced });
    history.replaceState(null, "", `#${hash}`);
  };

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
