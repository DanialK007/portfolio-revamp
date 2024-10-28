"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function FadeIn({ children, className, duration }) {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hide"
      animate={mainControls}
      transition={{ duration: duration || 0.8, ease: "easeOut" }} // Changed ease to "easeOut" for a smoother transition
    >
      {children}
    </motion.div>
  );
}