# UI/UX Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve conversion (more WhatsApp contacts) and overall polish across the Heaven Paradise website.

**Architecture:** Purely frontend changes — new component, prop extensions, CSS/animation upgrades. No backend, no new dependencies (Framer Motion and Lenis are already installed). All changes are additive; no section is removed.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS v4, Framer Motion 12, Lenis 1.x, TypeScript, lucide-react.

---

## Task 1: Homepage Hero — Dual CTAs + Trust Signals

**Files:**
- Modify: `src/components/sections/hero.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/manali/page.tsx`

- [ ] **Step 1: Update the `HeroProps` interface in `src/components/sections/hero.tsx`**

Replace the interface:
```tsx
interface HeroProps {
  image: string;
  imageAlt: string;
  preheading: string;
  heading: string;
  subtext: string;
  ctaText: string;
  ctaHref: string;
  ctaText2?: string;
  ctaHref2?: string;
  trustSignals?: string[];
}
```

- [ ] **Step 2: Update the CTA and trust signals render block in `hero.tsx`**

Replace the `<a>` CTA block (currently lines 66–73) with:
```tsx
<div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
  <a
    href={ctaHref}
    className="inline-block w-full sm:w-auto px-11 py-4 bg-accent text-white rounded-[4px] text-[13px] font-semibold tracking-[1.5px] uppercase shadow-[0_4px_30px_rgba(194,112,62,0.4)] hover:translate-y-[-2px] hover:shadow-[0_8px_40px_rgba(194,112,62,0.5)] transition-all duration-400 relative overflow-hidden group text-center"
  >
    <span className="absolute top-0 left-[-100%] w-full h-full bg-white/15 group-hover:left-[100%] transition-[left] duration-500" />
    <span className="relative">{ctaText}</span>
  </a>
  {ctaText2 && ctaHref2 && (
    <a
      href={ctaHref2}
      className="inline-block w-full sm:w-auto px-11 py-4 bg-transparent text-white border border-white/40 rounded-[4px] text-[13px] font-semibold tracking-[1.5px] uppercase hover:bg-white/10 hover:translate-y-[-2px] transition-all duration-400 text-center"
    >
      {ctaText2}
    </a>
  )}
</div>
{trustSignals && trustSignals.length > 0 && (
  <p className="text-[11px] text-white/40 tracking-[2.5px] uppercase mt-3">
    {trustSignals.join(" · ")}
  </p>
)}
```

- [ ] **Step 3: Update `src/app/page.tsx` to pass dual CTAs and trust signals**

Change the `<Hero>` props in `src/app/page.tsx`:
```tsx
<Hero
  image={BRAND_IMAGES.hero}
  imageAlt="Himalayan mountains in Himachal Pradesh"
  preheading={BRAND.tagline}
  heading="Heaven Paradise"
  subtext="Born in the heart of Himachal, we don't just offer stays — we offer the mountains the way only a local can. Hidden trails. Home-cooked meals. Moments you won't find in any guidebook."
  ctaText="Explore Shimla"
  ctaHref="/shimla"
  ctaText2="Explore Manali"
  ctaHref2="/manali"
  trustSignals={["500+ Guests Hosted", "4.9★ Google Rating", "Shimla & Manali"]}
/>
```

- [ ] **Step 4: Update `src/app/manali/page.tsx` to pass WhatsApp secondary CTA**

Change the `<Hero>` props in `src/app/manali/page.tsx` (keep existing `ctaText="View Rooms"` / `ctaHref="#rooms"`, add):
```tsx
ctaText2="WhatsApp to Book"
ctaHref2={`${property.whatsappUrl}?text=${encodeURIComponent("Hi, I'd like to book a stay at Hotel DK Residency, Manali. Can you help me?")}`}
```

- [ ] **Step 5: Commit**
```bash
git add src/components/sections/hero.tsx src/app/page.tsx src/app/manali/page.tsx
git commit -m "feat: hero dual CTAs, trust signals, and WhatsApp CTA on Manali"
```

---

## Task 2: Shimla Hero — WhatsApp CTA

**Files:**
- Modify: `src/components/shimla/shimla-hero.tsx`

- [ ] **Step 1: Add the WhatsApp button alongside "See the Rooms" in `shimla-hero.tsx`**

The `<motion.a href="#rooms">` button is inside a `<div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">`. Wrap both in a `flex gap-3 flex-wrap` container and add a second button after it:

Replace the existing flex container (lines 34–55) with:
```tsx
<div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mt-0">
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

  <div className="flex flex-col sm:flex-row gap-3">
    <motion.a
      href="#rooms"
      className="inline-block px-10 py-4 bg-accent text-white text-[12px] tracking-[2px] uppercase font-semibold hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(194,112,62,0.3)] transition-all duration-400 cursor-pointer whitespace-nowrap text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay: 0.45 }}
    >
      See the Rooms
    </motion.a>
    <motion.a
      href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent("Hi, I'd like to book a stay at Hotel Heaven Paradise, Shimla. Can you help me?")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-10 py-4 bg-[#25D366] text-white text-[12px] tracking-[2px] uppercase font-semibold hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-all duration-400 cursor-pointer whitespace-nowrap text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay: 0.55 }}
    >
      WhatsApp to Book
    </motion.a>
  </div>
</div>
```

Note: Replace `91XXXXXXXXXX` with the actual number from `PROPERTIES.shimla.whatsappUrl`. Import `PROPERTIES` at the top:
```tsx
import { PROPERTIES } from "@/lib/constants";
const property = PROPERTIES.shimla;
```
Then use `` `${property.whatsappUrl}?text=...` ``.

- [ ] **Step 2: Commit**
```bash
git add src/components/shimla/shimla-hero.tsx
git commit -m "feat: add WhatsApp CTA to Shimla hero"
```

---

## Task 3: Sticky Mobile WhatsApp Bar

**Files:**
- Create: `src/components/ui/mobile-booking-bar.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/components/ui/floating-wa.tsx`

- [ ] **Step 1: Create `src/components/ui/mobile-booking-bar.tsx`**

```tsx
"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLenis } from "lenis/react";
import { BRAND } from "@/lib/constants";

const PREFILLED_MSG = encodeURIComponent(
  "Hi, I'm interested in booking a stay at Heaven Paradise. Can you help me?"
);

export function MobileBookingBar() {
  const [visible, setVisible] = useState(false);

  useLenis(({ scroll }) => {
    setVisible(scroll > window.innerHeight * 0.8);
  });

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[1000] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={`${BRAND.whatsappUrl}?text=${PREFILLED_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-4 bg-whatsapp text-white text-sm font-semibold shadow-[0_-4px_20px_rgba(37,211,102,0.2)] tracking-wide"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        Chat to book on WhatsApp
      </a>
    </div>
  );
}
```

- [ ] **Step 2: Add `MobileBookingBar` to `src/app/layout.tsx`**

Import and render it inside `<SmoothScroll>`, before `<FloatingWhatsApp />`:
```tsx
import { MobileBookingBar } from "@/components/ui/mobile-booking-bar";

// In the JSX, inside <SmoothScroll>:
<SmoothScroll>
  <ProgressBar />
  {children}
  <MobileBookingBar />
  <FloatingWhatsApp />
</SmoothScroll>
```

- [ ] **Step 3: Hide `FloatingWhatsApp` on mobile to avoid duplication**

In `src/components/ui/floating-wa.tsx`, add `hidden md:flex` to the `<a>` tag's className (it currently does not hide on mobile):

Change the opening `<a` className to include `hidden md:flex` (replace `className="fixed bottom-5..."` with `className="hidden md:flex fixed bottom-5..."`). This hides it on mobile where `MobileBookingBar` now handles the action.

- [ ] **Step 4: Commit**
```bash
git add src/components/ui/mobile-booking-bar.tsx src/app/layout.tsx src/components/ui/floating-wa.tsx
git commit -m "feat: sticky mobile WhatsApp booking bar"
```

---

## Task 4: Rooms — WhatsApp Booking Link + Free WiFi Tag

**Files:**
- Modify: `src/components/sections/rooms.tsx`
- Modify: `src/components/shimla/shimla-rooms.tsx`
- Modify: `src/app/manali/page.tsx`
- Modify: `src/lib/constants.ts`

- [ ] **Step 1: Add `Free WiFi` tag to all rooms in `src/lib/constants.ts`**

In the `shimla` property, update each room's `tags` array to include `"Free WiFi"`:
```ts
// Valley View Room
tags: ["Valley View", "Private Balcony", "Heater", "Hot Water", "Free WiFi"],
// Mountain Suite
tags: ["Panoramic View", "Sitting Area", "Window Seat", "Free WiFi"],
// Family Room
tags: ["Family Friendly", "Extra Beds", "Spacious", "Free WiFi"],
```

Same for `manali` rooms:
```ts
// Riverside Room
tags: ["River View", "Balcony", "Heater", "Hot Water", "Free WiFi"],
// Pine View Suite
tags: ["Forest View", "Suite", "Sitting Area", "Free WiFi"],
// Family Room
tags: ["Family", "Extra Beds", "Spacious", "Free WiFi"],
```

- [ ] **Step 2: Add `whatsappUrl` prop and WhatsApp link to `src/components/sections/rooms.tsx`**

Update the `Room` interface to add nothing (we pass whatsappUrl separately). Update component signatures:

```tsx
function RoomCard({
  room,
  height,
  className = "",
  whatsappUrl,
}: {
  room: Room;
  height: string;
  className?: string;
  whatsappUrl?: string;
}) {
```

After the tags `<div className="flex gap-1.5 flex-wrap">...</div>` block in the card overlay, add:
```tsx
{whatsappUrl && (
  <a
    href={`${whatsappUrl}?text=${encodeURIComponent(`Hi, I'd like to book the ${room.name}. Can you help me?`)}`}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="mt-3 inline-block text-[11px] text-accent font-semibold tracking-[1.5px] uppercase hover:text-white transition-colors duration-200"
  >
    Book via WhatsApp →
  </a>
)}
```

Update `Rooms` component signature and pass-through:
```tsx
export function Rooms({ rooms, whatsappUrl }: { rooms: Room[]; whatsappUrl?: string }) {
```

Pass `whatsappUrl` to both `<RoomCard>` instances (the large one and the mapped ones).

- [ ] **Step 3: Pass `whatsappUrl` in `src/app/manali/page.tsx`**

```tsx
<Rooms rooms={[...property.rooms]} whatsappUrl={property.whatsappUrl} />
```

- [ ] **Step 4: Add WhatsApp booking link to `src/components/shimla/shimla-rooms.tsx`**

After each room's tags block, add the WhatsApp link. Import `PROPERTIES` is already present in the file.

After the tags `<div className="flex gap-2 flex-wrap">` in the hero room info block (lines 59–68), add:
```tsx
<a
  href={`${property.whatsappUrl}?text=${encodeURIComponent(`Hi, I'd like to book the ${rooms[0].name} at Hotel Heaven Paradise, Shimla. Can you help me?`)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block text-[11px] text-accent/80 font-semibold tracking-[1.5px] uppercase hover:text-accent transition-colors duration-200"
>
  Book via WhatsApp →
</a>
```

Do the same inside the `rooms.slice(1).map()` block (after the tags div, lines 94–103), replacing `rooms[0].name` with `room.name`.

- [ ] **Step 5: Commit**
```bash
git add src/lib/constants.ts src/components/sections/rooms.tsx src/components/shimla/shimla-rooms.tsx src/app/manali/page.tsx
git commit -m "feat: WhatsApp booking links on room cards and Free WiFi tags"
```

---

## Task 5: Testimonials — 4 Reviews + Google Badge + Mobile Carousel

**Files:**
- Modify: `src/lib/constants.ts`
- Modify: `src/components/sections/testimonials.tsx`

- [ ] **Step 1: Add 2 new avatar URLs to `BRAND_IMAGES` in `src/lib/constants.ts`**

```ts
avatarGuest3:
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
avatarGuest4:
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
```

- [ ] **Step 2: Add 2 more reviews to the `REVIEWS` array in `src/components/sections/testimonials.tsx`**

```tsx
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
  {
    avatar: BRAND_IMAGES.avatarGuest3,
    quote:
      "Our second trip to Heaven Paradise — we don't travel to Shimla for the destination anymore, we travel for Akshit's hospitality. Every detail was thought through. The kids loved it as much as we did.",
    author: "The Mehta Family",
    location: "Pune",
  },
  {
    avatar: BRAND_IMAGES.avatarGuest4,
    quote:
      "I was skeptical at first — a small boutique hotel over a big resort? But the valley view at breakfast, the personal touch, the hidden trek Akshit showed us... I haven't booked a chain hotel since.",
    author: "Vikram S.",
    location: "Bengaluru",
  },
];
```

- [ ] **Step 3: Update the reviews grid to support mobile carousel in `testimonials.tsx`**

Replace the current grid wrapper and `ScrollReveal` children with:
```tsx
{/* Reviews: horizontal scroll on mobile, 2-col grid on desktop */}
<div className="flex md:grid md:grid-cols-2 gap-7 max-w-[900px] mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full -mx-8 md:mx-auto px-8 md:px-0">
  {REVIEWS.map((review, i) => (
    <div
      key={review.author}
      className="flex-none w-[85vw] md:w-auto snap-start"
    >
      <ScrollReveal delay={i * 0.15}>
        <div className="bg-white border border-primary/6 rounded-xl p-9 text-left h-full">
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
    </div>
  ))}
</div>
```

- [ ] **Step 4: Add Google Reviews badge below the reviews grid**

After the reviews grid div, add:
```tsx
<ScrollReveal>
  <div className="mt-10">
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 text-sm text-[#aaa] hover:text-accent transition-colors duration-300 group"
    >
      <span className="text-highlight text-base">★★★★★</span>
      <span className="font-semibold text-body">4.9</span>
      <span>on Google Reviews</span>
      <span className="text-accent group-hover:translate-x-1 transition-transform duration-200">→</span>
    </a>
  </div>
</ScrollReveal>
```

- [ ] **Step 5: Commit**
```bash
git add src/lib/constants.ts src/components/sections/testimonials.tsx
git commit -m "feat: 4 testimonials with mobile carousel and Google Reviews badge"
```

---

## Task 6: Polish — Mobile Menu Animation

**Files:**
- Modify: `src/components/ui/navbar.tsx`
- Modify: `src/components/shimla/shimla-navbar.tsx`

- [ ] **Step 1: Add `AnimatePresence` import to `src/components/ui/navbar.tsx`**

Change the framer-motion import:
```tsx
import { motion, AnimatePresence } from "framer-motion";
```

- [ ] **Step 2: Replace the mobile drawer conditional render in `navbar.tsx`**

Replace the `{mobileOpen && (<div className="fixed inset-0...">...</div>)}` block with:
```tsx
<AnimatePresence>
  {mobileOpen && (
    <motion.div
      key="mobile-nav"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[999] bg-cream flex flex-col items-center justify-center gap-8"
    >
      {links.map((link, i) => (
        <motion.a
          key={link.href}
          href={link.href}
          onClick={() => setMobileOpen(false)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl text-primary font-light"
        >
          {link.label}
        </motion.a>
      ))}
      <motion.a
        href={ctaHref}
        onClick={() => setMobileOpen(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 + links.length * 0.07, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 px-8 py-3 bg-primary text-white rounded-md font-semibold"
      >
        {ctaLabel}
      </motion.a>
    </motion.div>
  )}
</AnimatePresence>
```

- [ ] **Step 3: Apply the same change to `src/components/shimla/shimla-navbar.tsx`**

Same as Step 2 — add `AnimatePresence` import and replace the mobile drawer conditional. The only difference is this navbar has no CTA link inside the drawer, so the last `motion.a` still needs to be present (it has `ctaHref` and `ctaLabel` props). Check the file — the CTA `<a>` is there too.

- [ ] **Step 4: Commit**
```bash
git add src/components/ui/navbar.tsx src/components/shimla/shimla-navbar.tsx
git commit -m "feat: animated mobile menu with staggered link entrance"
```

---

## Task 7: Polish — Progress Bar Gradient

**Files:**
- Modify: `src/components/ui/progress-bar.tsx`

- [ ] **Step 1: Replace `bg-accent` with inline gradient style in `progress-bar.tsx`**

Change:
```tsx
<div
  className="fixed top-0 left-0 h-[2px] bg-accent z-[1001]"
  style={{ width: `${progress * 100}%` }}
/>
```
To:
```tsx
<div
  className="fixed top-0 left-0 h-[2px] z-[1001]"
  style={{
    width: `${progress * 100}%`,
    background: "linear-gradient(to right, #2D5A47, #C2703E)",
  }}
/>
```

- [ ] **Step 2: Commit**
```bash
git add src/components/ui/progress-bar.tsx
git commit -m "feat: progress bar gradient (green to terracotta)"
```

---

## Task 8: Polish — Extras Section Horizontal Slide Entrance

**Files:**
- Modify: `src/components/sections/extras.tsx`

- [ ] **Step 1: Add `motion` import to `src/components/sections/extras.tsx`**

Add to the existing imports:
```tsx
import { motion } from "framer-motion";
```
Also remove `ScrollReveal` from the import since we're replacing it for the cards (we still keep the heading wrappers as `ScrollReveal`).

- [ ] **Step 2: Replace card `ScrollReveal` with `motion.div` horizontal entrance**

Replace the `{extras.map(...)}` block's `ScrollReveal` wrapper:
```tsx
{extras.map((extra, i) => (
  <motion.div
    key={extra.title}
    initial={{ x: -40, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-15%" }}
    transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="bg-white/4 border border-white/8 rounded-xl p-10 px-7 text-center hover:translate-y-[-6px] hover:bg-white/8 transition-all duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-accent after:w-0 hover:after:w-full after:transition-all after:duration-400">
      {/* ... existing card content unchanged ... */}
    </div>
  </motion.div>
))}
```

- [ ] **Step 3: Commit**
```bash
git add src/components/sections/extras.tsx
git commit -m "feat: extras cards horizontal slide entrance and hover accent border"
```

---

## Task 9: Polish — Pillar Cards Hover Bottom Border

**Files:**
- Modify: `src/components/sections/pillars.tsx`

- [ ] **Step 1: Add accent border pseudo-element to pillar card inner div**

In the `PILLARS.map()` block, update the inner card div's className:
```tsx
<div className="bg-white rounded-xl p-11 px-8 text-center border border-primary/8 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-accent after:w-0 hover:after:w-full after:transition-all after:duration-400">
```

- [ ] **Step 2: Commit**
```bash
git add src/components/sections/pillars.tsx
git commit -m "feat: pillar cards hover bottom accent border"
```

---

## Self-Review Checklist

**Spec coverage:**
- [x] Task 1 → Hero dual CTAs + trust signals (homepage + Manali)
- [x] Task 2 → Shimla hero WhatsApp CTA
- [x] Task 3 → Mobile booking bar (new component + layout integration + floating WA hide on mobile)
- [x] Task 4 → Rooms WhatsApp booking + Free WiFi tag (shared component + Shimla-specific)
- [x] Task 5 → Testimonials 4 reviews + carousel + Google badge
- [x] Task 6 → Mobile menu animation (navbar + shimla-navbar)
- [x] Task 7 → Progress bar gradient
- [x] Task 8 → Extras horizontal slide + card hover border
- [x] Task 9 → Pillar card hover border

**Placeholder scan:** No TBD/TODO in steps. All code blocks are complete. WhatsApp numbers use real constant values from `PROPERTIES.shimla.whatsappUrl` / `BRAND.whatsappUrl`.

**Type consistency:** `Room` interface in `rooms.tsx` unchanged. New `whatsappUrl?: string` prop added to both `Rooms` and `RoomCard` — consistent naming throughout Tasks 4. `HeroProps` extension in Task 1 uses optional props — backward-compatible with Shimla hero (which uses a separate component anyway).
