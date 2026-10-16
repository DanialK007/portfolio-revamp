"use client";
import React from "react";
import { RainbowButton } from "../ui/rainbow-button";

function BioCard() {
  return (
    <div className="p-6 text-2xl">
      <p className="text-neutral-200 leading-relaxed mb-4 text-xl">
        Frontend Developer with 3 years of experience, focused on creating
        functional and user-centered digital products with visually stunning
        designs.
      </p>
      <div className="pt-3 px-2 flex justify-end">
        <RainbowButton
          aria-label="Download my resume as PDF"
          href="https://danial-k-english-u7kb6py.gamma.site/"
          download
          className="group w-full overflow-hidden text-sm p-2 gap-2 hover:border-red-500 border-white/20 border-collapse rounded-full duration-[1200ms]"
        >
          Enter English Instructor Profile
        </RainbowButton>
      </div>
      <div className="mx-auto flex justify-between py-4 pe-2">
        <div className="flex gap-2 items-center">
          <a
            target="_blank"
            aria-label="This is a link."
            href="https://www.facebook.com/profile.php?id=100087994523929&mibextid=LQQJ4d"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/10 hover:border-blue-500 shadow-sm hover:shadow-blue-500"
          >
            <img
              loading="lazy"
              decoding="async"
              src="img/facebookIcon.svg"
              alt=""
              className="w-3"
            />
          </a>
          <a
            target="_blank"
            aria-label="This is a link."
            href="http://linkedin.com/in/kaung-khant-kyaw-688141212"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/10 hover:border-green-500 shadow-sm hover:shadow-green-500"
          >
            <img
              loading="lazy"
              decoding="async"
              src="img/linkedin.svg"
              alt=""
              className="w-3"
            />
          </a>
          <a
            target="_blank"
            aria-label="This is a link."
            href="mailto:kaungkhantkyawdk@gmail.com"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/10 hover:border-indigo-500 shadow-sm hover:shadow-indigo-500"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-lg"
              height="14px"
              width="14px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            aria-label="This is a link."
            href="https://t.me/DanialK007"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/10 hover:border-blue-500 shadow-sm hover:shadow-blue-500"
          >
            <img
              loading="lazy"
              decoding="async"
              src="img/telegram.png"
              alt=""
              className="w-3"
            />
          </a>
        </div>
        <RainbowButton
          aria-label="Download my resume as PDF"
          href="KaungKhantKyaw_CV.pdf"
          download
          className="text-xs px-3 py-2 gap-2 hover:border-red-500 border-white/20 bg-white/10 rounded-full duration-[1200ms]"
        >
          <img
            loading="lazy"
            decoding="async"
            src="img/download-icon.svg"
            alt="Download icon"
            className="h-4"
          />
          Resume
        </RainbowButton>
      </div>
    </div>
  );
}

export default BioCard;
