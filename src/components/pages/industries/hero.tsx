import WaveLines from "@/components/pages/home-v4/wave-lines";

/**
 * The /industries banner.
 *
 * Deliberately NOT the Figma frame (1583:2824), which specified a blue → navy
 * gradient behind two separately masked wave layers. The client asked for this
 * to match the home page instead, so it now shares that hero's treatment
 * exactly: the same blue → white gradient and the same ribbon masked
 * from /bg/hero-lines-bg.webp at white 20%. The two banners read as one family,
 * and this one dissolves into the white section beneath it rather than ending
 * on a hard navy edge.
 *
 * The copy sits higher in the band than Figma placed it, which is the price of
 * the fade: much past two thirds of the way down there is not enough contrast
 * left under white text. This hero is shorter than the home one, so that point
 * arrives sooner and the top padding has to come back to meet it.
 */
export default function Hero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden pb-28 pt-32 lg:min-h-[589px] lg:pb-[100px] lg:pt-[clamp(150px,13.7vw,197px)]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgb(2,36,233) 1.06%, rgb(255,255,255) 98.96%)",
      }}
    >
      {/* same ribbon, same placement as the home hero (Figma 1555:354) */}
      <WaveLines
        fadeBottom
        className="bg-white/20"
        style={{
          left: "-5.625%",
          top: "20%",
          width: "139.63%",
          height: "72.4%",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 text-center lg:px-[clamp(24px,4.167vw,60px)]">
        <h1
          data-reveal
          className="font-manrope text-[32px] font-bold uppercase leading-[42px] sm:text-[40px] lg:max-w-[867px] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(3rem,5.139vw,4.625rem)]"
        >
          {/* the Figma accent (#0085f2) was picked against a navy background and
              lands at 1.2:1 on this lighter one — the brand navy keeps the
              two-tone heading and reads at 4.6:1 */}
          <span className="text-white">Industries </span>
          <span className="text-[#011483]">We Service</span>
        </h1>

        <p
          data-reveal
          style={{ transitionDelay: "90ms" }}
          className="mt-6 font-inter text-[16px] font-normal leading-[26px] text-white lg:mt-[30px] lg:max-w-[865px] lg:text-[clamp(1.125rem,1.944vw,1.75rem)] lg:leading-[1.35]"
        >
          We partner with organisations across a diverse range of industries,
          helping founders and leadership teams unlock growth, improve
          operational performance, and create long-term value.
        </p>
      </div>
    </section>
  );
}
