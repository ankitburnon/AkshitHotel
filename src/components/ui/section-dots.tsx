"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

export function SectionDots({ sectionIds }: { sectionIds: readonly string[] }) {
  const [active, setActive] = useState(sectionIds[0]);
  const lenis = useLenis();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    const observer = observerRef.current;
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  function scrollTo(id: string) {
    if (lenis) {
      lenis.scrollTo(`#${id}`, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="fixed right-7 top-1/2 -translate-y-1/2 z-[998] flex flex-col gap-3.5 max-md:hidden">
      {sectionIds.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`w-2 h-2 rounded-full border-none outline-none cursor-pointer transition-all duration-400 ${
            active === id
              ? "bg-accent scale-150"
              : "bg-primary/20 hover:bg-primary/50"
          }`}
          aria-label={`Scroll to ${id}`}
        />
      ))}
    </div>
  );
}
