"use client"; // Add this line to enable client-side rendering

import { useState, useEffect } from "react";

const images = [
    "img/profile.jpeg",
    "img/photo-5.jpg",
    "img/photo-8.jpg",
    "img/photo-4.jpg",
    "img/photo-6.jpg",
    "img/photo-7.jpg",
    "img/photo-9.jpeg",
    "img/photo-1.jpg",
//   "img/photo-7.jpg",
//   "img/photo-8.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [nextIndex, setNextIndex] = useState(currentIndex); // State to hold the next index

  // Automatically move to the next image after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  const prevSlide = () => {
    setFadeOut(true); // Trigger fade out
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setNextIndex(newIndex); // Set next index
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeOut(false); // Reset fade out after changing index
      setFadeIn(true); // Trigger fade in
    }, 240); // Wait for fade out to finish
  };

  const nextSlide = () => {
    setFadeOut(true); // Trigger fade out
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setNextIndex(newIndex); // Set next index
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeOut(false); // Reset fade out after changing index
      setFadeIn(true); // Trigger fade in
    }, 240); // Wait for fade out to finish
  };

  return (
    <div className="w-full max-w-[600px] mx-auto relative">
      {/* Images */}
      <div className="w-full h-[500px] rounded-2xl overflow-hidden relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={`w-full h-full object-cover duration-500 ease-in-out ${
            fadeOut ? "opacity-0 scale-110" : "opacity-100"
          }`}
        />
        <img
          src={images[nextIndex]}
          alt={`Slide ${nextIndex}`}
          className={`absolute w-full h-full object-cover duration-500 ease-in-out ${
            fadeIn ? "opacity-100" : "opacity-0 scale-110"
          }`}
        />
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 size-8 backdrop-blur-lg bg-white/10 rounded-full shadow-md focus:outline-none"
        onClick={prevSlide}
      >
        &#8249;
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 size-8 backdrop-blur-lg bg-white/10 rounded-full shadow-md focus:outline-none"
        onClick={nextSlide}
      >
        &#8250;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-1/2 translate-x-1/2 flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-[4px] cursor-pointer duration-200 ${
              idx === currentIndex ? "bg-red-500 w-10" : "bg-gray-300 w-2"
            }`}
            onClick={() => {
              setFadeOut(true); // Trigger fade out
              setNextIndex(idx); // Set the next index
              setTimeout(() => {
                setCurrentIndex(idx);
                setFadeOut(false); // Reset fade out after changing index
                setFadeIn(true); // Trigger fade in
              }, 500); // Wait for fade out to finish
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;