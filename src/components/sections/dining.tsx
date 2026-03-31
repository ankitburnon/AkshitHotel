"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

interface Meal {
  image: string;
  label: string;
}

interface DiningProps {
  image: string;
  imageAlt: string;
  title: string;
  paragraphs: string[];
  meals: Meal[];
}

export function Dining({ image, imageAlt, title, paragraphs, meals }: DiningProps) {
  return (
    <section id="dining" className="py-16 md:py-[120px] px-8 md:px-[60px] bg-cream">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-[1100px] mx-auto items-center">
        <motion.div
          className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(194,112,62,0.15)]"
          initial={{ clipPath: "inset(15% 10% 15% 10% round 12px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 12px)" }}
          viewport={{ once: true, margin: "-25%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-25%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>

        <div>
          <ScrollReveal>
            <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
              Dining
            </p>
          </ScrollReveal>
          <SplitHeading
            as="h3"
            className="font-heading text-[40px] text-primary mb-5 font-light leading-[1.2]"
          >
            {title}
          </SplitHeading>
          {paragraphs.map((text, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.1}>
              <p className="text-base text-[#777] leading-[1.9] mb-4 font-light">
                {text}
              </p>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.2 + paragraphs.length * 0.1}>
            <div className="flex gap-5 mt-4">
              {meals.map((meal) => (
                <div key={meal.label} className="text-center flex-1">
                  <div className="w-16 h-16 rounded-full mx-auto mb-2.5 overflow-hidden">
                    <Image
                      src={meal.image}
                      alt={meal.label}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-primary font-semibold tracking-wide">
                    {meal.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
