"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function ShimlaHero() {
  return (
    <section id="hero">
      {/* Text block on cream background */}
      <div className="bg-cream pt-[140px] md:pt-[200px] pb-10 md:pb-16 px-6 md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            className="text-[11px] tracking-[5px] uppercase text-primary/50 font-medium mb-6 md:mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0 }}
          >
            Shimla, Himachal Pradesh
          </motion.p>

          <motion.h1
            className="font-heading text-[clamp(3rem,10vw,8rem)] text-[#1a1a18] uppercase font-light leading-[0.95] tracking-[0.02em] mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
          >
            Hotel Heaven
            <br />
            Paradise
          </motion.h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <motion.p
              className="text-[15px] md:text-[17px] text-[#4a4540] font-light tracking-wide max-w-[420px]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
            >
              Where the mountains welcome you home. A stay that feels less like
              a hotel and more like visiting a friend who lives in the
              most beautiful place on earth.
            </motion.p>

            <motion.a
              href="#rooms"
              className="inline-block px-10 py-4 bg-accent text-white text-[12px] tracking-[2px] uppercase font-semibold hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(194,112,62,0.3)] transition-all duration-400 cursor-pointer whitespace-nowrap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.45 }}
            >
              See the Rooms
            </motion.a>
          </div>
        </div>
      </div>

      {/* Full-bleed hero image */}
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Image
          src="/images/shimla/gallery-dining-silhouette.jpg"
          alt="Dining room silhouette with panoramic mountain views at Hotel Heaven Paradise"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
      </div>
    </section>
  );
}
