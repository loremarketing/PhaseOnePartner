/**
 * The flowing ribbon behind the hero and the process CTA strip.
 *
 * In Figma this is a solid fill masked by the
 * "clean-abstract-blue-gradient-fluid-background-line-style" artwork —
 * white @ 20% over the hero (1555:354), #0224e9 @ 10% inside the
 * process strip (1555:562). We reproduce it the same way, using
 * /bg/hero-lines-bg.webp as the mask so only its alpha matters. The source
 * artwork was a 1.4MB PNG wrapped in an SVG; rasterised to WebP it is 84KB,
 * and since nothing but the alpha channel is read the colour loss is free.
 */
export default function WaveLines({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        WebkitMaskImage: "url('/bg/hero-lines-bg.webp')",
        maskImage: "url('/bg/hero-lines-bg.webp')",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        ...style,
      }}
    />
  );
}
