import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Terms and Conditions - PhaseOne Partners",
  description: "Terms and Conditions for PhaseOne Partners Pty Ltd",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen bg-background">
      <Navbar isLight={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0224e9] to-[#011483] min-h-[300px] lg:min-h-[400px] pt-[165px] lg:pt-[200px] pb-12 lg:pb-16">
        <div className="px-4 sm:px-6 lg:px-16 relative z-10 max-w-7xl mx-auto w-full text-center">
          <h1 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[74px] text-white uppercase mb-4 lg:mb-6">
            Terms and Conditions
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 lg:space-y-8">
              {/* Introduction */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  1. Introduction
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  Welcome to PhaseOne Partners ("we", "us", "our"). These Terms
                  and Conditions govern your use of our website, digital
                  platforms, and professional services. PhaseOne Partners Pty
                  Ltd (ABN 97 679 376 464) is a specialist, proprietary deal
                  origination and advisory firm.
                </p>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  By accessing our website or engaging our services, you agree
                  to be bound by these Terms and Conditions. If you do not agree
                  with any part of these terms, please refrain from using our
                  platforms or services.
                </p>
              </div>

              {/* No Financial Advice */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  2. No Financial Advice
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  PhaseOne Partners Pty Ltd acts as a specialist consulting and
                  origination firm and does not offer financial advice.
                  Information or materials provided on our platform or during
                  our interactions are for general informational purposes only.
                </p>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  Nothing provided by us should be interpreted as financial
                  product advice, investment recommendations, or
                  deal-structuring services under the Corporations Act 2001
                  (Cth).
                </p>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  <strong>Important:</strong> We strongly encourage all clients
                  and partners to seek independent financial, legal, or tax
                  advice specific to their situation from a licensed
                  professional advisor before making any investment or strategic
                  decisions.
                </p>
              </div>

              {/* Services Provided */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  3. Services Provided
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  Our role is primarily focused on:
                </p>
                <ul className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed space-y-2 list-disc list-inside ml-4">
                  <li>
                    Market research and strategic identification of businesses.
                  </li>
                  <li>
                    Facilitating introductions between business owners and
                    capital partners.
                  </li>
                  <li>
                    Providing high-level advisory on market trends and industry
                    signals.
                  </li>
                  <li>
                    Managing the initial phases of exploratory discussions.
                  </li>
                </ul>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mt-4">
                  We work exclusively with wholesale capital partners and
                  sophisticated investors. Our services are directed at
                  professional and commercial interactions.
                </p>
              </div>

              {/* Confidentiality */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  4. Confidentiality and NDAs
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  We recognise the sensitive nature of business origination. All
                  detailed discussions and exchanges of commercial information
                  are conducted under formal Non-Disclosure Agreements (NDAs).
                  Confidentiality protocols are strictly maintained to protect
                  the interests of both business owners and capital partners.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  5. Intellectual Property
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  The content, layout, design, data, and graphics on this
                  website are protected by Australian and international
                  intellectual property laws. You may not reproduce, download,
                  or distribute any content from this site without express
                  written permission from PhaseOne Partners.
                </p>
              </div>

              {/* Use of Digital Platforms */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  6. Use of Digital Platforms
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  You agree to use our digital platforms responsibly and for
                  lawful purposes. You must not attempt to breach our security,
                  introduce malicious code, or use any automated system to
                  extract data from our platforms.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  To the maximum extent permitted by law, PhaseOne Partners
                  excludes all liability for any loss or damage (including
                  indirect, special, or consequential loss) arising from your
                  use of our website, reliance on shared information, or
                  participation in introductions. All investment and transaction
                  decisions are made independently by the respective parties.
                </p>
              </div>

              {/* Governing Law */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  8. Governing Law
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  These Terms and Conditions are governed by the laws of New
                  South Wales, Australia. Any disputes arising from these terms
                  or your use of our services will be subject to the exclusive
                  jurisdiction of the courts of New South Wales.
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  9. Contact Details
                </h2>
                <div className="space-y-4 font-inter text-base lg:text-lg text-[#333333]">
                  <p>
                    <strong>PhaseOne Partners</strong>
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:info@phaseonepartners.com.au"
                        className="text-primary hover:underline"
                      >
                        info@phaseonepartners.com.au
                      </a>
                    </p>
                    <p>
                      <strong>Phone:</strong>{" "}
                      <a
                        href="tel:+61416825603"
                        className="text-primary hover:underline"
                      >
                        +61 416 825 603
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://www.phaseonepartners.com.au"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        www.phaseonepartners.com.au
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
