/**
 * Industries We Service — content extracted verbatim from Figma
 * (LB - Aqua Romane, desktop frame 1555:2825) via the local plugin bridge.
 * Icons were exported from the same nodes to public/industries/icons/.
 *
 * Bands alternate grey/white down the page, starting grey.
 */
export type IndustryTile = { label: string; icon: string };
export type Industry = {
  slug: string;
  title: string;
  intro: string;
  tiles: IndustryTile[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "manufacturing-industrial",
    title: "Manufacturing & Industrial",
    intro: "Supporting operational excellence, workforce development, and digital transformation across manufacturing and industrial organisations.",
    tiles: [
      { label: "Industrial Manufacturing", icon: "/industries/icons/01-industrial-manufacturing.svg" },
      { label: "Food Manufacturing", icon: "/industries/icons/01-food-manufacturing.svg" },
      { label: "Packaging Manufacturing", icon: "/industries/icons/01-packaging-manufacturing.svg" },
      { label: "Precision Engineering", icon: "/industries/icons/01-precision-engineering.svg" },
      { label: "Metal Fabrication", icon: "/industries/icons/01-metal-fabrication.svg" },
      { label: "Plastics Manufacturing", icon: "/industries/icons/01-plastics-manufacturing.svg" },
      { label: "Machinery & Equipment", icon: "/industries/icons/01-machinery-and-equipment.svg" },
      { label: "Automotive Manufacturing", icon: "/industries/icons/01-automotive-manufacturing.svg" },
      { label: "Textile Manufacturing", icon: "/industries/icons/01-textile-manufacturing.svg" },
      { label: "Industrial Services", icon: "/industries/icons/01-industrial-services.svg" },
      { label: "Distribution", icon: "/industries/icons/01-distribution.svg" },
      { label: "Chemicals", icon: "/industries/icons/01-chemicals.svg" },
    ],
  },
  {
    slug: "technology-digital",
    title: "Technology & Digital",
    intro: "Helping technology-driven businesses scale talent, innovation, and digital capabilities in a rapidly evolving market.",
    tiles: [
      { label: "SaaS", icon: "/industries/icons/02-saas.svg" },
      { label: "Cybersecurity", icon: "/industries/icons/02-cybersecurity.svg" },
      { label: "IT Support", icon: "/industries/icons/02-it-support.svg" },
      { label: "Software Development", icon: "/industries/icons/02-software-development.svg" },
      { label: "AI & Automation", icon: "/industries/icons/02-ai-and-automation.svg" },
      { label: "Data & Analytics", icon: "/industries/icons/02-data-and-analytics.svg" },
      { label: "Cloud Services", icon: "/industries/icons/02-cloud-services.svg" },
      { label: "Managed IT Services", icon: "/industries/icons/02-managed-it-services.svg" },
      { label: "Electronics", icon: "/industries/icons/02-electronics.svg" },
      { label: "CRM Platforms", icon: "/industries/icons/02-crm-platforms.svg" },
    ],
  },
  {
    slug: "healthcare-life-sciences",
    title: "Healthcare & Life Sciences",
    intro: "Delivering specialised workforce and project solutions that support patient care, research, and healthcare innovation.",
    tiles: [
      { label: "Medical Clinics", icon: "/industries/icons/03-medical-clinics.svg" },
      { label: "Dental Clinics", icon: "/industries/icons/03-dental-clinics.svg" },
      { label: "Allied Health", icon: "/industries/icons/03-allied-health.svg" },
      { label: "Cosmetic Clinics", icon: "/industries/icons/03-cosmetic-clinics.svg" },
      { label: "Aged Care", icon: "/industries/icons/03-aged-care.svg" },
      { label: "Disability Services", icon: "/industries/icons/03-disability-services.svg" },
      { label: "Mental Health Services", icon: "/industries/icons/03-mental-health-services.svg" },
      { label: "Physiotherapy", icon: "/industries/icons/03-physiotherapy.svg" },
      { label: "Specialist Practices", icon: "/industries/icons/03-specialist-practices.svg" },
      { label: "Medical Products", icon: "/industries/icons/03-medical-products.svg" },
      { label: "Life Sciences", icon: "/industries/icons/03-life-sciences.svg" },
    ],
  },
  {
    slug: "financial-professional-services",
    title: "Financial & Professional Services",
    intro: "Connecting organisations with professionals who enhance compliance, performance, and strategic decision-making.",
    tiles: [
      { label: "Banking", icon: "/industries/icons/04-banking.svg" },
      { label: "Mortgage Broking", icon: "/industries/icons/04-mortgage-broking.svg" },
      { label: "Wealth Management", icon: "/industries/icons/04-wealth-management.svg" },
      { label: "Insurance", icon: "/industries/icons/04-insurance.svg" },
      { label: "Taxation", icon: "/industries/icons/04-taxation.svg" },
      { label: "Accounting and Bookkeeping", icon: "/industries/icons/04-accounting-and-bookkeeping.svg" },
      { label: "FinTech", icon: "/industries/icons/04-fintech.svg" },
      { label: "Regulatory Compliance", icon: "/industries/icons/04-regulatory-compliance.svg" },
      { label: "Financial Planning", icon: "/industries/icons/04-financial-planning.svg" },
      { label: "Professional Services", icon: "/industries/icons/04-professional-services.svg" },
    ],
  },
  {
    slug: "education-training",
    title: "Education & Training",
    intro: "Enabling educational institutions and training providers to strengthen learning outcomes and organisational performance.",
    tiles: [
      { label: "Universities", icon: "/industries/icons/05-universities.svg" },
      { label: "Registered Training Organisations", icon: "/industries/icons/05-registered-training-organizations.svg" },
      { label: "Online Education", icon: "/industries/icons/05-online-education.svg" },
      { label: "Corporate Training", icon: "/industries/icons/05-corporate-training.svg" },
      { label: "Early Learning", icon: "/industries/icons/05-early-learning.svg" },
      { label: "Private Colleges", icon: "/industries/icons/05-private-colleges.svg" },
      { label: "Coaching & Consulting", icon: "/industries/icons/05-coaching-and-consulting.svg" },
      { label: "Vocational Education", icon: "/industries/icons/05-vocational-education.svg" },
      { label: "Professional Development", icon: "/industries/icons/05-professional-development.svg" },
    ],
  },
  {
    slug: "engineering-construction-facilities",
    title: "Engineering, Construction & Facilities",
    intro: "Providing expertise and talent solutions for complex projects, infrastructure development, and facility management.",
    tiles: [
      { label: "Engineering Services", icon: "/industries/icons/06-engineering-services.svg" },
      { label: "Building Products", icon: "/industries/icons/06-building-products.svg" },
      { label: "Facility Services", icon: "/industries/icons/06-facility-services.svg" },
      { label: "Construction Services", icon: "/industries/icons/06-construction-services.svg" },
      { label: "Property Services", icon: "/industries/icons/06-property-services.svg" },
      { label: "Building Materials", icon: "/industries/icons/06-building-materials.svg" },
    ],
  },
  {
    slug: "energy-environment-utilities",
    title: "Energy, Environment & Utilities",
    intro: "Supporting sustainable growth, operational efficiency, and workforce needs across energy and utility sectors.",
    tiles: [
      { label: "Energy", icon: "/industries/icons/07-energy.svg" },
      { label: "Environmental Services", icon: "/industries/icons/07-environmental-services.svg" },
      { label: "Water & Wastewater", icon: "/industries/icons/07-water-and-wastewater.svg" },
      { label: "Sustainability", icon: "/industries/icons/07-sustainability.svg" },
      { label: "Renewable Energy", icon: "/industries/icons/07-renewable-energy.svg" },
    ],
  },
  {
    slug: "transport-automotive-aerospace",
    title: "Transport, Automotive & Aerospace",
    intro: "Supporting innovation, safety, and operational excellence across transportation, automotive, and aerospace industries.",
    tiles: [
      { label: "Transportation Services", icon: "/industries/icons/08-transportation-services.svg" },
      { label: "Logistics", icon: "/industries/icons/08-logistics.svg" },
      { label: "Automotive", icon: "/industries/icons/08-automotive.svg" },
      { label: "Automotive Manufacturing", icon: "/industries/icons/08-automotive-manufacturing.svg" },
      { label: "Aerospace & Defense", icon: "/industries/icons/08-aerospace-and-defense.svg" },
    ],
  },
  {
    slug: "food-agriculture-consumer",
    title: "Food, Agriculture & Consumer",
    intro: "Helping organisations meet evolving consumer demands through skilled talent and industry-focused solutions.",
    tiles: [
      { label: "Agriculture", icon: "/industries/icons/09-agriculture.svg" },
      { label: "Food & Beverage", icon: "/industries/icons/09-food-and-beverage.svg" },
      { label: "Food Service", icon: "/industries/icons/09-food-service.svg" },
      { label: "Consumer Products", icon: "/industries/icons/09-consumer-products.svg" },
    ],
  },
  {
    slug: "business-media-marketing",
    title: "Business, Media & Marketing",
    intro: "Driving business growth with expertise in communications, branding, marketing, and commercial operations.",
    tiles: [
      { label: "Business Services", icon: "/industries/icons/10-business-services.svg" },
      { label: "Media & Marketing", icon: "/industries/icons/10-media-and-marketing.svg" },
      { label: "Advertising", icon: "/industries/icons/10-advertising.svg" },
      { label: "Communications", icon: "/industries/icons/10-communications.svg" },
      { label: "Creative Services", icon: "/industries/icons/10-creative-services.svg" },
    ],
  },
];
