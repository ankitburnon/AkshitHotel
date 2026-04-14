"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ProgressBar() {
  const { progress } = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[1001]"
      style={{
        width: `${progress * 100}%`,
        background: "linear-gradient(to right, #2D5A47, #C2703E)",
      }}
    />
  );
}
