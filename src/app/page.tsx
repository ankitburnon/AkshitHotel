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
