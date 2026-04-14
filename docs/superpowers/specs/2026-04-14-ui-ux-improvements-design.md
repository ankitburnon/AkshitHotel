# Heaven Paradise — UI/UX Improvements Design Spec

**Date:** 2026-04-14
**Goal:** Drive more WhatsApp contacts from visitors while improving overall polish and mobile experience.
**Primary conversion action:** WhatsApp enquiry via `BRAND.whatsappUrl` and per-property `whatsappUrl`.

---

## 1. Hero Section — Dual CTAs + Trust Signals

### Homepage Hero (`src/app/page.tsx` → `Hero` component)

Add two optional props to `Hero`: `ctaText2?: string`, `ctaHref2?: string`, `trustSignals?: string[]`.

**CTA area change:** Replace the single full-width button with two side-by-side buttons.
- Primary (left): existing style (`bg-accent`)
- Secondary (right): transparent with `border border-white/40` style

**Trust signals:** A single line of small spaced text below the buttons:
`500+ Guests Hosted · 4.9★ Google Rating · Shimla & Manali`
Styled as `text-[11px] text-white/40 tracking-[2.5px] uppercase mt-3`.

**Homepage props:**
- `ctaText="Explore Shimla"`, `ctaHref="/shimla"`
- `ctaText2="Explore Manali"`, `ctaHref2="/manali"`
- `trustSignals={["500+ Guests Hosted", "4.9★ Google Rating", "Shimla & Manali"]}`

### Shimla Hero (`src/components/shimla/shimla-hero.tsx`)

The Shimla hero is a custom component with a unique design (cream text block + full-bleed image). Add a WhatsApp CTA button alongside the existing "See the Rooms" button:
- Second button: `bg-whatsapp text-white` style
- Pre-filled message: `"Hi, I'd like to book a stay at Hotel Heaven Paradise, Shimla. Can you help me?"`
- Opens in new tab

### Manali Hero (`src/app/manali/page.tsx` → `Hero` component)

Pass secondary CTA:
- `ctaText2="WhatsApp to Book"`
- `ctaHref2={manali whatsappUrl + prefilled message}`

---

## 2. Sticky Mobile WhatsApp Bar

**New component:** `src/components/ui/mobile-booking-bar.tsx`

- `position: fixed`, `bottom: 0`, `left: 0`, `right: 0`, `z-index: 1000`
- `md:hidden` — desktop only sees the existing floating WhatsApp button
- Slides in from bottom (CSS transform) after the user scrolls past 80% of the viewport height
- Scroll detection via `useLenis` callback (already installed)
- Content: full-width `<a>` linking to `BRAND.whatsappUrl + prefilled message`
  - Icon: `MessageCircle` (lucide-react, `fill-white`)
  - Text: "Chat to book on WhatsApp"
  - Background: `bg-whatsapp`, top shadow
- Pre-filled message: `"Hi, I'm interested in booking a stay at Heaven Paradise. Can you help me?"`

**Placement:** Added to `src/app/layout.tsx` inside `<SmoothScroll>`, above `<FloatingWhatsApp />`.

**Note:** On mobile the floating WhatsApp button (`floating-wa.tsx`) is already present. The mobile bar should replace its function on mobile — hide `FloatingWhatsApp` on mobile (`md:flex` → keep it desktop-only) to avoid duplication.

---

## 3. Rooms — WhatsApp Booking Link + Amenity Tags

### Shared Rooms component (`src/components/sections/rooms.tsx`)

Add `whatsappUrl?: string` prop to both `Rooms` and `RoomCard`. After the tags row in each card, render a "Book via WhatsApp →" text link when `whatsappUrl` is provided:
- Pre-fills: `"Hi, I'd like to book the [Room Name]. Can you help me?"`
- Style: `text-[11px] text-accent font-semibold tracking-wide hover:text-white transition-colors duration-200 mt-3 inline-block`
- Stop propagation if card is wrapped in a click handler

**Pages to update:**
- `src/app/manali/page.tsx` → pass `whatsappUrl={PROPERTIES.manali.whatsappUrl}` to `<Rooms />`

### Shimla Rooms component (`src/components/shimla/shimla-rooms.tsx`)

Add a "Book via WhatsApp →" link after the tags in both the hero room info block and the two side-by-side rooms. Uses `PROPERTIES.shimla.whatsappUrl` directly (no prop needed since it reads from constants).

### Additional room amenity tags in `constants.ts`

Add `"Free WiFi"` to all room tags that don't already have it. This is a data change only; no component changes needed.

---

## 4. Testimonials — 4 Reviews + Google Badge + Mobile Carousel

### New reviews

Add 2 more review objects to the `REVIEWS` array in `src/components/sections/testimonials.tsx`:
```
{ author: "The Mehta Family", location: "Pune" }
{ author: "Vikram S.", location: "Bengaluru" }
```
(Placeholder quotes that Akshit can replace with real ones)

Add 2 new Unsplash avatar URLs to `BRAND_IMAGES` in `constants.ts`: `avatarGuest3`, `avatarGuest4`.

### Grid layout

Desktop: `md:grid-cols-2` (already set) — 4 cards becomes 2 rows of 2 automatically. No change needed.

### Mobile carousel

On mobile, replace the grid with horizontal scroll snap:
- Container: `flex md:grid md:grid-cols-2` + `overflow-x-auto md:overflow-visible` + `snap-x snap-mandatory` + `scrollbar-none`
- Each `ScrollReveal` wrapper gets `flex-none w-[85vw] md:w-auto snap-start`
- Use negative margin to bleed to screen edge on mobile, re-centered on desktop

### Google Reviews badge

Below the reviews grid, add a centred row:
```
★★★★★  4.9  on Google Reviews  →
```
- Links to `#` (placeholder — update with real Google Maps URL)
- Styled: stars in `text-highlight`, score in `font-medium text-body`, rest in `text-[#999]`

---

## 5. Overall Polish

### 5a. Mobile menu animation (both navbars)

Files: `src/components/ui/navbar.tsx`, `src/components/shimla/shimla-navbar.tsx`

Wrap the mobile drawer in Framer Motion `AnimatePresence`. Animate the container:
- `initial={{ opacity: 0, y: -16 }}`, `animate={{ opacity: 1, y: 0 }}`, `exit={{ opacity: 0, y: -16 }}`
- `transition: duration 0.35, ease [0.16, 1, 0.3, 1]`

Stagger each nav link and the CTA button:
- Each `<a>` → `<motion.a>` with `initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1, y: 0 }}`
- Delay: `0.1 + index * 0.07`

### 5b. Progress bar gradient

File: `src/components/ui/progress-bar.tsx`

Replace `className="... bg-accent ..."` with inline `style={{ background: "linear-gradient(to right, #2D5A47, #C2703E)" }}`.

### 5c. Extras section horizontal slide entrance

File: `src/components/sections/extras.tsx`

Replace `<ScrollReveal>` wrappers on each card with inline `<motion.div>`:
- `initial={{ x: -40, opacity: 0 }}`, `whileInView={{ x: 0, opacity: 1 }}`
- `viewport={{ once: true, margin: "-15%" }}`
- `transition: duration 0.7, delay i * 0.15, ease [0.16, 1, 0.3, 1]`

### 5d. Card hover bottom accent border (pillar + extras cards)

Files: `src/components/sections/pillars.tsx`, `src/components/sections/extras.tsx`

Add Tailwind `after:` pseudo-element classes to each card's inner div:
```
after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
after:h-[2px] after:bg-accent after:w-0 hover:after:w-full after:transition-all after:duration-400
```
Cards must already be `relative` (they are).

---

## Out of Scope

- Gallery lightbox on Manali page (deferred)
- Room pricing display (deferred)
- Real booking calendar or form
- Social media links in footer (data only, needs real URLs from Akshit)
- Real Google Reviews URL (placeholder `#` until provided)
