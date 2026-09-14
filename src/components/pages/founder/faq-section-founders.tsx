"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import { FOUNDER_FAQS } from "./founder-faqs";

export default function FAQSectionFounders() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

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
            {FOUNDER_FAQS.slice(0, 2).map((faq) => (
              <div key={faq.id} className="group flex flex-col items-center lg:items-start bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={expandedFAQ === faq.id}
                  aria-controls={`faq-founders-answer-${faq.id}`}
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
                
                {/* The answer is always mounted. It used to be wrapped in
                    `{expandedFAQ === faq.id && (...)}`, which unmounted it when
                    collapsed and so kept every answer out of the server-rendered
                    HTML entirely — the densest content on the page, invisible to
                    crawlers. The wrapper below already hides it with
                    `max-h-0 opacity-0` + `overflow-hidden`, so the guard was
                    doing nothing the CSS wasn't (and in fact broke the collapse
                    transition, which animated an empty box). */}
                <div
                  id={`faq-founders-answer-${faq.id}`}
                  aria-hidden={expandedFAQ !== faq.id}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFAQ === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-6 w-full">
                    <div className="text-muted-foreground leading-relaxed text-center lg:text-left space-y-3">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {FOUNDER_FAQS.slice(2, 4).map((faq) => (
              <div key={faq.id} className="group flex flex-col items-center lg:items-start bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={expandedFAQ === faq.id}
                  aria-controls={`faq-founders-answer-${faq.id}`}
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
                
                {/* The answer is always mounted. It used to be wrapped in
                    `{expandedFAQ === faq.id && (...)}`, which unmounted it when
                    collapsed and so kept every answer out of the server-rendered
                    HTML entirely — the densest content on the page, invisible to
                    crawlers. The wrapper below already hides it with
                    `max-h-0 opacity-0` + `overflow-hidden`, so the guard was
                    doing nothing the CSS wasn't (and in fact broke the collapse
                    transition, which animated an empty box). */}
                <div
                  id={`faq-founders-answer-${faq.id}`}
                  aria-hidden={expandedFAQ !== faq.id}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFAQ === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-6 w-full">
                    <div className="text-muted-foreground leading-relaxed text-center lg:text-left space-y-3">
                      {faq.answer}
                    </div>
                  </div>
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

