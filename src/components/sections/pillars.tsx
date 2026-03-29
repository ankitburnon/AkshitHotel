import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const PILLARS = [
  {
    image: IMAGES.pillarMountain,
    title: "Mountain Views",
    description:
      "Wake up to panoramic Himalayan vistas from every room. Tea on the balcony hits different.",
  },
  {
    image: IMAGES.pillarFood,
    title: "Home-Cooked Meals",
    description:
      "Authentic Himachali and North Indian cuisine, made fresh daily with local ingredients.",
  },
  {
    image: IMAGES.pillarHospitality,
    title: "Personal Hospitality",
    description:
      "We know our guests by name, not room number. Your comfort is our family's priority.",
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
          Why Choose Us
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        Three Things We Promise
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Simple values that make every stay special
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
        {PILLARS.map((pillar, i) => (
          <ScrollReveal key={pillar.title} delay={i * 0.15}>
            <div className="bg-white rounded-xl p-11 px-8 text-center border border-primary/8 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500">
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
