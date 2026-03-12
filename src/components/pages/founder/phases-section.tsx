"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

export default function PhasesSection() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(2); // Default to Phase 2 expanded

  const phases = [
    {
      id: 1,
      title: "Phase 1: Initial Exploration and Preparation",
      duration: "2–4 weeks",
      description: "We meet to discuss your goals, review financials, and understand your business. Confidentiality agreements protect your information from the start."
    },
    {
      id: 2,
      title: "Phase 2: Early Capital Partner Engagement",
      duration: "3–6 weeks",
      description: "Targeted outreach to a curated set of pre-qualified capital partners. Introductory calls and teaser information shared to explore fit."
    },
    {
      id: 3,
      title: "Phase 3: Indicative Offers / LOIs",
      duration: "2–3 weeks",
      description: "Capital partners submit indicative offers or letters of interest. You'll see valuation ranges, deal structures, and strategic rationale."
    },
    {
      id: 4,
      title: "Phase 4: Due Diligence",
      duration: "8–12 weeks",
      description: "In-depth analysis of financial, legal, and commercial aspects. Meetings, data rooms, and site visits ensure clarity and transparency."
    },
    {
      id: 5,
      title: "Phase 5: Final Negotiation and Signing",
      duration: "3–5 weeks",
      description: "Final offer negotiated. Legal documentation and warranties completed. The deal is signed and announced."
    },
    {
      id: 6,
      title: "Phase 6: Completion and Transition",
      duration: "2–4 weeks, ongoing handover",
      description: "Funds flow and ownership transfers. Governance is established and cultural integration begins, with your role tailored to your goals."
    }
  ];

  const togglePhase = (phaseId: number) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  return (
    <section className="py-20 px-6 lg:px-16 bg-gradient-to-br from-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
          {/* Left Column - Centered Text Content */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left space-y-6 max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                From the First Call to Well Beyond the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Signed Agreement</span>
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 200 80"
                    preserveAspectRatio="none"
                  >
                    <ellipse
                      cx="100"
                      cy="40"
                      rx="90"
                      ry="35"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                There are 6 simple phases of exiting your business or raising capital — and we handle them all.
              </p>
            </div>
          </div>

          {/* Right Column - Enhanced Phases Accordion */}
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  The Phases of Doing a Deal
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-0">
                {phases.map((phase, index) => (
                  <div key={phase.id} className="group">
                    <button
                      onClick={() => togglePhase(phase.id)}
                      className="w-full flex items-center justify-between p-2 text-left hover:bg-muted/50 transition-all duration-200 rounded-xl border border-transparent hover:border-primary/20"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm font-sm">
                            {phase.id}
                          </div>
                          <h4 className="font-bold text-foreground lg:text-lg text-sm md:text-base">
                            {phase.title}
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground ml-11">
                          {phase.duration}
                        </p>
                      </div>
                      <ChevronDownIcon 
                        className={`w-5 h-5 text-muted-foreground transition-all duration-200 group-hover:text-primary ${
                          expandedPhase === phase.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedPhase === phase.id ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {expandedPhase === phase.id && (
                        <div className="pb-4 ml-10">
                          <p className="text-normal text-foreground leading-relaxed bg-muted/30 p-3 rounded-lg">
                            {phase.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced decorative element */}
            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <svg 
                width="140" 
                height="140" 
                viewBox="0 0 140 140" 
                className="text-primary/10"
              >
                <defs>
                  <linearGradient id="decorativeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 20 Q40 10 60 30 T100 20 Q110 40 90 60 T100 100 Q80 110 60 90 T20 100 Q10 80 30 60 T20 20"
                  stroke="url(#decorativeGradient)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M100 20 L110 10"
                  stroke="url(#decorativeGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="70" cy="70" r="3" fill="url(#decorativeGradient)" className="animate-pulse" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
