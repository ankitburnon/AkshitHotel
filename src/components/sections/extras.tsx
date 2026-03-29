import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const EXTRAS = [
  {
    image: IMAGES.extraBonfire,
    title: "Evening Bonfire",
    description:
      "Gather around the fire under the stars. Perfect for families and couples on cold mountain evenings.",
  },
  {
    image: IMAGES.extraGames,
    title: "Games & Books",
    description:
      "Board games, cards, and a small library. Some evenings are best spent offline.",
  },
  {
    image: IMAGES.extraParking,
    title: "Free Parking",
    description:
      "Safe, on-site parking for your car. One less thing to worry about on your trip.",
  },
];

export function Extras() {
  return (
    <section
      id="extras"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-dark-bg text-cream text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-cream/35 font-semibold mb-4">
          Little Extras
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-cream mb-4 leading-[1.15]">
        The Details That Matter
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-cream/50 max-w-[480px] leading-[1.8] mb-14 font-light">
          Small things that make a big difference
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
        {EXTRAS.map((extra, i) => (
          <ScrollReveal key={extra.title} delay={i * 0.15}>
            <div className="bg-white/4 border border-white/8 rounded-xl p-10 px-7 text-center hover:translate-y-[-6px] hover:bg-white/8 transition-all duration-500">
              <div className="w-[72px] h-[72px] rounded-full mx-auto mb-6 overflow-hidden">
                <Image
                  src={extra.image}
                  alt={extra.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-heading text-[22px] text-cream mb-2.5 font-normal">
                {extra.title}
              </h4>
              <p className="text-[13px] text-cream/45 leading-[1.7] font-light">
                {extra.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
