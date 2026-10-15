import React from "react";
import Carousel from "./Carousel";
import HyperText from "./ui/hyper-text";
import { BlurAnimation } from "./ui/BlurAnimation";
import Magnetic from "./ui/Magnetic";
import BlurFadeIn from "./framer-motion/BlurFadeIn";

import BioCard from "./about/BioCard";
import ProfileCard from "./about/ProfileCard";
import BiographyCard from "./about/BiographyCard";
import ExperienceCard from "./about/ExperienceCard";
import ToolStackCard from "./about/ToolStackCard";
import BackgroundCard from "./about/BackgroundCard";

function About() {
  return (
    <div className="my-5 xl:mt-20 relative">
      <div id="about" className="absolute -top-16"></div>
      <div className="py-8">
        <BlurAnimation
          duration={1.2}
          className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center justify-center pb-2 myFont text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl"
        >
          <span className="font-thin" id="aboutM">
            ABOUT
          </span>
          <span className="italic font-bold pe-2 relative">
            ME
            <div className="absolute top-1 -left-[2.2rem] sm:top-3 sm:-left-[2.8rem] md:top-4 lg:top-5 xl:top-4 md:-left-[3.2rem] lg:-left-[4.2rem] xl:-left-[4.4rem]">
              <Magnetic>
                <div className="pt-3 px-3 rounded-full">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="img/cube.svg"
                    className="hover:invert duration-500 cursor-grabbing w-6 sm:w-8 md:w-10 lg:w-14 xl:w-16 animate-spin"
                    alt=""
                  />
                </div>
              </Magnetic>
            </div>
          </span>
        </BlurAnimation>
        <BlurAnimation className="flex lg:hidden justify-between text-sm font-mono px-5">
          <HyperText text="BASED IN MANDALAY" />
          <HyperText text="DETAIL-ORIENTED" />
        </BlurAnimation>
        <BlurAnimation className="hidden lg:flex justify-between text-sm font-mono px-5">
          <HyperText text="BASED IN MANDALAY" />
          <HyperText text="DETAIL-ORIENTED" />
          <HyperText text="CURIOUS" />
        </BlurAnimation>
      </div>

      {/* ── Single responsive grid — no more duplicate markup ── */}
      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3">

        {/* Column 1: Bio + Background (desktop only) */}
        <BlurFadeIn className="flex flex-col gap-5">
          <BioCard />
          {/* Background card — desktop only, inside column 1 */}
          <div className="hidden md:block">
            <BackgroundCard />
          </div>
        </BlurFadeIn>

        {/* Column 2: Profile + Biography + Carousel (desktop) */}
        <div className="flex flex-col gap-5">
          <ProfileCard duration="1.5" />
          <BiographyCard duration="1.5" />
          <BlurFadeIn duration={1.5} className="rounded-2xl border border-white/10 overflow-hidden">
            <Carousel />
          </BlurFadeIn>
        </div>

        {/* Column 3: Experience + Tool Stack (desktop) */}
        <div className="flex flex-col gap-5">
          <ExperienceCard duration="1.9" />
          <ToolStackCard duration="1.9" />
        </div>

      </div>
    </div>
  );
}

export default About;
