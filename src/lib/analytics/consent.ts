/**
 * Cookie-consent state, shared by the banner and the inline bootstrap script in
 * `src/app/layout.tsx`.
 *
 * The bootstrap cannot import from here — it is a string inlined into <head>
 * that must run before any bundle loads — so the storage key and payload shape
 * are duplicated there by necessity. If you change either, change both. The
 * `v` field exists so a future shape change can be detected rather than
 * misread.
 */
export const CONSENT_STORAGE_KEY = "p1p-consent";
export const CONSENT_VERSION = 1;

export type ConsentChoice = {
  v: typeof CONSENT_VERSION;
  /** GA4 — `analytics_storage`. */
  analytics: boolean;
  /** Google Ads + Meta — `ad_storage`, `ad_user_data`, `ad_personalization`. */
  ads: boolean;
  ts: number;
};

/** The stored choice, or null if the visitor hasn't answered yet. */
export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentChoice | null;
    if (!parsed || parsed.v !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    // Private-mode Safari and hardened browsers throw on localStorage access.
    // Treat that as "no choice recorded" rather than breaking the page.
    return null;
  }
}

/**
 * Persist the choice and push it to both tag systems.
 *
 * Google reads Consent Mode v2 signals; Meta has its own `fbq('consent', …)`
 * gate, which queues events while revoked and flushes them on grant — hence the
 * explicit PageView after granting, which replays the one the pixel skipped.
 */
export function writeConsent(choice: Omit<ConsentChoice, "v" | "ts">): void {
  if (typeof window === "undefined") return;

  const payload: ConsentChoice = {
    v: CONSENT_VERSION,
    analytics: choice.analytics,
    ads: choice.ads,
    ts: Date.now(),
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Non-fatal: the tags below still get the signal for this page view.
  }

  window.gtag?.("consent", "update", {
    analytics_storage: choice.analytics ? "granted" : "denied",
    ad_storage: choice.ads ? "granted" : "denied",
    ad_user_data: choice.ads ? "granted" : "denied",
    ad_personalization: choice.ads ? "granted" : "denied",
  });

  if (choice.ads) {
    window.fbq?.("consent", "grant");
    window.fbq?.("track", "PageView");
  } else {
    window.fbq?.("consent", "revoke");
  }
}
