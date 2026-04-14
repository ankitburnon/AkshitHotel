"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/constants";

interface NavLink {
  label: string;
  href: string;
}

export function ShimlaNavbar({
  links,
  ctaLabel = "WhatsApp Us",
  ctaHref = "#contact",
}: {
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "bg-cream/92 backdrop-blur-[24px] shadow-[0_1px_30px_rgba(0,0,0,0.06)] py-3.5 px-8 md:px-[60px]"
            : "bg-transparent py-6 px-8 md:px-[60px]"
        }`}
      >
        <a
          href="/"
          className={`font-heading tracking-wide transition-all duration-600 ${
            scrolled
              ? "text-primary text-[22px] font-light"
              : "text-[#1a1a18] text-[26px] font-light"
          }`}
        >
          {BRAND.name}
        </a>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full ${
                scrolled ? "text-body" : "text-body/70"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={ctaHref}
          className={`hidden md:block text-[13px] font-semibold tracking-wide transition-all duration-400 px-6 py-2.5 ${
            scrolled
              ? "bg-primary text-white border border-primary rounded-md"
              : "bg-transparent text-body border border-body/30 rounded-md hover:bg-body/5"
          }`}
        >
          {ctaLabel}
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden z-[1002]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-body" />
          ) : (
            <Menu
              className={`w-6 h-6 ${scrolled ? "text-body" : "text-body"}`}
            />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-cream flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-3xl text-primary font-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 bg-primary text-white rounded-md font-semibold"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </>
  );
}
