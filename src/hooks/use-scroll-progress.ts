"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useLenis(({ scroll, progress: p }) => {
    setScrollY(scroll);
    setProgress(p);
  });

  return { progress, scrollY };
}
