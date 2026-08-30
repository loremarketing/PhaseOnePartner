"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { attachMux } from "@/lib/mux";

export type VideoSource = { src: string; type: string };

/**
 * The Figma video blocks: a poster with the play glyph centred on it, which
 * becomes a real player on click.
 *
 * The <video> element is not rendered until that click. Nothing about the media
 * is fetched on page load — not the file, not its manifest, not the hls.js
 * decoder — so the section costs exactly one optimised poster image until
 * someone actually wants to watch. That is also why the poster stays mounted
 * underneath rather than being handed to the video's own `poster` attribute:
 * next/image serves an optimised, already-cached URL, so the swap has nothing
 * to re-fetch and cannot flash.
 *
 * Give it either a Mux `playbackId` or local `sources`. With neither, the glyph
 * still renders, but as decoration rather than a button that does nothing.
 */
export default function VideoFigure({
  poster,
  alt,
  playbackId,
  sources = [],
  sizes,
  priority = false,
  className,
  style,
}: {
  poster: string;
  alt: string;
  playbackId?: string;
  sources?: VideoSource[];
  sizes?: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playable = Boolean(playbackId) || sources.length > 0;

  useEffect(() => {
    const video = videoRef.current;
    if (!active || !video) return;

    const mux = playbackId ? attachMux(video, playbackId) : undefined;
    // Wait for a source before playing. React flushes click updates
    // synchronously so the gesture that mounted this element is still active,
    // and Chrome keeps that activation alive for several seconds — long enough
    // for the manifest — so an unmuted play() is still permitted here. If a
    // policy blocks it anyway the native controls are already on screen.
    void (mux ? mux.ready : Promise.resolve()).then(() => {
      video.play().catch(() => {});
    });
    return () => mux?.destroy();
  }, [active, playbackId]);

  return (
    <div
      data-reveal
      style={style}
      className={cn("group relative overflow-hidden", className)}
    >
      <Image
        src={poster}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />

      {active && (
        <video
          ref={videoRef}
          controls
          playsInline
          preload="auto"
          // object-cover, matching the poster underneath: the Figma boxes are
          // not all 16:9 (670x400 here, 400x267 on mobile) and the sources are,
          // so object-contain letterboxed the video the instant it replaced a
          // poster that had filled the same box. Transparent, not black, so the
          // poster stays visible through the first frames rather than being
          // covered by a blank rectangle while it buffers.
          className="absolute inset-0 size-full bg-transparent object-cover"
        >
          {/* Mux assets carry no static MP4 rendition, so their source is
              attached imperatively by attachMux rather than declared here. */}
          {!playbackId &&
            sources.map((s) => <source key={s.src} src={s.src} type={s.type} />)}
        </video>
      )}

      {!active &&
        (playable ? (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play video: ${alt}`}
            // the whole poster is the target, not just the 60px glyph — the
            // glyph alone is a small hit area for something this prominent
            className="absolute inset-0 flex cursor-pointer items-center justify-center"
          >
            <Image
              src="/home-v4/play.svg"
              alt=""
              width={60}
              height={60}
              className="size-[60px] transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ) : (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 size-[60px] -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/home-v4/play.svg"
              alt=""
              width={60}
              height={60}
              className="size-[60px]"
            />
          </span>
        ))}
    </div>
  );
}
