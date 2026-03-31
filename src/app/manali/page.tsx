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
