"use client";
import { useEffect } from "react";
import { motion, useInView, useAnimate, stagger } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextBlur = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0.1
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);  // Check if the text is in view
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(delay),
        }
      );
    }
  }, [isInView, animate, filter, duration]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="opacity-0"
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("", className)}>
      <div className="">
        <div className="leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};