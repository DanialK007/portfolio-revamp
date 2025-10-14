"use client";
import FadeIn from "./framer-motion/FadeIn";
import { LuExternalLink } from "react-icons/lu";
import HyperText from "./ui/hyper-text";
import ProjectModal from "./ProjectModal"; // Import the modal component
import { useState } from "react";
import { BlurAnimation } from "./ui/BlurAnimation";
import { FaCircleArrowRight } from "react-icons/fa6";
import Magnetic from "./ui/Magnetic";

function PlayGround() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
      grid: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2",
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
      grid: "col-span-1 row-span-1",
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
      grid: "col-span-1 row-span-1",
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
      grid: "col-span-1 row-span-1",
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
      grid: "col-span-1 row-span-1",
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
      grid: "col-span-1 row-span-1",
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
      grid: "col-span-1 row-span-1",
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
      grid: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2",
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
      grid: "col-span-2 row-span-1 lg:col-span-1",
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

  return (
    <div className="my-5 xl:mt-20 relative">
      <div id="playground" className="absolute -top-16"></div>
      <div className="py-8">
        <BlurAnimation
          duration={1.2}
          className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center justify-center cap1 myFont text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl"
        >
          <span className="font-thin">PLAY</span>
          <span className="italic font-bold pe-2 relative">
            GROUND
            <div className="absolute top-1 -left-[2.2rem] sm:top-2 sm:-left-[2.6rem] md:top-3 lg:top-5 xl:top-4 xl:-left-[4.6rem] md:-left-[3.2rem] lg:-left-[4.4rem]">
              <Magnetic>
                <div className="pt-3 px-3 rounded-full">
                  <img
                    src="img/cube.svg"
                    className="hover:invert duration-500 hover:cursor-pointer w-6 sm:w-8 md:w-10 lg:w-14 xl:w-16 animate-spin"
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
      <div className="grid grid-cols-2 p-5 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-5">
        {projects.map((project, index) => (
          <BlurAnimation
            duration={1.6}
            delay={0}
            key={index}
            className={`group bg-white/5 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-white/5 lg:saturate-100 hover:saturate-100 brightness-90 lg:brightness-50 hover:brightness-100 duration-500 ${project.grid}`}
            childClass="size-full"
          >
            <FadeIn
              duration="1.9"
              className={`${project.bgColor} h-full relative rounded-2xl flex items-center justify-center`}
            >
              <div
                className={`absolute hidden top-0 left-0 w-full h-full flexx items-center justify-center opacity-0 hover:opacity-100 duration-500 bg-gradient-to-br p-10 ${project.gradient}`}
              >
                <video
                  src={project.videoSrc}
                  className="rounded-[10px] mb-4"
                  muted
                  loop
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                ></video>
              </div>
              <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end px-5 p-2 md:p-5 bg-gradient-to-t from-black/50 w-full">
                <div className="text-xl brightness-200 text-gray-50">
                  <div className="flex gap-2 items-center text-sm group-hover:text-base duration-300">
                    {project.title}
                    <button
                      onClick={() => openModal(project)} // Open the modal instead of navigating
                      className="flex items-center justify-center md:bg-zinc-500/35 backdrop-blur-sm text-black rounded-full md:py-1 md:px-2 scale-90 hover:scale-95 gap-1 lg:opacity-0 group-hover:opacity-100 hover:text-white hover:bg-black/20 duration-300"
                    >
                      <div className="text-xs hidden md:block">see preview</div>
                      <FaCircleArrowRight className="-ms-1 md:hidden text-white -rotate-45" />
                      <LuExternalLink className="hidden md:block group-hover:opacity-100 opacity-0 text-xs" />
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => openModal(project)}
                className="absolute z-20 inset-0 md:hidden"
              ></button>
              <img
                src={project.imgSrc}
                alt={`${project.title} screenshot`}
                className="w-full h-full group-hover:scale-110 duration-2000 ease-out object-cover shadow-lg"
              />
            </FadeIn>
          </BlurAnimation>
        ))}
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
