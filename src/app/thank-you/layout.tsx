import { buildMetadata } from "@/lib/seo/metadata";

/**
 * `page.tsx` is a client component and so cannot export `metadata` itself —
 * this layout is the only place the route's tags can live.
 *
 * noindex: this is a post-submission confirmation page. Indexing it puts a
 * "thank you" page in the SERPs and lets people reach it without converting,
 * which corrupts the conversion numbers it exists to record. It is excluded
 * from `sitemap.ts` to match.
 */
export const metadata = buildMetadata({
  title: "Thank You",
  description:
    "Your submission has been received. A member of the PhaseOne Partners team will be in touch shortly.",
  path: "/thank-you",
  noIndex: true,
});

/** Returns `children` bare — see the note in `src/app/contact/layout.tsx`. */
export default function ThankYouLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
