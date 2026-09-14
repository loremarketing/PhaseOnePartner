/**
 * The analytics globals installed by the tag scripts in `src/app/layout.tsx`.
 *
 * All optional: each is undefined until its script has run, and none of them
 * exist at all during server rendering — so every call site must guard.
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown };
    /**
     * Set by the inline consent script when a returning visitor has already
     * granted advertising consent, so the Meta Pixel knows not to start in its
     * revoked state. See the consent bootstrap in `src/app/layout.tsx`.
     */
    __p1pFbConsent?: "grant";
  }
}

export {};
