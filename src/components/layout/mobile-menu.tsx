"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import { navigation, type SubMenuItem } from "./nav-items";

/**
 * The full-screen mobile menu.
 *
 * Lifted out of the marketing navbar so the v4 header can render the identical
 * panel rather than its own smaller dropdown card. Sharing the component, not
 * copying the markup, is the point: two copies would drift.
 *
 * Owns its own accordion state and the body scroll lock, so a navbar only has
 * to tell it whether it is open.
 */
export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Hold the page still behind the panel — but only while it is actually open,
  // and put back whatever was there before. Forcing `overflow: auto` on every
  // page just because this component is mounted is not this component's call.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div
      className={`lg:hidden fixed inset-0 bg-background z-[150] transition-all duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col h-[100dvh] overflow-auto px-6 pt-4">
        <div className="flex items-center justify-between px-4 py-3 rounded-full mb-8">
          <div className="flex">
            <Link
              href="/"
              className="-m-1.5 p-1.5 inline-block"
              onClick={onClose}
            >
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
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-8 w-8 text-foreground" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <div
                key={item.name}
                className=" bg-foreground/10 border-b border-background/10 last:border-b-0 px-6 py-3 rounded-md"
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name,
                        )
                      }
                      className="flex w-full items-center justify-between text-xl font-medium text-foreground "
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={`space-y-2 overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "max-h-[800px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <div
                          key={subItem.name}
                          className="space-y-2 first:pt-4"
                        >
                          {/* Main submenu item */}
                          <Link
                            href={subItem.href}
                            target={
                              subItem.name == "Careers" ? "_blank" : "_self"
                            }
                            className="block py-3 text-base font-bold underline"
                            onClick={onClose}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl text-secondary">
                                <subItem.icon className="w-5 h-5" />
                              </span>
                              <div className="flex flex-col">
                                <span className="text-foreground">
                                  {subItem.name}
                                </span>
                              </div>
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
                                    className="block py-3 text-base font-medium"
                                    onClick={onClose}
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className="text-xl text-secondary">
                                        <subSubItem.icon className="w-5 h-5" />
                                      </span>
                                      <div className="flex flex-col">
                                        <span className="text-foreground">
                                          {subSubItem.name}
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-xl font-medium text-foreground"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 py-6">
            <Link
              href="/contact"
              className="block w-full text-center text-base font-medium shadow-sm rounded-full text-background bg-primary py-[16px] px-[16px] text-[16px] lora-medium  hover:bg-primary/90 transition-colors duration-200"
              onClick={onClose}
            >
              Book a discovery session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
