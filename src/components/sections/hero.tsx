"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitHeading } from "@/components/ui/scroll-reveal";

interface HeroProps {
  image: string;
  imageAlt: string;
  preheading: string;
  heading: string;
  subtext: string;
  ctaText: string;
  ctaHref: string;
}

export function Hero({ image, imageAlt, preheading, heading, subtext, ctaText, ctaHref }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const mistY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="h-screen relative overflow-hidden flex items-center justify-center"
    >
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2a20]/60 via-primary/40 to-[#0d2a20]/70" />
      </motion.div>

      <motion.div
        className="absolute top-[30%] left-0 right-0 h-[200px] opacity-20 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-mist-drift"
        style={{ y: mistY }}
      />

      <div className="relative z-10 text-center text-white max-w-[700px] px-6">
        <p className="text-[11px] tracking-[6px] uppercase opacity-60 mb-6 font-medium">
          {preheading}
        </p>
        <SplitHeading
          as="h1"
          className="font-heading text-[40px] md:text-7xl font-light leading-[1.08] mb-5 [text-shadow:0_4px_40px_rgba(0,0,0,0.4)]"
        >
          {heading}
        </SplitHeading>
        <p className="text-[15px] opacity-70 mb-10 tracking-wide font-light">
          {subtext}
        </p>
        <a
          href={ctaHref}
          className="inline-block w-full sm:w-auto px-11 py-4 bg-accent text-white rounded-[4px] text-[13px] font-semibold tracking-[1.5px] uppercase shadow-[0_4px_30px_rgba(194,112,62,0.4)] hover:translate-y-[-2px] hover:shadow-[0_8px_40px_rgba(194,112,62,0.5)] transition-all duration-400 relative overflow-hidden group"
        >
          <span className="absolute top-0 left-[-100%] w-full h-full bg-white/15 group-hover:left-[100%] transition-[left] duration-500" />
          <span className="relative">{ctaText}</span>
        </a>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-[11px] text-center tracking-[3px] uppercase animate-float"
        style={{ opacity }}
      >
        scroll
        <br />↓
      </motion.div>
    </section>
  );
}
