"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BlurAnimation = ({
  children,
  className,
  childClass,
  filter = true,
  duration = 0.5,
  delay = 0.2,
  wait = 0, // New prop to set initial waiting time
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.div className={cn("leading-snug tracking-wide", className)}>
      {React.Children.map(children, (child, idx) => (
        <motion.div
          key={idx}
          className={cn("opacity-0", childClass)}
          initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
          animate={hasAnimated ? { opacity: 1, filter: "none" } : {}}
          whileInView={
            !hasAnimated
              ? {
                  opacity: 1,
                  filter: filter ? "blur(0px)" : "none",
                }
              : {}
          }
          transition={{
            duration: duration || 1,
            delay: wait + idx * delay, // Add `wait` to the delay calculation
          }}
          onAnimationComplete={() => {
            if (idx === React.Children.count(children) - 1) {
              setHasAnimated(true);
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};