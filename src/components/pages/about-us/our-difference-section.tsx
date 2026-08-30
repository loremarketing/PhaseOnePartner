import Image from "next/image";

export default function OurDifferenceSection() {
  const features = [
    {
      title: "Proactive",
      description: "We seek out and build lasting partnerships rather than waiting for them. ",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      ),
    },
    {
      title: "Tailored",
      description:
        "Each engagement is measured against specific goals.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Collaborative",
      description:
        "We focus on relationships that deliver value well beyond completion.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 lg:py-20 px-4 sm:px-6 lg:px-16">
      {/* Top background image */}
      <Image
        src="/about/about-3rd-section-bg.webp"
        alt=""
        width={1500}
        height={300}
        className="opacity-60 w-fit h-fit object-contain pointer-events-none absolute -top-[30vw] right-0 flex justify-center z-0 select-none"
        style={{
          objectFit: "contain",
        }}
        priority
      />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Label */}
        <p className="text-center font-manrope text-[#0224e9] text-[14px] lg:text-[16px] uppercase tracking-wide mb-4 lg:mb-6">
          Our Difference
        </p>

        {/* Tagline */}
        <p className="text-center font-inter text-[20px] md:text-[24px] lg:text-[28px] leading-[34px] text-black mb-12 lg:mb-16">
          We are partners on your growth journey
        </p>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-2 border-[#0224e9] rounded-lg p-6 lg:p-8 bg-white text-center"
            >
              {/* Icon */}
              <div className="w-12 h-12 lg:w-[50px] lg:h-[50px] bg-[#0224e9] rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 text-white">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-manrope font-bold text-xl lg:text-2xl text-foreground mb-3 lg:mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-base lg:text-lg text-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
