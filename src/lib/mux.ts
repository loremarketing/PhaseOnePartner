/**
 * Point a <video> element at a Mux playback ID.
 *
 * These assets have no static MP4 renditions, so the only source is HLS. iOS
 * Safari plays that natively; everywhere else needs hls.js, which is imported
 * dynamically and only at the moment playback is actually requested, so its
 * ~40KB never lands in the initial bundle and costs nothing for the visitors
 * who never press play.
 *
 * Adaptive streaming is also simply the right shape for these files: the hero
 * was a 92MB single download that every visitor began pulling on page load.
 */

export function muxSrc(playbackId: string) {
  return `https://stream.mux.com/${playbackId}.m3u8`;
}

/** Poster frame straight from Mux, if a designed poster isn't available. */
export function muxPoster(playbackId: string, width = 1200) {
  return `https://image.mux.com/${playbackId}/thumbnail.webp?width=${width}`;
}

export type MuxHandle = {
  /** Begin fetching the manifest and segments. No-op when autoStart was true. */
  startLoad: () => void;
  /**
   * Resolves once the element actually has a playable source.
   *
   * Await this before calling play(). Attaching is asynchronous — the hls.js
   * chunk has to arrive and parse the manifest first — so a play() issued
   * straight after attachMux() rejects against an element that still has no
   * source, and nothing ever starts it again. It races, which is worse than
   * failing outright: it can appear to work.
   */
  ready: Promise<void>;
  /** Detach and stop buffering. Call on unmount or when the id changes. */
  destroy: () => void;
};

/**
 * Do NOT decide this with `video.canPlayType("application/vnd.apple.mpegurl")`:
 * Chrome answers "maybe" and then fails the load with MEDIA_ERR_SRC_NOT_SUPPORTED,
 * so a truthiness check on it routes every Chrome visitor into a broken player.
 *
 * Media Source Extensions is the honest signal. Where MSE exists, hls.js works;
 * where it doesn't — iOS Safari, which ships native HLS instead — the element
 * can take the URL directly.
 */
function prefersNativeHls(): boolean {
  return typeof window !== "undefined" && typeof window.MediaSource === "undefined";
}

/**
 * `autoStart: false` attaches without touching the network — no manifest, no
 * segments, not even the hls.js chunk — until `startLoad()` is called. Use it
 * for a player mounted on page load that should stay silent until someone
 * presses play; a player that only mounts in response to a click can leave it
 * true.
 */
export function attachMux(
  video: HTMLVideoElement,
  playbackId: string,
  { autoStart = true }: { autoStart?: boolean } = {}
): MuxHandle {
  const src = muxSrc(playbackId);
  const native = prefersNativeHls();

  let destroyed = false;
  let started = false;
  let hls: import("hls.js").default | null = null;

  let markReady: () => void;
  const ready = new Promise<void>((resolve) => {
    markReady = resolve;
  });

  const begin = () => {
    if (destroyed || started) return;
    started = true;

    if (native) {
      video.src = src;
      markReady();
      return;
    }

    import("hls.js").then(({ default: Hls }) => {
      if (destroyed) return;
      if (!Hls.isSupported()) {
        // MSE present but unusable — native is the only remaining option.
        video.src = src;
        markReady();
        return;
      }
      hls = new Hls({ enableWorker: true });
      hls.on(Hls.Events.MANIFEST_PARSED, () => markReady());
      hls.loadSource(src);
      hls.attachMedia(video);
    });
  };

  if (autoStart) begin();

  return {
    startLoad: begin,
    ready,
    destroy: () => {
      destroyed = true;
      hls?.destroy();
      hls = null;
    },
  };
}
