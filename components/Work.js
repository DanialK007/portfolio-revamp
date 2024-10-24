import FadeIn from "./framer-motion/FadeIn";
import HyperText from "./ui/hyper-text";

function Work() {
  return (
    <div className="my-5 xl:mt-20 relative">
      <div id="work" className="absolute -top-16"></div>
      <div className="py-8">
        <div className="flex justify-center cap1 myFont text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl">
          <span className="font-thin" id="selectW">
            SELECT
          </span>
          <img
            src="img/cube.svg"
            className="hover:invert duration-500 hover:cursor-pointer w-4 md:w-10 xl:w-16 animate-spin"
            alt=""
          />
          <span className="italic font-bold pe-2" id="sWork">
            WORK
          </span>
        </div>
        <div className="flex justify-between text-sm font-mono px-5">
        <HyperText text="CASE STUDIES"/>
        <HyperText text="DESIGN PROCESS"/>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-5 gap-3">
        <FadeIn duration="1.2" className="p-2 hover:scale-95 lg:hover:scale-100 duration-500 bg-[#090909] rounded-3xl border border-white/10 w-full lg:w-1/3 lg:hover:w-5/12 lg:brightness-[0.6] hover:brightness-100">
          <div className="p-5 rounded-2xl text-lg font-semibold text-gray-200 bg-gradient-to-br from-black from-30% to-[#020f60c7] flex justify-between">
            <div className="">Next.js</div>
            <div className="font-mono">2024</div>
          </div>
          <div className="bg-neutral-800 brightness-75 relative h-96 mt-3 rounded-[16px] overflow-hidden flex items-center justify-center">
            <div className="cap2 absolute w-full bg-gradient-to-t from-black to-25% h-full duration-300 z-10 flex flex-col justify-between p-5">
              <img
                src="img/nextjs.svg"
                alt=""
                className="w-10 invert opacity-60 saturate-0 brightness-200"
              />
              <div className="text-xl xl:text-2xl brightness-200 text-gray-50">
                <div className="">React Framework</div>
                <div className="italic text-lg">For Building Fast, Scalable Websites</div>
              </div>
            </div>
            <img
              src="img/mockup3.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn duration="1.5" className="p-2 hover:scale-95 lg:hover:scale-100 duration-500 bg-[#090909] rounded-3xl border border-white/10 w-full lg:w-1/3 lg:hover:w-5/12 lg:brightness-[0.6] hover:brightness-100">
          <div className="p-5 rounded-2xl text-lg font-semibold text-gray-200 bg-gradient-to-br from-blue-950/20 to-[#1b2751] flex justify-between">
            <div className="">Tailwind</div>
            <div className="font-mono">2023</div>
          </div>
          <div className="bg-blue-950/50 brightness-75 relative h-96 mt-3 rounded-[16px] overflow-hidden flex items-center justify-center">
            <div className="cap2 absolute w-full h-full duration-300 z-10 flex flex-col justify-between p-5">
              <img
                src="img/tailwind-logo.png"
                alt=""
                className="w-12 opacity-60 saturate-0 brightness-200 p-1 object-contain"
              />
              <div className="text-xl xl:text-2xl brightness-200 text-gray-50">
                <div className="">CSS Framework</div>
                <div className="italic text-lg">Utility-First CSS UI Development</div>
              </div>
            </div>
            <img
              src="img/mockup.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn duration="1.9" className="p-2 hover:scale-95 lg:hover:scale-100 duration-500 bg-[#090909] rounded-3xl border border-white/10 w-full lg:w-1/3 lg:hover:w-5/12 lg:brightness-[0.6] hover:brightness-100">
          <div className="p-5 rounded-2xl text-lg font-semibold text-gray-200 bg-neutral-900 flex justify-between">
            <div className="">React</div>
            <div className="font-mono">2024</div>
          </div>
          <div className="bg-neutral-900 brightness-75 relative h-96 mt-3 rounded-[16px] overflow-hidden flex items-center justify-center">
            <div className="cap2 absolute w-full h-full duration-300 z-10 flex flex-col justify-between p-5">
              <img
                src="img/react-logo.png"
                alt=""
                className="w-12 opacity-100 saturate-0 brightness-0 invert p-1"
              />
              <div className="text-xl xl:text-2xl brightness-200 text-gray-50">
                <div className="">Javascript Library</div>
                <div className="italic text-lg">For Building User Interfaces</div>
              </div>
            </div>
            <img
              src="img/mockup2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Work;
