import Image from "next/image";
import { PROPERTIES } from "@/lib/constants";

const property = PROPERTIES.shimla;

export function ShimlaAbout() {
  return (
    <section
      id="about"
      className="bg-cream py-[80px] md:py-[140px] px-6 md:px-[60px]"
    >
      <div className="grid md:grid-cols-[55fr_45fr] gap-10 md:gap-20 max-w-[1200px] mx-auto items-center">
        {/* Text column */}
        <div>
          <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-6">
            A Personal Welcome
          </p>
          <h2 className="font-heading text-[32px] md:text-[44px] font-light text-[#1a1a18] leading-[1.15] mb-6">
            This Is Not
            <br />
            a Hotel Stay
          </h2>
          <p className="text-[15px] text-[#4a4540] leading-[1.9] font-light mb-4">
            I&apos;m Akshit. I grew up on these ridgelines — chasing monsoon
            clouds through deodar forests, learning every hidden trail, every
            secret chai stall. I left for the corporate world, traveled the
            globe, stayed in five-star resorts. But I kept coming home.
          </p>
          <p className="text-[15px] text-[#4a4540] leading-[1.9] font-light mb-4">
            Because tourists were missing everything that made Shimla special.
            So I came back — not to build a hotel, but to build what
            didn&apos;t exist: a way for you to experience these mountains
            the way I do.
          </p>
          <p className="text-[15px] text-[#4a4540] leading-[1.9] font-light mb-10">
            Eight rooms. Every one with a valley view. Your meals, your
            itinerary, your hidden gems — all taken care of. You just show up.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-6 md:gap-10">
            <div>
              <p className="font-heading text-[28px] text-[#1a1a18] font-light">
                {property.roomCount}
              </p>
              <p className="text-[12px] text-[#4a4540]/60 tracking-wide uppercase">
                Rooms
              </p>
            </div>
            <div className="w-px h-10 bg-[#1a1a18]/10" />
            <div>
              <p className="font-heading text-[28px] text-[#1a1a18] font-light">
                15
              </p>
              <p className="text-[12px] text-[#4a4540]/60 tracking-wide uppercase">
                Min from Station
              </p>
            </div>
            <div className="w-px h-10 bg-[#1a1a18]/10" />
            <div>
              <p className="font-heading text-[16px] md:text-[20px] text-[#1a1a18] font-light leading-tight">
                Hosted by
                <br />
                Akshit
              </p>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div className="relative h-[350px] md:h-[560px] md:translate-y-8">
          <Image
            src="/images/shimla/mood-window-mountains.jpg"
            alt="Mountain view from hotel room window"
            fill
            className="object-cover rounded-sm"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
