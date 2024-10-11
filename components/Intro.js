import FadeIn from "./framer-motion/FadeIn";

function Intro() {
  return (
    <div id="intro">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <FadeIn duration="1.2" className="col-span-1 lg:p-8">
          <div className="text-4xl xl:text-5xl text-white/40 p-5 sm:pt-10 lg:pt-16">
            Junior
            <span className="text-white"> Frontend Developer </span>dedicated to
            the <span className="text-white"> craft</span> of creating
            <span className="text-white"> 0➝1</span> digital experiences till
            the last <span className="text-white"> detail</span>.
          </div>
          <div className="grid grid-cols-2 py-4">
            <div className="p-5 text-white/40 text-sm">
              I've done multiple frontend projects with
              <span className="text-white"> High Quality Contents</span>.
            </div>
            <div className="p-5 text-white/40 text-sm">
              Currently, learning at
              <span className="text-white"> MIBA university</span>.
            </div>
          </div>
        </FadeIn>
        <div
          className="col-span-1 lg:flex items-center justify-center p-5 lg:p-10"
        >
          <div className="grid grid-cols-5 grid-rows-5 gap-3 lg:gap-5 w-full aspect-square group">
            <FadeIn duration="0.8" className="col-span-1 row-span-1 bg-neutral-900 hover:scale-105 duration-300 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]">
              <img src="img/grid1.png" className="w-full h-full" />
            </FadeIn>
            <FadeIn duration="1" className="col-span-1 row-span-1 bg-neutral-900 hover:scale-105 duration-300 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]">
              <img src="img/grid2.png" className="w-full h-full" />
            </FadeIn>
            <FadeIn duration="1.2" className="col-span-1 row-span-1 bg-neutral-900 hover:scale-105 duration-300 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]">
              <img src="img/grid3.png" className="w-full h-full" />
            </FadeIn>
            <FadeIn duration="1.5" className="col-span-2 row-span-2 bg-neutral-900 hover:scale-105 duration-300 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]">
              <img src="img/grid4.png" className="w-full h-full" />
            </FadeIn>
            <FadeIn duration="1.9" className="col-span-3 row-span-2 bg-neutral-900 hover:scale-105 duration-300 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]">
              <img src="img/grid5.png" className="w-full h-full" />
            </FadeIn>
            <FadeIn duration="2.1" className="col-span-2 row-span-1 bg-neutral-900 hover:scale-105 duration-300 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]">
              <img src="img/grid6.png" className="w-full h-full" />
            </FadeIn>
            <FadeIn duration="2.2" className="col-span-2 row-span-2 bg-neutral-900 hover:scale-105 duration-300 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]">
              <img src="img/grid7.png" className="w-full h-full" />
            </FadeIn>
            <FadeIn duration="2.5" className="col-span-1 row-span-2 bg-neutral-900 hover:scale-105 duration-300 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]">
              <img src="img/grid8.png" className="w-full h-full" />
            </FadeIn>
            <FadeIn duration="2.9" className="col-span-2 row-span-2 bg-neutral-900 hover:scale-105 duration-300 brightness-75 hover:brightness-100 overflow-hidden group-hover:saturate-0 group-hover:blur-sm hover:saturate-100 saturate-100 blur-0 hover:blur-0 rounded-[14px] lg:rounded-[16px]">
              <img src="img/grid9.png" className="w-full h-full" />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
