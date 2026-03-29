# Hotel Heaven Paradise — Website Design Spec

## Overview

A single-page scrolling website for **Hotel Heaven Paradise**, a boutique family-run hotel in Shimla, Himachal Pradesh. The site tells the hotel's story through cinematic scroll animations, warm boutique aesthetics, and a direct WhatsApp/phone booking flow.

**Live preview mockup:** `.superpowers/brainstorm/9323-1774757442/content/homepage-v3.html`

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Scroll Animations:** Framer Motion (scroll-triggered reveals, parallax)
- **Smooth Scroll:** Lenis (smooth scroll library, pairs with Framer Motion)
- **Icons:** Lucide React
- **Fonts:** Google Fonts via `next/font` — Cormorant Garamond + Karla
- **Images:** Next.js `<Image>` with `priority` on hero, `loading="lazy"` elsewhere. Placeholder Unsplash images initially, replaced with real hotel photos later.
- **Deployment:** Vercel (connected to GitHub repo)

---

## Design System

### Colors

| Token       | Hex       | Usage                                    |
|-------------|-----------|------------------------------------------|
| Primary     | `#2D5A47` | Navbar, headings, buttons, footer        |
| Background  | `#FAF6F1` | Page background, alternating sections    |
| Accent      | `#C2703E` | CTAs, highlights, hover states, progress |
| Highlight   | `#A16207` | Testimonial attributions, labels         |
| Body Text   | `#3D3530` | Paragraphs, descriptions                |
| Cards       | `#FFFFFF` | Card backgrounds                        |
| Dark BG     | `#1a3a2e` | Extras section, footer                   |
| Darkest     | `#0a1f16` | Footer background                        |
| WhatsApp    | `#25D366` | WhatsApp buttons                         |

### Typography

| Font                  | Weights   | Usage                                   |
|-----------------------|-----------|-----------------------------------------|
| Cormorant Garamond    | 300–700   | Headings, quotes, hotel name, section titles |
| Karla                 | 300–700   | Body text, nav links, labels, buttons   |

- Headlines: Large serif, weight 300 (editorial/luxury feel)
- Section eyebrows: 11px, uppercase, letter-spacing 4px, Terracotta color
- Body: 15–16px, weight 300, line-height 1.8–1.9

### Buttons

- **Primary:** Forest Green bg, white text, rounded 6px
- **Accent CTA:** Terracotta bg, white text, uppercase, letter-spacing 1.5px, hover shine sweep effect
- **WhatsApp:** #25D366 bg, white text
- **Ghost (navbar):** Transparent bg, white border, transitions to filled on scroll
- **Hover effect:** translateY(-2px) + deeper box-shadow

### Texture

- Subtle linen/paper texture overlay on `body::before` at ~2% opacity (SVG pattern)

---

## Site Structure

Single page at `/` with smooth-scrolling sections. Navigation links scroll to section anchors.

### Sections (scroll order)

#### 1. Hero (100vh)
- Full-viewport background image (Himalayan mountain landscape)
- Dark gradient overlay for text readability
- Mist animation layer (subtle horizontal drift)
- Parallax: background image shifts at 0.15x scroll speed
- Content: eyebrow label ("A Boutique Retreat in Shimla"), heading with split-word animation ("Where the Mountains Meet Warm Hospitality"), tagline, Terracotta CTA button
- Scroll indicator at bottom (fades out after scrolling)

#### 2. Welcome / About (sticky image layout)
- **Left column:** Sticky hotel exterior image (stays pinned while text scrolls)
- **Right column:** Two text "chapters" that scroll past the image
  - Chapter 1: "A note from your hosts" quote + intro paragraphs
  - Chapter 2: Philosophy text + "— The Heaven Paradise Family" attribution
- Elements reveal on scroll (fade up)

#### 3. Three Pillars (cream background)
- Section eyebrow + split-word heading ("Three Things We Promise")
- 3 cards in a row: Mountain Views, Home-Cooked Meals, Personal Hospitality
- Each card: circular image icon, heading, description
- Cards stagger in (0ms, 150ms, 300ms delays)
- Hover: translateY(-8px) + shadow

#### 4. Rooms (white background, asymmetric grid)
- Section eyebrow + split-word heading ("Our Rooms")
- **Asymmetric layout:** 7:5 grid ratio
  - Left: one large card (520px tall) — Valley View Room
  - Right: two stacked cards (248px each) — Mountain Suite, Family Room
- Each card: full-bleed image, gradient overlay, room name, description, amenity tags
- Image zoom on hover (scale 1.05)
- Cards stagger in

#### 5. Dining (cream background, image reveal)
- **Left:** Food/dining image with cinematic clip-path reveal animation
  - Starts as `inset(15% 10% 15% 10%)`, expands to `inset(0%)` when scrolled into view
  - Inner image starts at scale(1.15), settles to scale(1)
- **Right:** Section eyebrow, heading ("From Our Kitchen to Your Table"), description text
- Three circular meal icons: Breakfast, Dinner, Chai Time
- Text elements reveal on scroll

#### 6. Experiences (white background)
- Section eyebrow + split-word heading ("Discover Shimla")
- 4-column grid of tall cards (340px): Mall Road, Jakhu Temple, Kufri, Toy Train
- Each card: background image, gradient overlay, title + subtitle at bottom
- Image zoom on hover
- Cards stagger in (120ms intervals)

#### 7. Gallery (cream background, asymmetric masonry)
- Section eyebrow + split-word heading ("A Glimpse of Paradise")
- Grid: 3 columns (3fr 2fr 2fr), 2 rows (220px each)
- First item spans 2 rows (large hero image)
- Images: Hotel at night, mountain view, breakfast, room interior, bonfire
- Zoom on hover
- Items stagger in

#### 8. Extras (dark background — #1a3a2e)
- Section eyebrow + split-word heading ("The Details That Matter")
- 3 cards: Evening Bonfire, Games & Books, Free Parking
- Each card: circular image, heading, description
- Semi-transparent card backgrounds with subtle border
- Cards stagger in, hover: translateY(-6px)

#### 9. Testimonials (white background)
- Section eyebrow + split-word heading ("What Our Guests Say")
- 2-column grid of review cards
- Each card: guest avatar, 5-star rating, italic quote (Cormorant Garamond), author name in gold
- Cards stagger in

#### 10. Contact CTA (frosted mountain backdrop)
- Background: mountain photo with cream overlay (88% opacity) + blur
- Section eyebrow + split-word heading ("Ready to Visit Paradise?")
- Two buttons side by side: WhatsApp Us (green), Call Now (forest green)
- Hotel address and distance from railway station

---

## Fixed UI Elements

### Navbar
- Fixed at top, transitions on scroll:
  - **Before scroll:** Transparent bg, white text/logo, ghost CTA button
  - **After scroll (>80px):** Cream bg with 24px blur backdrop, dark text, filled CTA
  - Logo shrinks from 26px to 22px
  - Transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1)
- Nav link hover: underline draws from center (1px Terracotta)

### Section Navigation Dots
- Fixed on right side, vertically centered
- 10 dots corresponding to 10 sections
- Active dot: Terracotta, scale 1.5x
- Inactive: semi-transparent green
- Clickable — smooth-scrolls to section

### Progress Bar
- Fixed at very top, 2px height
- Terracotta color, width tracks scroll progress (0–100%)

### Floating WhatsApp Button
- Fixed bottom-right (32px from edges)
- 60px green circle with chat icon
- Hover: scale 1.1 + deeper shadow
- Links to hotel's WhatsApp number

### Footer
- Dark background (#0a1f16)
- 3-column grid: hotel description, quick links, social links
- Bottom bar: copyright line

---

## Scroll Animations

### Parallax (Hero only)
- Background image and mist layer move at different speeds on scroll
- Mist: 0.15x speed + horizontal drift animation (8s loop)
- Scroll indicator fades out after 300px scroll

### Text & Element Reveals (all sections)
- **Split-word headings:** Each word slides up from below with opacity fade. Staggered 100ms per word. Easing: cubic-bezier(0.16, 1, 0.3, 1), duration 0.7s
- **General reveals:** Elements fade in + translateY(35px to 0). Duration 0.9s, same easing
- **Staggered cards:** Delay between cards (150ms typical)
- **Trigger point:** Element enters 82% of viewport height
- **One-shot:** Animations fire once, no re-trigger on scroll up

### Cinematic Image Reveal (Dining section)
- clip-path animation from cropped to full
- Simultaneous scale animation on inner image (1.15 to 1.0)
- Triggers at 75% viewport

### Image Zoom on Hover
- Room cards, experience cards, gallery items
- Scale 1.0 to 1.05–1.08 over 0.7s
- Overflow hidden on container

### Button Interactions
- CTA: Light sweep (pseudo-element sliding left to right) on hover
- All buttons: translateY(-2px to -3px) + deeper shadow on hover

---

## Placeholder Images (Unsplash)

These will be replaced with actual hotel photos. Current placeholders:

| Section | Image | Unsplash URL |
|---------|-------|-------------|
| Hero | Himalayan mountains | `photo-1626621341517-bbf3d9990a23` |
| Welcome | Hotel/resort exterior | `photo-1520250497591-112f2f40a3f4` |
| Pillar 1 | Mountains | `photo-1464822759023-fed622ff2c3b` |
| Pillar 2 | Food platter | `photo-1504674900247-0877df9cc836` |
| Pillar 3 | Hospitality/service | `photo-1556742049-0cfed4f6a45d` |
| Room 1 | Hotel room with bed | `photo-1582719478250-c89cae4dc85b` |
| Room 2 | Suite interior | `photo-1611892440504-42a792e24d32` |
| Room 3 | Family room | `photo-1566665797739-1674de7a421a` |
| Dining | Restaurant setting | `photo-1414235077428-338989a2e8c0` |
| Meal - Breakfast | Breakfast spread | `photo-1533089860892-a7c6f0a88666` |
| Meal - Dinner | Dinner plating | `photo-1476224203421-9ac39bcb3327` |
| Meal - Chai | Tea cup | `photo-1544787219-7f47ccb76574` |
| Exp - Mall Road | Indian street | `photo-1597074866923-dc0589150458` |
| Exp - Jakhu | Temple | `photo-1585136917228-0b1e78516072` |
| Exp - Kufri | Snow mountains | `photo-1491002052546-bf38f186af56` |
| Exp - Toy Train | Train | `photo-1474487548417-781cb71495f3` |
| Gallery 1 | Hotel at night | `photo-1551882547-ff40c63fe5fa` |
| Gallery 2 | Mountain view | `photo-1506905925346-21bda4d32df4` |
| Gallery 3 | Breakfast | `photo-1533089860892-a7c6f0a88666` |
| Gallery 4 | Room interior | `photo-1590490360182-c33d955e4c47` |
| Gallery 5 | Bonfire | `photo-1475483768296-6163e8f3a1c2` |
| CTA BG | Mountains | `photo-1506905925346-21bda4d32df4` |

---

## Photo Shot List (for future replacement)

Provided by the hotel owner — organized by section:

### First Look (Outside & Views)
- Hotel building at night with warm lights
- Mountain view from balcony with tea cup on railing
- Main entrance with Pine Green accents (plants/signs)

### Rooms
- Main bed with clean white sheets, Deep Oak headboard
- Family room setup with extra beds
- Clean bathroom with visible geyser (hot water proof)
- Window seat with table and chair

### Food
- Breakfast: hot parathas, tea, bread on wooden table
- Dinner table for two near window with city lights
- Close-up of tea kettle with local snacks

### Extras
- Bonfire outside in the evening
- Board games (Ludo, cards) on a shelf
- Parking lot — simple, clear shot

---

## Booking Flow

- **No online booking system** — direct contact only
- **WhatsApp:** Primary CTA, floating button always visible + in navbar + in contact section
- **Phone:** Secondary CTA alongside WhatsApp in contact section
- Both link to hotel's actual WhatsApp number and phone number

---

## Responsive Behavior

- **Mobile-first** Tailwind approach
- Hero: Heading scales down (~40px on mobile), CTA full-width
- Sticky image in Welcome: becomes stacked (image on top, text below) on mobile
- Room grid: single column on mobile
- Experience cards: 2-column on tablet, single column on mobile
- Gallery: 2-column on tablet, single column on mobile
- Section padding reduces on mobile (60px → 32px)
- Floating WhatsApp: 48px circle, 20px from edges on mobile
- Nav: Hamburger menu on mobile with slide-out drawer

---

## Performance Considerations

- Use `next/image` for all images with appropriate `sizes` and `quality` props
- `priority` loading on hero image only
- `will-change: transform` only on actively animating parallax layers
- All animations use `transform` and `opacity` only (GPU-composited)
- Lenis smooth scroll for consistent 60fps scrolling
- Lazy load all images below the fold
- Preload Cormorant Garamond 300 and Karla 400 via `next/font`
