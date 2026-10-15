"use client";
import React from "react";

function BackgroundCard() {
  return (
    <div className="p-6">
      <div className="uppercase font-mono font-semibold text-lg mb-2">
        My Background
      </div>
      <div className="text-sm text-neutral-400 myFont">
        <div className="py-2">
          Hey there! I'm Kaung Khant Kyaw, a passionate individual from
          <span className="underline text-neutral-50 hover:cursor-pointer hover:text-red-500 px-1">
            Mandalay
          </span>
          on a journey through the fascinating world of programming and
          web development.
        </div>
        <div className="py-2">
          In March 2020, after high school, I began programming with my
          mom's help, who bought me a 2.5 lakh laptop. I started with Edx
          courses from Wikipedia, diving into programming concepts and MIT
          scratch game projects.
          <span className="underline text-neutral-50 hover:cursor-pointer hover:text-red-500 px-1">
            I learned C and eventually mastered C++
          </span>
          , gaining valuable insights along the way.
        </div>
        <div className="py-2">
          In 2021, my commitment to learning
          <span className="underline text-neutral-50 hover:cursor-pointer hover:text-red-500 px-1">
            earned me a scholarship
          </span>
          for an online Python Basics Course, further fueling my passion
          for programming. Subsequently, I received
          <span className="underline text-neutral-50 hover:cursor-pointer hover:text-red-500 px-1">
            another scholarship for a Python Intermediate Course
          </span>
          , expanding my skills and determination to excel in programming.
        </div>
        <div className="py-2">
          In 2022, I delved into web development, sparking a passion for
          creating engaging websites. By 2023, at MIBA University, I honed
          my CSS skills and mastered frameworks like
          <span className="underline text-neutral-50 hover:cursor-pointer hover:text-red-500 px-1">
            Tailwind
          </span>
          and
          <span className="underline text-neutral-50 hover:cursor-pointer hover:text-red-500 px-1">
            Bootstrap
          </span>
          . Completing
          <span className="underline text-neutral-50 hover:cursor-pointer hover:text-red-500 px-1">
            PHP
          </span>
          projects with
          <span className="underline text-neutral-50 hover:cursor-pointer hover:text-red-500 px-1">
            MySQL
          </span>
          integration, I showcased my ability to build dynamic web apps.
          Utilizing free hosting, I independently developed and deployed
          numerous websites, showcasing proficiency across the entire web
          development process. Now,
          <span className="underline text-neutral-50 hover:cursor-pointer hover:text-red-500 px-1">
            I'm ready
          </span>
          to tackle any challenge with confidence.
        </div>
      </div>
    </div>
  );
}

export default BackgroundCard;
