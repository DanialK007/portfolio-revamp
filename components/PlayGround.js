"use client";
import FadeIn from "./framer-motion/FadeIn";
import { LuExternalLink } from "react-icons/lu";

function PlayGround() {
  return (
    <div className="my-5 xl:mt-20 relative">
      <div id="playground" className="absolute -top-16"></div>
      <div className="py-8">
        <div className="flex justify-center cap1 myFont text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl">
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
        <div className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500">
          <FadeIn
            duration="1.2"
            className="bg-yellow-600 brightness-75 relative h-72 rounded-2xl flex items-center justify-center"
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300 bg-gradient-to-br from-gray-300 from-40% to-amber-700 p-10">
              <video
                src="img/video1.mp4"
                className="rounded-[10px] mb-4"
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              ></video>
            </div>
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5 bg -gradient-to-t from-30% from-black w-full">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="flex gap-2 items-center text-sm group-hover:text-base duration-300 group-hover:">
                  Morph
                  <a aria-label="This is a link." 
                    href="https://morph-digital-ij1w0tbl4-danials-projects-222e55aa.vercel.app"
                    target="_blank"
                    className="flex items-center justify-center bg-zinc-500/35 backdrop-blur-sm text-black rounded-full py-1 px-2 scale-90 hover:scale-95 gap-1 opacity-0 group-hover:opacity-100 hover:text-white hover:bg-black/20 duration-300"
                  >
                    <div className="text-xs">see preview</div>
                    <LuExternalLink className="group-hover:opacity-100 opacity-0 text-xs" />
                  </a>
                </div>
              </div>
            </div>
            <img
              src="img/morph.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </div>
        <div className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500">
          <FadeIn
            duration="1.5"
            className="bg-red-600 brightness-75 relative h-72 rounded-2xl flex items-center justify-center"
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300 bg-gradient-to-br from-neutral-950 from-40% to-red-700 p-10">
              <video
                src="img/video2.mp4"
                className="rounded-[10px] mb-4"
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              ></video>
            </div>
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5 bg -gradient-to-t from-30% from-black w-full">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="flex gap-2 items-center text-sm group-hover:text-base duration-300 group-hover:">
                  Gymnast
                  <a aria-label="This is a link." 
                    href="https://gymnast.onrender.com/"
                    target="_blank"
                    className="flex items-center justify-center bg-zinc-500/35 backdrop-blur-sm text-black rounded-full py-1 px-2 scale-90 hover:scale-95 gap-1 opacity-0 group-hover:opacity-100 hover:text-white hover:bg-black/20 duration-300"
                  >
                    <div className="text-xs">see preview</div>
                    <LuExternalLink className="group-hover:opacity-100 opacity-0 text-xs" />
                  </a>
                </div>
              </div>
            </div>
            <img
              src="img/gymnast.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </div>
        <div className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500">
          <FadeIn
            duration="1.9"
            className="bg-cyan-500 brightness-75 relative h-72 rounded-2xl flex items-center justify-center"
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300 bg-gradient-to-br from-pink-400 to-cyan-500 p-10">
              <video
                src="img/video3.mp4"
                className="rounded-[10px] mb-4"
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              ></video>
            </div>
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5 bg -gradient-to-t from-30% from-black w-full">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="flex gap-2 items-center text-sm group-hover:text-base duration-300 group-hover:">
                  Leiga
                  <a aria-label="This is a link." 
                    href="https://leiga.onrender.com/"
                    target="_blank"
                    className="flex items-center justify-center bg-zinc-500/35 backdrop-blur-sm text-black rounded-full py-1 px-2 scale-90 hover:scale-95 gap-1 opacity-0 group-hover:opacity-100 hover:text-white hover:bg-black/20 duration-300"
                  >
                    <div className="text-xs">see preview</div>
                    <LuExternalLink className="group-hover:opacity-100 opacity-0 text-xs" />
                  </a>
                </div>
              </div>
            </div>
            <img
              src="img/leiga.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </div>
        <div className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500">
          <FadeIn
            duration="1.2"
            className="bg-green-600 brightness-75 relative h-72 rounded-2xl flex items-center justify-center"
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300 bg-gradient-to-br from-amber-950 to-zinc-400 p-10">
              <video
                src="img/video4.mp4"
                className="rounded-[10px] mb-4"
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              ></video>
            </div>
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5 bg -gradient-to-t from-30% from-black w-full">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="flex gap-2 items-center text-sm group-hover:text-base duration-300 group-hover:">
                  Acme
                  <a aria-label="This is a link." 
                    href="https://acme-online-shop.vercel.app/"
                    target="_blank"
                    className="flex items-center justify-center bg-zinc-500/35 backdrop-blur-sm text-black rounded-full py-1 px-2 scale-90 hover:scale-95 gap-1 opacity-0 group-hover:opacity-100 hover:text-white hover:bg-black/20 duration-300"
                  >
                    <div className="text-xs">see preview</div>
                    <LuExternalLink className="group-hover:opacity-100 opacity-0 text-xs" />
                  </a>
                </div>
              </div>
            </div>
            <img
              src="img/acme.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </div>
        <div className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500">
          <FadeIn
            duration="1.5"
            className="bg-red-600 brightness-75 relative h-72 rounded-2xl flex items-center justify-center"
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300 bg-gradient-to-br from-white to-teal-500 p-10">
              <video
                src="img/video5.mp4"
                className="rounded-[10px] mb-4"
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              ></video>
            </div>
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5 bg -gradient-to-t from-30% from-black w-full">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="flex gap-2 items-center text-sm group-hover:text-base duration-300 group-hover:">
                  Pireal
                  <a aria-label="This is a link." 
                    href="https://pireal.onrender.com/"
                    target="_blank"
                    className="flex items-center justify-center bg-zinc-500/35 backdrop-blur-sm text-black rounded-full py-1 px-2 scale-90 hover:scale-95 gap-1 opacity-0 group-hover:opacity-100 hover:text-white hover:bg-black/20 duration-300"
                  >
                    <div className="text-xs">see preview</div>
                    <LuExternalLink className="group-hover:opacity-100 opacity-0 text-xs" />
                  </a>
                </div>
              </div>
            </div>
            <img
              src="img/pireal.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </div>
        <div className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 lg:saturate-100 hover:saturate-100 brightness-50 hover:brightness-100 duration-500">
          <FadeIn
            duration="1.9"
            className="bg-pink-600 brightness-75 relative h-72 rounded-2xl flex items-center justify-center"
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300 bg-gradient-to-br from-orange-600 to-black p-10">
              <video
                src="img/video6.mp4"
                className="rounded-[10px] mb-4"
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              ></video>
            </div>
            <div className="absolute left-0 bottom-0 z-10 flex flex-col justify-end p-5 bg -gradient-to-t from-30% from-black w-full">
              <div className="text-xl brightness-200 text-gray-50">
                <div className="flex gap-2 items-center text-sm group-hover:text-base duration-300 group-hover:">
                  Portfolio
                  <a aria-label="This is a link." 
                    href="https://santonio.vercel.app/"
                    target="_blank"
                    className="flex items-center justify-center bg-zinc-500/35 backdrop-blur-sm text-black rounded-full py-1 px-2 scale-90 hover:scale-95 gap-1 opacity-0 group-hover:opacity-100 hover:text-white hover:bg-black/20 duration-300"
                  >
                    <div className="text-xs">see preview</div>
                    <LuExternalLink className="group-hover:opacity-100 opacity-0 text-xs" />
                  </a>
                </div>
              </div>
            </div>
            <img
              src="img/orange.png"
              alt=""
              className="w-full h-full hover:scale-110 duration-700 object-cover rounded-lg shadow-lg"
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default PlayGround;
