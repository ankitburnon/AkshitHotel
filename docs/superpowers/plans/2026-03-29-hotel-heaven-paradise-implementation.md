# Hotel Heaven Paradise Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page scrolling hotel website with parallax hero, scroll-triggered reveals, and WhatsApp-based booking for Hotel Heaven Paradise, Shimla.

**Architecture:** Next.js 15 App Router with a single page (`/`) composed of section components. Framer Motion handles all scroll animations (parallax, reveals, clip-path). Lenis provides smooth scrolling. All sections are separate components in `src/components/sections/`. Shared UI primitives (navbar, buttons, floating WhatsApp) live in `src/components/ui/`.

**Tech Stack:** Next.js 15, Tailwind CSS v4, Framer Motion, Lenis, Lucide React, next/font (Cormorant Garamond + Karla)

**Design Spec:** `docs/superpowers/specs/2026-03-29-hotel-heaven-paradise-website-design.md`
**Visual Mockup:** `.superpowers/brainstorm/9323-1774757442/content/homepage-v3.html`

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, SmoothScroll provider
│   ├── page.tsx             # Home page: composes all sections
│   └── globals.css          # Tailwind imports + linen texture + custom utilities
├── components/
│   ├── ui/
│   │   ├── navbar.tsx       # Fixed navbar with scroll-based transformation
│   │   ├── section-dots.tsx # Fixed right-side section navigation dots
│   │   ├── progress-bar.tsx # Fixed top progress bar
│   │   ├── floating-wa.tsx  # Floating WhatsApp button
│   │   └── scroll-reveal.tsx # Reusable scroll-triggered reveal wrapper
│   └── sections/
│       ├── hero.tsx         # Parallax hero with layered mountains
│       ├── welcome.tsx      # Sticky image + scrolling text chapters
│       ├── pillars.tsx      # Three promise cards
│       ├── rooms.tsx        # Asymmetric room grid
│       ├── dining.tsx       # Clip-path image reveal + text
│       ├── experiences.tsx  # 4-column experience cards
│       ├── gallery.tsx      # Asymmetric masonry gallery
│       ├── extras.tsx       # Dark section: bonfire, games, parking
│       ├── testimonials.tsx # Review cards with avatars
│       ├── contact-cta.tsx  # Frosted CTA with WhatsApp + Phone
│       └── footer.tsx       # Dark footer with links
├── lib/
│   ├── smooth-scroll.tsx    # Lenis provider component
│   └── constants.ts         # Colors, section IDs, image URLs, hotel info
├── hooks/
│   └── use-scroll-progress.ts # Custom hook for scroll progress (0-1)
tailwind.config.ts            # Custom colors, fonts, animations
next.config.ts                # Image domains (unsplash)
```

---

## Task 1: Project Scaffolding & Configuration

**Files:**
- Create: `package.json`, `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- Create: `src/lib/constants.ts`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd /Users/ankitangra/code/AkshitHotel
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
```

Expected: Project scaffolded with `src/app/` structure.

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion lenis lucide-react
```

- [ ] **Step 3: Configure next.config.ts for Unsplash images**

Replace `next.config.ts` with:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 4: Configure Tailwind with custom theme**

Replace `tailwind.config.ts` with:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D5A47",
        cream: "#FAF6F1",
        accent: "#C2703E",
        highlight: "#A16207",
        body: "#3D3530",
        "dark-bg": "#1a3a2e",
        darkest: "#0a1f16",
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-karla)", "sans-serif"],
      },
      animation: {
        "mist-drift": "mistDrift 8s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        mistDrift: {
          "0%, 100%": { transform: "translateX(-2%)" },
          "50%": { transform: "translateX(2%)" },
        },
        float: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 5: Create globals.css**

Replace `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme {
  --color-primary: #2D5A47;
  --color-cream: #FAF6F1;
  --color-accent: #C2703E;
  --color-highlight: #A16207;
  --color-body: #3D3530;
  --color-dark-bg: #1a3a2e;
  --color-darkest: #0a1f16;
  --color-whatsapp: #25D366;

  --font-heading: var(--font-cormorant), serif;
  --font-body: var(--font-karla), sans-serif;

  --animate-mist-drift: mist-drift 8s ease-in-out infinite;
  --animate-float: float 3s ease-in-out infinite;

  @keyframes mist-drift {
    0%, 100% { transform: translateX(-2%); }
    50% { transform: translateX(2%); }
  }

  @keyframes float {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-8px); }
  }
}

/* Linen texture overlay */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23000000' fill-opacity='0.02'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}
```

- [ ] **Step 6: Create constants file**

Create `src/lib/constants.ts`:

```typescript
export const HOTEL = {
  name: "Hotel Heaven Paradise",
  tagline: "A Boutique Retreat in Shimla",
  location: "Shimla, Himachal Pradesh",
  // TODO: Replace with actual hotel WhatsApp number and phone before deployment
  whatsappUrl: "https://wa.me/91XXXXXXXXXX",
  phoneNumber: "+91-XXXXXXXXXX",
  distanceFromStation: "15 min from Shimla Railway Station",
} as const;

export const SECTION_IDS = [
  "hero",
  "welcome",
  "pillars",
  "rooms",
  "dining",
  "experiences",
  "gallery",
  "extras",
  "testimonials",
  "contact",
] as const;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
  welcome: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  pillarMountain: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&q=80",
  pillarFood: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80",
  pillarHospitality: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=80",
  roomValley: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  roomSuite: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
  roomFamily: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  mealBreakfast: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=200&q=80",
  mealDinner: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=200&q=80",
  mealChai: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&q=80",
  expMallRoad: "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=400&q=80",
  expJakhu: "https://images.unsplash.com/photo-1585136917228-0b1e78516072?w=400&q=80",
  expKufri: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&q=80",
  expToyTrain: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80",
  galleryNight: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  galleryMountain: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
  galleryBreakfast: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=500&q=80",
  galleryRoom: "https://images.unsplash.com/photo-1590490360182-c33d955e4c47?w=500&q=80",
  galleryBonfire: "https://images.unsplash.com/photo-1475483768296-6163e8f3a1c2?w=500&q=80",
  extraBonfire: "https://images.unsplash.com/photo-1475483768296-6163e8f3a1c2?w=200&q=80",
  extraGames: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=200&q=80",
  extraParking: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=200&q=80",
  ctaBg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  avatarGuest1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  avatarGuest2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
} as const;
```

- [ ] **Step 7: Create root layout with fonts**

Replace `src/app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Heaven Paradise — Boutique Retreat in Shimla",
  description:
    "A family-run boutique hotel in Shimla with panoramic Himalayan views, home-cooked cuisine, and personal hospitality. Book via WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${karla.variable}`}>
      <body className="font-body bg-cream text-body overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 8: Create placeholder home page**

Replace `src/app/page.tsx` with:

```tsx
export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center">
        <h1 className="font-heading text-4xl text-primary">
          Hotel Heaven Paradise
        </h1>
      </div>
    </main>
  );
}
```

- [ ] **Step 9: Verify the app runs**

```bash
npm run dev
```

Open `http://localhost:3000`. Verify: cream background, serif heading in forest green, Karla body font applied.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind, fonts, and constants"
```

---

## Task 2: Smooth Scroll + Shared UI Primitives

**Files:**
- Create: `src/lib/smooth-scroll.tsx`
- Create: `src/hooks/use-scroll-progress.ts`
- Create: `src/components/ui/scroll-reveal.tsx`
- Create: `src/components/ui/progress-bar.tsx`
- Create: `src/components/ui/section-dots.tsx`
- Create: `src/components/ui/floating-wa.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Lenis smooth scroll provider**

Create `src/lib/smooth-scroll.tsx`:

```tsx
"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
```

- [ ] **Step 2: Create scroll progress hook**

Create `src/hooks/use-scroll-progress.ts`:

```tsx
"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(y);
      setProgress(max > 0 ? y / max : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { progress, scrollY };
}
```

- [ ] **Step 3: Create ScrollReveal component**

Create `src/components/ui/scroll-reveal.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-18%" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SplitHeadingProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SplitHeading({
  children,
  className = "",
  as: Tag = "h2",
}: SplitHeadingProps) {
  const words = children.split(" ");
  return (
    <Tag className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ y: "110%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-18%" }}
          transition={{
            duration: 0.7,
            delay: i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
```

- [ ] **Step 4: Create ProgressBar component**

Create `src/components/ui/progress-bar.tsx`:

```tsx
"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ProgressBar() {
  const { progress } = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-accent z-[1001]"
      style={{ width: `${progress * 100}%` }}
    />
  );
}
```

- [ ] **Step 5: Create SectionDots component**

Create `src/components/ui/section-dots.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/lib/constants";

export function SectionDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    function onScroll() {
      let current = "hero";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
          current = id;
        }
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="fixed right-7 top-1/2 -translate-y-1/2 z-[998] flex flex-col gap-3.5 max-md:hidden">
      {SECTION_IDS.map((id) => (
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

- [ ] **Step 6: Create FloatingWhatsApp component**

Create `src/components/ui/floating-wa.tsx`:

```tsx
"use client";

import { MessageCircle } from "lucide-react";
import { HOTEL } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={HOTEL.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[999] w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-whatsapp flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.35)] hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
}
```

- [ ] **Step 7: Wire providers into layout**

Update `src/app/layout.tsx` — wrap `{children}` with SmoothScroll and add global UI:

```tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionDots } from "@/components/ui/section-dots";
import { FloatingWhatsApp } from "@/components/ui/floating-wa";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Heaven Paradise — Boutique Retreat in Shimla",
  description:
    "A family-run boutique hotel in Shimla with panoramic Himalayan views, home-cooked cuisine, and personal hospitality. Book via WhatsApp.",
};

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
          <SectionDots />
          {children}
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
```

- [ ] **Step 8: Verify**

```bash
npm run dev
```

Open `http://localhost:3000`. Verify: progress bar at top, section dots on right (hidden on mobile), floating WhatsApp button bottom-right.

- [ ] **Step 9: Commit**

```bash
git add src/lib/smooth-scroll.tsx src/hooks/use-scroll-progress.ts src/components/ui/ src/app/layout.tsx
git commit -m "feat: add smooth scroll, progress bar, section dots, floating WhatsApp"
```

---

## Task 3: Navbar

**Files:**
- Create: `src/components/ui/navbar.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Navbar component**

Create `src/components/ui/navbar.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HOTEL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "About", href: "#welcome" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
];

export function Navbar() {
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
          href="#hero"
          className={`font-heading tracking-wide transition-all duration-600 ${
            scrolled
              ? "text-primary text-[22px] font-light"
              : "text-white text-[26px] font-light"
          }`}
        >
          {HOTEL.name}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
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
          href="#contact"
          className={`hidden md:block text-[13px] font-semibold tracking-wide rounded-md transition-all duration-400 px-6 py-2.5 ${
            scrolled
              ? "bg-primary text-white border border-primary"
              : "bg-transparent text-white border border-white/40 hover:bg-white/15"
          }`}
        >
          WhatsApp Us
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
          {NAV_LINKS.map((link) => (
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
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 bg-primary text-white rounded-md font-semibold"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 2: Add Navbar to page**

Update `src/app/page.tsx`:

```tsx
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="hero" className="h-screen flex items-center justify-center bg-primary">
        <h1 className="font-heading text-4xl text-white">
          Hotel Heaven Paradise
        </h1>
      </div>
      <div id="welcome" className="h-screen bg-white" />
      <div id="pillars" className="h-screen bg-cream" />
      <div id="rooms" className="h-screen bg-white" />
      <div id="dining" className="h-screen bg-cream" />
      <div id="experiences" className="h-screen bg-white" />
      <div id="gallery" className="h-screen bg-cream" />
      <div id="extras" className="h-screen bg-dark-bg" />
      <div id="testimonials" className="h-screen bg-white" />
      <div id="contact" className="h-screen bg-cream" />
    </main>
  );
}
```

- [ ] **Step 3: Verify**

```bash
npm run dev
```

Scroll down — navbar should transition from transparent/white to cream/dark. Section dots should track. Mobile: hamburger menu opens drawer.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/navbar.tsx src/app/page.tsx
git commit -m "feat: add navbar with scroll transformation and mobile drawer"
```

---

## Task 4: Hero Section

**Files:**
- Create: `src/components/sections/hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Hero component**

Create `src/components/sections/hero.tsx`:

```tsx
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGES, HOTEL } from "@/lib/constants";
import { SplitHeading } from "@/components/ui/scroll-reveal";

export function Hero() {
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
          src={IMAGES.hero}
          alt="Himalayan mountains near Shimla"
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
          {HOTEL.tagline}
        </p>
        <SplitHeading
          as="h1"
          className="font-heading text-[40px] md:text-7xl font-light leading-[1.08] mb-5 [text-shadow:0_4px_40px_rgba(0,0,0,0.4)]"
        >
          Where the Mountains Meet Warm Hospitality
        </SplitHeading>
        <p className="text-[15px] opacity-70 mb-10 tracking-wide font-light">
          Panoramic Himalayan views · Home-cooked cuisine · Personal touches
        </p>
        <a
          href="#rooms"
          className="inline-block w-full sm:w-auto px-11 py-4 bg-accent text-white rounded-[4px] text-[13px] font-semibold tracking-[1.5px] uppercase shadow-[0_4px_30px_rgba(194,112,62,0.4)] hover:translate-y-[-2px] hover:shadow-[0_8px_40px_rgba(194,112,62,0.5)] transition-all duration-400 relative overflow-hidden group"
        >
          <span className="absolute top-0 left-[-100%] w-full h-full bg-white/15 group-hover:left-[100%] transition-[left] duration-500" />
          <span className="relative">Explore Our Rooms</span>
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

- [ ] **Step 2: Replace hero placeholder in page**

Update `src/app/page.tsx` — replace the hero div:

```tsx
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="welcome" className="h-screen bg-white" />
      <div id="pillars" className="h-screen bg-cream" />
      <div id="rooms" className="h-screen bg-white" />
      <div id="dining" className="h-screen bg-cream" />
      <div id="experiences" className="h-screen bg-white" />
      <div id="gallery" className="h-screen bg-cream" />
      <div id="extras" className="h-screen bg-dark-bg" />
      <div id="testimonials" className="h-screen bg-white" />
      <div id="contact" className="h-screen bg-cream" />
    </main>
  );
}
```

- [ ] **Step 3: Verify**

```bash
npm run dev
```

Hero should show: mountain background with parallax on scroll, mist layer drifting, split-word heading animating in, terracotta CTA with shine hover, scroll indicator fading out.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/hero.tsx src/app/page.tsx
git commit -m "feat: add parallax hero section with split-word heading"
```

---

## Task 5: Welcome Section (Sticky Image)

**Files:**
- Create: `src/components/sections/welcome.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Welcome component**

Create `src/components/sections/welcome.tsx`:

```tsx
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Welcome() {
  return (
    <section id="welcome" className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white">
      <div className="grid md:grid-cols-2 gap-0 max-w-[1200px] mx-auto min-h-[80vh]">
        {/* Sticky image */}
        <div className="md:sticky md:top-[100px] md:h-[calc(100vh-200px)] md:self-start mb-12 md:mb-0">
          <div className="w-full h-[300px] md:h-full rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(45,90,71,0.2)]">
            <Image
              src={IMAGES.welcome}
              alt="Hotel Heaven Paradise exterior"
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
                Our Story
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-heading text-[32px] text-primary italic font-light mb-6 leading-[1.4]">
                &ldquo;A note from
                <br />
                your hosts&rdquo;
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                Nestled in the heart of Shimla, Hotel Heaven Paradise is more
                than just a place to stay — it&apos;s a home away from home.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base leading-[1.9] text-[#777] font-light">
                What started as a family dream has become a warm, personal
                retreat for travellers seeking the real Shimla experience.
              </p>
            </ScrollReveal>
          </div>

          {/* Chapter 2 */}
          <div className="min-h-[50vh] flex flex-col justify-center py-10">
            <ScrollReveal>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                We believe in simple luxuries — a hot cup of chai with a
                mountain view, home-cooked meals that taste like your
                grandmother&apos;s kitchen, and the kind of personal attention
                that only a family-run hotel can offer.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-[1.9] text-[#777] font-light mb-4">
                Every guest becomes family. Every stay becomes a story.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[13px] text-highlight font-semibold tracking-wide">
                — The Heaven Paradise Family
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page, replace placeholder**

In `src/app/page.tsx`, import `Welcome` and replace the `#welcome` div:

```tsx
import { Welcome } from "@/components/sections/welcome";
```

Replace `<div id="welcome" className="h-screen bg-white" />` with `<Welcome />`.

- [ ] **Step 3: Verify, then commit**

```bash
npm run dev
```

Verify sticky image behavior on scroll. Then:

```bash
git add src/components/sections/welcome.tsx src/app/page.tsx
git commit -m "feat: add welcome section with sticky image layout"
```

---

## Task 6: Pillars Section

**Files:**
- Create: `src/components/sections/pillars.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Pillars component**

Create `src/components/sections/pillars.tsx`:

```tsx
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const PILLARS = [
  {
    image: IMAGES.pillarMountain,
    title: "Mountain Views",
    description:
      "Wake up to panoramic Himalayan vistas from every room. Tea on the balcony hits different.",
  },
  {
    image: IMAGES.pillarFood,
    title: "Home-Cooked Meals",
    description:
      "Authentic Himachali and North Indian cuisine, made fresh daily with local ingredients.",
  },
  {
    image: IMAGES.pillarHospitality,
    title: "Personal Hospitality",
    description:
      "We know our guests by name, not room number. Your comfort is our family's priority.",
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
          Why Choose Us
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        Three Things We Promise
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Simple values that make every stay special
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

- [ ] **Step 2: Add to page, replace placeholder, verify, commit**

Import and replace `#pillars` div. Verify staggered card reveal on scroll.

```bash
git add src/components/sections/pillars.tsx src/app/page.tsx
git commit -m "feat: add three pillars section with staggered reveals"
```

---

## Task 7: Rooms Section (Asymmetric Grid)

**Files:**
- Create: `src/components/sections/rooms.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Rooms component**

Create `src/components/sections/rooms.tsx`:

```tsx
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const ROOMS = [
  {
    name: "Valley View Room",
    description:
      "A cozy room with a private balcony overlooking the lush green valley. Perfect for couples seeking peace.",
    image: IMAGES.roomValley,
    tags: ["Valley View", "Balcony", "Heater", "Hot Water"],
  },
  {
    name: "Mountain Suite",
    description:
      "Panoramic views, sitting area, and a cozy reading corner.",
    image: IMAGES.roomSuite,
    tags: ["Panoramic", "Suite", "Window Seat"],
  },
  {
    name: "Family Room",
    description:
      "Extra space for families with little ones. Views the kids will remember.",
    image: IMAGES.roomFamily,
    tags: ["Family", "Extra Beds", "Spacious"],
  },
];

function RoomCard({
  room,
  height,
  className = "",
}: {
  room: (typeof ROOMS)[number];
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

export function Rooms() {
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
          <RoomCard room={ROOMS[0]} height="h-[520px]" />
        </ScrollReveal>
        <div className="flex flex-col gap-6">
          <ScrollReveal delay={0.2}>
            <RoomCard room={ROOMS[1]} height="h-[248px]" />
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <RoomCard room={ROOMS[2]} height="h-[248px]" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page, replace placeholder, verify, commit**

```bash
git add src/components/sections/rooms.tsx src/app/page.tsx
git commit -m "feat: add rooms section with asymmetric grid and hover zoom"
```

---

## Task 8: Dining Section (Clip-Path Reveal)

**Files:**
- Create: `src/components/sections/dining.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Dining component**

Create `src/components/sections/dining.tsx`:

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const MEALS = [
  { image: IMAGES.mealBreakfast, label: "Breakfast" },
  { image: IMAGES.mealDinner, label: "Dinner" },
  { image: IMAGES.mealChai, label: "Chai Time" },
];

export function Dining() {
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
              src={IMAGES.dining}
              alt="Dining at Hotel Heaven Paradise"
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
            From Our Kitchen to Your Table
          </SplitHeading>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base text-[#777] leading-[1.9] mb-4 font-light">
              No buffet lines, no reheated food. Every meal is cooked fresh —
              just like home. Wake up to hot parathas and chai, end your day with
              a hearty Himachali dinner.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base text-[#777] leading-[1.9] mb-8 font-light">
              Our specialties include siddu, madra, babru, and the best dal
              you&apos;ve had in the mountains.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="flex gap-5">
              {MEALS.map((meal) => (
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

- [ ] **Step 2: Add to page, replace placeholder, verify, commit**

```bash
git add src/components/sections/dining.tsx src/app/page.tsx
git commit -m "feat: add dining section with cinematic clip-path reveal"
```

---

## Task 9: Experiences Section

**Files:**
- Create: `src/components/sections/experiences.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Experiences component**

Create `src/components/sections/experiences.tsx`:

```tsx
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const EXPERIENCES = [
  { name: "Mall Road", subtitle: "Heritage walk through Shimla's heart", image: IMAGES.expMallRoad },
  { name: "Jakhu Temple", subtitle: "Morning hike to the hilltop", image: IMAGES.expJakhu },
  { name: "Kufri", subtitle: "Snow & adventure nearby", image: IMAGES.expKufri },
  { name: "Toy Train", subtitle: "UNESCO heritage railway", image: IMAGES.expToyTrain },
];

export function Experiences() {
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
        Discover Shimla
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Ask your hosts for the best routes and hidden gems
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px] mx-auto w-full">
        {EXPERIENCES.map((exp, i) => (
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

- [ ] **Step 2: Add to page, replace placeholder, verify, commit**

```bash
git add src/components/sections/experiences.tsx src/app/page.tsx
git commit -m "feat: add experiences section with hover zoom cards"
```

---

## Task 10: Gallery Section (Asymmetric Masonry)

**Files:**
- Create: `src/components/sections/gallery.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Gallery component**

Create `src/components/sections/gallery.tsx`:

```tsx
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const GALLERY_ITEMS = [
  { src: IMAGES.galleryNight, alt: "Hotel Heaven Paradise at night" },
  { src: IMAGES.galleryMountain, alt: "Mountain view from the hotel" },
  { src: IMAGES.galleryBreakfast, alt: "Breakfast at the hotel" },
  { src: IMAGES.galleryRoom, alt: "Room interior" },
  { src: IMAGES.galleryBonfire, alt: "Evening bonfire" },
];

export function Gallery() {
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
          Real moments from Hotel Heaven Paradise
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[3fr_2fr_2fr] md:grid-rows-[220px_220px] gap-3 max-w-[1100px] mx-auto w-full">
        {GALLERY_ITEMS.map((item, i) => (
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

- [ ] **Step 2: Add to page, replace placeholder, verify, commit**

```bash
git add src/components/sections/gallery.tsx src/app/page.tsx
git commit -m "feat: add asymmetric masonry gallery section"
```

---

## Task 11: Extras Section (Dark)

**Files:**
- Create: `src/components/sections/extras.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Extras component**

Create `src/components/sections/extras.tsx`:

```tsx
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const EXTRAS = [
  {
    image: IMAGES.extraBonfire,
    title: "Evening Bonfire",
    description:
      "Gather around the fire under the stars. Perfect for families and couples on cold mountain evenings.",
  },
  {
    image: IMAGES.extraGames,
    title: "Games & Books",
    description:
      "Board games, cards, and a small library. Some evenings are best spent offline.",
  },
  {
    image: IMAGES.extraParking,
    title: "Free Parking",
    description:
      "Safe, on-site parking for your car. One less thing to worry about on your trip.",
  },
];

export function Extras() {
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
        {EXTRAS.map((extra, i) => (
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

- [ ] **Step 2: Add to page, replace placeholder, verify, commit**

```bash
git add src/components/sections/extras.tsx src/app/page.tsx
git commit -m "feat: add extras section on dark background"
```

---

## Task 12: Testimonials Section

**Files:**
- Create: `src/components/sections/testimonials.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Testimonials component**

Create `src/components/sections/testimonials.tsx`:

```tsx
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const REVIEWS = [
  {
    avatar: IMAGES.avatarGuest1,
    quote:
      "The views were absolutely breathtaking and the food was the best we had in all of Shimla. The hosts treated us like family — we didn't want to leave.",
    author: "Priya & Rahul",
    location: "Delhi",
  },
  {
    avatar: IMAGES.avatarGuest2,
    quote:
      "Felt like staying at a friend's mountain home. The kids loved the bonfire and board games. We're already planning our next visit.",
    author: "The Sharma Family",
    location: "Mumbai",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
          Reviews
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        What Our Guests Say
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Real reviews from real families
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-7 max-w-[900px] mx-auto">
        {REVIEWS.map((review, i) => (
          <ScrollReveal key={review.author} delay={i * 0.15}>
            <div className="bg-white border border-primary/6 rounded-xl p-9 text-left">
              <div className="w-10 h-10 rounded-full overflow-hidden mb-4">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-highlight text-[13px] tracking-[2px] mb-4">
                ★ ★ ★ ★ ★
              </div>
              <blockquote className="font-heading text-lg text-[#555] leading-[1.7] italic font-light mb-5">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <p className="text-xs text-highlight font-semibold tracking-wider uppercase">
                {review.author} · {review.location}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page, replace placeholder, verify, commit**

```bash
git add src/components/sections/testimonials.tsx src/app/page.tsx
git commit -m "feat: add testimonials section with guest reviews"
```

---

## Task 13: Contact CTA + Footer

**Files:**
- Create: `src/components/sections/contact-cta.tsx`
- Create: `src/components/sections/footer.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create ContactCTA component**

Create `src/components/sections/contact-cta.tsx`:

```tsx
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { IMAGES, HOTEL } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-[120px] px-8 md:px-[60px] text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.ctaBg}
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
          Ready to Visit Paradise?
        </SplitHeading>
        <ScrollReveal>
          <p className="text-base text-[#999] mb-11 font-light">
            Reach out directly — we&apos;d love to host you
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex gap-4 justify-center mb-10 flex-col sm:flex-row items-center">
            <a
              href={HOTEL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-[18px] bg-whatsapp text-white rounded-md text-sm font-semibold shadow-[0_4px_24px_rgba(37,211,102,0.3)] hover:translate-y-[-3px] hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-400 tracking-wide"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${HOTEL.phoneNumber}`}
              className="flex items-center gap-3 px-10 py-[18px] bg-primary text-white rounded-md text-sm font-semibold shadow-[0_4px_24px_rgba(45,90,71,0.3)] hover:translate-y-[-3px] hover:shadow-[0_10px_40px_rgba(45,90,71,0.4)] transition-all duration-400 tracking-wide"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-sm text-[#bbb] font-light leading-[1.8]">
            <strong className="text-body font-medium">{HOTEL.name}</strong>
            <br />
            {HOTEL.location}
            <br />
            {HOTEL.distanceFromStation}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create Footer component**

Create `src/components/sections/footer.tsx`:

```tsx
import { HOTEL } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
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
            {HOTEL.name}
          </h5>
          <p className="text-[13px] leading-8">
            A boutique retreat in the heart of Shimla.
            <br />
            Family-run, personally hosted, and always warm — even when the
            mountains are cold.
          </p>
        </div>
        <div>
          <h5 className="font-heading text-xl text-cream/80 mb-4 font-normal">
            Quick Links
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
        © {new Date().getFullYear()} {HOTEL.name} · {HOTEL.location}
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Add both to page, replace remaining placeholders**

Update `src/app/page.tsx` — the final version with all sections imported:

```tsx
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { Welcome } from "@/components/sections/welcome";
import { Pillars } from "@/components/sections/pillars";
import { Rooms } from "@/components/sections/rooms";
import { Dining } from "@/components/sections/dining";
import { Experiences } from "@/components/sections/experiences";
import { Gallery } from "@/components/sections/gallery";
import { Extras } from "@/components/sections/extras";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Welcome />
      <Pillars />
      <Rooms />
      <Dining />
      <Experiences />
      <Gallery />
      <Extras />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 4: Verify full page end-to-end**

```bash
npm run dev
```

Scroll through the entire page. Verify all sections render, all animations trigger, navbar transforms, dots track, WhatsApp button visible.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/contact-cta.tsx src/components/sections/footer.tsx src/app/page.tsx
git commit -m "feat: add contact CTA and footer, complete all page sections"
```

---

## Task 14: Final Polish & Build Verification

**Files:**
- Modify: `src/app/globals.css` (if needed)
- Create: `.gitignore` updates

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Fix any TypeScript or build errors.

- [ ] **Step 2: Test production build locally**

```bash
npm run start
```

Open `http://localhost:3000`. Verify: images load, animations work, smooth scroll works, all sections visible, no console errors.

- [ ] **Step 3: Add .gitignore entry for superpowers**

Append to `.gitignore`:

```
.superpowers/
```

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: production build verification and gitignore cleanup"
```

---

## Task 15: Deploy to Vercel

- [ ] **Step 1: Create GitHub repository**

```bash
gh repo create AkshitHotel --public --source=. --push
```

(If `gh` CLI is not authenticated, create the repo on github.com manually and push.)

- [ ] **Step 2: Connect to Vercel**

```bash
npx vercel --yes
```

Follow prompts. This creates a Vercel project linked to the repo.

- [ ] **Step 3: Deploy to production**

```bash
npx vercel --prod
```

- [ ] **Step 4: Verify live site**

Open the Vercel URL. Scroll through entire page. Verify all images load from Unsplash, all animations work, WhatsApp button links correctly.

- [ ] **Step 5: Note the live URL and commit any Vercel config**

```bash
git add -A
git commit -m "chore: add Vercel deployment configuration"
```
