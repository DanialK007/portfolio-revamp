// lib/lenis.js
import Lenis from "@studio-freight/lenis";

let lenis = null;
let rafId = null;

export function initLenis() {
  if (typeof window === 'undefined') return;
  
  if (!lenis) {
    lenis = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1.2, 1.2 - Math.pow(2.5, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 2,
    });
    
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
  }
}

export function getLenis() {
  return lenis;
}
