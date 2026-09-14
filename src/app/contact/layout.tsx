import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Book a discovery session with PhaseOne Partners. Talk to our team about deal origination, capital partnerships and off-market opportunities across Australia and New Zealand.",
  path: "/contact",
});

/**
 * Exists only to carry the metadata above — `page.tsx` renders the navbar and
 * both sections itself.
 *
 * Returns `children` bare on purpose. Wrapping it in an element would add a node
 * to the DOM and could change the page's layout; this file must be invisible in
 * the output.
 */
export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
