"use client";

import Image from "next/image";
import { useLightbox } from "./shimla-lightbox";
import type { LightboxImage } from "./shimla-lightbox";

const GALLERY_ITEMS: (LightboxImage & { className: string })[] = [
  {
    src: "/images/shimla/dining-mountain-view.jpg",
    alt: "Dining tables facing misty mountain peaks",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/shimla/dining-food.jpg",
    alt: "Fresh parathas with chutneys",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/shimla/dining-breakfast-view.jpg",
    alt: "Breakfast with a mountain view — parathas and chai by the window",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/images/shimla/gallery-hallway.jpg",
    alt: "Hotel hallway with warm ambient lighting",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/shimla/room-bed-closeup.jpg",
    alt: "King bed with towel art and sage accents",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/shimla/dining-buffet.jpg",
    alt: "Buffet station with pendant lanterns",
    className: "col-span-2 row-span-1",
  },
];

const lightboxImages: LightboxImage[] = GALLERY_ITEMS.map(({ src, alt }) => ({
  src,
  alt,
}));

export function ShimlaGallery() {
  const { open, node } = useLightbox();

  return (
    <section
      id="gallery"
      className="bg-cream py-[80px] md:py-[140px] px-6 md:px-[60px]"
    >
      <h2 className="font-heading text-[36px] md:text-[52px] font-light text-[#1a1a18] text-center mb-10 md:mb-14">
        A Glimpse Inside
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-[200px_200px_200px] gap-3 max-w-[1200px] mx-auto">
        {GALLERY_ITEMS.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => open(lightboxImages, i)}
            className={`relative rounded-sm overflow-hidden cursor-pointer group ${item.className} ${
              i === 0
                ? "h-[200px] md:h-auto"
                : i === 2
                  ? "h-[200px] md:h-auto"
                  : "h-[150px] md:h-auto"
            }`}
            aria-label={`View ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              sizes={
                i === 0
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 50vw, 25vw"
              }
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {node}
    </section>
  );
}
