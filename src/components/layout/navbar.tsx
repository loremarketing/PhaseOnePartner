"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Briefcase,
  Users,
  Rocket,
  Layers,
  FileText,
  BookOpen,
  Search,
  BarChart2,
  Target,
  TrendingUp,
  Zap,
  Monitor,
  Globe,
  Edit3,
  Database,
  Heart,
  Award,
  ThumbsUp,
  Shield,
  Phone,
} from "lucide-react";
import { HamburgerIcon } from "@/components/ui/hamburger-icon";
import MobileMenu from "./mobile-menu";
import {
  navigation,
  type DropdownItem,
  type SubMenuItem,
} from "./nav-items";


export default function Navbar({ isLight }: { isLight?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Function to calculate total items including submenus
  const calculateTotalItems = (dropdown: DropdownItem[]) => {
    return dropdown.reduce((total, item) => {
      return total + 1 + (item.submenu ? item.submenu.length : 0);
    }, 0);
  };

  // Function to calculate dynamic grid layout
  const calculateGridLayout = (items: number) => {
    if (items <= 3) {
      return "grid-cols-1";
    } else if (items <= 6) {
      return "grid-cols-2";
    } else if (items <= 12) {
      return "grid-cols-3";
    }
    return "grid-cols-3";
  };

  // Function to calculate dropdown width
  const calculateDropdownWidth = (items: number) => {
    if (items <= 3) {
      return "min-w-[300px]";
    } else if (items <= 6) {
      return "min-w-[600px]";
    } else if (items <= 12) {
      return "min-w-[800px]";
    }
    return "min-w-[1000px]";
  };

  return (
    <header
      className={`${scrolled ? "fixed md:absolute" : "absolute"} top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      {/* Blue background for desktop */}

      <div
        className={`max-w-[1600px] mx-auto px-6 lg:px-16 relative ${scrolled ? "md:py-0 py-2" : ""}`}
      >
        <nav
          className={`${
            scrolled ? "" : ""
          } py-4 lg:px-2 rounded-lg transition-all duration-300`}
          aria-label="Global"
        >
          {/* Desktop: White rounded navbar */}
          <div className="hidden lg:flex items-center justify-between bg-white px-2 py-2 rounded-xl shadow-sm">
            {/* Logo */}
            <div className="flex flex-shrink-0 ">
              <Link href="/" className="ml-1.5 flex items-center">
                <Image
                  src="/logo.black.webp"
                  alt="PhaseOne Partners Logo"
                  width={164}
                  height={39}
                  className="h-8 w-auto"
                  priority
                  quality={100}
                  unoptimized
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="flex gap-x-8 font-poppins">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() =>
                    item.dropdown && handleMouseEnter(item.name)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <>
                      <button className="flex items-center gap-1 text-[14px] text-[#333333] leading-6 cursor-pointer">
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 text-[#333333] transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Invisible bridge to maintain hover state */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2  right-0 top-full h-8 ${calculateDropdownWidth(
                          calculateTotalItems(item.dropdown),
                        )} ${
                          activeDropdown === item.name ? "block" : "hidden"
                        }`}
                      />

                      {/* Multi-level Dropdown Menu */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-10 mt-4 w-full ${calculateDropdownWidth(
                          calculateTotalItems(item.dropdown),
                        )} rounded-lg bg-background px-6 py-4 shadow-2xl ring-1 transition-all duration-300 origin-top-left 
                                            ${
                                              activeDropdown === item.name
                                                ? "opacity-100 scale-100"
                                                : "opacity-0 scale-95 pointer-events-none"
                                            }`}
                      >
                        <div className="relative">
                          <div
                            className={`grid ${calculateGridLayout(
                              calculateTotalItems(item.dropdown),
                            )} z-[100] w-full`}
                          >
                            {item.dropdown.map((subItem, index) => (
                              <div key={subItem.name} className="space-y-1">
                                {/* Main submenu item */}
                                <Link
                                  href={subItem.href}
                                  target={
                                    subItem.name == "Careers"
                                      ? "_blank"
                                      : "_self"
                                  }
                                  className="group hover:bg-foreground/5 p-3 w-full flex items-center gap-3  transition-colors"
                                >
                                  <span className="text-xl text-primary">
                                    <subItem.icon className="w-6 h-6" />
                                  </span>
                                  <div className="flex flex-col">
                                    <span className="text-[16px] text-foreground font-bold underline">
                                      {subItem.name}
                                    </span>
                                  </div>
                                </Link>

                                {/* Further submenu items */}
                                {subItem.submenu && (
                                  <div className="space-y-1">
                                    {subItem.submenu.map(
                                      (subSubItem: SubMenuItem) => (
                                        <Link
                                          key={subSubItem.name}
                                          href={subSubItem.href}
                                          target={
                                            subSubItem.name == "Careers"
                                              ? "_blank"
                                              : "_self"
                                          }
                                          className="group hover:bg-foreground/5 p-3 w-full flex items-center gap-3  transition-colors"
                                        >
                                          <span className="text-xl text-primary">
                                            <subSubItem.icon className="w-6 h-6" />
                                          </span>
                                          <div className="flex flex-col">
                                            <span className="text-[16px] text-foreground font-medium">
                                              {subSubItem.name}
                                            </span>
                                          </div>
                                        </Link>
                                      ),
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[14px] text-[#333333] lora-medium cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="flex flex-shrink-0">
              <Link
                href="/contact"
                className="bg-[#0224e9] text-white py-[8px] px-10  text-[14px] transition-colors duration-200 rounded-full font-medium hover:bg-[#0224e9]/90"
              >
                Book a discovery session
              </Link>
            </div>
          </div>

          {/* Mobile navbar wrapper */}
          <div
            className={`lg:hidden flex items-center justify-between px-4 py-3 rounded-full bg-white shadow-md transition-all duration-300`}
          >
            {/* Mobile Logo */}
            <div className="flex">
              <Link href="/" className="-m-1.5 p-1.5 inline-block">
                <Image
                  src="/logo.black.webp"
                  alt="PhaseOne Partners"
                  width={600}
                  height={400}
                  className="h-6 w-auto"
                  priority
                  quality={100}
                  unoptimized
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-3">
              {scrolled && (
                <a
                  href="tel:+61416825603"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white"
                  aria-label="Call us"
                >
                  <Phone className="h-5 w-5" />
                </a>
              )}
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Toggle menu</span>
                {mobileMenuOpen ? (
                  <X
                    className="h-8 w-8 lg:h-6 lg:w-6 text-foreground"
                    aria-hidden="true"
                  />
                ) : (
                  <HamburgerIcon
                    className="h-8 w-8 lg:h-6 lg:w-6 text-primary"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
