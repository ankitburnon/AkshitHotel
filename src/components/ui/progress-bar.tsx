"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ProgressBar() {
  const { progress } = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-accent z-[1001]"
      style={{ width: `${progress * 100}%` }}
    />
  );
}
