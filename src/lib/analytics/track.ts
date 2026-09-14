/**
 * The single seam for conversion events.
 *
 * Before this existed the site fired none at all — which meant Google Ads
 * (AW-17539389650) had no conversion signal to optimise against and the ad
 * spend was flying blind. That is what these events fix.
 *
 * No component calls `gtag`/`fbq` directly; everything goes through here so the
 * event names stay a closed set and there is one place to change when the tag
 * setup changes.
 *
 * Consent is handled upstream, not here: Consent Mode defaults everything to
 * denied (see the bootstrap in `src/app/layout.tsx`), so a push made before the
 * visitor accepts is recorded without identifiers rather than leaking. The
 * Meta pixel queues its events while revoked for the same reason.
 */

export type TrackEvent =
  /** Contact form submitted successfully — the site's primary conversion. */
  | "generate_lead"
  /** Footer "Stay in the loop" email captured. */
  | "newsletter_signup";

export function track(
  event: TrackEvent,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;

  try {
    // Pushed for GTM (container GTM-MWJS3BXW) as well as sent through gtag, so
    // the event is available whether a tag is configured in the container or
    // against the GA4 property directly.
    window.dataLayer?.push({ event, ...params });
    window.gtag?.("event", event, params);
  } catch (error) {
    console.error(`[track] ${event} failed:`, error);
  }
}

/**
 * Google Ads conversion, which needs a per-conversion label from the Ads
 * account (`AW-17539389650/<label>`), not just the account id.
 *
 * No-ops when the label is unset so this can ship before the label exists —
 * check NEXT_PUBLIC_ADS_LEAD_LABEL is configured in the hosting environment,
 * otherwise Ads still records nothing.
 */
export function trackAdsConversion(label?: string): void {
  if (typeof window === "undefined" || !label) return;
  try {
    window.gtag?.("event", "conversion", { send_to: label });
  } catch (error) {
    console.error("[track] ads conversion failed:", error);
  }
}

/** Meta standard event. Queued by the pixel until advertising consent is granted. */
export function trackMeta(
  event: "Lead" | "Subscribe",
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  try {
    window.fbq?.("track", event, params);
  } catch (error) {
    console.error(`[track] meta ${event} failed:`, error);
  }
}
