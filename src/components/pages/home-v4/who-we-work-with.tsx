import Image from "next/image";
import VideoFigure from "./video-figure";
import { VIDEOS } from "@/lib/videos";

const AUDIENCES = [
  {
    icon: "/home-v4/icon-pe-funds.svg",
    title: "Aligned PE funds",
    body: "We help private equity funds source off-market opportunities tailored to your investment mandate.",
  },
  {
    icon: "/home-v4/icon-family-offices.svg",
    title: "Family offices",
    body: "We help family offices access opportunities aligned with your long-term investment objectives.",
  },
  {
    icon: "/home-v4/icon-corporate.svg",
    title: "Corporate acquirers",
    body: "We help corporate acquirers identify strategic acquisitions that accelerate growth.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="bg-white pb-16 pt-8 lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-[clamp(24px,4.167vw,60px)]">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,590fr)_minmax(0,670fr)] lg:gap-[4.5455%]">
          <div data-reveal>
            <p className="font-manrope text-[14px] font-normal uppercase text-[#0224e9] lg:text-[16px]">
              Who we work with
            </p>
            <h2 className="mt-4 font-manrope text-[32px] font-medium leading-[42px] text-[#333] lg:max-w-[558px] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(2.875rem,4.861vw,4.375rem)]">
              Deal origination for{" "}
              <span className="text-[#0224e9]">private capital.</span>
            </h2>
            <div className="mt-7 space-y-7 font-inter text-[16px] font-normal leading-[26px] text-[#333] lg:max-w-[590px] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
              <p>
                We work exclusively with private equity, family offices and
                corporate acquirers looking to source high-quality businesses
                outside traditional sale processes.
              </p>
              <p>
                Every engagement is designed around your investment mandate.
                Powered by our proprietary origination engine, we build exclusive
                off-market access aligned with your target industries, investment
                criteria and acquisition strategy.
              </p>
            </div>
          </div>

          {/* video — Figma 1555:392, 670x400, rounded-[32px] */}
          <VideoFigure
            poster="/home-v4/video-founders.webp"
            alt="PhaseOne Partners founders"
            playbackId={VIDEOS.founders}
            sizes="(min-width: 1024px) 670px, 100vw"
            priority
            style={{ transitionDelay: "120ms" }}
            className="aspect-[400/267] w-full rounded-[12px] lg:aspect-[670/400] lg:rounded-[32px]"
          />
        </div>

        {/* audience cards — Figma 1555:348-350, bg #0224e9/5, rounded-[24px], h-257 */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
          {AUDIENCES.map((a, i) => (
            <div
              key={a.title}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="rounded-[12px] bg-[#0224e9]/5 p-6 lg:min-h-[257px] lg:rounded-[24px] lg:p-8"
            >
              <Image
                src={a.icon}
                alt=""
                width={32}
                height={32}
                className="size-[32px]"
              />
              <h3 className="mt-5 font-manrope text-[18px] font-medium leading-[18px] text-[#0224e9] lg:text-[clamp(1.375rem,1.944vw,1.75rem)] lg:leading-[clamp(1.625rem,2.222vw,2rem)]">
                {a.title}
              </h3>
              <p className="mt-3 font-inter text-[14px] font-normal leading-[24px] text-[#333] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
