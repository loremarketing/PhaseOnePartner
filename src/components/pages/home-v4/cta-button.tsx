import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Figma buttons — desktop 1555:388/390, mobile 1555:783.
 *  - primary:   linear-gradient(90deg, #0224e9 0%, #011483 100%), rounded-[80px]
 *  - secondary: white, 1px #0224e9 border, #0224e9 text
 * Label: Manrope Medium — 14px mobile, 18px desktop.
 *
 * Hover and press land on flat #011483, the dark end of the gradient — the old
 * 10% opacity fade was too easy to miss.
 *
 * The gradient rides on a ::before overlay rather than the element itself, the
 * same way the navbar CTA does it (globals.css). Two reasons, and the first is
 * a real bug this had:
 *
 *   background-image cannot be transitioned. Painting the gradient directly on
 *   the element left it with NO background-color at rest, so on hover the image
 *   vanished instantly while the colour animated up from transparent — the
 *   button visibly blinked out for the length of the transition. An overlay
 *   cross-fades against an already-opaque base, so there is nothing to flash.
 */
export default function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  pageCta = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  /**
   * Whether the navbar should duck its floating CTA while this button is on
   * screen. Set false for buttons that share the viewport with the navbar's own
   * morph — hiding it there would swallow the transform before it finishes.
   */
  pageCta?: boolean;
}) {
  return (
    <Link
      href={href}
      // the navbar watches these: while any of them is on screen the floating
      // header CTA gets out of the way rather than doubling up (navbar-v4.tsx)
      data-page-cta={pageCta ? "" : undefined}
      className={cn(
        "relative isolate inline-flex h-[44px] items-center justify-center rounded-[80px] px-[22px] font-manrope text-[14px] font-medium transition-colors duration-200 lg:h-[50px] lg:text-[18px]",
        variant === "primary"
          ? cn(
              // flat dark blue underneath, always painted — this is what the
              // gradient fades away to reveal
              "bg-[#011483] text-white",
              "before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:content-['']",
              "before:bg-[linear-gradient(90deg,#0224e9_0%,#011483_100%)]",
              "before:transition-opacity before:duration-200",
              "hover:before:opacity-0 active:before:opacity-0 active:bg-[#010c4a]"
            )
          : cn(
              "border border-[#0224e9] bg-white text-[#0224e9]",
              // secondary inverts so it reads as clearly as primary. Both of
              // its colours are opaque at rest, so it never had the flash.
              "hover:border-[#011483] hover:bg-[#011483] hover:text-white",
              "active:border-[#010c4a] active:bg-[#010c4a] active:text-white"
            ),
        className
      )}
    >
      {children}
    </Link>
  );
}
