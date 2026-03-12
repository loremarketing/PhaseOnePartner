"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

export default function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I determine my target audience?",
      answer:
        "We work with you to analyse your existing customer base, market research, and business goals to identify your ideal target audience. This includes demographic analysis, psychographic profiling, and understanding your value proposition.",
    },
    {
      id: 2,
      question: "How much does social media advertising cost?",
      answer:
        "Social media advertising costs vary based on your industry, target audience, and campaign objectives. We provide transparent pricing and work within your budget to maximise ROI. ContactPhaseOne Partnersfor a customised quote based on your specific needs.",
    },
    {
      id: 3,
      question: "What kind of social media advertising packages do you offer?",
      answer:
        "We offer comprehensive packages including campaign strategy, creative development, ad management, and performance optimisation. Our packages are tailored to your business size and goals, from startup packages to enterprise-level solutions.",
    },
    {
      id: 4,
      question:
        "How do I measure return on investment on my social media advertising?",
      answer:
        "We provide detailed analytics and reporting to track key metrics including cost per acquisition, conversion rates, and revenue attribution. Our dashboard gives you real-time insights into campaign performance and ROI.",
    },
    {
      id: 5,
      question:
        "What's the difference between social media marketing and paid social media advertising?",
      answer:
        "Social media marketing includes organic content creation, community management, and brand building. Paid social media advertising involves promoting content through paid placements to reach specific audiences and drive measurable results.",
    },
    {
      id: 6,
      question:
        "What's the difference between a boosted post and an ad on Facebook?",
      answer:
        "A boosted post is a simple way to promote existing organic content to a broader audience. Facebook ads offer more advanced targeting options, multiple ad formats, and detailed campaign management tools for more sophisticated marketing strategies.",
    },
  ];

  const toggleFAQ = (faqId: number) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-20 px-6 lg:px-16 bg-gradient-to-br from-muted/20 to-background relative overflow-hidden">
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
                      <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqs.slice(3, 6).map((faq) => (
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
                      <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                        {faq.answer}
                      </p>
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
