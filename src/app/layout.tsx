import type { Metadata } from "next";
// Bricolage Grotesque used to be loaded here at six weights and was referenced
// by exactly nothing — no `font-bricolage-grotesque` class exists anywhere in
// the codebase. The weights kept below are only those actually used; see the
// note on each.
import { Manrope, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import SmoothScrolling from "@/components/smooth-scrolling";
import { ThemeProvider } from "@/components/theme-provided";
import StickyDiscoveryButton from "@/components/ui/sticky-discovery-button";
import Script from "next/script";
import { siteConfig } from "@/lib/config/site";
import { OrganizationJsonLd } from "@/components/seo/organization-jsonld";
import CookieBanner from "@/components/consent/cookie-banner";

// The body font (globals.css sets `font-family: var(--font-manrope)` on body),
// so it also renders every element that carries only a weight class and no
// family class.
//
// 800 is still in use via `font-extrabold` in footer.tsx. 300 is NOT, as of the
// v4 homepage swap: its only user was `font-light` in investor-founder.tsx,
// which came off the homepage with the old sections and is now imported by
// nothing. Kept loaded on purpose — dropping it is a real weight saving, but do
// it only once src/components/pages/home/ is actually deleted rather than
// merely orphaned, or a revert brings the page back missing a weight.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

// 400 on leaf elements, 600/700 inherited by the nav dropdown panel.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

/**
 * Site-wide defaults only. Every route composes its own title, description,
 * canonical and share card through `buildMetadata` — see `src/lib/seo/metadata.ts`.
 *
 * Deliberately NO `alternates` here: an inherited canonical would silently point
 * every route that forgot to set one at the homepage. And deliberately no
 * `title.template` — `buildMetadata` already appends the brand, so a template
 * would double it up ("About Us | PhaseOne Partners | PhaseOne Partners").
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        {/*
          Consent bootstrap. MUST be the first script in the document and MUST
          be synchronous — Consent Mode only works if the `default` state is on
          the dataLayer before any tag reads it, and `next/script` (even
          beforeInteractive) gives no ordering guarantee strong enough for that.
          An inline script that assigns a few globals costs nothing; it is
          fetching an external file from <head> that is expensive, which is why
          the Meta Pixel below was moved off this path.

          Everything starts denied. The banner
          (src/components/consent/cookie-banner.tsx) is what grants it, and a
          returning visitor's stored choice is replayed here so they are not
          re-anonymised for the wait_for_update window on every page load.

          The storage key and payload shape are duplicated from
          src/lib/analytics/consent.ts on purpose — this string cannot import.
          Change one, change the other.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('consent','default',{
  ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied',
  analytics_storage:'denied', functionality_storage:'granted',
  security_storage:'granted', wait_for_update:500
});
gtag('set','ads_data_redaction',true);
gtag('set','url_passthrough',true);
try{
  var c=JSON.parse(localStorage.getItem('p1p-consent')||'null');
  if(c&&c.v===1){
    gtag('consent','update',{
      analytics_storage:c.analytics?'granted':'denied',
      ad_storage:c.ads?'granted':'denied',
      ad_user_data:c.ads?'granted':'denied',
      ad_personalization:c.ads?'granted':'denied'
    });
    if(c.ads) window.__p1pFbConsent='grant';
  }
}catch(e){}
/* Scroll reveals are hidden only when this class is present, so a crawler or
   browser that never runs JS sees the content — including the primary heading
   on / and /industries — instead of opacity:0. Set here rather than in a
   deferred script so it lands before the body paints and nothing flashes.
   (Deliberately no literal heading tag in this comment: it sits in the served
   HTML, and regex-based SEO crawlers count it as a real element.) */
document.documentElement.classList.add('js-reveal');
            `,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2ZP6XTM3SH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2ZP6XTM3SH');
            gtag('config', 'AW-17539389650');
          `}
        </Script>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MWJS3BXW');
          `}
        </Script>
        {/*
          Meta Pixel, now consent-gated: `fbq('consent','revoke')` before the
          first track call makes the pixel queue events instead of sending them,
          and the banner calls `fbq('consent','grant')` to flush that queue.

          DELIBERATELY still a raw inline <script> rather than `next/script`,
          but the reason has now expired and this is worth revisiting.

          It was left render-blocking because the mobile entrance animation in
          `investor-founder.tsx` measured its ScrollTrigger during hydration and
          needed this script holding head parsing back to measure settled
          layout; deferred, it failed five loads out of five at 390px. That
          component came off the homepage in the v4 swap and is now imported by
          nothing, so nothing on any live route depends on the delay any more.

          Switching this to `<Script id="meta-pixel" strategy="afterInteractive">`
          should now be safe and removes the last render-blocking third-party
          script on the site. Left as-is in the swap commit so a homepage
          replacement and a tracking change are not entangled in one diff —
          change it on its own, and re-check the mobile animation first if
          src/components/pages/home/ is ever restored.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2437767633292999');
if (window.__p1pFbConsent !== 'grant') { fbq('consent', 'revoke'); }
fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWJS3BXW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/*
          The Meta <noscript> tracking pixel that used to sit here has been
          removed. It fired a request to facebook.com/tr on page load with no
          JavaScript involved, which means no consent mechanism could ever gate
          it — it tracked every visitor unconditionally, including those who
          decline below. The GTM <noscript> above stays: GTM is consent-aware.
        */}
        <OrganizationJsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <StickyDiscoveryButton />
            {children}
            <Footer />
          </SmoothScrolling>
          {/* Outside SmoothScrolling deliberately: Lenis can put a transform on
              its subtree, and a transformed ancestor makes `position: fixed`
              resolve against that ancestor instead of the viewport. */}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
