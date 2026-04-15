"use client";

import Image from "next/image";
import { BRAND_IMAGES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Welcome() {
  return (
    <section id="welcome" className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white">
      <div className="grid md:grid-cols-2 gap-0 max-w-[1200px] mx-auto min-h-[80vh]">
        <div className="md:sticky md:top-[100px] md:h-[calc(100vh-200px)] md:self-start mb-12 md:mb-0">
          <div className="w-full h-[300px] md:h-full rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(45,90,71,0.2)]">
            <Image
              src={BRAND_IMAGES.welcome}
              alt="Akshit Angra — Founder, Heaven Paradise"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="md:pl-20">
          <div className="min-h-[50vh] flex flex-col justify-center py-10">
            <ScrollReveal>
              <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
                A Local&apos;s Promise
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-heading text-[32px] text-primary italic font-light mb-6 leading-[1.4]">
                &ldquo;I came back to share
                <br />
                what only a local can&rdquo;
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                I&apos;m Akshit Angra. I grew up watching the sun rise over
                Shimla&apos;s ridgeline, chasing monsoon clouds through deodar
                forests, and learning every trail, shortcut, and hidden chai
                stall these mountains hold.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base leading-[1.9] text-[#777] font-light">
                I spent eight years in the corporate world. I travelled the globe
                — luxury hotels, boutique resorts, five-star experiences. But
                every time I came home to Himachal, I noticed the same thing:
                tourists were missing everything that made these mountains
                special.
              </p>
            </ScrollReveal>
          </div>

          <div className="min-h-[50vh] flex flex-col justify-center py-10">
            <ScrollReveal>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                They&apos;d visit Mall Road, take a photo at Ridge, and leave —
                never tasting a real Himachali siddu, never watching the valley
                light up at golden hour from the spots only we know, never
                sitting around a bonfire with stories that have been passed down
                for generations.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                So I came back. Not just to build hotels, but to build something
                that didn&apos;t exist — a way for you to experience Himachal
                the way I do. Raw. Personal. Unforgettable.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                From the moment you arrive to the moment you leave with a smile,
                everything is taken care of. Your itinerary, your meals, your
                hidden gems — tailored to you. Whether you want the classic
                tourist trail or the Himachal that 99% of travelers never see,
                we&apos;ll make it happen.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-heading text-xl text-primary italic font-light mb-4">
                This is not hospitality. This is home.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-[13px] text-highlight font-semibold tracking-wide">
                — Akshit Angra, Founder
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
