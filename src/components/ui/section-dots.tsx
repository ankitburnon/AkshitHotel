"use client";

import { useEffect, useState } from "react";

export function SectionDots({ sectionIds }: { sectionIds: readonly string[] }) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    function onScroll() {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
          current = id;
        }
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
