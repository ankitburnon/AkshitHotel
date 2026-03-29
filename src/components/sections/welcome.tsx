import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Welcome() {
  return (
    <section id="welcome" className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white">
      <div className="grid md:grid-cols-2 gap-0 max-w-[1200px] mx-auto min-h-[80vh]">
        {/* Sticky image */}
        <div className="md:sticky md:top-[100px] md:h-[calc(100vh-200px)] md:self-start mb-12 md:mb-0">
          <div className="w-full h-[300px] md:h-full rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(45,90,71,0.2)]">
            <Image
              src={IMAGES.welcome}
              alt="Hotel Heaven Paradise exterior"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Scrolling text chapters */}
        <div className="md:pl-20">
          {/* Chapter 1 */}
          <div className="min-h-[50vh] flex flex-col justify-center py-10">
            <ScrollReveal>
              <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
                Our Story
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-heading text-[32px] text-primary italic font-light mb-6 leading-[1.4]">
                &ldquo;A note from
                <br />
                your hosts&rdquo;
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                Nestled in the heart of Shimla, Hotel Heaven Paradise is more
                than just a place to stay — it&apos;s a home away from home.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base leading-[1.9] text-[#777] font-light">
                What started as a family dream has become a warm, personal
                retreat for travellers seeking the real Shimla experience.
              </p>
            </ScrollReveal>
          </div>

          {/* Chapter 2 */}
          <div className="min-h-[50vh] flex flex-col justify-center py-10">
            <ScrollReveal>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                We believe in simple luxuries — a hot cup of chai with a
                mountain view, home-cooked meals that taste like your
                grandmother&apos;s kitchen, and the kind of personal attention
                that only a family-run hotel can offer.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                Every guest becomes family. Every stay becomes a story.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[13px] text-highlight font-semibold tracking-wide">
                — The Heaven Paradise Family
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
