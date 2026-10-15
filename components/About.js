"use client";
import React from "react";
import MorphSlider from "./MorphSlider";
import MagicBento from "./MagicBento";
import HyperText from "./ui/hyper-text";
import { BlurAnimation } from "./ui/BlurAnimation";
import Magnetic from "./ui/Magnetic";
import { useBreakpoint } from "../hooks/useBreakpoint";

import BioCard from "./about/BioCard";
import ProfileCard from "./about/ProfileCard";
import BiographyCard from "./about/BiographyCard";
import ExperienceCard from "./about/ExperienceCard";
import ToolStackCard from "./about/ToolStackCard";
import BackgroundCard from "./about/BackgroundCard";

function About() {
  const bp = useBreakpoint();

  // Responsive bento config — null means not yet measured (SSR), default mobile-first
  const bentoCols =
    bp === null || bp === "xs" || bp === "sm" ? 1 : bp === "md" ? 2 : 3;
  const bentoRowHeight =
    bp === null || bp === "xs" || bp === "sm" ? 20 : bp === "md" ? 32 : 30;

  const sliderItems = [
    { image: "/img/profile.jpeg" },
    { image: "/img/photo-5.jpg" },
    { image: "/img/photo-12.jpg" },
    { image: "/img/photo-4.jpg" },
    { image: "/img/photo-13.jpg" },
    { image: "/img/photo-7.jpg" },
    { image: "/img/photo-9.jpeg" },
    { image: "/img/photo-1.jpg" },
    { image: "/img/photo-11.jpg" },
  ];

  const bentoItems = [
    {
      title: "Bio",
      content: <BioCard />,
      colSpan: 1,
      rowSpan: 8,
    }, {
      title: "Profile",
      content: <ProfileCard duration="1.5" />,
      colSpan: 1,
      rowSpan: 12,
    },
    {
      title: "Experience",
      content: <ExperienceCard duration="1.9" />,
      colSpan: 1,
      rowSpan: 14,
    },
    {
      title: "Background",
      content: <BackgroundCard />,
      colSpan: 1,
      rowSpan: 18,
    },
    {
      title: "Biography",
      content: <BiographyCard duration="1.5" />,
      colSpan: 1,
      rowSpan: 5,
    },
    {
      title: "Tool Stack",
      content: <ToolStackCard duration="1.9" />,
      colSpan: 1,
      rowSpan: 6,
    },
    {
      title: "Gallery",
      content: (
        <div className="w-full h-full relative overflow-hidden rounded-[20px]">
          <MorphSlider
            className="w-full h-full"
            items={sliderItems}
            autoplay={true}
            autoplayDelay={5}
            transition="melt"
            duration={1.1}
            showCaptions={false}
            showControls={true}
            showIndicators={true}
            radius={20}
          />
          <a
            href="/gallery"
            className="absolute top-4 right-4 bg-white/20 rounded-full px-2 py-1 text-xs backdrop-blur-lg border border-white/20 hover:scale-105 active:scale-90 duration-300 z-10"
          >
            See Gallery
          </a>
        </div>
      ),
      colSpan: 1,
      rowSpan: 14,
    },
  ];

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

      {/* ── MagicBento Grid ── */}
      <div className="p-5">
        <MagicBento
          items={bentoItems}
          columns={bentoCols}
          rowHeight={bentoRowHeight}
          gap={12}
          radius={20}
          theme="dark"
          // glowColor="#18181b"
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={true}
          intro={true}
          textAutoHide={false}
        />
      </div>
    </div>
  );
}

export default About;
