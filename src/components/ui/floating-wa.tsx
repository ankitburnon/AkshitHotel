"use client";

import { MessageCircle } from "lucide-react";
import { HOTEL } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={HOTEL.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[999] w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-whatsapp flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.35)] hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
}
