"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

export default function FAQSectioninvestors() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How does your white-label model work?",
      answer: (
        <>
          <p>
            Our white-label model seamlessly extends your internal origination
            capabilities while maintaining your brand integrity.
          </p>
          <p>
            We operate as an extension of your team, conducting all outreach,
            relationship-building, and engagement under your firm's brand, using
            your specific messaging and investment thesis.
          </p>
          <p>
            To business owners, we appear as part of your internal origination
            team, not a third-party intermediary. We are flexible on disclosure
            based on your preferences.
          </p>
          <p>
            We ensure consistency in how we are positioned, but the core goal is
            always to build authentic, trust-based relationships on your behalf,
            positioning you as a strategic partner.
          </p>
        </>
      ),
    },
    {
      id: 2,
      question:
        "What makes your approach different from traditional M&A advisors or investment bankers? ",
      answer: (
        <>
          <p>
            The critical distinction is that we represent the buy-side, not the
            exit-side. Traditional M & A advisors represent exiting businesses
            and run auction processes focused on maximising sale price.
          </p>
          <p>
            We source proprietary opportunities for our clients (PE firms,
            Family Offices, Corporates) often before a business has decided to
            exit or engaged an advisor. This approach provides a first-mover
            advantage and the opportunity to build trust-based relationships,
            long before a business is brought to market - which research
            consistently shows leads to better valuations and superior long-term
            outcomes than auction processes.
          </p>
          <p>
            Our clients pay PhaseOne Partners to find and connect them with
            business owners in the niches and industries that they're focussed
            on, providing business owners with an on-ramp to capital partners
            who understand their business and industry, and can provide a
            flexible structure to suit their needs.
          </p>
        </>
      ),
    },
    {
      id: 3,
      question:
        "How do you source deals, and how can you deliver proprietary opportunities that our internal team hasn't already found?",
      answer: (
        <>
          <p>
            Our value proposition is rooted in dedicated focus, proven
            methodology, and specialised PE origination expertise.
          </p>
          <ul className="list-disc space-y-2 pl-5 mt-3 text-left">
            <li>
              <span className="font-semibold">Market mapping:</span> we conduct
              comprehensive, sector-specific analysis to identify businesses
              aligned with your investment thesis—not just companies actively
              looking to exit. Our dedicated team thoroughly map all businesses
              in the identified niche using our proprietary platform.
            </li>
            <li>
              <span className="font-semibold">
                Relationship-driven outreach:
              </span>{" "}
              we engage directly with founders and owners through personalised
              outreach, positioning your firm as a strategic partner.
            </li>
            <li>
              <span className="font-semibold">Dedicated bandwidth:</span> we
              provide full-time focus on systematic proprietary sourcing. Your
              internal team is often stretched; we supplement their efforts with
              specialised capacity and established playbooks developed over 7+
              years in-house at PE firms.
            </li>
            <li>
              <span className="font-semibold">Pre-qualification:</span> we
              pre-qualify all opportunities to ensure they meet your investment
              criteria, delivering fewer, higher-quality, strategically-aligned
              names.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      question:
        "What sectors and deal sizes do you focus on, and how does PhaseOne Partners ensure our specific investment thesis is properly represented?",
      answer: (
        <>
          <p>
            We have deep experience in sectors including Healthcare, Business
            Services, Technology, Education & Training, and Consumer, but our
            methodology is adaptable across industries.
          </p>
          <p>
            We typically focus on the lower-mid to mid-market space (businesses
            with $1-20 million in EBITDA), but our process scales based on your
            fund's strategy to include platform and bolt-on identification.
          </p>
          <p className="font-semibold">
            Representing your thesis: This is paramount.
          </p>
          <p>
            We invest significant time understanding your specific investment
            criteria, strategic objectives, value creation playbook, and
            culture. We then translate this into authentic outreach, messaging,
            and screening criteria, acting as strategic extensions of your team
            who deeply understand what you're looking for.
          </p>
        </>
      ),
    },
    {
      id: 5,
      question:
        "What's your fee structure, and how do we think about ROI on outsourced origination services?",
      answer: (
        <>
          <p>Our commercial model is designed for alignment and flexibility.</p>
          <p className="font-semibold">Fee structure options:</p>
          <p>
            Specific fees depend on the scope, complexity, and exclusivity of
            the work.
          </p>
          <p className="font-semibold">ROI consideration:</p>
          <p>
            PhaseOne Partners offers institutional-grade sourcing at a fraction
            of the cost of building an equivalent in-house team ($500k+ fixed
            annual cost).
          </p>
          <p>
            Sourcing just one proprietary deal per year that you wouldn't have
            otherwise found, or improving deal terms (proprietary deals
            typically close at 1-2 turns of EBITDA lower than auctions), creates
            value that vastly exceeds our fees.
          </p>
          <p>
            We establish clear KPIs to ensure objective evaluation of your ROI.
            PhaseOne Partners delivers disciplined, relationship-focused
            proprietary origination capabilities for PE firms, family offices,
            corporates, and private credit funds looking to enhance their deal
            sourcing without the fixed overhead of large internal teams.
          </p>
        </>
      ),
    },
  ];

  const toggleFAQ = (faqId: number) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-10 px-6 lg:px-16 bg-gradient-to-br from-muted/20 to-background relative overflow-hidden">
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
            {faqs.slice(0, 3).map((faq) => (
              <div
                key={faq.id}
                className="group flex flex-col items-center lg:items-start bg-primary/5 rounded-2xl p-6 border border-primary/10"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-center lg:justify-between text-center lg:text-left"
                >
                  <h3 className="font-semibold text-foreground text-base md:text-lg pr-4 w-full text-center lg:text-left">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-muted-foreground transition-all duration-200 group-hover:text-primary flex-shrink-0 ${
                      expandedFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFAQ === faq.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
            {faqs.slice(3, 5).map((faq) => (
              <div
                key={faq.id}
                className="group flex flex-col items-center lg:items-start bg-primary/5 rounded-2xl p-6 border border-primary/10"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-center lg:justify-between text-center lg:text-left"
                >
                  <h3 className="font-semibold text-foreground text-base md:text-lg pr-4 w-full text-center lg:text-left">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-muted-foreground transition-all duration-200 group-hover:text-primary flex-shrink-0 ${
                      expandedFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFAQ === faq.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
