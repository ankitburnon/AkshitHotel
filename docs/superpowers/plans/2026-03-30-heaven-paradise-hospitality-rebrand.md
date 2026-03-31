# Heaven Paradise Hospitality Rebrand — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the single-page Hotel Heaven Paradise website into a hospitality brand site with a brand homepage and two property pages (Shimla, Manali).

**Architecture:** Repurpose the existing homepage as a brand page, move hotel-specific sections (rooms, dining, experiences, gallery, extras) into property pages at `/shimla` and `/manali`. Restructure `constants.ts` to hold brand + per-property data. Adapt navbar, footer, section-dots, and floating WhatsApp for multi-page awareness.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lenis, Lucide React

---

## File Structure

### New Files
- `src/lib/constants.ts` — **rewrite**: brand data + per-property data
- `src/app/page.tsx` — **rewrite**: brand homepage assembling brand sections
- `src/app/shimla/page.tsx` — Shimla property page
- `src/app/manali/page.tsx` — Manali property page
- `src/components/sections/properties.tsx` — new "Our Properties" section for homepage

### Modified Files
- `src/components/sections/hero.tsx` — accept props for brand vs property hero
- `src/components/sections/welcome.tsx` — rewrite content for brand story
- `src/components/sections/pillars.tsx` — rewrite content for brand values
- `src/components/sections/rooms.tsx` — accept property data as props
- `src/components/sections/dining.tsx` — accept property data as props
- `src/components/sections/experiences.tsx` — accept property data as props
- `src/components/sections/gallery.tsx` — accept property data as props
- `src/components/sections/extras.tsx` — accept property data as props
- `src/components/sections/testimonials.tsx` — update review content
- `src/components/sections/contact-cta.tsx` — accept brand vs property mode
- `src/components/sections/footer.tsx` — brand-level links
- `src/components/ui/navbar.tsx` — page-aware navigation (brand vs property)
- `src/components/ui/section-dots.tsx` — page-aware section IDs
- `src/app/layout.tsx` — update metadata for brand

---

### Task 1: Rewrite constants.ts with brand + property data

**Files:**
- Modify: `src/lib/constants.ts`

- [ ] **Step 1: Replace constants.ts with new brand + property data structure**

```ts
// src/lib/constants.ts

export const BRAND = {
  name: "Heaven Paradise",
  tagline: "Where the mountains welcome you home",
  founder: "Akshit Angra",
  whatsappUrl: "https://wa.me/91XXXXXXXXXX",
  phoneNumber: "+91-XXXXXXXXXX",
} as const;

export type PropertySlug = "shimla" | "manali";

export interface Property {
  slug: PropertySlug;
  name: string;
  tagline: string;
  location: string;
  description: string;
  roomCount: number;
  distanceInfo: string;
  whatsappUrl: string;
  phoneNumber: string;
  rooms: { name: string; description: string; image: string; tags: string[] }[];
  meals: { image: string; label: string }[];
  diningTitle: string;
  diningText: string[];
  diningSpecialties: string;
  experiences: { name: string; subtitle: string; image: string }[];
  galleryItems: { src: string; alt: string }[];
  extras: { image: string; title: string; description: string }[];
}

export const PROPERTIES: Record<PropertySlug, Property> = {
  shimla: {
    slug: "shimla",
    name: "Hotel Heaven Paradise",
    tagline: "Valley views from every room",
    location: "Shimla, Himachal Pradesh",
    description:
      "Eight handpicked rooms, each with a private balcony overlooking the valley and snow-capped peaks. Steps away from Mall Road, yet worlds apart from the noise.",
    roomCount: 8,
    distanceInfo: "15 min from Shimla Railway Station",
    whatsappUrl: "https://wa.me/91XXXXXXXXXX",
    phoneNumber: "+91-XXXXXXXXXX",
    rooms: [
      {
        name: "Valley View Room",
        description:
          "A cozy room with a private balcony overlooking the lush green valley. Perfect for couples seeking peace.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
        tags: ["Valley View", "Balcony", "Heater", "Hot Water"],
      },
      {
        name: "Mountain Suite",
        description:
          "Panoramic views, sitting area, and a cozy reading corner.",
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
        tags: ["Panoramic", "Suite", "Window Seat"],
      },
      {
        name: "Family Room",
        description:
          "Extra space for families with little ones. Views the kids will remember.",
        image:
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80",
        tags: ["Family", "Extra Beds", "Spacious"],
      },
    ],
    meals: [
      {
        image:
          "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=200&q=80",
        label: "Breakfast",
      },
      {
        image:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=200&q=80",
        label: "Dinner",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&q=80",
        label: "Chai Time",
      },
    ],
    diningTitle: "From Our Kitchen to Your Table",
    diningText: [
      "No buffet lines, no reheated food. Every meal is cooked fresh — just like home. Wake up to hot parathas and chai, end your day with a hearty Himachali dinner.",
      "Our specialties include siddu, madra, babru, and the best dal you've had in the mountains.",
    ],
    diningSpecialties: "Himachali cuisine",
    experiences: [
      {
        name: "Mall Road",
        subtitle: "Heritage walk through Shimla's heart",
        image:
          "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=400&q=80",
      },
      {
        name: "Jakhu Temple",
        subtitle: "Morning hike to the hilltop",
        image:
          "https://images.unsplash.com/photo-1585136917228-0b1e78516072?w=400&q=80",
      },
      {
        name: "Kufri",
        subtitle: "Snow & adventure nearby",
        image:
          "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&q=80",
      },
      {
        name: "Toy Train",
        subtitle: "UNESCO heritage railway",
        image:
          "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80",
      },
    ],
    galleryItems: [
      {
        src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
        alt: "Hotel Heaven Paradise at night",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
        alt: "Mountain view from the hotel",
      },
      {
        src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=500&q=80",
        alt: "Breakfast at the hotel",
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d955e4c47?w=500&q=80",
        alt: "Room interior",
      },
      {
        src: "https://images.unsplash.com/photo-1475483768296-6163e8f3a1c2?w=500&q=80",
        alt: "Evening bonfire",
      },
    ],
    extras: [
      {
        image:
          "https://images.unsplash.com/photo-1475483768296-6163e8f3a1c2?w=200&q=80",
        title: "Evening Bonfire",
        description:
          "Gather around the fire under the stars. Perfect for families and couples on cold mountain evenings.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=200&q=80",
        title: "Games & Books",
        description:
          "Board games, cards, and a small library. Some evenings are best spent offline.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=200&q=80",
        title: "Free Parking",
        description:
          "Safe, on-site parking for your car. One less thing to worry about on your trip.",
      },
    ],
  },
  manali: {
    slug: "manali",
    name: "Hotel DK Residency",
    tagline: "Where the river meets the pines",
    location: "Manali, Himachal Pradesh",
    description:
      "Fourteen rooms nestled along the banks of the Beas, surrounded by towering pine and deodar forests. Old Manali's charm is a short walk away, but the real magic is what we'll take you to.",
    roomCount: 14,
    distanceInfo: "10 min from Manali Bus Stand",
    whatsappUrl: "https://wa.me/91XXXXXXXXXX",
    phoneNumber: "+91-XXXXXXXXXX",
    rooms: [
      {
        name: "Riverside Room",
        description:
          "Fall asleep to the sound of the Beas. Wake up to pine-scented air and river views from your window.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d955e4c47?w=800&q=80",
        tags: ["River View", "Balcony", "Heater", "Hot Water"],
      },
      {
        name: "Pine View Suite",
        description:
          "Spacious suite surrounded by deodar forest. A private balcony that feels like a treehouse.",
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
        tags: ["Forest View", "Suite", "Sitting Area"],
      },
      {
        name: "Family Room",
        description:
          "Room for the whole family with mountain views and space for the kids to play.",
        image:
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80",
        tags: ["Family", "Extra Beds", "Spacious"],
      },
    ],
    meals: [
      {
        image:
          "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=200&q=80",
        label: "Breakfast",
      },
      {
        image:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=200&q=80",
        label: "Dinner",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&q=80",
        label: "Chai Time",
      },
    ],
    diningTitle: "Kullu Valley on Your Plate",
    diningText: [
      "Fresh trout from the river, local Kullu cuisine, and meals that warm you from the inside. Every dish is prepared with ingredients sourced from the valley.",
      "From traditional siddu and patande to piping hot thukpa on cold evenings — this is mountain food at its finest.",
    ],
    diningSpecialties: "Kullu Valley cuisine",
    experiences: [
      {
        name: "Solang Valley",
        subtitle: "Adventure sports & snow-capped peaks",
        image:
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80",
      },
      {
        name: "Old Manali",
        subtitle: "Cafés, culture & cobblestone charm",
        image:
          "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=400&q=80",
      },
      {
        name: "Jogini Waterfall",
        subtitle: "A hidden trek through the forest",
        image:
          "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&q=80",
      },
      {
        name: "Rohtang Pass",
        subtitle: "Where the world turns white",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
      },
    ],
    galleryItems: [
      {
        src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
        alt: "Hotel DK Residency exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80",
        alt: "Mountain view from Manali",
      },
      {
        src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=500&q=80",
        alt: "Breakfast spread",
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d955e4c47?w=500&q=80",
        alt: "Riverside room interior",
      },
      {
        src: "https://images.unsplash.com/photo-1475483768296-6163e8f3a1c2?w=500&q=80",
        alt: "Evening bonfire by the river",
      },
    ],
    extras: [
      {
        image:
          "https://images.unsplash.com/photo-1475483768296-6163e8f3a1c2?w=200&q=80",
        title: "Riverside Bonfire",
        description:
          "Nothing beats a bonfire by the Beas. Stories, marshmallows, and the sound of the river.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=200&q=80",
        title: "Games & Books",
        description:
          "Board games, cards, and a cozy reading nook. The perfect rainy day in Manali.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=200&q=80",
        title: "Free Parking",
        description:
          "Secure on-site parking so you can explore the valley worry-free.",
      },
    ],
  },
} as const;

export const BRAND_IMAGES = {
  hero: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
  welcome:
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  pillarMountain:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&q=80",
  pillarJourney:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80",
  pillarService:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=80",
  propertyShimla:
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  propertyManali:
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
  ctaBg:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  avatarGuest1:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  avatarGuest2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  shimlaHero:
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
  manaliHero:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
} as const;

export const HOMEPAGE_SECTION_IDS = [
  "hero",
  "welcome",
  "pillars",
  "properties",
  "testimonials",
  "contact",
] as const;

export const PROPERTY_SECTION_IDS = [
  "hero",
  "about",
  "rooms",
  "dining",
  "experiences",
  "gallery",
  "extras",
  "contact",
] as const;
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd /Users/ankitangra/code/AkshitHotel && npx tsc --noEmit 2>&1 | head -20`
Expected: Errors in files that still import the old `HOTEL`, `IMAGES`, `SECTION_IDS` — this is expected, we'll fix them in subsequent tasks.

- [ ] **Step 3: Commit**

```bash
git add src/lib/constants.ts
git commit -m "refactor: restructure constants for brand + multi-property data"
```

---

### Task 2: Update layout.tsx metadata for brand

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update metadata and make section-dots page-aware**

In `src/app/layout.tsx`, update the metadata:

```ts
export const metadata: Metadata = {
  title: "Heaven Paradise — Hospitality in the Himalayas",
  description:
    "Born in Himachal, Heaven Paradise offers authentic mountain stays in Shimla and Manali. Personally hosted. Locally rooted. Unforgettable.",
};
```

Remove `SectionDots` from the layout (it will be added per-page since section IDs differ):

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${karla.variable}`}>
      <body className="font-body bg-cream text-body overflow-x-hidden">
        <SmoothScroll>
          <ProgressBar />
          {children}
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
```

Remove the `SectionDots` import.

- [ ] **Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "refactor: update layout metadata for brand, remove global section-dots"
```

---

### Task 3: Update section-dots to accept section IDs as props

**Files:**
- Modify: `src/components/ui/section-dots.tsx`

- [ ] **Step 1: Make SectionDots accept a sectionIds prop**

```tsx
"use client";

import { useEffect, useState } from "react";

export function SectionDots({ sectionIds }: { sectionIds: readonly string[] }) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    function onScroll() {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
          current = id;
        }
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="fixed right-7 top-1/2 -translate-y-1/2 z-[998] flex flex-col gap-3.5 max-md:hidden">
      {sectionIds.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`w-2 h-2 rounded-full border-none outline-none cursor-pointer transition-all duration-400 ${
            active === id
              ? "bg-accent scale-150"
              : "bg-primary/20 hover:bg-primary/50"
          }`}
          aria-label={`Scroll to ${id}`}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/section-dots.tsx
git commit -m "refactor: make section-dots accept sectionIds as props"
```

---

### Task 4: Update navbar for multi-page navigation

**Files:**
- Modify: `src/components/ui/navbar.tsx`

- [ ] **Step 1: Rewrite navbar to support brand and property navigation**

```tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/constants";

interface NavLink {
  label: string;
  href: string;
}

export function Navbar({ links, ctaLabel = "WhatsApp Us", ctaHref = "#contact" }: {
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "bg-cream/92 backdrop-blur-[24px] shadow-[0_1px_30px_rgba(0,0,0,0.06)] py-3.5 px-8 md:px-[60px]"
            : "bg-transparent py-6 px-8 md:px-[60px]"
        }`}
      >
        <a
          href="/"
          className={`font-heading tracking-wide transition-all duration-600 ${
            scrolled
              ? "text-primary text-[22px] font-light"
              : "text-white text-[26px] font-light"
          }`}
        >
          {BRAND.name}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full ${
                scrolled ? "text-body" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={ctaHref}
          className={`hidden md:block text-[13px] font-semibold tracking-wide rounded-md transition-all duration-400 px-6 py-2.5 ${
            scrolled
              ? "bg-primary text-white border border-primary"
              : "bg-transparent text-white border border-white/40 hover:bg-white/15"
          }`}
        >
          {ctaLabel}
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden z-[1002]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-body" : "text-white"}`} />
          ) : (
            <Menu
              className={`w-6 h-6 ${scrolled ? "text-body" : "text-white"}`}
            />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-cream flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-3xl text-primary font-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 bg-primary text-white rounded-md font-semibold"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/navbar.tsx
git commit -m "refactor: make navbar accept links as props for multi-page support"
```

---

### Task 5: Update hero to accept props

**Files:**
- Modify: `src/components/sections/hero.tsx`

- [ ] **Step 1: Rewrite hero to accept content as props**

```tsx
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
      {/* Background image with parallax */}
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

      {/* Mist layer */}
      <motion.div
        className="absolute top-[30%] left-0 right-0 h-[200px] opacity-20 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-mist-drift"
        style={{ y: mistY }}
      />

      {/* Content */}
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

      {/* Scroll indicator */}
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/hero.tsx
git commit -m "refactor: make hero accept content as props"
```

---

### Task 6: Rewrite welcome section for brand story

**Files:**
- Modify: `src/components/sections/welcome.tsx`

- [ ] **Step 1: Rewrite welcome with Akshit's brand narrative**

```tsx
import Image from "next/image";
import { BRAND_IMAGES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Welcome() {
  return (
    <section id="welcome" className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white">
      <div className="grid md:grid-cols-2 gap-0 max-w-[1200px] mx-auto min-h-[80vh]">
        {/* Sticky image */}
        <div className="md:sticky md:top-[100px] md:h-[calc(100vh-200px)] md:self-start mb-12 md:mb-0">
          <div className="w-full h-[300px] md:h-full rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(45,90,71,0.2)]">
            <Image
              src={BRAND_IMAGES.welcome}
              alt="Akshit Angra — Founder, Heaven Paradise"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Scrolling text chapters */}
        <div className="md:pl-20">
          {/* Chapter 1 */}
          <div className="min-h-[50vh] flex flex-col justify-center py-10">
            <ScrollReveal>
              <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
                A Local&apos;s Promise
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-heading text-[32px] text-primary italic font-light mb-6 leading-[1.4]">
                &ldquo;I came back to share
                <br />
                what only a local can&rdquo;
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                I&apos;m Akshit Angra. I grew up watching the sun rise over
                Shimla&apos;s ridgeline, chasing monsoon clouds through deodar
                forests, and learning every trail, shortcut, and hidden chai
                stall these mountains hold.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base leading-[1.9] text-[#777] font-light">
                I spent eight years in the corporate world. I travelled the globe
                — luxury hotels, boutique resorts, five-star experiences. But
                every time I came home to Himachal, I noticed the same thing:
                tourists were missing everything that made these mountains
                special.
              </p>
            </ScrollReveal>
          </div>

          {/* Chapter 2 */}
          <div className="min-h-[50vh] flex flex-col justify-center py-10">
            <ScrollReveal>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                They&apos;d visit Mall Road, take a photo at Ridge, and leave —
                never tasting a real Himachali siddu, never watching the valley
                light up at golden hour from the spots only we know, never
                sitting around a bonfire with stories that have been passed down
                for generations.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                So I came back. Not just to build hotels, but to build something
                that didn&apos;t exist — a way for you to experience Himachal
                the way I do. Raw. Personal. Unforgettable.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                From the moment you arrive to the moment you leave with a smile,
                everything is taken care of. Your itinerary, your meals, your
                hidden gems — tailored to you. Whether you want the classic
                tourist trail or the Himachal that 99% of travelers never see,
                we&apos;ll make it happen.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-heading text-xl text-primary italic font-light mb-4">
                This is not hospitality. This is home.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-[13px] text-highlight font-semibold tracking-wide">
                — Akshit Angra, Founder
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/welcome.tsx
git commit -m "feat: rewrite welcome section with founder's brand narrative"
```

---

### Task 7: Rewrite pillars section for brand values

**Files:**
- Modify: `src/components/sections/pillars.tsx`

- [ ] **Step 1: Update pillars with brand values content**

```tsx
import Image from "next/image";
import { BRAND_IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const PILLARS = [
  {
    image: BRAND_IMAGES.pillarMountain,
    title: "Rooted in the Mountains",
    description:
      "We're not a hotel chain that picked a pretty location on a map. We were born here. Every recommendation, every trail, every meal comes from a lifetime of calling these mountains home.",
  },
  {
    image: BRAND_IMAGES.pillarJourney,
    title: "Your Journey, Your Way",
    description:
      "Cookie-cutter itineraries aren't our thing. Tell us what you're looking for — adventure, peace, culture, or all three — and we'll craft an experience around you.",
  },
  {
    image: BRAND_IMAGES.pillarService,
    title: "End-to-End, No Loose Ends",
    description:
      "From the moment you step onto the property to the moment you leave, we handle everything. Transfers, meals, day plans, local experiences — just show up.",
  },
];

export function Pillars() {
  return (
    <section
      id="pillars"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-cream text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
          Our Promise
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        What Sets Us Apart
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Three pillars that define every Heaven Paradise experience
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
        {PILLARS.map((pillar, i) => (
          <ScrollReveal key={pillar.title} delay={i * 0.15}>
            <div className="bg-white rounded-xl p-11 px-8 text-center border border-primary/8 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-2xl text-primary mb-3 font-normal">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#999] leading-[1.7] font-light">
                {pillar.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/pillars.tsx
git commit -m "feat: rewrite pillars with brand values content"
```

---

### Task 8: Create new properties section for homepage

**Files:**
- Create: `src/components/sections/properties.tsx`

- [ ] **Step 1: Create the properties showcase component**

```tsx
import Image from "next/image";
import { PROPERTIES, BRAND_IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const PROPERTY_CARDS = [
  {
    property: PROPERTIES.shimla,
    image: BRAND_IMAGES.propertyShimla,
  },
  {
    property: PROPERTIES.manali,
    image: BRAND_IMAGES.propertyManali,
  },
];

export function Properties() {
  return (
    <section
      id="properties"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
          Our Properties
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        Two Homes in the Himalayas
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Each property, a different flavour of the mountains
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto w-full">
        {PROPERTY_CARDS.map(({ property, image }, i) => (
          <ScrollReveal key={property.slug} delay={i * 0.15}>
            <a
              href={`/${property.slug}`}
              className="block rounded-xl overflow-hidden relative h-[400px] md:h-[500px] cursor-pointer group hover:translate-y-[-6px] transition-all duration-500"
            >
              <Image
                src={image}
                alt={property.name}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-black/75 to-transparent z-[1]" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-[2] text-white text-left">
                <p className="text-[11px] tracking-[3px] uppercase opacity-60 mb-2 font-medium">
                  {property.location}
                </p>
                <h3 className="font-heading text-[32px] md:text-[38px] font-light mb-2 leading-[1.15]">
                  {property.name}
                </h3>
                <p className="font-heading text-lg italic opacity-80 mb-3">
                  {property.tagline}
                </p>
                <p className="text-sm opacity-70 mb-5 max-w-[400px] font-light leading-[1.7]">
                  {property.description}
                </p>
                <span className="inline-block text-[13px] font-semibold tracking-[1.5px] uppercase text-accent">
                  Explore {property.slug === "shimla" ? "Shimla" : "Manali"} →
                </span>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/properties.tsx
git commit -m "feat: add properties showcase section for brand homepage"
```

---

### Task 9: Update testimonials with brand-level reviews

**Files:**
- Modify: `src/components/sections/testimonials.tsx`

- [ ] **Step 1: Update review content**

Replace the `REVIEWS` array content:

```ts
const REVIEWS = [
  {
    avatar: BRAND_IMAGES.avatarGuest1,
    quote:
      "We came for a weekend trip and left feeling like we'd been hosted by family. Akshit personally took us to a viewpoint we'd never have found on our own. The food, the warmth, the mountains — nothing else comes close.",
    author: "Priya & Rahul",
    location: "Delhi",
  },
  {
    avatar: BRAND_IMAGES.avatarGuest2,
    quote:
      "I've stayed at five-star resorts across India. This was different. It wasn't about luxury — it was about feeling something. The sunrise from our balcony, the home-cooked rajma, the stories around the bonfire. We're already planning our next visit.",
    author: "Sneha M.",
    location: "Mumbai",
  },
];
```

Update the import from `import { IMAGES } from "@/lib/constants"` to `import { BRAND_IMAGES } from "@/lib/constants"`.

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/testimonials.tsx
git commit -m "feat: update testimonials with brand-level guest reviews"
```

---

### Task 10: Update contact-cta to accept brand vs property mode

**Files:**
- Modify: `src/components/sections/contact-cta.tsx`

- [ ] **Step 1: Make contact-cta accept props for content**

```tsx
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { BRAND_IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

interface ContactCTAProps {
  heading?: string;
  subtext?: string;
  whatsappUrl: string;
  phoneNumber: string;
  locationName?: string;
  location?: string;
  distanceInfo?: string;
}

export function ContactCTA({
  heading = "Your mountains are waiting",
  subtext = "Let us plan your perfect Himachal escape. Tell us when you're coming, and we'll take care of everything else.",
  whatsappUrl,
  phoneNumber,
  locationName,
  location,
  distanceInfo,
}: ContactCTAProps) {
  return (
    <section id="contact" className="relative py-[120px] px-8 md:px-[60px] text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={BRAND_IMAGES.ctaBg}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-cream/[0.88] backdrop-blur-[4px]" />
      </div>

      {/* Content */}
      <div className="relative z-[2]">
        <ScrollReveal>
          <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
            Get In Touch
          </p>
        </ScrollReveal>
        <SplitHeading className="font-heading text-[42px] md:text-[56px] font-light text-primary mb-3 leading-[1.15]">
          {heading}
        </SplitHeading>
        <ScrollReveal>
          <p className="text-base text-[#999] mb-11 font-light">
            {subtext}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex gap-4 justify-center mb-10 flex-col sm:flex-row items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-[18px] bg-whatsapp text-white rounded-md text-sm font-semibold shadow-[0_4px_24px_rgba(37,211,102,0.3)] hover:translate-y-[-3px] hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-400 tracking-wide"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 px-10 py-[18px] bg-primary text-white rounded-md text-sm font-semibold shadow-[0_4px_24px_rgba(45,90,71,0.3)] hover:translate-y-[-3px] hover:shadow-[0_10px_40px_rgba(45,90,71,0.4)] transition-all duration-400 tracking-wide"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </ScrollReveal>
        {(locationName || location || distanceInfo) && (
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-[#bbb] font-light leading-[1.8]">
              {locationName && (
                <strong className="text-body font-medium">{locationName}</strong>
              )}
              {location && (
                <>
                  <br />
                  {location}
                </>
              )}
              {distanceInfo && (
                <>
                  <br />
                  {distanceInfo}
                </>
              )}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/contact-cta.tsx
git commit -m "refactor: make contact-cta accept props for brand vs property use"
```

---

### Task 11: Update footer for brand

**Files:**
- Modify: `src/components/sections/footer.tsx`

- [ ] **Step 1: Rewrite footer with brand-level content**

```tsx
import { BRAND } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Shimla", href: "/shimla" },
  { label: "Manali", href: "/manali" },
  { label: "Our Story", href: "/#welcome" },
  { label: "Contact", href: "/#contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Google Reviews", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-darkest text-cream/40 py-[60px] px-8 md:px-[60px]">
      <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 max-w-[1100px] mx-auto">
        <div>
          <h5 className="font-heading text-xl text-cream/80 mb-4 font-normal">
            {BRAND.name}
          </h5>
          <p className="text-[13px] leading-8">
            Born in Himachal, rooted in the mountains.
            <br />
            Authentic stays in Shimla and Manali — personally hosted, locally
            guided, and always unforgettable.
          </p>
        </div>
        <div>
          <h5 className="font-heading text-xl text-cream/80 mb-4 font-normal">
            Explore
          </h5>
          <p className="text-[13px] leading-8">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-cream/40 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </p>
        </div>
        <div>
          <h5 className="font-heading text-xl text-cream/80 mb-4 font-normal">
            Follow Us
          </h5>
          <p className="text-[13px] leading-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-cream/40 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </p>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto mt-9 pt-6 border-t border-white/5 text-xs text-center tracking-wider">
        © {new Date().getFullYear()} {BRAND.name} · Himachal Pradesh, India
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/footer.tsx
git commit -m "feat: rewrite footer with brand-level content and property links"
```

---

### Task 12: Make property-specific sections accept props

**Files:**
- Modify: `src/components/sections/rooms.tsx`
- Modify: `src/components/sections/dining.tsx`
- Modify: `src/components/sections/experiences.tsx`
- Modify: `src/components/sections/gallery.tsx`
- Modify: `src/components/sections/extras.tsx`

- [ ] **Step 1: Update rooms.tsx to accept property data**

Replace the hardcoded `ROOMS` array and accept props:

```tsx
import Image from "next/image";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

interface Room {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

function RoomCard({
  room,
  height,
  className = "",
}: {
  room: Room;
  height: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden relative cursor-pointer group transition-all duration-500 hover:translate-y-[-4px] ${className}`}
    >
      <div className={`relative overflow-hidden ${height}`}>
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black/65 to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 p-7 z-[2] text-white">
          <h3 className="font-heading text-[28px] font-normal mb-1.5">
            {room.name}
          </h3>
          <p className="text-[13px] opacity-80 mb-3">{room.description}</p>
          <div className="flex gap-1.5 flex-wrap">
            {room.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-white/15 backdrop-blur-[10px] px-2.5 py-1 rounded-full text-white font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Rooms({ rooms }: { rooms: Room[] }) {
  return (
    <section
      id="rooms"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
          Accommodation
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        Our Rooms
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Clean, cozy, and each with a view worth waking up for
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-[7fr_5fr] gap-6 max-w-[1100px] mx-auto w-full">
        <ScrollReveal>
          <RoomCard room={rooms[0]} height="h-[520px]" />
        </ScrollReveal>
        <div className="flex flex-col gap-6">
          {rooms.slice(1).map((room, i) => (
            <ScrollReveal key={room.name} delay={(i + 1) * 0.15}>
              <RoomCard room={room} height="h-[248px]" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update dining.tsx to accept property data**

```tsx
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
        {/* Image with clip-path reveal */}
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

        {/* Text */}
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
```

- [ ] **Step 3: Update experiences.tsx to accept property data**

```tsx
import Image from "next/image";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

interface Experience {
  name: string;
  subtitle: string;
  image: string;
}

export function Experiences({ experiences, locationName }: { experiences: Experience[]; locationName: string }) {
  return (
    <section
      id="experiences"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
          Explore
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        Discover {locationName}
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Ask your hosts for the best routes and hidden gems
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px] mx-auto w-full">
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.name} delay={i * 0.12}>
            <div className="rounded-xl overflow-hidden relative h-[280px] md:h-[340px] cursor-pointer group hover:translate-y-[-6px] transition-all duration-500">
              <Image
                src={exp.image}
                alt={exp.name}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-black/70 to-transparent z-[1]" />
              <div className="relative z-[2] absolute bottom-0 left-0 right-0 p-7">
                <h4 className="font-heading text-2xl text-white font-normal mb-1">
                  {exp.name}
                </h4>
                <p className="text-xs text-white/70 font-light">{exp.subtitle}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Update gallery.tsx to accept property data**

```tsx
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
```

- [ ] **Step 5: Update extras.tsx to accept property data**

```tsx
import Image from "next/image";
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
          <ScrollReveal key={extra.title} delay={i * 0.15}>
            <div className="bg-white/4 border border-white/8 rounded-xl p-10 px-7 text-center hover:translate-y-[-6px] hover:bg-white/8 transition-all duration-500">
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
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/rooms.tsx src/components/sections/dining.tsx src/components/sections/experiences.tsx src/components/sections/gallery.tsx src/components/sections/extras.tsx
git commit -m "refactor: make property sections accept data as props"
```

---

### Task 13: Update floating WhatsApp to use brand data

**Files:**
- Modify: `src/components/ui/floating-wa.tsx`

- [ ] **Step 1: Read and update floating-wa.tsx**

Update the import from `HOTEL` to `BRAND`:

Change `import { HOTEL } from "@/lib/constants"` to `import { BRAND } from "@/lib/constants"` and update any reference from `HOTEL.whatsappUrl` to `BRAND.whatsappUrl`.

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/floating-wa.tsx
git commit -m "refactor: update floating WhatsApp to use brand data"
```

---

### Task 14: Rewrite brand homepage (page.tsx)

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Rewrite homepage to assemble brand sections**

```tsx
import { Navbar } from "@/components/ui/navbar";
import { SectionDots } from "@/components/ui/section-dots";
import { Hero } from "@/components/sections/hero";
import { Welcome } from "@/components/sections/welcome";
import { Pillars } from "@/components/sections/pillars";
import { Properties } from "@/components/sections/properties";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Footer } from "@/components/sections/footer";
import { BRAND, BRAND_IMAGES, HOMEPAGE_SECTION_IDS } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Our Story", href: "#welcome" },
  { label: "Shimla", href: "/shimla" },
  { label: "Manali", href: "/manali" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Home() {
  return (
    <main>
      <Navbar links={NAV_LINKS} />
      <SectionDots sectionIds={HOMEPAGE_SECTION_IDS} />
      <Hero
        image={BRAND_IMAGES.hero}
        imageAlt="Himalayan mountains in Himachal Pradesh"
        preheading={BRAND.tagline}
        heading="Heaven Paradise"
        subtext="Born in the heart of Himachal, we don't just offer stays — we offer the mountains the way only a local can. Hidden trails. Home-cooked meals. Moments you won't find in any guidebook."
        ctaText="Explore Our Properties"
        ctaHref="#properties"
      />
      <Welcome />
      <Pillars />
      <Properties />
      <Testimonials />
      <ContactCTA
        heading="Your mountains are waiting"
        subtext="Let us plan your perfect Himachal escape. Tell us when you're coming, and we'll take care of everything else."
        whatsappUrl={BRAND.whatsappUrl}
        phoneNumber={BRAND.phoneNumber}
      />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: rewrite homepage as brand landing page"
```

---

### Task 15: Create Shimla property page

**Files:**
- Create: `src/app/shimla/page.tsx`

- [ ] **Step 1: Create the Shimla property page**

```tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/ui/navbar";
import { SectionDots } from "@/components/ui/section-dots";
import { Hero } from "@/components/sections/hero";
import { Rooms } from "@/components/sections/rooms";
import { Dining } from "@/components/sections/dining";
import { Experiences } from "@/components/sections/experiences";
import { Gallery } from "@/components/sections/gallery";
import { Extras } from "@/components/sections/extras";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Footer } from "@/components/sections/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PROPERTIES, BRAND_IMAGES, PROPERTY_SECTION_IDS } from "@/lib/constants";

const property = PROPERTIES.shimla;

export const metadata: Metadata = {
  title: `${property.name} — Heaven Paradise | ${property.location}`,
  description: property.description,
};

const NAV_LINKS = [
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
];

export default function ShimlaPage() {
  return (
    <main>
      <Navbar links={NAV_LINKS} />
      <SectionDots sectionIds={PROPERTY_SECTION_IDS} />
      <Hero
        image={BRAND_IMAGES.shimlaHero}
        imageAlt="Valley view from Hotel Heaven Paradise, Shimla"
        preheading={property.location}
        heading={property.name}
        subtext={property.tagline}
        ctaText="View Rooms"
        ctaHref="#rooms"
      />

      {/* About section */}
      <section id="about" className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
              About This Property
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-[40px] md:text-[48px] font-light text-primary mb-6 leading-[1.15]">
              Your Home in Shimla
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base text-[#777] leading-[1.9] font-light mb-4">
              {property.description} Wake up to birdsong, sip chai watching the
              clouds roll in, and let us show you the Shimla the guidebooks
              forgot.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base text-[#777] leading-[1.9] font-light">
              {property.roomCount} rooms · {property.distanceInfo} · Personally
              hosted by Akshit
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Rooms rooms={[...property.rooms]} />
      <Dining
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
        imageAlt="Dining at Hotel Heaven Paradise"
        title={property.diningTitle}
        paragraphs={[...property.diningText]}
        meals={[...property.meals]}
      />
      <Experiences experiences={[...property.experiences]} locationName="Shimla" />
      <Gallery items={[...property.galleryItems]} propertyName={property.name} />
      <Extras extras={[...property.extras]} />
      <ContactCTA
        heading="Ready to Visit Shimla?"
        subtext="Reach out directly — we'd love to host you"
        whatsappUrl={property.whatsappUrl}
        phoneNumber={property.phoneNumber}
        locationName={property.name}
        location={property.location}
        distanceInfo={property.distanceInfo}
      />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/shimla/page.tsx
git commit -m "feat: add Shimla property page"
```

---

### Task 16: Create Manali property page

**Files:**
- Create: `src/app/manali/page.tsx`

- [ ] **Step 1: Create the Manali property page**

```tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/ui/navbar";
import { SectionDots } from "@/components/ui/section-dots";
import { Hero } from "@/components/sections/hero";
import { Rooms } from "@/components/sections/rooms";
import { Dining } from "@/components/sections/dining";
import { Experiences } from "@/components/sections/experiences";
import { Gallery } from "@/components/sections/gallery";
import { Extras } from "@/components/sections/extras";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Footer } from "@/components/sections/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PROPERTIES, BRAND_IMAGES, PROPERTY_SECTION_IDS } from "@/lib/constants";

const property = PROPERTIES.manali;

export const metadata: Metadata = {
  title: `${property.name} — Heaven Paradise | ${property.location}`,
  description: property.description,
};

const NAV_LINKS = [
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
];

export default function ManaliPage() {
  return (
    <main>
      <Navbar links={NAV_LINKS} />
      <SectionDots sectionIds={PROPERTY_SECTION_IDS} />
      <Hero
        image={BRAND_IMAGES.manaliHero}
        imageAlt="Mountain peaks near Manali, Himachal Pradesh"
        preheading={property.location}
        heading={property.name}
        subtext={property.tagline}
        ctaText="View Rooms"
        ctaHref="#rooms"
      />

      {/* About section */}
      <section id="about" className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
              About This Property
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-[40px] md:text-[48px] font-light text-primary mb-6 leading-[1.15]">
              Your Home in Manali
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base text-[#777] leading-[1.9] font-light mb-4">
              {property.description} The real magic is what we&apos;ll take you
              to — frozen waterfalls, hidden hot springs, and villages where time
              moves differently.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base text-[#777] leading-[1.9] font-light">
              {property.roomCount} rooms · {property.distanceInfo} · Personally
              hosted by Akshit
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Rooms rooms={[...property.rooms]} />
      <Dining
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
        imageAlt="Dining at Hotel DK Residency"
        title={property.diningTitle}
        paragraphs={[...property.diningText]}
        meals={[...property.meals]}
      />
      <Experiences experiences={[...property.experiences]} locationName="Manali" />
      <Gallery items={[...property.galleryItems]} propertyName={property.name} />
      <Extras extras={[...property.extras]} />
      <ContactCTA
        heading="Ready to Visit Manali?"
        subtext="Reach out directly — we'd love to host you"
        whatsappUrl={property.whatsappUrl}
        phoneNumber={property.phoneNumber}
        locationName={property.name}
        location={property.location}
        distanceInfo={property.distanceInfo}
      />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/manali/page.tsx
git commit -m "feat: add Manali property page"
```

---

### Task 17: Verify build and fix any issues

**Files:**
- All modified files

- [ ] **Step 1: Run TypeScript check**

Run: `cd /Users/ankitangra/code/AkshitHotel && npx tsc --noEmit`
Expected: No errors

- [ ] **Step 2: Run dev server and verify**

Run: `cd /Users/ankitangra/code/AkshitHotel && npx next build`
Expected: Build succeeds with no errors

- [ ] **Step 3: Fix any issues found**

If there are errors, fix them and re-run the build.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "fix: resolve any build issues from rebrand migration"
```
