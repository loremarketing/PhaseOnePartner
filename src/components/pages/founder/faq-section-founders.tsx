"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

export default function FAQSectionFounders() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
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
      )
    },
    {
      id: 2,
      question: "How is this different from when investment bankers, M&A advisors, or business brokers have approached me in the past?",
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
      )
    },
    {
      id: 3,
      question: "What information do you need from me, and how do you ensure confidentiality? I don't want my competitors, customers, or employees finding out.",
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
      )
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
      )
    }
  ];

  const toggleFAQ = (faqId: number) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-10 lg:py-20 px-6 lg:px-16 bg-gradient-to-br from-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-muted/50 border border-border/50 rounded-full px-6 py-2">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                FAQ
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Still have questions?
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {faqs.slice(0, 2).map((faq) => (
              <div key={faq.id} className="group flex flex-col items-center lg:items-start bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-center lg:justify-between text-center lg:text-left"
                >
                  <h3 className="font-semibold text-foreground text-base md:text-lg pr-4 w-full text-center lg:text-left">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-muted-foreground transition-all duration-200 group-hover:text-primary flex-shrink-0 ${
                      expandedFAQ === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFAQ === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {expandedFAQ === faq.id && (
                    <div className="pb-6 w-full">
                      <div className="text-muted-foreground leading-relaxed text-center lg:text-left space-y-3">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqs.slice(2, 4).map((faq) => (
              <div key={faq.id} className="group flex flex-col items-center lg:items-start bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-center lg:justify-between text-center lg:text-left"
                >
                  <h3 className="font-semibold text-foreground text-base md:text-lg pr-4 w-full text-center lg:text-left">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-muted-foreground transition-all duration-200 group-hover:text-primary flex-shrink-0 ${
                      expandedFAQ === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFAQ === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {expandedFAQ === faq.id && (
                    <div className="pb-6 w-full">
                      <div className="text-muted-foreground leading-relaxed text-center lg:text-left space-y-3">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}

