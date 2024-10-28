"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const MouseFollower = ({ size = 80, stiffness = 100, damping = 20 }) => {
  const mouseX = useMotionValue(-100); // Start off-screen
  const mouseY = useMotionValue(-100); // Start off-screen
  const [isMoving, setIsMoving] = useState(true); // Start as moving
  const [stopTimeout, setStopTimeout] = useState(null); // State to manage timeout ID

  // Using `useSpring` to create an easing effect
  const springX = useSpring(mouseX, { stiffness, damping });
  const springY = useSpring(mouseY, { stiffness, damping });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 32); // Center the circle
      mouseY.set(e.clientY - 32);
      
      // Set moving state to true
      setIsMoving(true);

      // Clear previous timeout if mouse is moving
      if (stopTimeout) {
        clearTimeout(stopTimeout);
        setStopTimeout(null); // Reset timeout state
      }

      // Start a new timeout to set isMoving to false after 1 second
      const timeoutId = setTimeout(() => {
        setIsMoving(false); // Set moving state to false after 1 second
      }, 100); // 1 second delay

      setStopTimeout(timeoutId); // Store timeout ID for cleanup
    };

    // Attach the event listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up the event listeners and timeout on component unmount
      window.removeEventListener("mousemove", handleMouseMove);
      if (stopTimeout) clearTimeout(stopTimeout); // Clear the timeout if it exists
    };
  }, [mouseX, mouseY, size, stopTimeout]);

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-[99999] 
                 rounded-full bg-opacity-50 mix-blend-difference transition-[border,filter] duration-1000
                  border-white ${isMoving ? "border-[8px]" : "border-[40px]"}`}
      style={{
        x: springX,
        y: springY,
        // scale: isMoving ? 0.5 : 1, // Scale to 50% when moving, otherwise original size
        // transition: { duration: 0.3 }, // Smooth transition for scaling
      }}
    />
  );
};