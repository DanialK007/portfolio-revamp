"use client";
import { ArrowDown } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Particles from "./magicui/particles";

function Hero2() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play(); // Ensure the video starts playing
      videoElement.playbackRate = 0.8; // Set video speed to 0.5x
    }
  }, []);

  return (
    <div className="h-screen grid grid-rows-2 myFont">
      <div className="relative">
        <video
          ref={videoRef}
          src="img/hero.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover brightness-50 relative z-10"
        ></video>
        <div className="absolute z-20 top-0 left-0 w-full h-full backdrop-blur-md flex items-end lg:justify-center pb-5">
          <div className="hidden lg:block text-3xl sm:text-5xl md:text-6xl text-white/60 lg:text-7xl xl:text-8xl font-semibold uppercase">
            Hi, <spanc className="text-white"> Welcome </spanc> home
          </div>
          <div className="lg:hidden font-semibold uppercase text-white/60 px-10 sm:px-16">
            <div className="text-[5rem] leading-[1.4]">Hello!</div>
            <div className="text-[3.4rem] leading-[1.4]">
              <spanc className="text-white"> Welcome </spanc> home
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 relative flex items-start lg:justify-center px-10 sm:px-16">
        <div className="hidden lg:flex text-3xl sm:text-5xl md:text-6xl text-white/60 lg:text-7xl xl:text-8xl font-semibold uppercase">
          It's me,
          <span className="capitalize text-white ps-2 md:ps-5 relative pb-5 md:pb-3 lg:pb-2">
            Kcube
            <div className="absolute left-0 bottom-0 w-full text-end px-1 text-[0.5rem] md:text-xs uppercase font-normal">
              Kaung Khant Kyaw
            </div>
          </span>
          <img
            src="img/cube.svg"
            alt=""
            className="w-8 animate-spin mb-5 cursor-pointer hover:invert duration-300"
          />
        </div>
        <div className="lg:hidden font-semibold uppercase">
          <div className="text-[3rem] leading-[1.4] text-white/60">It's me,</div>
          <div className="text-[5.8rem] leading-[1.2] flex">
            <span className="capitalize text-white relative pb-5 md:pb-3 lg:pb-2">
              Kcube
              <div className="absolute left-0 bottom-3 w-full text-end px-1 text-[1rem] md:text-xs uppercase font-normal">
                Kaung Khant Kyaw
              </div>
            </span>
            <img
              src="img/cube.svg"
              alt=""
              className="w-8 animate-spin mb-10 cursor-pointer hover:invert duration-300"
            />
          </div>
        </div>
        <a
          href="#scroll"
          id="scroll"
          className="flex ms-5 md:ms-8 lg:ms-10 xl:ms-12 flex-col absolute bottom-0 left-0 items-center w-24 p-4 mt-10 animate-pulse"
        >
          <div className="font-mono">SCROLL</div>
          <div className="animate-bounce p-2 pt-3">
            <ArrowDown />
          </div>
        </a>

        <Particles
        className="fixed pointer-events-none top-0 left-0 w-full h-full"
        quantity={100}
        ease={80}
        staticity={30}
        color={"#fff"}
      />
      </div>
    </div>
  );
}

export default Hero2;
