import Image from "next/image";
import { PROPERTIES } from "@/lib/constants";

const property = PROPERTIES.shimla;

export function ShimlaExperiences() {
  return (
    <section
      id="experiences"
      className="bg-[#0d1a14] py-[80px] md:py-[120px]"
    >
      {/* Left-aligned header */}
      <div className="px-6 md:px-[60px] mb-10 md:mb-12">
        <p className="text-[11px] tracking-[4px] uppercase text-cream/35 font-semibold mb-4">
          Akshit Recommends
        </p>
        <h2 className="font-heading text-[36px] md:text-[52px] font-light text-cream leading-[1.1] mb-4">
          The Shimla I Know
        </h2>
        <p className="text-[15px] text-cream/45 font-light max-w-[440px]">
          Not a list of tourist spots. These are the places I&apos;d take you myself &mdash; and the tips I&apos;d give a friend.
        </p>
      </div>

      {/* Horizontal scroll strip */}
      <div
        className="flex gap-5 md:gap-6 px-6 md:px-[60px] pb-4 overflow-x-auto [scroll-snap-type:x_proximity] [overscroll-behavior-x:contain] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {property.experiences.map((exp) => (
          <div
            key={exp.name}
            className="flex-none w-[260px] md:w-[320px] [scroll-snap-align:start]"
          >
            <div className="relative h-[340px] md:h-[420px] rounded-sm overflow-hidden">
              <Image
                src={exp.image}
                alt={exp.name}
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            <h4 className="font-heading text-[22px] text-cream font-normal mt-4 mb-1">
              {exp.name}
            </h4>
            <p className="text-[13px] text-cream/45 font-light">
              {exp.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
