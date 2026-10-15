"use client";
import { useState, useEffect } from "react";

const getBreakpoint = () => {
  const w = window.innerWidth;
  if (w >= 1280) return "xl";
  if (w >= 1024) return "lg";
  if (w >= 768)  return "md";
  if (w >= 640)  return "sm";
  return "xs";
};

/**
 * Returns the current Tailwind-style breakpoint name.
 * Initializes to null (SSR), then immediately measures on first client paint.
 * sm >= 640  md >= 768  lg >= 1024  xl >= 1280  default "xs"
 */
export function useBreakpoint() {
  // Start null so SSR and client initial render are consistent (avoids hydration mismatch).
  // useEffect fires synchronously after first paint and sets the real value.
  const [bp, setBp] = useState(null);

  useEffect(() => {
    // Measure immediately on mount — no need to wait for a resize
    setBp(getBreakpoint());

    const handler = () => setBp(getBreakpoint());
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  return bp;
}
