import { BookOpen, Edit3, Shield, ThumbsUp } from "lucide-react";

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
