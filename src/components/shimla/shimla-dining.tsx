"use client";

import Image from "next/image";
import { PROPERTIES } from "@/lib/constants";
import { useLightbox } from "./shimla-lightbox";
import type { LightboxImage } from "./shimla-lightbox";

const property = PROPERTIES.shimla;

const diningImages: LightboxImage[] = [
  {
    src: "/images/shimla/dining-panoramic.jpg",
    alt: "Dining room with panoramic mountain views through windows",
  },
  {
    src: "/images/shimla/dining-food.jpg",
    alt: "Fresh parathas with chutneys — breakfast at Heaven Paradise",
  },
];

export function ShimlaDining() {
  const { open, node } = useLightbox();

  return (
    <section id="dining" className="bg-cream">
      {/* Full-bleed dining room image */}
      <div
        className="relative w-full h-[50vh] md:h-[70vh] cursor-pointer group"
        onClick={() => open(diningImages, 0)}
      >
        <Image
          src="/images/shimla/dining-panoramic.jpg"
          alt="Dining room with panoramic mountain views through windows"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          sizes="100vw"
        />
      </div>

      {/* Overlapping text card */}
      <div className="max-w-[600px] mx-auto -mt-[60px] md:-mt-[80px] relative z-10 bg-cream px-8 py-10 md:px-14 md:py-14 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-5">
          Dining
        </p>
        <h3 className="font-heading text-[28px] md:text-[36px] text-[#1a1a18] font-light leading-[1.2] mb-5">
          {property.diningTitle}
        </h3>
        {property.diningText.map((text, i) => (
          <p
            key={i}
            className="text-[14px] text-[#4a4540] leading-[1.9] font-light mb-4"
          >
            {text}
          </p>
        ))}

        {/* Meal circles */}
        <div className="flex gap-6 mt-6">
          {property.meals.map((meal) => (
            <div key={meal.label} className="text-center">
              <div className="w-[64px] h-[64px] rounded-full overflow-hidden mx-auto mb-2">
                <Image
                  src={meal.image}
                  alt={meal.label}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] text-[#1a1a18]/60 font-medium tracking-wide">
                {meal.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary food photo — asymmetric right */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px] mt-12 mb-[60px] md:mb-[80px]">
        <div className="md:ml-auto md:max-w-[55%]">
          <div
            className="relative h-[260px] md:h-[400px] rounded-sm overflow-hidden cursor-pointer group"
            onClick={() => open(diningImages, 1)}
          >
            <Image
              src="/images/shimla/dining-food.jpg"
              alt="Fresh parathas with chutneys — breakfast at Heaven Paradise"
              fill
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        </div>
      </div>

      {node}
    </section>
  );
}
