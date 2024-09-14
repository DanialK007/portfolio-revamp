import FadeIn from "./framer-motion/FadeIn";

function Work() {
  return (
    <div className="my-5 xl:mt-20 relative">
      <div id="work" className="absolute -top-16"></div>
      <div className="py-8">
        <div className="flex justify-center cap1 text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl">
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
          <div className="">CASE STUDIES</div>
          <div className="">DESIGN PROCESS</div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-5 gap-3">
        <FadeIn duration="1.2" className="p-2 lg:saturate-100 hover:scale-90 lg:hover:scale-100 hover:saturate-100 duration-500 bg-white/5 rounded-3xl border border-white/10 w-full lg:w-1/3 lg:hover:w-5/12 lg:brightness-50 hover:brightness-100">
          <div className="p-5 rounded-2xl text-lg font-semibold text-gray-200 bg-green-600 flex justify-between">
            <div className="">Next.js</div>
            <div className="font-mono">2023</div>
          </div>
          <div className="bg-green-600 brightness-75 relative h-96 mt-3 rounded-2xl flex items-center justify-center">
            <div className="cap2 absolute w-full h-full duration-300 z-10 flex flex-col justify-between p-5">
              <img
                src="img/bootstrap-logo.png"
                alt=""
                className="w-14 opacity-60 saturate-0 brightness-200"
              />
              <div className="text-xl xl:text-2xl brightness-200 text-gray-50">
                <div className="">CSS Framework</div>
                <div className="italic">Virtual Tour</div>
              </div>
            </div>
            <img
              src="img/Macbook_Air_Mockup_4b.png"
              alt=""
              className="xl:h-2/ rounded-2xl object-contain"
            />
          </div>
        </FadeIn>
        <FadeIn duration="1.5" className="p-2 lg:saturate-100 hover:scale-90 lg:hover:scale-100 hover:saturate-100 duration-500 bg-white/5 rounded-3xl border border-white/10 w-full lg:w-1/3 lg:hover:w-5/12 lg:brightness-50 hover:brightness-100">
          <div className="p-5 rounded-2xl text-lg font-semibold text-gray-200 bg-indigo-600 flex justify-between">
            <div className="">Tailwind</div>
            <div className="font-mono">2024</div>
          </div>
          <div className="bg-indigo-600 brightness-75 relative h-96 mt-3 rounded-2xl flex items-center justify-center">
            <div className="cap2 absolute w-full h-full duration-300 z-10 flex flex-col justify-between p-5">
              <img
                src="img/tailwind-logo.png"
                alt=""
                className="w-12 opacity-60 saturate-0 brightness-200 p-1 object-contain"
              />
              <div className="text-xl xl:text-2xl brightness-200 text-gray-50">
                <div className="">CSS Framework</div>
                <div className="italic">Platform for Developers</div>
              </div>
            </div>
            <img
              src="img/preview-min.png"
              alt=""
              className="h-2/5 xl:h-2/3 rounded-lg"
            />
          </div>
        </FadeIn>
        <FadeIn duration="1.9" className="p-2 lg:saturate-100 hover:scale-90 lg:hover:scale-100 hover:saturate-100 duration-500 bg-white/5 rounded-3xl border border-white/10 w-full lg:w-1/3 lg:hover:w-5/12 lg:brightness-50 hover:brightness-100">
          <div className="p-5 rounded-2xl text-lg font-semibold text-gray-200 bg-sky-600 flex justify-between">
            <div className="">React</div>
            <div className="font-mono">2024</div>
          </div>
          <div className="bg-sky-600 brightness-75 relative h-96 mt-3 rounded-2xl flex items-center justify-center xl:p-5">
            <div className="cap2 absolute w-full h-full duration-300 z-10 flex flex-col justify-between p-5">
              <img
                src="img/react-logo.png"
                alt=""
                className="w-12 opacity-60 saturate-0 brightness-200 p-1"
              />
              <div className="text-xl xl:text-2xl brightness-200 text-gray-50">
                <div className="">Javascript Library</div>
                <div className="italic">For Local Retailers</div>
              </div>
            </div>
            <img
              src="img/Trending Tailwind templates _ Tailwind Awesome - Google Chrome 4_18_2024 5_19_34 PM-min.png"
              alt=""
              className="h-2/5 xl:h-2/3 rounded-lg object-contain"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Work;
