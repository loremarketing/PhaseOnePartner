import WaveLines from "@/components/pages/home-v4/wave-lines";

/**
 * Figma 1555:2826/2833 — a 1440x589 blue band with the masked ribbon artwork.
 * H1 is uppercase Manrope Medium 64/74 split across two colours ("Industries "
 * white, "We Service" #0085f2); the intro is Inter 28 white.
 *
 * Same fluid approach as home-v4: exact Figma values at >=1440, clamp()ed below
 * so nothing overflows a smaller laptop.
 */
export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0224e9] pb-16 pt-32 lg:min-h-[589px] lg:pb-[100px] lg:pt-[clamp(180px,17.5vw,252px)]">
      <WaveLines
        className="bg-white/20"
        style={{
          left: "-5.625%",
          top: "-64%",
          width: "123.3%",
          height: "271%",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 text-center lg:px-[clamp(24px,4.167vw,60px)]">
        <h1
          data-reveal
          className="font-manrope text-[32px] font-medium uppercase leading-[42px] lg:max-w-[867px] lg:text-[clamp(2.5rem,4.444vw,4rem)] lg:leading-[clamp(3rem,5.139vw,4.625rem)]"
        >
          <span className="text-white">Industries </span>
          <span className="text-[#0085f2]">We Service</span>
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
