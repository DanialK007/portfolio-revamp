'use client';

import { useEffect, ReactNode } from 'react';
import { initLenis } from '../lib/lenis';

export default function LenisProvider({ children }) {
  useEffect(() => {
    initLenis();
  }, []);

  return <>{children}</>;
}