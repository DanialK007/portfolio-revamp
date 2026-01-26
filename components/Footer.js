"use client";
import { ArrowDown } from "lucide-react";
import React from "react";
import HyperText from "./ui/hyper-text";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { BlurAnimation } from "./ui/BlurAnimation";
import Logo from "./Logo";

function Footer() {
  return (
    <BlurAnimation className="mt-16">
      <div className="pb-16 hidden lg:block relative">
        <div className="absolute top-0 left-0 size-full -z-10">
          <BackgroundGradientAnimation
            gradientBackgroundStart="#000"
            gradientBackgroundEnd="#111"
            thirdColor="#e3591e"
            containerClassName="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black/10 from-20% to-80%"></div>
        <BlurAnimation
          duration={1}
          className="flex items-center justify-between pb-8 px-5 lg:px-16"
        >
          <div className="text-sm">
            {/* <img src="img/Kcube.svg" alt="" className="h-16 my-8" /> */}
            <div className="w-fit h-16 my-8">
              <Logo />
            </div>
            <div className="font-semibold">© 2024 · Danial Kcube</div>
            <HyperText className="font-mono" text="All Right Reserved" />
          </div>
          <div className="text-sm">
            <div className="h-16 w-full my-8 flex items-center justify-end px-2">
              <a
                aria-label="This is a link."
                href="#top"
                className="w-11 h-11 rounded-full bg-white/5 duration-1000 flex items-center justify-center hover:bg-black border border-white/20 hover:shadow-md hover:border-red-500 hover:shadow-red-500/40"
              >
                <img
                  src="img/upArrow.svg"
                  alt=""
                  className="brightness-0 invert"
                />
              </a>
            </div>
            <div className="font-semibold">Created with ❤️ in Myanmar</div>
            <HyperText className="font-mono" text="Made in Mandalay" />
          </div>
        </BlurAnimation>
        <BlurAnimation
          duration={1.2}
          className="flex items-center justify-center myFont cap1 text-6xl md:text-7xl xl:text-9xl italic font-semibold animate-foot pb-5"
        >
          <span className="pe-2">THANK</span>
          <img
            src="img/cube.svg"
            className="hover:invert duration-500 hover:cursor-pointer w-4 md:w-10 xl:w-16 animate-spin"
            alt=""
          />
          <span className="pe-2">YOU</span>
        </BlurAnimation>
      </div>
      <div className="pb-5 lg:hidden relative">
        <div className="absolute top-0 left-0 size-full -z-10">
          <BackgroundGradientAnimation
            gradientBackgroundStart="#000"
            gradientBackgroundEnd="#111"
            thirdColor="#e3591e"
            containerClassName="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-black to-black/10 to-80%"></div>
        <div className="py-8 relative z-10 flex flex-col items-center justify-center text-center">
          <div className="text-sm">
            {/* <img src="img/Kcube.svg" alt="" className="h-16 my-2 mx-auto" /> */}
            <div className="w-fit mx-auto h-16">
              <Logo />
            </div>
            <div className="font-semibold">© 2024 · Danial Kcube</div>
            <HyperText className="font-mono" text="All Right Reserved" />
          </div>
          <div className="text-sm w-full pt-8 flex flex-col items-center">
            <div className="font-semibold">Created with ❤️ in Myanmar</div>
            <HyperText className="font-mono" text="Made in Mandalay" />
          </div>
          <div className="w-full flex items-center justify-end px-5">
            <a
              aria-label="This is a link."
              href="#top"
              className="w-11 h-11 rounded-full bg-white/5 duration-1000 flex items-center justify-center hover:bg-black border border-white/20 hover:shadow-md hover:border-red-500 hover:shadow-red-500/40"
            >
              <img
                src="img/upArrow.svg"
                alt=""
                className="brightness-0 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </BlurAnimation>
  );
}

export default Footer;
