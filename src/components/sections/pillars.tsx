import Image from "next/image";
import { BRAND_IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const PILLARS = [
  {
    image: BRAND_IMAGES.pillarMountain,
    title: "Rooted in the Mountains",
    description:
      "We're not a hotel chain that picked a pretty location on a map. We were born here. Every recommendation, every trail, every meal comes from a lifetime of calling these mountains home.",
  },
  {
    image: BRAND_IMAGES.pillarJourney,
    title: "Your Journey, Your Way",
    description:
      "Cookie-cutter itineraries aren't our thing. Tell us what you're looking for — adventure, peace, culture, or all three — and we'll craft an experience around you.",
  },
  {
    image: BRAND_IMAGES.pillarService,
    title: "End-to-End, No Loose Ends",
    description:
      "From the moment you step onto the property to the moment you leave, we handle everything. Transfers, meals, day plans, local experiences — just show up.",
  },
];

export function Pillars() {
  return (
    <section
      id="pillars"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-cream text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
          Our Promise
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        What Sets Us Apart
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Three pillars that define every Heaven Paradise experience
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
        {PILLARS.map((pillar, i) => (
          <ScrollReveal key={pillar.title} delay={i * 0.15}>
            <div className="bg-white rounded-xl p-11 px-8 text-center border border-primary/8 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-accent after:w-0 hover:after:w-full after:transition-all after:duration-400">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-2xl text-primary mb-3 font-normal">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#999] leading-[1.7] font-light">
                {pillar.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
