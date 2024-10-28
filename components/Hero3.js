import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { ArrowDown } from "lucide-react";
import { BlurAnimation } from "./ui/BlurAnimation";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = [{ text: "Hi," }, { text: "WELCOME", className : "text-white" }, { text: "HOME" }];
const words2 = [{ text: "IT'S" }, { text: "ME" }, { text: "K-cube", className : "text-white" }];

function Hero3() {
  return (
    <BackgroundGradientAnimation
      containerClassName="h-screen"
      gradientBackgroundStart="#000"
      gradientBackgroundEnd="#111"
      thirdColor="#e3591e"
    >
      <div className="absolute z-20 inset-0 flex flex-col items-start lg:items-center justify-center text-white bg-gradient-to-t from-black to-80% from-10%">
        <div className="backdrop-blur-md flex items-end lg:justify-center pb-5">
          <TextGenerateEffect
            words={words}
            duration={1.6}
            className="hidden lg:flex text-3xl sm:text-5xl md:text-6xl text-white/60 lg:text-7xl xl:text-8xl font-bold"
          ></TextGenerateEffect>
          <div className="lg:hidden font-bold uppercase text-white/60 px-10 sm:px-16">
            <div className="text-[5rem] leading-[1.4]">Hello!</div>
            <div className="text-[3.4rem] leading-[1.4]">
              <spanc className="text-white"> Welcome </spanc> home
            </div>
          </div>
        </div>
        <div className="pt-5 flex items-start lg:justify-center px-10 sm:px-16">
          <BlurAnimation
            duration={2}
            className="hidden lg:flex text-3xl sm:text-5xl md:text-6xl text-white/60 lg:text-7xl xl:text-8xl font-bold"
          >
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
          </BlurAnimation>
          <div className="lg:hidden font-bold uppercase">
            <div className="text-[3rem] leading-[1.4] text-white/60">
              It's me,
            </div>
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
            aria-label="This is a link."
            href="#"
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

export default Hero3;
