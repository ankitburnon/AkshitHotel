import Image from "next/image";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

interface GalleryItem {
  src: string;
  alt: string;
}

export function Gallery({ items, propertyName }: { items: GalleryItem[]; propertyName: string }) {
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
          Real moments from {propertyName}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[3fr_2fr_2fr] md:grid-rows-[220px_220px] gap-3 max-w-[1100px] mx-auto w-full">
        {items.map((item, i) => (
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
