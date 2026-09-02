"use client";

import Link from "next/link";
import { type DropdownItem, type SubMenuItem } from "./nav-items";

/**
 * The desktop dropdown panel, lifted out of the marketing navbar.
 *
 * Both headers render this rather than each drawing its own card — the v4
 * header used to show a narrower, plainer list with no icons, which is the
 * inconsistency this fixes. Each header still owns its own trigger button,
 * because the two pills style their labels differently; only the panel that
 * drops out of it is shared.
 *
 * Place inside a `position: relative` container that owns the hover state.
 */

// Submenu entries count toward the layout too, so a shallow list of six and a
// nested list of six get the same room.
const totalItems = (dropdown: DropdownItem[]) =>
  dropdown.reduce((n, item) => n + 1 + (item.submenu?.length ?? 0), 0);

const gridLayout = (items: number) => {
  if (items <= 3) return "grid-cols-1";
  if (items <= 6) return "grid-cols-2";
  return "grid-cols-3";
};

const panelWidth = (items: number) => {
  if (items <= 3) return "min-w-[236px]";
  if (items <= 6) return "min-w-[480px]";
  if (items <= 12) return "min-w-[680px]";
  return "min-w-[880px]";
};

/**
 * Space between the trigger and the panel, paired with the height of the
 * invisible bridge that keeps :hover alive while the pointer crosses it. The
 * two are declared together on purpose — if the bridge is shorter than the gap
 * the menu closes mid-reach. Written as whole class names so Tailwind's scanner
 * can see them.
 */
const GAPS = {
  /** the marketing bar, 53px tall */
  default: { panel: "mt-6", bridge: "h-6" },
  /** the v4 pill, 72px tall, so the panel needs to clear more */
  tall: { panel: "mt-9", bridge: "h-9" },
} as const;

export default function NavDropdown({
  items,
  open,
  gap = "default",
}: {
  items: DropdownItem[];
  open: boolean;
  gap?: keyof typeof GAPS;
}) {
  const count = totalItems(items);
  const width = panelWidth(count);
  const { panel, bridge } = GAPS[gap];

  return (
    <>
      {/* Invisible bridge to maintain hover state across the gap */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 right-0 top-full ${bridge} ${width} ${
          open ? "block" : "hidden"
        }`}
      />

      {/* Multi-level Dropdown Menu */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full ${panel} w-full ${width} rounded-lg border border-[#0224e9]/10 bg-background p-2 font-poppins shadow-lg transition-all duration-300 origin-top-left 
                                            ${
                                              open
                                                ? "opacity-100 scale-100"
                                                : "opacity-0 scale-95 pointer-events-none"
                                            }`}
      >
        <div className="relative">
          <div className={`grid ${gridLayout(count)} z-[100] w-full`}>
            {items.map((subItem) => (
              <div key={subItem.name} className="space-y-1">
                {/* Main submenu item */}
                <Link
                  href={subItem.href}
                  target={subItem.name == "Careers" ? "_blank" : "_self"}
                  className="group flex w-full items-center gap-2.5 rounded-md px-3 py-2 transition-colors hover:bg-[#0224e9]/[0.06]"
                >
                  <span className="shrink-0 text-primary">
                    <subItem.icon className="size-[18px]" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-[#1a1a1a] transition-colors group-hover:text-[#0224e9]">
                      {subItem.name}
                    </span>
                  </div>
                </Link>

                {/* Further submenu items */}
                {subItem.submenu && (
                  <div className="space-y-1">
                    {subItem.submenu.map((subSubItem: SubMenuItem) => (
                      <Link
                        key={subSubItem.name}
                        href={subSubItem.href}
                        target={subSubItem.name == "Careers" ? "_blank" : "_self"}
                        className="group flex w-full items-center gap-2.5 rounded-md px-3 py-2 transition-colors hover:bg-[#0224e9]/[0.06]"
                      >
                        <span className="shrink-0 text-primary">
                          <subSubItem.icon className="size-[18px]" />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-semibold text-[#1a1a1a] transition-colors group-hover:text-[#0224e9]">
                            {subSubItem.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
