import VideoFigure from "./video-figure";
import { VIDEOS } from "@/lib/videos";

export default function EmbeddedCapability() {
  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 text-center lg:px-[clamp(24px,4.167vw,60px)]">
        <p
          data-reveal
          className="font-manrope text-[14px] font-normal uppercase text-[#0224e9] lg:text-[16px]"
        >
          Embedded capability
        </p>
        <h2
          data-reveal
          style={{ transitionDelay: "90ms" }}
          className="mx-auto mt-4 font-manrope text-[32px] font-medium leading-[42px] text-[#333] lg:max-w-[1043px] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(2.875rem,4.861vw,4.375rem)]">
          Institutional origination capability,{" "}
          <span className="text-[#0224e9]">embedded within your team.</span>
        </h2>
        <p
          data-reveal
          style={{ transitionDelay: "180ms" }}
          className="mx-auto mt-6 font-inter text-[16px] font-normal leading-[26px] text-[#333] lg:max-w-[640px] lg:text-[clamp(1rem,1.25vw,1.125rem)] lg:leading-[clamp(1.5rem,1.944vw,1.75rem)]">
          We embed alongside your investment team with dedicated research
          capability, proprietary market intelligence and founder access that
          extends your reach without expanding headcount.
        </p>

        {/* Figma 1555:554 — 874x492, rounded-[24px] */}
        <VideoFigure
          poster="/home-v4/video-embedded.webp"
          alt="Working alongside your investment team"
          playbackId={VIDEOS.embeddedCapability}
          sizes="(min-width: 1024px) 874px, 100vw"
          style={{ transitionDelay: "240ms" }}
          className="mx-auto mt-12 aspect-[874/492] w-full rounded-[12px] lg:rounded-[24px] lg:max-w-[874px]"
        />
      </div>
    </section>
  );
}
