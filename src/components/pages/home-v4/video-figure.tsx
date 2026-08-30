"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { attachMux, shouldPrefetch, type MuxHandle } from "@/lib/mux";

export type VideoSource = { src: string; type: string };

/**
 * The Figma video blocks: a poster with the play glyph centred on it, which
 * becomes a real player.
 *
 * Loading is split into three phases so the click itself has nothing left to
 * wait for. Previously everything — fetching the hls.js chunk, the manifest and
 * the first segments — happened after the press, which is where the several
 * second stall came from.
 *
 *   1. near the viewport  attach hls.js with autoStart:false. Costs the ~40KB
 *                         chunk and nothing else: no manifest, no segments.
 *   2. intent             hover, touch or focus starts the actual buffering,
 *                         so a press usually has data ready and plays at once.
 *                         Also fires on entering view, but only on a
 *                         connection that isn't metered or 2g.
 *   3. press              play(). By now it is normally instant.
 *
 * Nothing is fetched on page load, so a visitor who never watches still pays
 * nothing for the video.
 *
 * The poster is a next/image underneath that stays mounted, and the <video>
 * only fades in once it is genuinely showing frames — so the frame never goes
 * blank or black mid-load. Deliberately NOT the element's own `poster`
 * attribute: that would make the browser fetch the raw file a second time,
 * alongside the optimised one next/image has already cached.
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
  const [started, setStarted] = useState(false); // the viewer pressed play
  const [hasFrames, setHasFrames] = useState(false); // something is on screen
  const [stalled, setStalled] = useState(false); // buffering mid-playback
  const [ended, setEnded] = useState(false); // played through to the end
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const muxRef = useRef<MuxHandle | null>(null);
  const playable = Boolean(playbackId) || sources.length > 0;

  // phase 2 — begin buffering
  const warm = useCallback(() => {
    muxRef.current?.startLoad();
    const video = videoRef.current;
    if (video && !playbackId && sources.length && video.preload !== "auto") {
      video.preload = "auto";
      video.load();
    }
  }, [playbackId, sources.length]);

  // phase 1 — attach as the figure approaches the viewport
  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video || !playable) return;

    let attached = false;
    const attach = () => {
      if (attached) return;
      attached = true;
      if (playbackId) muxRef.current = attachMux(video, playbackId, { autoStart: false });
    };

    if (typeof IntersectionObserver === "undefined") {
      attach();
      return () => muxRef.current?.destroy();
    }

    // Two observers, because the two phases want different triggers. Attaching
    // early is free, but buffering early is not: warming at the same 500px
    // margin pulled segments for a video still below the fold. Buffering waits
    // until it is actually on screen, which is itself a decent signal of
    // intent, with hover and press covering the rest.
    const near = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          attach();
          near.disconnect();
        }
      },
      { rootMargin: "500px 0px" }
    );
    const onScreen = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          if (shouldPrefetch()) warm();
          onScreen.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    near.observe(root);
    onScreen.observe(root);
    return () => {
      near.disconnect();
      onScreen.disconnect();
      muxRef.current?.destroy();
      muxRef.current = null;
    };
  }, [playbackId, playable, warm]);

  // phase 3 — also the replay path, since the play button comes back at the end
  const press = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (ended) {
      setEnded(false);
      video.currentTime = 0;
    }
    setStarted(true);
    warm();
    // attaching is async on a cold start; without awaiting, play() rejects
    // against an element that still has no source and nothing restarts it
    await muxRef.current?.ready;
    video.play().catch(() => {});
  };

  return (
    <div
      ref={rootRef}
      data-reveal
      style={style}
      className={cn("group relative overflow-hidden", className)}
      onPointerEnter={warm}
      onPointerDown={warm}
    >
      <Image
        src={poster}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />

      <video
        ref={videoRef}
        controls={started && !ended}
        playsInline
        preload="none"
        onLoadedData={() => setHasFrames(true)}
        onPlaying={() => {
          setHasFrames(true);
          setStalled(false);
          setEnded(false);
        }}
        // a stall keeps the frame it already has — dropping back to the poster
        // mid-playback is far more jarring than a spinner over the last frame
        onWaiting={() => setStalled(true)}
        onEnded={() => setEnded(true)}
        className={cn(
          "absolute inset-0 size-full bg-transparent object-cover transition-opacity duration-300",
          // `started` matters as much as `hasFrames`: prefetching fires
          // loadeddata, so without it the video reveals its own first frame and
          // covers the designed poster before anyone has pressed play
          started && hasFrames && !ended
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {/* Mux assets carry no static MP4 rendition, so their source is
            attached imperatively by attachMux rather than declared here. */}
        {!playbackId &&
          sources.map((s) => <source key={s.src} src={s.src} type={s.type} />)}
      </video>

      {(!started || ended) &&
        (playable ? (
          <button
            type="button"
            onClick={press}
            onFocus={warm}
            aria-label={`${ended ? "Replay" : "Play"} video: ${alt}`}
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

      {/* Pressed but nothing to show yet, or stalled mid-playback. Not shown
          once it has ended — that state is a poster with the play button back
          on it, which is a replay affordance rather than a load. */}
      {started && !ended && (!hasFrames || stalled) && (
        <span
          role="status"
          aria-label="Loading video"
          className="pointer-events-none absolute left-1/2 top-1/2 size-[52px] -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-[3px] border-white/35 border-t-white motion-reduce:animate-none"
        />
      )}
    </div>
  );
}
