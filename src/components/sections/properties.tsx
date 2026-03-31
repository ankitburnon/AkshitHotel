import Image from "next/image";
import { PROPERTIES, BRAND_IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const PROPERTY_CARDS = [
  {
    property: PROPERTIES.shimla,
    image: BRAND_IMAGES.propertyShimla,
  },
  {
    property: PROPERTIES.manali,
    image: BRAND_IMAGES.propertyManali,
  },
];

export function Properties() {
  return (
    <section
      id="properties"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
          Our Properties
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        Two Homes in the Himalayas
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Each property, a different flavour of the mountains
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto w-full">
        {PROPERTY_CARDS.map(({ property, image }, i) => (
          <ScrollReveal key={property.slug} delay={i * 0.15}>
            <a
              href={`/${property.slug}`}
              className="block rounded-xl overflow-hidden relative h-[400px] md:h-[500px] cursor-pointer group hover:translate-y-[-6px] transition-all duration-500"
            >
              <Image
                src={image}
                alt={property.name}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-black/75 to-transparent z-[1]" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-[2] text-white text-left">
                <p className="text-[11px] tracking-[3px] uppercase opacity-60 mb-2 font-medium">
                  {property.location}
                </p>
                <h3 className="font-heading text-[32px] md:text-[38px] font-light mb-2 leading-[1.15]">
                  {property.name}
                </h3>
                <p className="font-heading text-lg italic opacity-80 mb-3">
                  {property.tagline}
                </p>
                <p className="text-sm opacity-70 mb-5 max-w-[400px] font-light leading-[1.7]">
                  {property.description}
                </p>
                <span className="inline-block text-[13px] font-semibold tracking-[1.5px] uppercase text-accent">
                  Explore {property.slug === "shimla" ? "Shimla" : "Manali"} →
                </span>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
