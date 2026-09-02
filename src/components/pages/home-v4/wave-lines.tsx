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
 *
 * `fadeBottom` fades the ribbon out over the lower part of its box. Over a
 * hero that ends in white the ribbon only adds a few luminance levels — but
 * they arrive as *flat* edges lying across an otherwise smooth vertical ramp,
 * which is precisely what the eye reads as banding. The artwork is stretched
 * to the box, so the wider the viewport the flatter those edges get and the
 * more they look like a step from blue straight to white. Fading it out before
 * the gradient goes pale costs nothing visible and removes the artefact.
 */
export default function WaveLines({
  className = "",
  style,
  fadeBottom = false,
}: {
  className?: string;
  style?: React.CSSProperties;
  fadeBottom?: boolean;
}) {
  const artwork = "url('/bg/hero-lines-bg.webp')";
  // Second mask layer, intersected with the artwork: opaque down to 40% of the
  // box, gone by 78%, which is above the point the hero gradient turns pale.
  const mask = fadeBottom
    ? `${artwork}, linear-gradient(to bottom, #000 0%, #000 40%, transparent 78%)`
    : artwork;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        WebkitMaskImage: mask,
        maskImage: mask,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        // both spellings: `intersect` is the standard, `source-in` the legacy
        // WebKit form some Safari versions still need
        ...(fadeBottom
          ? { maskComposite: "intersect", WebkitMaskComposite: "source-in" }
          : {}),
        ...style,
      }}
    />
  );
}
