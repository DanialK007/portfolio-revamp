"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words, // Expecting an array of word objects
  className,
  filter = true,
  duration = 0.8,
  delay = 0.1,
  wait = 0, // Initial waiting time
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true }); // Trigger animation once when in view

  useEffect(() => {
    if (isInView) {
      const initialDelay = Number.isFinite(wait) ? wait : 0; // Ensure `wait` is a valid number
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(delay, { startDelay: initialDelay }), // Separate wait as start delay
        }
      );
    }
  }, [isInView, animate, duration, delay, filter, wait]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {words.map((wordObj, idx) => (
        <motion.span
          key={idx} // Use index as key since word may not be unique
          className={cn("opacity-0", wordObj.className)} // Combine with custom class
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {wordObj.text}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div className="tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};