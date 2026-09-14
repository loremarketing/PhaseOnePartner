import type { ReactNode } from "react";

export type Faq = {
  id: number;
  question: string;
  /** What the page renders. */
  answer: ReactNode;
  /**
   * The same prose as `answer`, flattened to a string for FAQPage JSON-LD.
   *
   * Kept in this file, right beside the JSX it mirrors, rather than in a
   * separate SEO module — structured data that drifts from the copy on the page
   * is worse than no structured data at all, and the only reliable defence is
   * making the two impossible to edit separately.
   */
  answerText: string;
};

/**
 * Shared by the rendered accordion (`faq-section-founders.tsx`, a client
 * component) and the FAQPage JSON-LD emitted from the route's server layout.
 * Deliberately has no "use client" directive so both can import it.
 */
export const FOUNDER_FAQS: Faq[] = [
  {
    id: 1,
    question: "Who are you, and what do you do?",
    answer: (
      <>
        <p>
          PhaseOne Partners is a specialist, proprietary deal origination firm dedicated to helping founders and business owners connect with likeminded institutional capital partners, including private equity firms, family offices, and corporate capital partners.
        </p>
        <p>
          We are reaching out because your business was identified through detailed market research as having the specific characteristics our investment partner is seeking, such as a strong market position, growth trajectory, or unique capabilities. The fact that you haven't marketed your business is exactly the point: the best strategic partnerships often form before a formal sale process begins.
        </p>
        <p>
          We are seeking to explore mutual interest in a strategic partnership, not pressure you into a transaction. Many successful business owners are open to discussing growth capital, succession planning, or partnering with capital partners who can accelerate their vision.
        </p>
        <p>
          This is a confidential, no-pressure conversation to explore strategic fit.
        </p>
      </>
    ),
    answerText:
      "PhaseOne Partners is a specialist, proprietary deal origination firm dedicated to helping founders and business owners connect with likeminded institutional capital partners, including private equity firms, family offices, and corporate capital partners. We are reaching out because your business was identified through detailed market research as having the specific characteristics our investment partner is seeking, such as a strong market position, growth trajectory, or unique capabilities. The fact that you haven't marketed your business is exactly the point: the best strategic partnerships often form before a formal sale process begins. We are seeking to explore mutual interest in a strategic partnership, not pressure you into a transaction. Many successful business owners are open to discussing growth capital, succession planning, or partnering with capital partners who can accelerate their vision. This is a confidential, no-pressure conversation to explore strategic fit.",
  },
  {
    id: 2,
    question:
      "How is this different from when investment bankers, M&A advisors, or business brokers have approached me in the past?",
    answer: (
      <>
        <p>
          The key difference is representation: Traditional advisors and brokers represent exiting businesses; we represent the buyer. Advisors and brokers: They are hired by you, the business owner looking to exit, to run a competitive auction process, maximise price, and charge you a fee (typically 3 and up to 10% of the transaction value).
        </p>
        <p>
          PhaseOne Partners: We are paid by the investment partner (the buyer). We are not trying to exit your business for you. We explore whether your business is a strategic fit for our client and help connect you with the people who understand your industry, and are aligned with your vision.
        </p>
        <p className="font-semibold">This means:</p>
        <ul className="list-disc space-y-2 pl-5 mt-2">
          <li>
            <span className="font-semibold">No auction pressure:</span> We offer exploratory, relationship-driven conversations, not a competitive auction process.
          </li>
          <li>
            <span className="font-semibold">Proprietary relationship:</span> You engage with a serious, committed investment partner, which often leads to smoother transactions and better strategic alignment than competitive processes.
          </li>
          <li>
            <span className="font-semibold">No advisory fees from you:</span> You explore the opportunity on your terms, free of any fee pressure.
          </li>
        </ul>
      </>
    ),
    answerText:
      "The key difference is representation: traditional advisors and brokers represent exiting businesses; we represent the buyer. Advisors and brokers are hired by you, the business owner looking to exit, to run a competitive auction process, maximise price, and charge you a fee (typically 3 and up to 10% of the transaction value). PhaseOne Partners is paid by the investment partner (the buyer). We are not trying to exit your business for you. We explore whether your business is a strategic fit for our client and help connect you with the people who understand your industry and are aligned with your vision. This means: No auction pressure — we offer exploratory, relationship-driven conversations, not a competitive auction process. Proprietary relationship — you engage with a serious, committed investment partner, which often leads to smoother transactions and better strategic alignment than competitive processes. No advisory fees from you — you explore the opportunity on your terms, free of any fee pressure.",
  },
  {
    id: 3,
    question:
      "What information do you need from me, and how do you ensure confidentiality? I don't want my competitors, customers, or employees finding out.",
    answer: (
      <>
        <p className="font-semibold">Confidentiality is paramount.</p>
        <p>
          Our initial conversation requires minimal information—just a high-level overview of your market position and growth trends. We don't put your business on a website, or advertise it broadly. We maintain confidentiality and through the entire process.
        </p>
        <p>
          If there is mutual interest, we immediately establish formal confidentiality agreements (NDAs) before any sensitive information is exchanged. Detailed information, such as financial performance or customer concentration, is only shared after NDAs are in place and mutual interest is established.
        </p>
        <p>
          We protect confidentiality through signed NDAs, limited sharing of information only with the core deal team, and secure data rooms.
        </p>
        <p className="font-semibold">You control the pace of information disclosure.</p>
      </>
    ),
    answerText:
      "Confidentiality is paramount. Our initial conversation requires minimal information — just a high-level overview of your market position and growth trends. We don't put your business on a website, or advertise it broadly. We maintain confidentiality through the entire process. If there is mutual interest, we immediately establish formal confidentiality agreements (NDAs) before any sensitive information is exchanged. Detailed information, such as financial performance or customer concentration, is only shared after NDAs are in place and mutual interest is established. We protect confidentiality through signed NDAs, limited sharing of information only with the core deal team, and secure data rooms. You control the pace of information disclosure.",
  },
  {
    id: 4,
    question: "What happens if we explore this and I decide it's not the right fit?",
    answer: (
      <>
        <p>
          If you decide the fit is not right, we will respect that decision completely and immediately.
        </p>
        <p>
          We only connect you with institutional capital partners who are actively interested in investing in your industry, and do not advertise businesses for sale, but understand that sometimes things change.
        </p>
        <p>
          All conversations are kept confidential, and any information shared remains as such. Many business owners find they benefit from the strategic market insights gained, even without a transaction.
        </p>
        <p>
          If you are open to a confidential conversation to learn more about our partner's investment approach and explore alignment, we would welcome the opportunity.
        </p>
      </>
    ),
    answerText:
      "If you decide the fit is not right, we will respect that decision completely and immediately. We only connect you with institutional capital partners who are actively interested in investing in your industry, and do not advertise businesses for sale, but understand that sometimes things change. All conversations are kept confidential, and any information shared remains as such. Many business owners find they benefit from the strategic market insights gained, even without a transaction. If you are open to a confidential conversation to learn more about our partner's investment approach and explore alignment, we would welcome the opportunity.",
  },
];
