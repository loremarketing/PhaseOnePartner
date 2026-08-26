import Link from "next/link";
import { cn } from "@/lib/utils";
import { SVGIcon } from "@/components/ui/svg-icon";

/**
 * Figma 1555:571 (desktop) / 1555:1009 (mobile).
 * Pills are outlined with a #0224e9 border and fill on hover. The icons are
 * masked (not <img>), so they inherit the pill's text colour and flip to white
 * along with the label. Icon leaf sizes differ per sector.
 */
const SECTORS = [
  {
    icon: "/home-v4/sector-1.svg",
    label: "Manufacturing & Industrial",
    iw: 22.9,
    ih: 22.9,
  },
  {
    icon: "/home-v4/sector-2.svg",
    label: "Technology & Digital",
    iw: 20.6,
    ih: 23.2,
  },
  {
    icon: "/home-v4/sector-3.svg",
    label: "Healthcare & Life Sciences",
    iw: 22.1,
    ih: 22.1,
  },
  {
    icon: "/home-v4/sector-4.svg",
    label: "Education & Training",
    iw: 22.0,
    ih: 23.0,
  },
  {
    icon: "/home-v4/sector-5.svg",
    label: "Engineering, Construction & Facilities",
    iw: 22.5,
    ih: 22.5,
  },
  {
    icon: "/home-v4/sector-6.svg",
    label: "Energy, Environment & Utilities",
    iw: 16.3,
    ih: 24.5,
  },
  {
    icon: "/home-v4/sector-7.svg",
    label: "Food, Agriculture & Consumer",
    iw: 20.1,
    ih: 22.8,
  },
  {
    icon: "/home-v4/sector-8.svg",
    label: "Business, Media & Marketing",
    iw: 18.2,
    ih: 21.9,
  },
  {
    icon: "/home-v4/sector-9.svg",
    label: "Financial & Professional Services",
    iw: 24.5,
    ih: 23.7,
  },
  {
    icon: "/home-v4/sector-10.svg",
    label: "Transport, Automotive & Aerospace",
    iw: 25.9,
    ih: 19.3,
  },
];

export default function ExploreSectors() {
  return (
    <section className="bg-white pb-16 lg:pb-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-[clamp(24px,4.167vw,60px)]">
        <h2
          data-reveal
          className="text-center font-manrope text-[32px] font-medium leading-[32px] text-black lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(2.875rem,4.861vw,4.375rem)]">
          Explore sectors{" "}
          <span className="text-[#0224e9]">we&apos;ve mapped</span>
        </h2>

        <ul className="mx-auto mt-10 flex max-w-[1266px] flex-wrap justify-center gap-5 lg:mt-14">
          {SECTORS.map((s, i) => (
            <li
              key={s.label}
              data-reveal
              style={{ transitionDelay: `${i * 55}ms` }}
            >
              <Link
                href="/contact"
                className={cn(
                  "group flex h-[60px] items-center gap-[10px] rounded-[130px] bg-transparent text-black border border-[#0224e9] px-5 transition-all transform duration-300 hover:opacity-90 hover:bg-[#0224e9] hover:text-white hover:lg:bg-[linear-gradient(90deg,#0224e9_0%,#011483_100%)]",
                )}
              >
                <SVGIcon
                  src={s.icon}
                  style={{ width: s.iw, height: s.ih }}
                  className="shrink-0 transition-all transform duration-300 text-[#0224e9] group-hover:text-white"
                />
                <span className="font-manrope text-[16px] font-medium leading-[20px] lg:whitespace-nowrap">
                  {s.label}
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12.5828 8.58345"
                  className="ml-1 h-[9px] w-[13px] shrink-0"
                  fill="currentColor"
                >
                  <path d="M12.4121 4.70383C12.6397 4.47623 12.6397 4.10722 12.4121 3.87962L8.70318 0.170698C8.47558 -0.0568995 8.10657 -0.0568995 7.87897 0.170698C7.65137 0.398296 7.65137 0.767306 7.87897 0.994904L11.1758 4.29173L7.87897 7.58855C7.65137 7.81615 7.65137 8.18516 7.87897 8.41275C8.10657 8.64035 8.47558 8.64035 8.70318 8.41275L12.4121 4.70383ZM0 4.29173V4.87453H12V4.29173V3.70892H0V4.29173Z" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
