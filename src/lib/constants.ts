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
          "Open the curtains and the valley is right there — layers of green ridges dissolving into mist. This is where most guests have their morning chai, on the balcony, in silence.",
        image: "/images/shimla/room-valley-view.jpg",
        tags: ["Valley View", "Private Balcony", "Heater", "Hot Water", "Free WiFi"],
      },
      {
        name: "Mountain Suite",
        description:
          "Our most spacious room. A sitting corner by the window where you can read, work, or just watch the clouds roll in. Couples love this one.",
        image: "/images/shimla/room-bright-full.jpg",
        tags: ["Panoramic View", "Sitting Area", "Window Seat", "Free WiFi"],
      },
      {
        name: "Family Room",
        description:
          "Designed for families who want to be together without feeling cramped. The kids get their own space, and you get the view.",
        image: "/images/shimla/room-sitting-area.jpg",
        tags: ["Family Friendly", "Extra Beds", "Spacious", "Free WiFi"],
      },
    ],
    meals: [
      {
        image: "/images/shimla/dining-food.jpg",
        label: "Breakfast",
      },
      {
        image: "/images/shimla/dining-mountain-view.jpg",
        label: "Dinner",
      },
      {
        image: "/images/shimla/dining-buffet.jpg",
        label: "Chai Time",
      },
    ],
    diningTitle: "No Menu. Just Home Cooking.",
    diningText: [
      "Every meal here is cooked the way it would be at a Himachali home — fresh, unhurried, made with ingredients from the valley. Wake up to hot parathas and masala chai. End your day with a slow dinner you won't stop talking about.",
      "Siddu, madra, babru, fresh dal — the dishes your guidebook won't mention, but the ones you'll remember longest.",
    ],
    diningSpecialties: "Himachali cuisine",
    experiences: [
      {
        name: "Mall Road",
        subtitle: "I'll tell you where to eat, what to skip, and the shortcut nobody knows",
        image:
          "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=400&q=80",
      },
      {
        name: "Jakhu Temple",
        subtitle: "Best at sunrise. I'll draw you the trail that avoids the tourist crowd",
        image:
          "https://images.unsplash.com/photo-1585136917228-0b1e78516072?w=400&q=80",
      },
      {
        name: "Kufri",
        subtitle: "Snow in winter, wildflowers in spring. 45 minutes from your room",
        image:
          "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&q=80",
      },
      {
        name: "Toy Train",
        subtitle: "102 tunnels, 800 bridges. Book the Shimla–Kalka run — trust me on this",
        image:
          "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80",
      },
    ],
    galleryItems: [
      {
        src: "/images/shimla/gallery-dining-silhouette.jpg",
        alt: "Dining room silhouette against mountain views",
      },
      {
        src: "/images/shimla/dining-mountain-view.jpg",
        alt: "Dining tables facing misty mountain peaks",
      },
      {
        src: "/images/shimla/gallery-hallway.jpg",
        alt: "Hotel hallway with warm ambient lighting",
      },
      {
        src: "/images/shimla/dining-buffet.jpg",
        alt: "Buffet station with pendant lanterns",
      },
      {
        src: "/images/shimla/dining-room.jpg",
        alt: "Restaurant with panoramic mountain views",
      },
    ],
    extras: [
      {
        image:
          "https://images.unsplash.com/photo-1475483768296-6163e8f3a1c2?w=200&q=80",
        title: "Bonfire Evenings",
        description:
          "After dinner, we light a fire. Stories, chai, and stars — the kind of evening you can't plan but always remember.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=200&q=80",
        title: "Slow Evenings",
        description:
          "Board games, a small library, and nowhere to be. Some of our best reviews mention the evenings, not the views.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=200&q=80",
        title: "You're Covered",
        description:
          "Free parking, hot water round the clock, room heaters in winter. The basics, done right — so you don't have to think about them.",
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
        tags: ["River View", "Balcony", "Heater", "Hot Water", "Free WiFi"],
      },
      {
        name: "Pine View Suite",
        description:
          "Spacious suite surrounded by deodar forest. A private balcony that feels like a treehouse.",
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
        tags: ["Forest View", "Suite", "Sitting Area", "Free WiFi"],
      },
      {
        name: "Family Room",
        description:
          "Room for the whole family with mountain views and space for the kids to play.",
        image:
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80",
        tags: ["Family", "Extra Beds", "Spacious", "Free WiFi"],
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
