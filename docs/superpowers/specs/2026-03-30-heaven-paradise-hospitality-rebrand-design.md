# Heaven Paradise — Hospitality Brand Website Redesign

## Overview

Reposition the existing Hotel Heaven Paradise single-page website into a **hospitality brand site** for **Heaven Paradise** — a company managing multiple hotel properties in Himachal Pradesh. The website targets **guests/travelers** looking to book stays.

## Brand Identity

- **Brand Name:** Heaven Paradise
- **Founder:** Akshit Angra — born and raised in Shimla, 8+ years corporate experience, world traveler who returned home to share Himachal authentically
- **Core Promise:** Experience Himachal the way only a local can — raw, personal, unforgettable
- **Differentiators:**
  - Personally guided hidden spots only locals know
  - Home-cooked Himachali food alongside standard menus
  - End-to-end tailored itineraries — from arrival to departure
  - Choice between tourist trail or raw local experience

## Visual Direction

Keep the existing warm luxury aesthetic unchanged:
- **Colors:** Cream (#FAF6F1), Forest Green (#2D5A47), Terracotta (#C2703E), Warm Brown (#3D3530)
- **Fonts:** Cormorant Garamond (headings) + Karla (body)
- **Animations:** Framer Motion scroll reveals, parallax, Lenis smooth scroll
- **Images:** Unsplash placeholders for now, real photography later

## Site Structure

Three routes:

### 1. `/` — Brand Homepage

Single-page scroll with these sections:

#### Hero
- Full-viewport parallax mountain image (Himachal landscape, not property-specific)
- Headline: **"Heaven Paradise"**
- Subtitle: *"Where the mountains welcome you home"*
- Body: "Born in the heart of Himachal, we don't just offer stays — we offer the mountains the way only a local can. Hidden trails. Home-cooked meals. Moments you won't find in any guidebook."
- CTA: [Explore Our Properties]

#### Brand Story (Welcome)
- Two-column layout: Akshit's photo on left, narrative on right
- Content:

> I'm Akshit Angra. I grew up watching the sun rise over Shimla's ridgeline, chasing monsoon clouds through deodar forests, and learning every trail, shortcut, and hidden chai stall these mountains hold.
>
> I spent eight years in the corporate world. I travelled the globe — luxury hotels, boutique resorts, five-star experiences. But every time I came home to Himachal, I noticed the same thing: tourists were missing everything that made these mountains special.
>
> They'd visit Mall Road, take a photo at Ridge, and leave — never tasting a real Himachali siddu, never watching the valley light up at golden hour from the spots only we know, never sitting around a bonfire with stories that have been passed down for generations.
>
> So I came back. Not just to build hotels, but to build something that didn't exist — a way for you to experience Himachal the way I do. Raw. Personal. Unforgettable.
>
> From the moment you arrive to the moment you leave with a smile, everything is taken care of. Your itinerary, your meals, your hidden gems — tailored to you. Whether you want the classic tourist trail or the Himachal that 99% of travelers never see, we'll make it happen.
>
> **This is not hospitality. This is home.**

#### Brand Values (Pillars)
Three cards:

**Rooted in the Mountains**
We're not a hotel chain that picked a pretty location on a map. We were born here. Every recommendation, every trail, every meal comes from a lifetime of calling these mountains home.

**Your Journey, Your Way**
Cookie-cutter itineraries aren't our thing. Tell us what you're looking for — adventure, peace, culture, or all three — and we'll craft an experience around you. From hidden waterfalls to grandmother's recipes, nothing is off the shelf.

**End-to-End, No Loose Ends**
From the moment you step onto the property to the moment you leave, we handle everything. Transfers, meals, day plans, local experiences — you don't need to think about a thing. Just show up and let the mountains do the rest.

#### Our Properties
Two property cards linking to dedicated pages:

**Hotel Heaven Paradise — Shimla**
*Valley views from every room*
Eight handpicked rooms, each with a private balcony overlooking the valley and snow-capped peaks. Steps away from Mall Road, yet worlds apart from the noise. Wake up to birdsong, sip chai watching the clouds roll in, and let us show you the Shimla the guidebooks forgot.
[Explore Shimla →]

**Hotel DK Residency — Manali**
*Where the river meets the pines*
Fourteen rooms nestled along the banks of the Beas, surrounded by towering pine and deodar forests. Old Manali's charm is a short walk away, but the real magic is what we'll take you to — frozen waterfalls, hidden hot springs, and villages where time moves differently.
[Explore Manali →]

#### Testimonials
Two guest review cards:

> "We came for a weekend trip and left feeling like we'd been hosted by family. Akshit personally took us to a viewpoint we'd never have found on our own. The food, the warmth, the mountains — nothing else comes close."
> — Priya & Rahul, Delhi

> "I've stayed at five-star resorts across India. This was different. It wasn't about luxury — it was about feeling something. The sunrise from our balcony, the home-cooked rajma, the stories around the bonfire. We're already planning our next visit."
> — Sneha M., Mumbai

#### Contact CTA
- Mountain photo background with cream/blur overlay
- Headline: **"Your mountains are waiting"**
- Body: "Let us plan your perfect Himachal escape. Tell us when you're coming, and we'll take care of everything else."
- CTAs: [WhatsApp Us] [Call Now]

#### Footer
- Heaven Paradise brand blurb
- Quick links: Shimla, Manali, About, Contact
- Social links: Instagram, Facebook, Google Reviews (placeholder URLs)
- Copyright

### 2. `/shimla` — Hotel Heaven Paradise Property Page

Sections (reusing/adapting existing components):

#### Property Hero
- Full-viewport image of the Shimla property/valley view
- Headline: **"Hotel Heaven Paradise"**
- Subtitle: *"Shimla"*
- Tagline: "Valley views from every room"

#### About This Property
- 8 rooms, each with private balcony and mountain/valley views
- Steps from Mall Road
- Personal hosting by Akshit

#### Rooms
- Reuse existing rooms section component
- Adapt content for Shimla-specific room types (Valley View Room, Mountain Suite, Family Room)

#### Dining
- Reuse existing dining section
- Home-cooked Himachali food + standard menu
- Breakfast, Dinner, Chai Time

#### Experiences (Shimla)
- Reuse existing experiences section
- Mall Road, Jakhu Temple, Kufri, Toy Train + hidden local spots

#### Gallery
- Reuse existing gallery masonry grid
- Shimla-specific Unsplash placeholder images

#### Extras
- Reuse existing extras section
- Evening Bonfire, Games & Books, Free Parking

#### Contact CTA
- Property-specific: WhatsApp + Call for Shimla property

#### Footer
- Same brand footer as homepage

### 3. `/manali` — Hotel DK Residency Property Page

Same section structure as Shimla with Manali-specific content:

#### Property Hero
- Headline: **"Hotel DK Residency"**
- Subtitle: *"Manali"*
- Tagline: "Where the river meets the pines"

#### About This Property
- 14 rooms along the banks of the Beas
- Near Old Manali
- Surrounded by pine and deodar forests

#### Rooms
- Manali room types (creative/placeholder names for now):
  - Riverside Room, Pine View Suite, Family Room

#### Dining
- Similar structure to Shimla
- Local Kullu Valley cuisine + standard menu

#### Experiences (Manali)
- Solang Valley, Old Manali, Rohtang Pass, Jogini Waterfall
- Hidden local spots

#### Gallery
- Manali-specific Unsplash placeholder images

#### Extras
- Bonfire, Indoor Games, Parking (adapt to Manali context)

#### Contact CTA
- Property-specific: WhatsApp + Call for Manali property

## Technical Approach

### Routing
- `/` → `src/app/page.tsx` (brand homepage)
- `/shimla` → `src/app/shimla/page.tsx`
- `/manali` → `src/app/manali/page.tsx`

### Component Reuse
- Existing section components in `src/components/sections/` will be adapted to accept props for property-specific data
- Shared components (Navbar, Footer, ScrollReveal, ProgressBar, SectionDots, FloatingWhatsApp) remain largely unchanged
- Navbar updated to include property links and adapt navigation items based on current page

### Data Structure
- `src/lib/constants.ts` restructured:
  - `BRAND` object: brand name, tagline, founder info, brand-level content
  - `PROPERTIES` object: keyed by slug (`shimla`, `manali`), each containing property name, location, description, rooms, dining, experiences, gallery images, contact info
  - `IMAGES` object: reorganized by brand vs per-property

### What Gets Removed from Homepage
- Rooms section (moved to property pages)
- Dining section (moved to property pages)
- Experiences section (moved to property pages)
- Gallery section (moved to property pages)
- Extras section (moved to property pages)

### What Gets Added
- New "Our Properties" section component for homepage
- Property page template/layout
- Updated constants structure
- Route files for /shimla and /manali

### What Gets Modified
- Hero: brand-level content instead of hotel-specific
- Welcome: Akshit's brand story instead of hotel welcome
- Pillars: brand values instead of hotel pillars
- Navbar: page-aware navigation
- Footer: brand-level with links to both properties
- Contact CTA: brand-level on homepage, property-specific on property pages
