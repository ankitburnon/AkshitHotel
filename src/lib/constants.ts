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
