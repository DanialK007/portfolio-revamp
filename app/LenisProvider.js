'use client';

import { useEffect, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothWheel: true,
      direction: 'vertical',
      gestureOrientation: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.start();
  
    // Trigger a scroll event after every Lenis frame
    lenis.on('scroll', () => {
      window.dispatchEvent(new Event('scroll'));
    });
  
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}