"use client";
import React, { useState } from "react";
import MagicBento from "./MagicBento";
import { LuExternalLink } from "react-icons/lu";
import HyperText from "./ui/hyper-text";
import ProjectModal from "./ProjectModal";
import { BlurAnimation } from "./ui/BlurAnimation";
import { FaCircleArrowRight } from "react-icons/fa6";
import Magnetic from "./ui/Magnetic";
import { useBreakpoint } from "../hooks/useBreakpoint";

function PlayGround() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const bp = useBreakpoint();

  // Responsive bento config — null means not yet measured (SSR), default mobile-first
  const bentoCols =
    bp === null || bp === "xs" || bp === "sm" ? 1 : bp === "md" ? 2 : 3;
  const bentoRowHeight =
    bp === null || bp === "xs" || bp === "sm" ? 30 : bp === "md" ? 40 : 30;
  // Cap colSpan to the column count so wide cards don't overflow
  const capSpan = (span) => Math.min(span, bentoCols);

  const novaeProject = {
    title: "NOVÆ",
    href: "https://novae.onrender.com/",
    imgSrc: "img/novae-2.png",
    photos: ["img/novae-2.png", "img/novae.png"],
    videoSrc: "img/video9.mov",
    bgColor: "bg-neutral-900",
    gradient: "from-white to-neutral-400",
  };

  const projects = [
    {
      title: "Rental",
      href: "https://rental-kkk.vercel.app/",
      imgSrc: "img/rental.png",
      photos: [
        "img/rental.png",
        "img/rental.png",
        "img/rental.png",
        "img/rental.png",
        "img/rental.png",
      ],
      videoSrc: "img/video9.mov",
      bgColor: "bg-teal-500",
      gradient: "to-teal-400 from-white",
      colSpan: 2,
      rowSpan: 16,
    },
    {
      title: "Leiga",
      href: "https://leiga.onrender.com/",
      imgSrc: "img/leiga.png",
      photos: [
        "img/leiga.png",
        "img/leiga.png",
        "img/leiga.png",
        "img/leiga.png",
        "img/leiga.png",
      ],
      videoSrc: "img/video3.mp4",
      bgColor: "bg-cyan-500",
      gradient: "from-pink-400 to-cyan-500",
      colSpan: 1,
      rowSpan: 8,
    },
    {
      title: "Gymnast",
      href: "https://gymnast.onrender.com/",
      imgSrc: "img/gymnast.png",
      photos: [
        "img/gymnast.png",
        "img/gymnast.png",
        "img/gymnast.png",
        "img/gymnast.png",
        "img/gymnast.png",
      ],
      videoSrc: "img/video2.mp4",
      bgColor: "bg-red-600",
      gradient: "from-neutral-950 from-40% to-red-700",
      colSpan: 1,
      rowSpan: 8,
    },
    {
      title: "Morph",
      href: "https://morph-digital-ij1w0tbl4-danials-projects-222e55aa.vercel.app",
      imgSrc: "img/morph.png",
      photos: [
        "img/morph.png",
        "img/morph.png",
        "img/morph.png",
        "img/morph.png",
        "img/morph.png",
      ],
      videoSrc: "img/video1.mp4",
      bgColor: "bg-yellow-600",
      gradient: "from-gray-300 from-40% to-amber-700",
      colSpan: 1,
      rowSpan: 8,
    },
    {
      title: "The Venue",
      href: "https://the-venue-ebon.vercel.app/",
      imgSrc: "img/venue.png",
      photos: [
        "img/venue.png",
        "img/venue.png",
        "img/venue.png",
        "img/venue.png",
        "img/venue.png",
      ],
      videoSrc: "img/video7.mp4",
      bgColor: "bg-emerald-900",
      gradient: "from-slate-600 to-black",
      colSpan: 1,
      rowSpan: 8,
    },
    {
      title: "Acme",
      href: "https://acme-online-shop.vercel.app/",
      imgSrc: "img/acme.png",
      photos: [
        "img/acme.png",
        "img/acme.png",
        "img/acme.png",
        "img/acme.png",
        "img/acme.png",
      ],
      videoSrc: "img/video4.mp4",
      bgColor: "bg-green-600",
      gradient: "from-amber-950 to-zinc-400",
      colSpan: 1,
      rowSpan: 8,
    },
    {
      title: "Portfolio",
      href: "https://danial-portfolio-git-orange-danials-projects-222e55aa.vercel.app/",
      imgSrc: "img/orange.png",
      photos: [
        "img/orange.png",
        "img/orange.png",
        "img/orange.png",
        "img/orange.png",
        "img/orange.png",
      ],
      videoSrc: "img/video6.mp4",
      bgColor: "bg-pink-600",
      gradient: "from-orange-600 to-black",
      colSpan: 1,
      rowSpan: 8,
    },
    {
      title: "Wright's Harbor Mansion",
      href: "https://wrights-harbor-mansion.netlify.app/",
      imgSrc: "img/wright.png",
      photos: [
        "img/wright.png",
        "img/wright.png",
        "img/wright.png",
        "img/wright.png",
        "img/wright.png",
      ],
      videoSrc: "img/video8.mp4",
      bgColor: "bg-pink-600",
      gradient: "from-lime-600 to-black",
      colSpan: 2,
      rowSpan: 16,
    },
    {
      title: "Pireal",
      href: "https://pireal.onrender.com/",
      imgSrc: "img/pireal.png",
      photos: [
        "img/pireal.png",
        "img/pireal.png",
        "img/pireal.png",
        "img/pireal.png",
        "img/pireal.png",
      ],
      videoSrc: "img/video5.mp4",
      bgColor: "bg-red-600",
      gradient: "from-white to-teal-500",
      colSpan: 1,
      rowSpan: 8,
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const renderCardContent = (project) => (
    <div
      className={`w-full h-full relative group overflow-hidden flex items-center justify-center ${
        project.bgColor || "bg-neutral-900"
      }`}
    >
      <div className="absolute inset-0 z-10 text-xl h-full text-transparent group-hover:text-gray-50 group-hover:bg-black/65 duration-500 pointer-events-none">
        <div className="flex h-full gap-2 justify-center items-center text-lg duration-300">
          <span className="font-semibold tracking-wide">{project.title}</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openModal(project);
            }}
            className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center border border-white/20 bg-zinc-500/35 backdrop-blur-sm text-gray-200 rounded-full py-1.5 px-4 text-xs scale-90 hover:scale-100 active:scale-95 gap-1.5 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 duration-300 hover:text-white hover:bg-black/50 cursor-pointer"
            aria-label={`See preview for ${project.title}`}
          >
            <span>see preview</span>
            <LuExternalLink className="text-xs" />
          </button>
        </div>
      </div>
      <div className="absolute group-hover:opacity-0 bottom-3 left-3 z-10 md:hidden bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 text-xs text-white/90 flex items-center gap-1 active:scale-95 duration-200 cursor-pointer">
        <span>{project.title}</span>
        <FaCircleArrowRight className="text-[10px] -rotate-45 text-white/70" />
      </div>
      <img
        loading="lazy"
        decoding="async"
        src={project.imgSrc}
        alt={`${project.title} screenshot`}
        className="w-full h-full group-hover:scale-105 duration-700 ease-out object-cover shadow-lg"
      />
    </div>
  );

  const bentoItems = [
    {
      id: "novae",
      title: novaeProject.title,
      colSpan: capSpan(3),
      rowSpan: 16,
      content: renderCardContent(novaeProject),
    },
    ...projects.map((project, index) => ({
      id: project.title.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      title: project.title,
      colSpan: capSpan(project.colSpan ?? 1),
      rowSpan: project.rowSpan,
      content: renderCardContent(project),
    })),
  ];

  return (
    <div className="my-5 xl:mt-20 relative">
      <div id="playground" className="absolute -top-16"></div>
      <div className="py-8">
        <BlurAnimation
          duration={1.2}
          className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center justify-center cap1 myFont text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl"
        >
          <span className="font-thin">PLAY</span>
          <span className="italic font-bold pe-2 relative">
            GROUND
            <div className="absolute top-1 -left-[2.2rem] sm:top-2 sm:-left-[2.6rem] md:top-3 lg:top-5 xl:top-4 xl:-left-[4.6rem] md:-left-[3.2rem] lg:-left-[4.4rem]">
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
        <BlurAnimation className="flex justify-between text-sm font-mono px-5">
          <HyperText text="OTHER PROJECTS" />
          <HyperText text="EXPERIMENTS" />
        </BlurAnimation>
      </div>

      {/* ── MagicBento Grid ── */}
      <div className="p-5">
        {bp !== null ? (
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
        ) : (
          <div style={{ minHeight: "60vh" }} />
        )}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}

export default PlayGround;
