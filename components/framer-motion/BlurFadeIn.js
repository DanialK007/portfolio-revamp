"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BlurFadeIn({ children, className, duration = 1, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, filter: "none" } : {}}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        filter: { duration: duration * 0.8 },
      }}
    >
      {children}
    </motion.div>
  );
}
