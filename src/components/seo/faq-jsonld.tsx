import type { Faq } from "@/components/pages/founder/founder-faqs";

import { JsonLd } from "./json-ld";

/**
 * FAQPage, built from the same array the accordion renders — `answerText` is
 * the plain-text twin of the JSX in `answer`, kept in the same object literal
 * so the two cannot drift.
 *
 * Worth setting expectations on: Google restricted FAQ rich results to
 * government and health sites in 2023, so this will not produce SERP
 * accordions. It is still worth emitting — it is a first-class signal for AI
 * Overviews, Bing and the LLM-backed search tools where a B2B firm's discovery
 * traffic increasingly comes from. The bigger win on these pages is that the
 * answers now reach the HTML at all; see the note in faq-section-founders.tsx.
 */
export function FaqJsonLd({ faqs }: { faqs: Faq[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answerText,
          },
        })),
      }}
    />
  );
}
