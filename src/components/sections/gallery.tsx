import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const GALLERY_ITEMS = [
  { src: IMAGES.galleryNight, alt: "Hotel Heaven Paradise at night" },
  { src: IMAGES.galleryMountain, alt: "Mountain view from the hotel" },
  { src: IMAGES.galleryBreakfast, alt: "Breakfast at the hotel" },
  { src: IMAGES.galleryRoom, alt: "Room interior" },
  { src: IMAGES.galleryBonfire, alt: "Evening bonfire" },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-cream text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
          Gallery
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        A Glimpse of Paradise
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Real moments from Hotel Heaven Paradise
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[3fr_2fr_2fr] md:grid-rows-[220px_220px] gap-3 max-w-[1100px] mx-auto w-full">
        {GALLERY_ITEMS.map((item, i) => (
          <ScrollReveal
            key={item.alt}
            delay={i * 0.1}
            className={i === 0 ? "row-span-1 md:row-span-2 h-[200px] md:h-auto" : "h-[200px] md:h-auto"}
          >
            <div className="rounded-[10px] overflow-hidden relative cursor-pointer group w-full h-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 43vw" : "(max-width: 768px) 50vw, 28vw"}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
