import type { Faq } from "@/components/pages/founder/founder-faqs";

/**
 * Shared by the rendered accordion (`faq-section-investors.tsx`, a client
 * component) and the FAQPage JSON-LD emitted from the route's server layout.
 * Deliberately has no "use client" directive so both can import it.
 *
 * Every entry carries an `answerText` alongside the JSX `answer` — see the note
 * on the `Faq` type for why the two live side by side.
 */
export const INVESTOR_FAQS: Faq[] = [
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
      answerText:
        "Our white-label model seamlessly extends your internal origination capabilities while maintaining your brand integrity. We operate as an extension of your team, conducting all outreach, relationship-building, and engagement under your firm's brand, using your specific messaging and investment thesis. To business owners, we appear as part of your internal origination team, not a third-party intermediary. We are flexible on disclosure based on your preferences. We ensure consistency in how we are positioned, but the core goal is always to build authentic, trust-based relationships on your behalf, positioning you as a strategic partner.",
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
      answerText:
        "The critical distinction is that we represent the buy-side, not the exit-side. Traditional M&A advisors represent exiting businesses and run auction processes focused on maximising sale price. We source proprietary opportunities for our clients (PE firms, family offices, corporates) often before a business has decided to exit or engaged an advisor. This approach provides a first-mover advantage and the opportunity to build trust-based relationships long before a business is brought to market — which research consistently shows leads to better valuations and superior long-term outcomes than auction processes. Our clients pay PhaseOne Partners to find and connect them with business owners in the niches and industries that they're focussed on, providing business owners with an on-ramp to capital partners who understand their business and industry, and can provide a flexible structure to suit their needs.",
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
      answerText:
        "Our value proposition is rooted in dedicated focus, proven methodology, and specialised PE origination expertise. Market mapping: we conduct comprehensive, sector-specific analysis to identify businesses aligned with your investment thesis — not just companies actively looking to exit. Our dedicated team thoroughly map all businesses in the identified niche using our proprietary platform. Relationship-driven outreach: we engage directly with founders and owners through personalised outreach, positioning your firm as a strategic partner. Dedicated bandwidth: we provide full-time focus on systematic proprietary sourcing. Your internal team is often stretched; we supplement their efforts with specialised capacity and established playbooks developed over 7+ years in-house at PE firms. Pre-qualification: we pre-qualify all opportunities to ensure they meet your investment criteria, delivering fewer, higher-quality, strategically-aligned names.",
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
      answerText:
        "We have deep experience in sectors including healthcare, business services, technology, education and training, and consumer, but our methodology is adaptable across industries. We typically focus on the lower-mid to mid-market space (businesses with $1-20 million in EBITDA), but our process scales based on your fund's strategy to include platform and bolt-on identification. Representing your thesis is paramount. We invest significant time understanding your specific investment criteria, strategic objectives, value creation playbook, and culture. We then translate this into authentic outreach, messaging, and screening criteria, acting as strategic extensions of your team who deeply understand what you're looking for.",
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
      answerText:
        "Our commercial model is designed for alignment and flexibility. Fee structure options: specific fees depend on the scope, complexity, and exclusivity of the work. ROI consideration: PhaseOne Partners offers institutional-grade sourcing at a fraction of the cost of building an equivalent in-house team ($500k+ fixed annual cost). Sourcing just one proprietary deal per year that you wouldn't have otherwise found, or improving deal terms (proprietary deals typically close at 1-2 turns of EBITDA lower than auctions), creates value that vastly exceeds our fees. We establish clear KPIs to ensure objective evaluation of your ROI. PhaseOne Partners delivers disciplined, relationship-focused proprietary origination capabilities for PE firms, family offices, corporates, and private credit funds looking to enhance their deal sourcing without the fixed overhead of large internal teams.",
    },
  ];
