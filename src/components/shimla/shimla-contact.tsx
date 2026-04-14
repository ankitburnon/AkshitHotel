import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { PROPERTIES } from "@/lib/constants";

const property = PROPERTIES.shimla;

export function ShimlaContact() {
  return (
    <section
      id="contact"
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/shimla/gallery-dining-silhouette.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0d1a14]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-[11px] tracking-[4px] uppercase text-cream/35 font-semibold mb-4">
          Let&apos;s Talk
        </p>
        <h2 className="font-heading text-[36px] md:text-[56px] font-light text-cream leading-[1.15] mb-3">
          Your Mountains Are Waiting
        </h2>
        <p className="text-[15px] text-cream/55 font-light mb-10">
          Tell me when you&apos;re coming. I&apos;ll take care of everything else.
        </p>

        <div className="flex gap-4 justify-center flex-col sm:flex-row items-center mb-8">
          <a
            href={property.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-[16px] bg-whatsapp text-white text-[13px] font-semibold tracking-wide shadow-[0_4px_24px_rgba(37,211,102,0.3)] hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-400 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href={`tel:${property.phoneNumber}`}
            className="flex items-center gap-3 px-10 py-[16px] bg-transparent border border-cream/30 text-cream text-[13px] font-semibold tracking-wide hover:translate-y-[-2px] hover:border-cream/50 transition-all duration-400 cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>

        <p className="text-[13px] text-cream/35 font-light leading-[1.8]">
          <strong className="text-cream/55 font-medium">
            {property.name}
          </strong>
          <br />
          {property.location}
          <br />
          {property.distanceInfo}
        </p>
      </div>
    </section>
  );
}
