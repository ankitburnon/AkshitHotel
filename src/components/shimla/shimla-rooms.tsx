"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROPERTIES } from "@/lib/constants";
import { useLightbox } from "./shimla-lightbox";
import type { LightboxImage } from "./shimla-lightbox";

const property = PROPERTIES.shimla;

const allRoomImages: LightboxImage[] = property.rooms.map((r) => ({
  src: r.image,
  alt: r.name,
}));

export function ShimlaRooms() {
  const rooms = property.rooms;
  const { open, node } = useLightbox();

  return (
    <section id="rooms" className="bg-[#0d1a14] py-[80px] md:py-[160px]">
      {/* Section header */}
      <div className="px-6 md:px-[60px] mb-12 md:mb-16 text-center">
        <p className="text-[11px] tracking-[4px] uppercase text-cream/35 font-semibold mb-4">
          Your Room
        </p>
        <h2 className="font-heading text-[36px] md:text-[52px] font-light text-cream leading-[1.1]">
          Wake Up to the Valley
        </h2>
      </div>

      {/* Room 1 — Full bleed hero room */}
      <motion.div
        className="relative w-full h-[50vh] md:h-[70vh] cursor-pointer group"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => open(allRoomImages, 0)}
      >
        <Image
          src={rooms[0].image}
          alt={rooms[0].name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a14] via-transparent to-transparent" />
      </motion.div>

      {/* Room 1 info */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px] py-8 md:py-10">
        <h3 className="font-heading text-[28px] md:text-[36px] text-cream font-light mb-3">
          {rooms[0].name}
        </h3>
        <p className="text-[15px] text-cream/55 max-w-[500px] font-light leading-[1.8] mb-5">
          {rooms[0].description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {rooms[0].tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] border border-cream/20 text-cream/50 px-3 py-1 tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Rooms 2 + 3 — Side by side */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-[1200px] mx-auto px-6 md:px-[60px] mt-10 md:mt-16">
        {rooms.slice(1).map((room, i) => (
          <div key={room.name}>
            <div
              className="relative h-[240px] md:h-[340px] rounded-sm overflow-hidden mb-6 cursor-pointer group"
              onClick={() => open(allRoomImages, i + 1)}
            >
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <h3 className="font-heading text-[24px] md:text-[28px] text-cream font-light mb-2">
              {room.name}
            </h3>
            <p className="text-[14px] text-cream/50 font-light leading-[1.8] mb-4 max-w-[400px]">
              {room.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {room.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] border border-cream/20 text-cream/50 px-3 py-1 tracking-wide uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {node}
    </section>
  );
}
