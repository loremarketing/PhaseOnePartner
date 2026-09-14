import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site";

/**
 * Served at /manifest.webmanifest.
 *
 * Icons point at the files created alongside the favicon work — keep this list
 * in sync with what actually exists in `public/icons/`, since a manifest that
 * references a missing icon is reported as an error in Chrome DevTools rather
 * than silently ignored.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "PhaseOne",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#011483",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
