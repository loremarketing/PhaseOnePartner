import {
  BookOpen,
  Cpu,
  Edit3,
  Factory,
  GraduationCap,
  HardHat,
  HeartPulse,
  Landmark,
  Megaphone,
  Shield,
  ThumbsUp,
  Truck,
  Wheat,
  Zap,
} from "lucide-react";

/**
 * The site's link tree, in one place.
 *
 * Both navbars read from this: the marketing header and the v4 header used by
 * /home-v4 and /industries. They previously kept separate copies, which is how
 * the two ended up offering different menus.
 */
export interface SubMenuItem {
  name: string;
  href: string;
  icon: any;
  description: string;
}

export interface DropdownItem {
  name: string;
  href: string;
  icon: any;
  description: string;
  submenu?: SubMenuItem[];
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: any;
  description?: string;
  dropdown?: DropdownItem[];
}

export const navigation: NavigationItem[] = [
  { name: "For Business Owners", href: "/for-founders" },
  { name: "For Capital Partners", href: "/for-investors" },
  {
    name: "Industries",
    href: "/industries",
    dropdown: [
      {
        name: "Manufacturing & Industrial",
        href: "/industries#manufacturing-industrial",
        icon: Factory,
        description: "Operational excellence across manufacturing and industry.",
      },
      {
        name: "Technology & Digital",
        href: "/industries#technology-digital",
        icon: Cpu,
        description: "Scaling talent and innovation for technology businesses.",
      },
      {
        name: "Healthcare & Life Sciences",
        href: "/industries#healthcare-life-sciences",
        icon: HeartPulse,
        description: "Clinical, care and life sciences organisations.",
      },
      {
        name: "Financial & Professional Services",
        href: "/industries#financial-professional-services",
        icon: Landmark,
        description: "Finance, advisory and regulated professional firms.",
      },
      {
        name: "Education & Training",
        href: "/industries#education-training",
        icon: GraduationCap,
        description: "Education providers and workforce training.",
      },
      {
        name: "Engineering, Construction & Facilities",
        href: "/industries#engineering-construction-facilities",
        icon: HardHat,
        description: "Built environment, engineering and facility services.",
      },
      {
        name: "Energy, Environment & Utilities",
        href: "/industries#energy-environment-utilities",
        icon: Zap,
        description: "Energy, utilities and sustainability businesses.",
      },
      {
        name: "Transport, Automotive & Aerospace",
        href: "/industries#transport-automotive-aerospace",
        icon: Truck,
        description: "Logistics, mobility, automotive and aerospace.",
      },
      {
        name: "Food, Agriculture & Consumer",
        href: "/industries#food-agriculture-consumer",
        icon: Wheat,
        description: "Agriculture, food and consumer products.",
      },
      {
        name: "Business, Media & Marketing",
        href: "/industries#business-media-marketing",
        icon: Megaphone,
        description: "Business services, media, marketing and communications.",
      },
    ],
  },
  {
    name: "Explore",
    href: "#",
    dropdown: [
      {
        name: "About",
        href: "/about-us",
        icon: BookOpen,
        description: "Learn more about PhaseOne Partners.",
      },
      {
        name: "Terms and Conditions",
        href: "/terms-and-conditions",
        icon: Edit3,
        description: "Read our terms and conditions.",
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
        icon: Shield,
        description: "Understand how we protect your data.",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    icon: ThumbsUp,
    description: "Get in touch with our team.",
  },
];
