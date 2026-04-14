import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { ProgressBar } from "@/components/ui/progress-bar";
import { MobileBookingBar } from "@/components/ui/mobile-booking-bar";
import { FloatingWhatsApp } from "@/components/ui/floating-wa";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heaven Paradise — Hospitality in the Himalayas",
  description:
    "Born in Himachal, Heaven Paradise offers authentic mountain stays in Shimla and Manali. Personally hosted. Locally rooted. Unforgettable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${karla.variable}`}>
      <body className="font-body bg-cream text-body overflow-x-hidden">
        <SmoothScroll>
          <ProgressBar />
          {children}
          <MobileBookingBar />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
