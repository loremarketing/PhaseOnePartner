import { siteConfig } from "@/lib/config/site";

import { JsonLd } from "./json-ld";

/**
 * Organization + WebSite, mounted once in the root layout so every page carries
 * it. Both get a stable `@id` so other schema on the site can reference them
 * instead of restating the company.
 *
 * Deliberately NOT `LocalBusiness` (or `ProfessionalService`): those expect a
 * `PostalAddress`, and this site publishes no street address anywhere — only a
 * phone, an email, and "New South Wales" as a legal jurisdiction. Inventing an
 * address to satisfy the schema would be fabricated NAP data, which is the one
 * mistake in local SEO you cannot walk back. `Organization` is the honest type
 * for what is actually published.
 *
 * `logo` points at /icon.png rather than the brand WebP files: Google requires
 * an Organization logo to be PNG or JPG and rejects WebP.
 */
export function OrganizationJsonLd() {
  const orgId = `${siteConfig.url}/#organization`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": orgId,
            name: siteConfig.name,
            legalName: siteConfig.legalName,
            url: siteConfig.url,
            logo: `${siteConfig.url}/icon.png`,
            description: siteConfig.description,
            email: siteConfig.email,
            telephone: siteConfig.phone,
            // The ABN from the terms page — a real, checkable company identifier.
            identifier: {
              "@type": "PropertyValue",
              name: "ABN",
              value: siteConfig.abn,
            },
            areaServed: [
              { "@type": "Country", name: "Australia" },
              { "@type": "Country", name: "New Zealand" },
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              telephone: siteConfig.phone,
              email: siteConfig.email,
              areaServed: ["AU", "NZ"],
              availableLanguage: "en",
            },
            sameAs: [...siteConfig.sameAs],
          },
          {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
            url: siteConfig.url,
            name: siteConfig.name,
            inLanguage: "en-AU",
            publisher: { "@id": orgId },
          },
        ],
      }}
    />
  );
}
