import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { IMAGES, HOTEL } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-[120px] px-8 md:px-[60px] text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.ctaBg}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-cream/[0.88] backdrop-blur-[4px]" />
      </div>

      {/* Content */}
      <div className="relative z-[2]">
        <ScrollReveal>
          <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
            Get In Touch
          </p>
        </ScrollReveal>
        <SplitHeading className="font-heading text-[42px] md:text-[56px] font-light text-primary mb-3 leading-[1.15]">
          Ready to Visit Paradise?
        </SplitHeading>
        <ScrollReveal>
          <p className="text-base text-[#999] mb-11 font-light">
            Reach out directly — we&apos;d love to host you
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex gap-4 justify-center mb-10 flex-col sm:flex-row items-center">
            <a
              href={HOTEL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-[18px] bg-whatsapp text-white rounded-md text-sm font-semibold shadow-[0_4px_24px_rgba(37,211,102,0.3)] hover:translate-y-[-3px] hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-400 tracking-wide"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${HOTEL.phoneNumber}`}
              className="flex items-center gap-3 px-10 py-[18px] bg-primary text-white rounded-md text-sm font-semibold shadow-[0_4px_24px_rgba(45,90,71,0.3)] hover:translate-y-[-3px] hover:shadow-[0_10px_40px_rgba(45,90,71,0.4)] transition-all duration-400 tracking-wide"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-sm text-[#bbb] font-light leading-[1.8]">
            <strong className="text-body font-medium">{HOTEL.name}</strong>
            <br />
            {HOTEL.location}
            <br />
            {HOTEL.distanceFromStation}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
