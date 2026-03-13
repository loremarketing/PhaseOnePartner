import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Privacy Policy - PhaseOne ",
  description: "Privacy Policy for PhaseOne ",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen bg-background">
      <Navbar isLight={true} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0224e9] to-[#011483] min-h-[300px] lg:min-h-[400px] pt-[165px] lg:pt-[200px] pb-12 lg:pb-16">
        <div className="px-4 sm:px-6 lg:px-16 relative z-10 max-w-7xl mx-auto w-full text-center">
          <h1 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[74px] text-white uppercase mb-4 lg:mb-6">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 lg:space-y-8">
              {/* Section 1: Introduction */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  1. Introduction
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  PhaseOne  ("we", "us", "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, disclose, and safeguard information across our advisory services, events, newsletters, and digital platforms.
                </p>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  We comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). Where relevant, we also consider international standards (such as the EU's General Data Protection Regulation) to ensure best practice for clients with global interests.
                </p>
              </div>

              {/* Section 2: Information We Collect */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  2. Information We Collect
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  We may collect the following categories of personal information:
                </p>
                <ul className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed space-y-2 list-disc list-inside ml-4">
                  <li><strong>Identity details:</strong> Name, job title, company, professional background.</li>
                  <li><strong>Contact details:</strong> Email address, phone number, mailing address.</li>
                  <li><strong>Business and professional information:</strong> Information you provide under NDA, including strategic, financial, or operational data related to your organisation.</li>
                  <li><strong>Event and platform engagement:</strong> Registration details, attendance records, and interactions with digital platforms or online forums hosted by us.</li>
                  <li><strong>Newsletter and communications data:</strong> Subscription preferences, engagement metrics, and feedback you provide.</li>
                  <li><strong>Website usage data:</strong> IP address, browser type, device information, and traffic patterns via Google Analytics and similar tracking tools.</li>
                  <li><strong>Sensitive information (if applicable):</strong> Only where necessary and with your explicit consent (e.g., dietary requirements for events).</li>
                </ul>
              </div>

              {/* Section 3: How We Collect Information */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  3. How We Collect Information
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  We collect information through:
                </p>
                <ul className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed space-y-2 list-disc list-inside ml-4">
                  <li><strong>Direct interactions:</strong> When you engage our services, attend events, sign up for newsletters, or communicate with us.</li>
                  <li><strong>Digital platforms:</strong> When you use our websites, online tools, or client portals.</li>
                  <li><strong>Third parties:</strong> Where permitted, from publicly available sources, business , or service providers.</li>
                  <li><strong>Automated technologies:</strong> Cookies and analytics tools when you visit our websites.</li>
                </ul>
              </div>

              {/* Section 4: How We Use Information */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  4. How We Use Information
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed space-y-2 list-disc list-inside ml-4">
                  <li>Deliver our related professional services.</li>
                  <li>Organise, manage, and communicate about events, seminars, or workshops.</li>
                  <li>Send newsletters, updates, and marketing communications (where consented).</li>
                  <li>Operate and improve our digital platforms and user experience.</li>
                  <li>Conduct research, analytics, and reporting (on an aggregated, anonymised basis where possible).</li>
                  <li>Meet contractual and legal obligations, including NDAs and compliance requirements.</li>
                  <li>Protect the security and integrity of our systems, clients, and information.</li>
                </ul>
              </div>

              {/* Section 5: Disclosure of Information */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  5. Disclosure of Information
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  We may disclose information to:
                </p>
                <ul className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
                  <li>Trusted affiliates or service providers of PhaseOne </li>
                  <li>Event  and co-hosts, only as necessary for event participation.</li>
                  <li>Professional advisers (lawyers, accountants, auditors) bound by confidentiality.</li>
                  <li>Regulatory or legal authorities, where required by law.</li>
                </ul>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  • We do not sell or rent personal information to third parties.
                </p>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  • Where information is shared with international service providers (e.g., cloud hosting or analytics platforms), we take reasonable steps to ensure compliance with the APPs.
                </p>
              </div>

              {/* Section 6: Marketing and Communications */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  6. Marketing and Communications
                </h2>
                <ul className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed space-y-2 list-disc list-inside ml-4">
                  <li>You may receive newsletters, event invitations, or industry updates from us.</li>
                  <li>You can unsubscribe at any time using the link in our emails or by contacting PhaseOne  directly.</li>
                  <li>We will not add you to marketing lists without your consent.</li>
                </ul>
              </div>

              {/* Section 7: Cookies and Tracking */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  7. Cookies and Tracking
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  We use Google Analytics and cookies to understand website traffic, improve site performance, and enhance user experience. Cookies may track anonymised user behaviour. You can adjust your browser settings to refuse cookies, though this may affect website functionality.
                </p>
              </div>

              {/* Section 8: Data Security */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  8. Data Security
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  We take all reasonable steps to protect personal information, including:
                </p>
                <ul className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed space-y-2 list-disc list-inside ml-4">
                  <li>Secure storage (digital and physical).</li>
                  <li>Access controls and authentication.</li>
                  <li>Confidentiality protocols under Non-Disclosure Agreements (NDAs).</li>
                  <li>Regular monitoring and updates of systems to prevent unauthorised access or misuse.</li>
                </ul>
              </div>

              {/* Section 9: Data Retention */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  9. Data Retention
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  We retain personal information only as long as necessary to fulfil its purpose, comply with legal obligations, or meet professional record-keeping standards. When information is no longer required, it will be securely destroyed or de-identified.
                </p>
              </div>

              {/* Section 10: Access and Correction */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  10. Access and Correction
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  You may request access to the personal information we hold about you, or request corrections if it is inaccurate, out-of-date, or incomplete. Requests can be made in writing (see Contact section below).
                </p>
              </div>

              {/* Section 11: International Clients */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  11. International Clients (Optional GDPR Note)
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  While our primary focus is Australian clients, international users should note that we may process limited personal data from outside Australia. If GDPR applies, we will only process your data on lawful bases such as consent, contractual necessity, or legitimate interest.
                </p>
              </div>

              {/* Section 12: Changes to This Policy */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  12. Changes to This Policy
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes will be posted on our website with an updated revision date.
                </p>
              </div>

              {/* Section 13: ContactPhaseOne */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  13. PhaseOne 
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-4">
                  For questions, concerns, or requests regarding your privacy:
                </p>
                <div className="space-y-2 font-inter text-base lg:text-lg text-[#333333]">
                  <p>
                    <strong>PhaseOne </strong>
                  </p>
                  <p>
                    <strong>Contact:</strong> Lincoln Stollery, Founder and Managing Director
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a 
                      href="https://www.phaseone.com.au" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.phaseone.com.au
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a 
                      href="mailto:info@phaseone.com.au" 
                      className="text-primary hover:underline"
                    >
                      info@phaseone.com.au
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

