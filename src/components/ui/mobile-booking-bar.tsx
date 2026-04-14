"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLenis } from "lenis/react";
import { BRAND } from "@/lib/constants";

const PREFILLED_MSG = encodeURIComponent(
  "Hi, I'm interested in booking a stay at Heaven Paradise. Can you help me?"
);

export function MobileBookingBar() {
  const [visible, setVisible] = useState(false);

  useLenis(({ scroll }) => {
    setVisible(scroll > window.innerHeight * 0.8);
  });

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[1000] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={`${BRAND.whatsappUrl}?text=${PREFILLED_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-4 bg-whatsapp text-white text-sm font-semibold shadow-[0_-4px_20px_rgba(37,211,102,0.2)] tracking-wide"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        Chat to book on WhatsApp
      </a>
    </div>
  );
}
