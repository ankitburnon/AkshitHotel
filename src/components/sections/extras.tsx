"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

interface Extra {
  image: string;
  title: string;
  description: string;
}

export function Extras({ extras }: { extras: Extra[] }) {
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
        {extras.map((extra, i) => (
          <motion.div
            key={extra.title}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="bg-white/4 border border-white/8 rounded-xl p-10 px-7 text-center hover:translate-y-[-6px] hover:bg-white/8 transition-all duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-accent after:w-0 hover:after:w-full after:transition-all after:duration-400">
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
