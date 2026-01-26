import FadeIn from "./framer-motion/FadeIn";
import { BlurAnimation } from "./ui/BlurAnimation";
import HyperText from "./ui/hyper-text";
import { RainbowButton } from "./ui/rainbow-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = [
  { text: "Junior" },
  { text: "Frontend", className: "text-white" },
  { text: "Developer", className: "text-white" },
  { text: "dedicated" },
  { text: "to" },
  { text: "the" },
  { text: "craft", className: "text-white" },
  { text: "of" },
  { text: "creating" },
  { text: "0➝1", className: "text-white" },
  { text: "digital" },
  { text: "experiences" },
  { text: "till" },
  { text: "the" },
  { text: "last" },
  { text: "detail.", className: "text-white" },
];

const words2 = [
  { text: "I've" },
  { text: "done" },
  { text: "multiple" },
  { text: "frontend" },
  { text: "projects" },
  { text: "with" },
  { text: "High", className: "text-white" },
  { text: "Quality", className: "text-white" },
  { text: "Contents", className: "text-white" },
];

const words3 = [
  { text: "Currently," },
  { text: "Working" },
  { text: "as" },
  { text: "ICT", className: "text-white" },
  { text: "Trainer", className: "text-white" },
  { text: "at" },
  {
    text: "Logiscool",
    className: "text-white cursor-pointer hover:text-red-500 underline",
  },
];

function Intro() {
  return (
    <div id="intro" className="mt-5">
      <BlurAnimation
        duration={1.5}
        delay={2}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        <FadeIn duration="1.2" className="col-span-1 lg:p-8">
          {/* <div className="text-4xl xl:text-5xl text-white/60 p-5 sm:pt-10 lg:pt-16">
            Junior
            <span className="text-white"> Frontend Developer </span>dedicated to
            the <span className="text-white"> craft</span> of creating
            <span className="text-white"> 0➝1</span> digital experiences till
            the last <span className="text-white"> detail</span>.
          </div> */}
          <TextGenerateEffect
            className="text-4xl xl:text-5xl text-white/60 p-5 sm:pt-10 lg:pt-16"
            words={words}
          />
          <div className="grid grid-cols-2 py-4">
            <TextGenerateEffect
              wait={1}
              words={words2}
              className="p-5 text-white/60 text-sm"
            ></TextGenerateEffect>
            <TextGenerateEffect
              wait={1}
              words={words3}
              className="p-5 text-white/60 text-sm"
            ></TextGenerateEffect>
          </div>
          <div className="pt-3 px-2">
            <RainbowButton
              aria-label="Download my resume as PDF"
              href="https://danial-k-english-u7kb6py.gamma.site/"
              download
              className="group w-full overflow-hidden lg:text-lg p-3 gap-2 hover:border-red-500 border-white/20 border-collapse rounded-full duration-[1200ms]"
              // className="text-xs font-semibold px-3 py-1 items-center flex gap-2 rounded-full backdrop-blur-md border border-white/5 hover:border-red-500 hover:shadow-md hover:shadow-red-500/40 hover:bg-black/20 bg-white/20 duration-300"
            >
              Enter English Instructor Profile
            </RainbowButton>
          </div>
        </FadeIn>
        <div className="col-span-1 lg:flex items-center justify-center p-5 lg:p-10">
          <div className="grid grid-cols-5 grid-rows-5 gap-3 lg:gap-5 w-full aspect-square group">
            <div
              // duration="0.8"
              className="col-span-1 row-span-1 bg-neutral-900 hover:scale-105 duration-700 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]"
            >
              <img alt="image" src="img/grid1.png" className="w-full h-full" />
            </div>
            <div
              // duration="1"
              className="col-span-1 row-span-1 bg-neutral-900 hover:scale-105 duration-700 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]"
            >
              <img alt="image" src="img/grid2.png" className="w-full h-full" />
            </div>
            <div
              // duration="1.2"
              className="col-span-1 row-span-1 bg-neutral-900 hover:scale-105 duration-700 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]"
            >
              <img alt="image" src="img/grid3.png" className="w-full h-full" />
            </div>
            <div
              // duration="1.4"
              className="col-span-2 row-span-2 bg-neutral-900 hover:scale-105 duration-700 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]"
            >
              <img alt="image" src="img/grid4.png" className="w-full h-full" />
            </div>
            <div
              // duration="1.8"
              className="col-span-3 row-span-2 bg-neutral-900 hover:scale-105 duration-700 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]"
            >
              <img alt="image" src="img/grid5.png" className="w-full h-full" />
            </div>
            <div
              // duration="2.0"
              className="col-span-2 row-span-1 bg-neutral-900 hover:scale-105 duration-700 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]"
            >
              <img alt="image" src="img/grid6.png" className="w-full h-full" />
            </div>
            <div
              // duration="2.2"
              className="col-span-2 row-span-2 bg-neutral-900 hover:scale-105 duration-700 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]"
            >
              <img alt="image" src="img/grid7.png" className="w-full h-full" />
            </div>
            <div
              // duration="2.4"
              className="col-span-1 row-span-2 bg-neutral-900 hover:scale-105 duration-700 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]"
            >
              <img alt="image" src="img/grid8.png" className="w-full h-full" />
            </div>
            <div
              // duration="2.6"
              className="col-span-2 row-span-2 bg-neutral-900 hover:scale-105 duration-700 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]"
            >
              <img alt="image" src="img/grid9.png" className="w-full h-full" />
            </div>
          </div>
        </div>
      </BlurAnimation>
    </div>
  );
}

export default Intro;
