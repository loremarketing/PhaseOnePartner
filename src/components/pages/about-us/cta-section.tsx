import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="relative py-12 lg:py-20 px-4 lg:px-16">
      <div className="max-w-[400px] lg:max-w-[1300px] mx-auto bg-gradient-to-b from-[#0224e9] to-[#011483] rounded-[9.846px] lg:rounded-[32px] p-8 lg:p-20 text-center relative overflow-hidden min-h-[351px] lg:min-h-[567px] flex items-center justify-center">
        {/* Background decorative elements */}
        <div className="absolute -left-20 lg:left-0 -bottom-8 lg:bottom-0">
          <Image
            src="/bg/partners-for-growth-get-started-desktop.webp"
            alt="Partners for Growth A 15 minute conversation Background"
            width={584}
            height={730}
            className="w-fit h-[200px] lg:h-[280px] object-cover opacity-80 lg:opacity-100"
          />
        </div>
        <div className="absolute -right-8 -top-8 lg:right-0 lg:top-0">
          <Image
            src="/bg/partners-for-growth-get-started-2-desktop.webp"
            alt="Partners for Growth A 15 minute conversation Background"
            width={584}
            height={730}
            className="w-fit h-[200px] lg:h-[300px] object-cover opacity-80 lg:opacity-100"
          />
        </div>

        <div className="relative z-10 space-y-4 lg:space-y-6">
          <p className="font-manrope text-white text-[10px] lg:text-[16px] uppercase tracking-wide">
            Next Step
          </p>
          <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-white">
            A 15 minute conversation
          </h2>
          <p className="font-inter text-[16px] lg:text-[18px] text-white leading-[26px] lg:leading-[28px] max-w-[359px] lg:max-w-[636px] mx-auto">
           See what PhaseOne Partners can unlock for your next investment. We'll align with your mandate and priorities, setting the foundation for a tailored origination pipeline.
           
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-white text-[#0224e9] hover:bg-[#0224e9] hover:text-white transition-colors rounded-full px-[22px] py-[10px] h-[44px] lg:h-[48px] text-[12px] lg:text-[18px] font-manrope font-medium"
              asChild
            >
              <Link href="/contact"> Get started today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
