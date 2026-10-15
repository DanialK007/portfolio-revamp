"use client";
import React from "react";
import BlurFadeIn from "../framer-motion/BlurFadeIn";

const experienceData = [
  {
    period: "2020-2021",
    title: "Started programming journey",
    detail: "- Learned C, C++, MIT scratch",
  },
  {
    period: "2021-2022",
    title: "Got scholarship twice from Coding-Night School",
    detail: "- Learned Python : basic to intermediate",
  },
  {
    period: "2022-2023",
    title: "Entered Web Development Field",
    detail: "- Learned HTML, CSS",
  },
  {
    period: "2023-2024",
    title: "Joined MIBA university",
    detail: "- Learned Frontend Development",
  },
  {
    period: "2024 - Now",
    title: "Previously claimed scholarship at UoPeople",
    detail: "- Experted in HTML, CSS, Javascript, Bootstrap, Tailwind, PHP, MySQL, Figma\n- Learning NodeJS, React, Jquery, Laravel",
  },
];

function ExperienceCard({ duration = "1.2" }) {
  return (
    <BlurFadeIn
      duration={1.9}
      className="p-6 relative bg-[#0a0a0a] rounded-2xl border border-white/10"
    >
      <div className="uppercase font-mono font-semibold text-lg mb-2">
        Experience
      </div>
      {experienceData.map((item, i) => (
        <div key={i} className="grid grid-cols-5">
          <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
            {item.period}
          </div>
          <div className="col-span-3 py-2 text-sm">
            <div className="font-semibold pb-1">{item.title}</div>
            {item.detail.split("\n").map((line, j) => (
              <div key={j} className="text-white/60">
                {line}
              </div>
            ))}
          </div>
        </div>
      ))}
    </BlurFadeIn>
  );
}

export default ExperienceCard;
