"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words, // Expecting an array of word objects
  className,
  filter = true,
  duration = 0.8
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true }); // Trigger animation once when in view

  useEffect(() => {
    if (isInView) {
      animate("span", {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      }, {
        duration: duration ? duration : 1,
        delay: stagger(0.1),
      });
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.map((wordObj, idx) => (
          <motion.span
            key={idx} // Use index as key since word may not be unique
            className={cn("opacity-0", wordObj.className)} // Combine with custom class
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}>
            {wordObj.text}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div className="tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};