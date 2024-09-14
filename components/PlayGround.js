import FadeIn from "./framer-motion/FadeIn";

function PlayGround() {
  return (
    <div className="my-5 xl:mt-20 relative">
      <div id="playground" className="absolute -top-16"></div>
      <div className="py-8">
        <div className="flex justify-center cap1 text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl">
          <span className="font-thin" id="playG">
            PLAY
          </span>
          <img
            src="img/cube.svg"
            className="hover:invert duration-500 hover:cursor-pointer w-4 md:w-10 xl:w-16 animate-spin"
            alt=""
          />
          <span className="italic font-bold pe-2" id="pGround">
            GROUND
          </span>
        </div>
        <div className="flex justify-between text-sm font-mono px-5">
          <div className="">OTHER PROJECTS</div>
          <div className="">EXPERIMENTS</div>
        </div>
      </div>
      <div className="grid grid-cols-1 p-5 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <a
          href="https://morph-digital-ij1w0tbl4-danials-projects-222e55aa.vercel.app"
          className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500"
        >
          <FadeIn duration="1.2" className="bg-yellow-600 brightness-75 relative h-72 rounded-2xl flex items-center justify-center">
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="text-sm">Morph</div>
              </div>
            </div>
            <img
              src="img/morph.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </a>
        <a
          href="https://gymnast.onrender.com/"
          className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500"
        >
          <FadeIn duration="1.5" className="bg-indigo-600 brightness-75 relative h-72 rounded-2xl flex items-center justify-center">
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="text-sm">Gymnast</div>
              </div>
            </div>
            <img
              src="img/gymnast.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </a>
        <a
          href="https://leiga.onrender.com/"
          className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500"
        >
          <FadeIn duration="1.9" className="bg-purple-600 brightness-75 relative h-72 rounded-2xl flex items-center justify-center">
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="text-sm">Leiga</div>
              </div>
            </div>
            <img
              src="img/leiga.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </a>
        <a
          href="https://acme-online-shop.vercel.app/"
          className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500"
        >
          <FadeIn duration="1.2" className="bg-green-600 brightness-75 relative h-72 rounded-2xl flex items-center justify-center">
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="text-sm">Acme</div>
              </div>
            </div>
            <img
              src="img/acme.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </a>
        <a
          href="https://pireal.onrender.com/"
          className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500"
        >
          <FadeIn duration="1.5" className="bg-red-600 brightness-75 relative h-72 rounded-2xl flex items-center justify-center">
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="text-sm">Pireal</div>
              </div>
            </div>
            <img
              src="img/pireal.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </a>
        <a
          href="https://santonio.vercel.app/"
          className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500"
        >
          <FadeIn duration="1.9" className="bg-pink-600 brightness-75 relative h-72 rounded-2xl flex items-center justify-center">
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="text-sm">Portfolio</div>
              </div>
            </div>
            <img
              src="img/orange.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </a>
      </div>
    </div>
  );
}

export default PlayGround;
