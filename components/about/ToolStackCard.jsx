"use client";
import React from "react";

const tools = [
  { src: "img/htmlLogo.png", title: "HTML", bg: "bg-orange-950", hoverBorder: "hover:border-orange-500 hover:shadow-orange-500" },
  { src: "img/cssLogo.png", title: "CSS", bg: "bg-blue-950", hoverBorder: "hover:border-blue-500 hover:shadow-blue-500" },
  { src: "img/jsLogo.png", title: "Javascript", bg: "bg-yellow-950", hoverBorder: "hover:border-yellow-500 hover:shadow-yellow-500" },
  { src: "img/react-logo.png", title: "React.js", bg: "bg-cyan-950", hoverBorder: "hover:border-cyan-500 hover:shadow-cyan-500" },
  { src: "img/nextjs.svg", title: "Next.js", bg: "bg-slate-500/10", invert: true, hoverBorder: "hover:border-slate-800 border-neutral-400/80 hover:shadow-slate-800" },
  { src: "img/tailwind-logo.png", title: "Tailwind CSS", bg: "bg-cyan-950", hoverBorder: "hover:border-cyan-500 hover:shadow-cyan-500" },
  { src: "img/bootstrap-logo.png", title: "Bootstrap", bg: "bg-purple-950", hoverBorder: "hover:border-purple-500 hover:shadow-purple-500" },
  { src: "img/node.png", title: "Node.js", bg: "bg-green-600/20", hoverBorder: "hover:border-green-500 hover:shadow-green-500" },
  { src: "img/express.png", title: "Express.js", bg: "bg-slate-500/10", invert: true, hoverBorder: "hover:border-slate-800 border-neutral-400/80 hover:shadow-slate-800" },
  { src: "img/mongo.png", title: "MongoDB", bg: "bg-green-500/10", hoverBorder: "hover:border-green-500 hover:shadow-green-500" },
  { src: "img/framer-motion.svg", title: "Framer Motion", bg: "bg-purple-500/20", hoverBorder: "hover:border-purple-400 hover:shadow-purple-400" },
  { src: "img/gsap.svg", title: "GSAP Motion", bg: "bg-green-500/20", hoverBorder: "hover:border-green-500 hover:shadow-green-500" },
  { src: "img/lenis.png", title: "Lenis Scroll", bg: "bg-pink-400/20", hoverBorder: "hover:border-pink-400 hover:shadow-pink-400" },
  { src: "img/phpIcon.png", title: "PHP", bg: "bg-purple-400/20", hoverBorder: "hover:border-purple-400 hover:shadow-purple-400" },
  { src: "img/mysql.png", title: "MySQL", bg: "bg-orange-700/20", hoverBorder: "hover:border-orange-500 hover:shadow-orange-500" },
  { src: "img/pythonLogo.png", title: "Python", bg: "bg-blue-500/30", hoverBorder: "hover:border-blue-500 hover:shadow-blue-500" },
  { src: "img/C++Icon.png", title: "C++", bg: "bg-indigo-950", hoverBorder: "hover:border-indigo-500 hover:shadow-indigo-500" },
  { src: "img/figmaIcon.webp", title: "Figma", bg: "", hoverBorder: "hover:border-pink-500 hover:shadow-pink-500" },
  { src: "img/git.png", title: "Git", bg: "bg-orange-950", hoverBorder: "hover:border-orange-500 hover:shadow-orange-500" },
  { src: "img/github.png", title: "GitHub", bg: "bg-slate-200", invert: true, hoverBorder: "hover:border-slate-800 border-neutral-400/80 hover:shadow-slate-800" },
];

function ToolStackCard({ duration = "1.2" }) {
  return (
    <div className="p-6">
      <div className="font-mono font-semibold pb-2 text-lg">TOOL STACK</div>
      <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 py-2">
        {tools.map((tool, i) => (
          <img
            key={i}
            loading="lazy"
            decoding="async"
            src={tool.src}
            alt={tool.title}
            title={tool.title}
            className={`${tool.bg} ${tool.invert ? "invert" : ""} ${tool.darkInvert ? "brightness-0" : ""} hover:shadow-sm ${tool.hoverBorder} hover:brightness-125 duration-300 w-full block aspect-square object-contain p-2 border border-gray-700 rounded-xl hover:scale-110`}
          />
        ))}
      </div>
    </div>
  );
}

export default ToolStackCard;
