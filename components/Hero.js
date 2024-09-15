import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <div
      id="top"
      className="h-screen overflow-hidden relative flex flex-col items-center justify-center mb-5 lg:mb-10"
    >
      <div className="absolute -top-10 -right-20 md:right-20 w-96 h-32 -rotate-45 rounded-[100%] bg-gradient-to-r blur-3xl from-blue-500 to-red-500 bl ur-2xl"></div>
      <div className="absolute bottom-44 -left-80 md:-left-20 w-[600px] h-20 rotate-12 rounded-[100%] bg-gradient-to-r blur-3xl from-cyan-500 to-indigo-500 bl ur-2xl"></div>
      <div className="text-3xl md:text-6xl text-white/60 lg:text-7xl xl:text-8xl font-semibold uppercase">
        Hi, <spanc className="text-white"> Welcome </spanc> home
      </div>
      <div className="text-3xl md:text-6xl text-white/60 lg:text-7xl xl:text-8xl font-semibold uppercase flex">
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
      </div>
      <a
        href="#scroll"
        id="scroll"
        className="flex xl:ms-12 flex-col absolute bottom-0 left-0 items-center w-24 p-4 mt-10 animate-pulse"
      >
        <div className="font-mono">SCROLL</div>
        <div className="animate-bounce p-2 pt-3">
          <ArrowDown />
        </div>
      </a>
    </div>
  );
}

export default Hero;
