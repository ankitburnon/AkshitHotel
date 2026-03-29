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
