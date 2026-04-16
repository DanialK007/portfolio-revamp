import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { ArrowDown } from "lucide-react";
import { BlurAnimation } from "./ui/BlurAnimation";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Magnetic from "./ui/Magnetic";

const words = [
  { text: "Hi," },
  { text: "WELCOME", className: "text-white" },
  { text: "HOME" },
];

function Hero() {
  return (
    <BackgroundGradientAnimation
      containerClassName="h-screen min-h-[780px]"
      gradientBackgroundStart="#000"
      gradientBackgroundEnd="#111"
      thirdColor="#e3591e"
      interactive={false}
    >
      <div
        id="top"
        className="absolute z-20 inset-0 flex flex-col items-start lg:items-center justify-center text-white bg-gradient-to-t from-black to-80% from-10%"
      >
        <div className="hidden lg:flex items-end lg:justify-center pb-5">
          <BlurAnimation
            delay={0.2}
            duration={1.2}
            className="hidden lg:flex gap-5 text-3xl sm:text-5xl md:text-6xl text-white/60 lg:text-7xl xl:text-[5.2rem] font-bold"
          >
            <span>Hi,</span>
            <span className="text-white">WELCOME</span>
            <span>HOME</span>
          </BlurAnimation>
        </div>
        <div className="lg:pt-5 flex items-start lg:justify-center ps-10 sm:px-16">
          <BlurAnimation
            delay={0.4}
            duration={1.2}
            className="hidden lg:flex gap-5 text-3xl sm:text-5xl md:text-6xl text-white/60 lg:text-7xl xl:text-[5.2rem] font-bold"
          >
            <span>It's</span>
            <span>me,</span>
            <span className="capitalize text-white relative pb-5 md:pb-3 lg:pb-2">
              Kcube
              <div className="absolute left-0 bottom-0 w-full text-end px-1 text-[0.5rem] md:text-xs uppercase font-normal">
                Kaung Khant Kyaw
              </div>
            </span>
            <Magnetic>
              <div className="pt-3 px-3 -mx-3 rounded-full">
                <img
                  src="img/cube.svg"
                  alt=""
                  className="w-8 animate-spin mb-5 cursor-pointer hover:invert duration-300"
                />
              </div>
            </Magnetic>
          </BlurAnimation>
          <BlurAnimation
            delay={0.4}
            duration={1.2}
            className="lg:hidden font-bold uppercase -mt-5"
          >
            <div className="text-[4rem] md:text-[5rem] text-white/60">Hello!</div>
            <span className="text-[3.4rem] md:text-[4rem] text-white leading-[1.4] me-2">
              Welcome
            </span>
            <span className="text-[4.5rem] md:text-[5rem] leading-[1.4] text-white/60">
              home
            </span>
            <div className="text-[3rem] md:text-[4rem] leading-[1.4] text-white/60">
              It's me,
            </div>
            <span className="text-[5.8rem] md:text-[6rem] leading-[1.2] relative capitalize text-white pb-5 md:pb-3 lg:pb-2">
              Kcube
              <div className="absolute left-0 bottom-3 w-full text-end px-1 text-[1rem] md:text-xs uppercase font-normal">
                Kaung Khant Kyaw
              </div>
              <Magnetic className="absolute top-2 -right-5">
                <img
                  src="img/cube.svg"
                  alt=""
                  className="w-8 animate-spin cursor-pointer hover:invert duration-300"
                />
              </Magnetic>
            </span>
          </BlurAnimation>
          <a
            aria-label="This is a link."
            href="#scroll"
            className="flex ms-5 md:ms-8 lg:ms-10 xl:ms-12 flex-col absolute bottom-0 left-0 items-center w-24 p-4 mt-10 animate-pulse"
          >
            <div className="font-mono">SCROLL</div>
            <div className="animate-bounce p-2 pt-3">
              <ArrowDown />
            </div>
          </a>
          <div id="scroll" className="absolute bottom-10"></div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

export default Hero;
