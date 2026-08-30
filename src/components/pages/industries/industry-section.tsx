import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Industry } from "./industries-data";

/**
 * One industry band — Figma 1555:3020/3023 and siblings.
 *
 * Heading  Manrope Medium 64/70 #000
 * Intro    Inter 400 18/28 #333, 40px below the heading
 * Tile     309.1 x 114.83, #fff, radius 32, shadow 0 4px 40px rgba(0,0,0,.06)
 *          60px icon + 14px gap, 32px left padding
 * Label    Manrope Medium 20/22 #000
 * Grid     rows of 4, 21px column gap, 20px row gap
 *
 * Odd-numbered bands (0-indexed even) sit on #f0f0f0 with the ribbon artwork;
 * the rest are plain white. Tiles keep their exact 309px width at >=1440 and
 * fall back to a fluid 4/3/2/1-up grid below that, so the row rhythm survives
 * on a laptop instead of overflowing.
 */
export default function IndustrySection({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  const tinted = index % 2 === 0;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden py-16 lg:py-[100px]",
        tinted ? "bg-[#f0f0f0]" : "bg-white"
      )}
    >
      {/* Figma 1555:2974/2977 — the ribbon artwork is a raster masked to solid
          #0224e9 and rotated, so it is exported rather than rebuilt in CSS.
          Each is cropped to the corner content that is actually visible in the
          design, so it anchors flush to its corner and stays correct as the
          band height changes with tile count. */}
      {tinted && (
        <>
          {/* The mobile frame uses its own, much narrower ribbon (1555:1423)
              sitting below the heading — not a scaled-down desktop crop, which
              would be far too wide and swamp the intro copy. */}
          <Image
            src="/industries/ribbon-tr-mobile.webp"
            alt=""
            aria-hidden="true"
            width={168}
            height={210}
            className="pointer-events-none absolute right-[-92px] top-[150px] -z-10 w-[168px] max-w-none select-none lg:hidden"
          />
          <Image
            src="/industries/ribbon-tr.webp"
            alt=""
            aria-hidden="true"
            width={330}
            height={210}
            className="pointer-events-none absolute right-0 top-0 -z-10 hidden w-[330px] max-w-none select-none lg:block"
          />
          <Image
            src="/industries/ribbon-bl.webp"
            alt=""
            aria-hidden="true"
            width={120}
            height={145}
            className="pointer-events-none absolute bottom-0 left-0 -z-10 w-[70px] max-w-none select-none lg:w-[120px]"
          />
        </>
      )}

      <div className="relative mx-auto w-full max-w-[1440px] px-4 lg:px-[clamp(24px,4.167vw,60px)]">
        <h2
          data-reveal
          className="text-center font-manrope text-[32px] font-medium leading-[40px] text-black lg:text-[clamp(2.25rem,4.444vw,4rem)] lg:leading-[clamp(2.625rem,4.861vw,4.375rem)]"
        >
          {industry.title}
        </h2>
        <p
          data-reveal
          style={{ transitionDelay: "90ms" }}
          className="mx-auto mt-[30px] max-w-[883px] text-center font-inter text-[16px] font-normal leading-[26px] text-[#333] lg:mt-10 lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)] text-balance"
        >
          {industry.intro}
        </p>

        {/* Mobile is a different tile, not a reflowed one (Figma 1555:1435):
            191x142 two-up, radius 16, icon centred above a centred label.
            Desktop switches to the wide 309x114.83 row tile at radius 32. */}
        <ul className="mx-auto mt-8 grid max-w-[1299px] grid-cols-2 gap-4 lg:mt-14 lg:grid-cols-4 lg:gap-x-[21px] lg:gap-y-5">
          {industry.tiles.map((tile, i) => (
            <li
              key={tile.label}
              data-reveal
              // tiles in a row arrive together, so a short per-column cascade
              // reads as intentional; the modulo restarts it each row
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
            >
              {/* The hover styling lives on this inner element, not the <li>.
                  The reveal rules in globals.css are unlayered, so
                  `[data-reveal][data-revealed="true"] { transform: none }`
                  outranks any Tailwind hover:-translate utility on the same
                  node and the lift would silently never happen. Keeping the
                  two on separate elements lets each own its transform. */}
              <div className="group flex h-full min-h-[142px] flex-col items-center justify-center gap-[10px] rounded-[16px] bg-white px-4 py-5 text-center shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)] transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0px_12px_28px_0px_rgba(2,36,233,0.16)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:min-h-[114.83px] lg:flex-row lg:justify-start lg:gap-[14px] lg:rounded-[32px] lg:px-8 lg:py-0 lg:text-left">
                <Image
                  src={tile.icon}
                  alt=""
                  width={60}
                  height={60}
                  className="size-[60px] shrink-0 transition-[scale] duration-300 ease-out group-hover:scale-[1.08] motion-reduce:group-hover:scale-100"
                />
                <span className="font-manrope text-[16px] font-medium leading-[20px] text-black transition-colors duration-300 group-hover:text-[#0224e9] lg:text-[20px] lg:leading-[22px]">
                  {tile.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
