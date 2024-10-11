"use client";
import { ArrowDown } from "lucide-react";
import React, { useEffect, useRef } from "react";

function Footer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play(); // Ensure the video starts playing
      videoElement.playbackRate = 1.5; // Set video speed to 0.5x
    }
  }, []);

  return (
    <footer className="relative mt-16">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          ref={videoRef}
          src="img/hero.mp4"
          poster="img/hero-preview.png"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover brightness-50"
        ></video>
      </div>
      <div className="pb-16 hidden lg:block relative z-10">
        <div className="flex items-center justify-between pb-8 px-5 lg:px-16">
          <div className="text-sm">
            <img src="img/Kcube.svg" alt="" className="h-16 my-8" />
            <div className="font-semibold">© 2024 · Danial Kcube</div>
            <div className="font-mono">All Right Reserved</div>
          </div>
          <div className="text-sm">
            <div className="h-16 w-full my-8 flex items-center justify-end px-2">
              <a
                href="#top"
                className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center hover:bg-black duration-300 border border-white/40 hover:shadow-md hover:border-red-500 hover:shadow-red-500/40"
              >
                <img src="img/upArrow.svg" alt="" className="brightness-0 invert" />
              </a>
            </div>
            <div className="font-semibold">Created with ❤️ in Myanmar</div>
            <div className="font-mono">Made in Mandalay</div>
          </div>
        </div>
        <div className="flex justify-center myFont cap1 text-6xl md:text-8xl xl:text-10xl italic font-semibold animate-foot pb-5">
          <span className="pe-2">THANK</span>
          <img
            src="img/cube.svg"
            className="hover:invert duration-500 hover:cursor-pointer w-4 md:w-10 xl:w-16 animate-spin"
            alt=""
          />
          <span className="pe-2">YOU</span>
        </div>
      </div>
      <div className="pb-5 lg:hidden relative z-10">
        <div className="py-8 flex flex-col items-center justify-center text-center">
          <div className="text-sm">
            <img src="img/Kcube.svg" alt="" className="h-16 my-2 mx-auto" />
            <div className="font-semibold">© 2024 · Danial Kcube</div>
            <div className="font-mono">All Right Reserved</div>
          </div>
          <div className="text-sm w-full pt-8">
            <div className="font-semibold">Created with ❤️ in Myanmar</div>
            <div className="font-mono">Made in Mandalay</div>
            <div className="w-full flex items-center justify-end px-5">
              <a
                href="#top"
                className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center hover:bg-black duration-300 border border-white/20 hover:shadow-md hover:border-red-500 hover:shadow-red-500/40"
              >
                <img src="img/upArrow.svg" alt="" className="brightness-50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
