import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Figma buttons — desktop 1555:388/390, mobile 1555:783.
 *  - primary:   linear-gradient(90deg, #0224e9 0%, #011483 100%), rounded-[80px]
 *  - secondary: white, 1px #0224e9 border, #0224e9 text
 * Label: Manrope Medium — 14px mobile, 18px desktop.
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
      style={
        variant === "primary"
          ? {
              backgroundImage:
                "linear-gradient(90deg, #0224e9 0%, #011483 100%)",
            }
          : undefined
      }
      className={cn(
        "inline-flex h-[44px] items-center justify-center rounded-[80px] px-[22px] font-manrope text-[14px] font-medium transition-opacity lg:h-[50px] lg:text-[18px]",
        variant === "primary"
          ? "text-white hover:opacity-90"
          : "border border-[#0224e9] bg-white text-[#0224e9] hover:bg-[#0224e9]/5",
        className
      )}
    >
      {children}
    </Link>
  );
}
