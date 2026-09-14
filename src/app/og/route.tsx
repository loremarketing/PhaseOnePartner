import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/config/site";

/**
 * Dynamic Open Graph / Twitter card (1200×630), built per page.
 *
 * Built from query params by `src/lib/og.ts`, which `buildMetadata` calls for
 * every route:
 *
 *   ?t=<title>    the headline — what this particular page is
 *   ?k=<eyebrow>  the small label above it
 *
 * NOTHING ON THIS CARD IS A BITMAP, and that is a deliberate constraint rather
 * than a stylistic one. Satori rasterises through resvg, which decodes PNG and
 * JPEG only — no WebP, no AVIF, no SVG. Every logo and photograph in this
 * project is WebP, so any attempt to draw one here would throw and take the
 * whole card down to a 500, i.e. no preview at all. A gradient and type have no
 * such failure mode, need no network fetch, and survive the aggressive
 * recompression social platforms apply.
 *
 * For the same reason every glyph is pure #ffffff or a white alpha: these cards
 * are read at roughly 300px wide in a LinkedIn feed, and mid-grey is the first
 * thing to turn to mush.
 */

// Node, not edge — the font loader below uses Buffer.
// (No `contentType`/`size` exports here: those belong to the opengraph-image
// file convention, not to a route handler, and Next type-errors on them.)
export const runtime = "nodejs";

const INK = "#ffffff";

/**
 * Satori parses TTF, OTF and WOFF — but NOT WOFF2, which is the only thing
 * next/font/google emits. Hence the checked-in static files: see
 * `public/font/manrope/`.
 */
const FONT_FILES = [
  { name: "Manrope", path: "/font/manrope/manrope-400.ttf", weight: 400 },
  { name: "Manrope", path: "/font/manrope/manrope-800.ttf", weight: 800 },
] as const;

type LoadedFont = {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 800;
  style: "normal";
};

let fontCache: Promise<LoadedFont[]> | null = null;

async function loadFonts(origin: string): Promise<LoadedFont[]> {
  fontCache ??= Promise.all(
    FONT_FILES.map(async (font): Promise<LoadedFont | null> => {
      try {
        const res = await fetch(new URL(font.path, origin), {
          signal: AbortSignal.timeout(4000),
        });
        if (!res.ok) return null;
        return {
          name: font.name,
          weight: font.weight,
          style: "normal",
          data: await res.arrayBuffer(),
        };
      } catch {
        return null;
      }
    }),
  ).then((loaded) => loaded.filter((f): f is LoadedFont => f !== null));

  const fonts = await fontCache;
  // Never cache a partial load. A cold-start race that dropped one face would
  // otherwise pin every card this instance ever renders to the wrong weight.
  if (fonts.length < FONT_FILES.length) fontCache = null;
  return fonts;
}

/**
 * Satori does not wrap-and-shrink, so the headline size is chosen up front from
 * the string length. These steps keep every title inside three lines.
 */
function headlineSize(text: string): number {
  if (text.length <= 24) return 78;
  if (text.length <= 40) return 66;
  if (text.length <= 60) return 54;
  if (text.length <= 84) return 45;
  return 39;
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const heading = (url.searchParams.get("t") || siteConfig.name).slice(0, 110);
  const eyebrow = (url.searchParams.get("k") || siteConfig.eyebrow).slice(0, 64);

  const fonts = await loadFonts(url.origin);
  const domain = siteConfig.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "56px 68px",
          backgroundColor: "#011483",
          backgroundImage:
            "linear-gradient(135deg, #011483 0%, #0224e9 58%, #0085f2 100%)",
          fontFamily: "Manrope",
        }}
      >
        {/* Two hairline rings. Geometry rather than texture, so they stay crisp
            after a platform downscales the card into a feed. */}
        <div
          style={{
            position: "absolute",
            right: -170,
            top: -170,
            width: 540,
            height: 540,
            borderRadius: 9999,
            border: "2px solid rgba(255,255,255,0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -120,
            bottom: -200,
            width: 420,
            height: 420,
            borderRadius: 9999,
            border: "2px solid rgba(255,255,255,0.10)",
          }}
        />

        {/* Wordmark. Set as type rather than drawn from the logo file, which is
            WebP and therefore unreadable here. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "0.14em",
              color: INK,
            }}
          >
            PHASEONE PARTNERS
          </div>
          {/* Underlines the wordmark. The width is a literal because satori has
              no way to measure rendered text, and `width: "100%"` resolves to 0
              against a shrink-to-fit parent. 416 is the wordmark's measured ink
              width (413px) plus its left side bearing — only valid while the
              wordmark string, size and tracking above stay as they are. */}
          <div style={{ width: 416, height: 4, backgroundColor: INK, marginTop: 10 }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: 18,
              maxWidth: 1010,
              fontSize: headlineSize(heading),
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.015em",
              color: INK,
            }}
          >
            {heading}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            paddingTop: 26,
            borderTop: "1px solid rgba(255,255,255,0.35)",
            fontSize: 24,
            fontWeight: 400,
            color: "rgba(255,255,255,1)",
          }}
        >
          <div style={{ display: "flex" }}>{domain}</div>
          <div style={{ display: "flex" }}>Australia &amp; New Zealand</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // A total font failure still renders a card in Satori's built-in face.
      // Slightly wrong beats a 500, which is no preview at all.
      ...(fonts.length ? { fonts } : {}),
      headers: {
        "Cache-Control": "public, immutable, no-transform, max-age=31536000",
      },
    },
  );
}
