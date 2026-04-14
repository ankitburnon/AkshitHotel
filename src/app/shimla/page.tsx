import type { Metadata } from "next";
import { ShimlaNavbar } from "@/components/shimla/shimla-navbar";
import { ShimlaHero } from "@/components/shimla/shimla-hero";
import { ShimlaAbout } from "@/components/shimla/shimla-about";
import { ShimlaRooms } from "@/components/shimla/shimla-rooms";
import { ShimlaDining } from "@/components/shimla/shimla-dining";
import { ShimlaExperiences } from "@/components/shimla/shimla-experiences";
import { ShimlaGallery } from "@/components/shimla/shimla-gallery";
import { ShimlaExtras } from "@/components/shimla/shimla-extras";
import { ShimlaContact } from "@/components/shimla/shimla-contact";
import { Footer } from "@/components/sections/footer";
import { SectionDots } from "@/components/ui/section-dots";
import { PROPERTIES } from "@/lib/constants";

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
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = [
  "hero",
  "about",
  "rooms",
  "dining",
  "experiences",
  "gallery",
  "extras",
  "contact",
] as const;

export default function ShimlaPage() {
  return (
    <main>
      <ShimlaNavbar links={NAV_LINKS} />
      <SectionDots sectionIds={SECTION_IDS} />
      <ShimlaHero />
      <ShimlaAbout />
      <ShimlaRooms />
      <ShimlaDining />
      <ShimlaExperiences />
      <ShimlaGallery />
      <ShimlaExtras />
      <ShimlaContact />
      <Footer />
    </main>
  );
}
