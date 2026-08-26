import React from "react";
import { cn } from "@/lib/utils";

interface SVGIconProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  /**
   * If true, preserves the original colors of the SVG.
   * If false (default), uses mask mode to allow coloring via text color.
   */
  preserveColors?: boolean;
  alt?: string;
}

/**
 * A component that renders an SVG.
 *
 * By default, it renders as a mask, allowing it to be colored
 * using the current text color (or any background color).
 *
 * Set `preserveColors={true}` to keep the original SVG colors.
 */
export function SVGIcon({
  src,
  className,
  preserveColors = false,
  alt,
  style,
  ...props
}: SVGIconProps) {
  if (preserveColors) {
    // Render as img to preserve original colors
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || ""}
        className={cn("inline-block shrink-0", className)}
        style={style}
        {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
      />
    );
  }

  // Default: mask mode for color control.
  // NOTE: this renders an empty <div>, so it has no intrinsic size — `w-auto`/`h-auto`
  // collapse to 0 and the icon disappears. Always give it BOTH dimensions (e.g. `size-5`,
  // or `h-8 aspect-[w/h]` for a non-square mark).
  return (
    <div
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      className={cn("bg-current inline-block shrink-0", className)}
      style={{
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        // caller's style is merged in LAST but must not be allowed to drop the
        // mask: spreading `props` (which carries `style`) over this object would
        // replace it wholesale and leave a solid `bg-current` block behind.
        ...style,
      }}
      {...props}
    />
  );
}
