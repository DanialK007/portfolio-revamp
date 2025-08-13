import Carousel from "./Carousel";
import FadeIn from "./framer-motion/FadeIn";
import { RainbowButton } from "./ui/rainbow-button";
import HyperText from "./ui/hyper-text";
import { TextBlur } from "./ui/text-blur";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BlurAnimation } from "./ui/BlurAnimation";

const words = [
  { text: "Frontend" },
  { text: "Developer" },
  { text: "with" },
  { text: "2" },
  { text: "years" },
  { text: "of" },
  { text: "experience," },
  { text: "focused" },
  { text: "on" },
  { text: "creating" },
  { text: "functional" },
  { text: "and" },
  { text: "user-centered" },
  { text: "digital" },
  { text: "products" },
  { text: "with" },
  { text: "visually" },
  { text: "stunning" },
  { text: "designs." },
];

function About() {
  return (
    <div className="my-5 xl:mt-20 relative">
      <div id="about" className="absolute -top-16"></div>
      <div className="py-8">
        <BlurAnimation duration={1.2} className="flex items-center justify-center pb-2 myFont text-6xl md:text-8xl xl:text-10xl">
          <span className="font-thin" id="aboutM">
            ABOUT
          </span>
          <img
            src="img/cube.svg"
            className="hover:invert duration-500 hover:cursor-pointer w-4 md:w-10 xl:w-16 animate-spin"
            alt=""
          />
          <span className="italic font-bold pe-2" id="Ame">
            ME
          </span>
        </BlurAnimation>
        <BlurAnimation className="flex justify-between text-sm font-mono px-5">
          <HyperText text="BASED IN MANDALAY" />
          <HyperText text="DETAIL-ORIENTED" />
          <HyperText text="CURIOUS" />
        </BlurAnimation>
      </div>
      {/*  small device */}
      <div className="grid grid-cols-1 gap-5 p-5 md:hidden">
        <FadeIn
          duration="1.2"
          className="p-6 pb-0 bg-[#0a0a0a] rounded-2xl text-2xl border border-white/5"
        >
          <TextBlur
            words={`Frontend Developer with 2 years of experience, focused on
            creating functional and user-centered digital products with visually
            stunning designs.`}
            className=""
          ></TextBlur>
          <div className="mx-auto flex justify-between py-4 pe-2">
            <div className="flex gap-2 items-center">
              <a target="_blank"
                aria-label="This is a link."
                href="https://www.facebook.com/profile.php?id=100087994523929&mibextid=LQQJ4d"
                className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 bg-white/10 hover:border-blue-500 shadow-sm hover:shadow-blue-500"
              >
                <img src="img/facebookIcon.svg" alt="" className="w-3" />
              </a>
              <a target="_blank"
                aria-label="This is a link."
                href="http://linkedin.com/in/kaung-khant-kyaw-688141212"
                className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 bg-white/10 hover:border-green-500 shadow-sm hover:shadow-green-500"
              >
                <img src="img/linkedin.svg" alt="" className="w-3" />
              </a>
              <a target="_blank"
                aria-label="This is a link."
                href="mailto:kaungkhantkyawdk@gmail.com"
                className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 bg-white/10 hover:border-indigo-500 shadow-sm hover:shadow-indigo-500"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-lg"
                  height="14px"
                  width="14px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
                </svg>
              </a>
              <a target="_blank"
                aria-label="This is a link."
                href="https://t.me/DanialK007"
                className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 bg-white/10 hover:border-blue-500 shadow-sm hover:shadow-blue-500"
              >
                <img src="img/telegram.png" alt="" className="w-3" />
              </a>
            </div>
            <RainbowButton
              aria-label="Download my resume as PDF"
              href="kkk-resume.pdf"
              download
              className="text-xs px-3 py-2 gap-2 hover:border-red-500 border-white/20 bg-white/10 rounded-full duration-[1200ms]"
              // className="text-xs font-semibold px-3 py-1 items-center flex gap-2 rounded-full backdrop-blur-md border border-white/5 hover:border-red-500 hover:shadow-md hover:shadow-red-500/40 hover:bg-black/20 bg-white/20 duration-300"
            >
              <img
                src="img/download-icon.svg"
                alt="Download icon"
                className="h-4"
              />
              Resume
            </RainbowButton>
          </div>
        </FadeIn>
        <FadeIn
          duration="1.2"
          className="relative overflow-hidden bg-[#0a0a0a] rounded-2xl border border-white/5"
        >
          <img
            src="img/profile.jpeg"
            alt=""
            className="w-full object-cover brightness-50 saturate-0"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end text-sm">
            <BlurAnimation className="p-3 -space-y-[0.4rem]">
              <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
                Hola! 👋
              </div>
              <br />
              <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
                My name is Kaung Khant Kyaw.
              </div>
              <br />
              <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
                But you can call me Kcube!
              </div>
              <br />
              <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
                Grab my email and get in touch 🤞
              </div>
            </BlurAnimation>
          </div>
        </FadeIn>
        <FadeIn
          duration="1.2"
          className="p-6 relative bg-[#0a0a0a] rounded-2xl border border-white/5"
        >
          <div className="uppercase font-mono font-semibold text-lg mb-2">
            Biography
          </div>
          <BlurAnimation duration={1} delay={0.3}>
            <div className="grid grid-cols-5">
              <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                Name
              </div>
              <div className="col-span-3 py-1 text-sm">Kaung Khant Kyaw</div>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                Nickname
              </div>
              <div className="col-span-3 py-1 text-sm">
                Danial, K<sup>3</sup>
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                Age
              </div>
              <div className="col-span-3 py-1 text-sm">22</div>
              <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                City
              </div>
              <div className="col-span-3 py-1 text-sm">Mandalay, Myanmar</div>
            </div>
          </BlurAnimation>
        </FadeIn>
        <FadeIn
          duration="1.2"
          className="p-6 relative bg-[#0a0a0a] rounded-2xl border border-white/5"
        >
          <div className="uppercase font-mono font-semibold text-lg mb-2">
            Experience
          </div>
          <BlurAnimation>
            <div className="grid grid-cols-5">
              <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                2020-2021
              </div>
              <div className="col-span-3 py-2 text-sm">
                <div className="font-semibold pb-1">
                  Started programming journey
                </div>
                <div className="text-white/60">
                  - Learned C, C++, MIT scratch
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                2021-2022
              </div>
              <div className="col-span-3 py-2 text-sm">
                <div className="font-semibold pb-1">
                  Got scholarship twice from Coding-Night School
                </div>
                <div className="text-white/60">
                  - Learned Python : basic to intermediate
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                2022-2023
              </div>
              <div className="col-span-3 py-2 text-sm">
                <div className="font-semibold pb-1">
                  Entered Web Development Field
                </div>
                <div className="text-white/60">- Learned HTML, CSS</div>
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                2023-2024
              </div>
              <div className="col-span-3 py-2 text-sm">
                <div className="font-semibold pb-1">Joined MIBA university</div>
                <div className="text-white/60">
                  - Learned Frontend Development
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                2024 - Now
              </div>
              <div className="col-span-3 py-2 text-sm">
                <div className="font-semibold pb-1">
                  Previously claimed scholarship at UoPeople
                </div>
                <div className="text-white/60">
                  - Experted in HTML, CSS, Javascript, Bootstrap, Tailwind, PHP,
                  MySQL, Figma
                </div>
                <div className="text-white/60">
                  - Learning NodeJS, React, Jquery, Laravel
                </div>
              </div>
            </div>
          </BlurAnimation>
        </FadeIn>
        <FadeIn
          duration="1.2"
          className="rounded-2xl brightness-75 hover:brightness-100 duration-300 border border-white/5"
        >
          <img src="img/photo_1_2024-04-26_18-58-30.jpg" alt="" />
        </FadeIn>
        <FadeIn
          duration="1.2"
          className="p-6 rounded-2xl border border-white/5 bg-[#0a0a0a]"
        >
          <div className="font-mono font-semibold pb-2 text-lg">TOOL STACK</div>
          <BlurAnimation className="grid grid-cols-6 sm:grid-cols-12 gap-2 py-2">
            <img
              src="img/htmlLogo.png"
              alt=""
              title="HTML"
              className="grid-cols-1 hover:shadow-sm hover:border-red-500 hover:shadow-red-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-orange-950 p-2 border border-gray-700 rounded-xl"
            />
            <img
              src="img/cssLogo.png"
              alt=""
              title="CSS"
              className="grid-cols-1 hover:shadow-sm hover:border-blue-500 hover:shadow-blue-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-blue-950 px-2 py-[0.35rem] border border-gray-700 rounded-xl"
            />
            <img
              src="img/jsLogo.png"
              alt=""
              title="Javascript"
              className="grid-cols-1 hover:shadow-sm hover:border-yellow-500 hover:shadow-yellow-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-yellow-950 border p-2 border-gray-700 rounded-xl"
            />
            <img
              src="img/react-logo.png"
              alt=""
              title="React.js"
              className="grid-cols-1 hover:shadow-sm hover:border-cyan-500 hover:shadow-cyan-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-cyan-950 py-2 px-[0.4rem] border border-gray-700 rounded-xl"
            />
            <img
              src="img/nextjs.svg"
              alt=""
              title="Next.js"
              className="grid-cols-1 hover:shadow-sm invert bg-slate-500/10 hover:border-black/70 brightness-110 hover:shadow-gray-500 hover:brightness-125 duration-300 p-[0.3rem] w-full block aspect-square object-contain border border-gray-400 rounded-xl"
            />
            <img
              src="img/tailwind-logo.png"
              alt=""
              title="Tailwind CSS"
              className="grid-cols-1 hover:shadow-sm hover:border-teal-500 hover:shadow-teal-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-cyan-950 px-1 py-[0.6rem] border border-gray-700 rounded-xl"
            />
            <img
              src="img/bootstrap-logo.png"
              alt=""
              title="Bootstrap"
              className="grid-cols-1 hover:shadow-sm hover:border-purple-500 hover:shadow-purple-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-purple-950 py-1 px-[0.2rem] border border-gray-700 rounded-xl"
            />
            <img
              src="img/node.png"
              alt=""
              title="Node.js"
              className="grid-cols-1 hover:shadow-sm p-[0.3rem] bg-green-600/20 hover:border-green-500 hover:shadow-green-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
            />
            <img
              src="img/express.png"
              alt=""
              title="Express.js"
              className="grid-cols-1 hover:shadow-sm p-2 invert bg-slate-500/10 hover:border-gray-500 hover:shadow-gray-500 hover:brightness-100 brightness-90 duration-300 w-full block aspect-square object-contain border border-gray-300 rounded-xl"
            />
            <img
              src="img/mongo.png"
              alt=""
              title="MongoDB"
              className="grid-cols-1 hover:shadow-sm px-[0.7rem] py-1 bg-green-500/10 hover:border-green-500 hover:shadow-green-500 brightness-90 hover:brightness-125 duration-300 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
            />
            <img
              src="img/framer-motion.svg"
              alt=""
              title="Framer Motion"
              className="grid-cols-1 hover:shadow-sm bg-purple-500/20 p-2 hover:border-purple-500 hover:shadow-purple-500 hover:brightness-100 brightness-90 duration-300 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
            />
            <img
              src="img/gsap.svg"
              alt=""
              title="GSAP Motion"
              className="grid-cols-1 hover:shadow-sm p-[0.3rem] bg-green-500/20 hover:border-green-500 hover:shadow-green-500 brightness-90 hover:brightness-125 duration-300 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
            />
            <img
              src="img/lenis.png"
              alt=""
              title="Lenis Scroll"
              className="grid-cols-1 hover:shadow-sm bg-pink-400/20 p-2 hover:border-pink-500 hover:shadow-pink-500 hover:brightness-100 brightness-90 duration-300 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
            />
            <img
              src="img/phpIcon].png"
              alt=""
              title="PHP"
              className="grid-cols-1 hover:shadow-sm hover:border-purple-500 hover:shadow-purple-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-purple-400/20 py-3 px-1 border border-gray-700 rounded-xl"
            />
            <img
              src="img/mysql.png"
              alt=""
              title="MySQL"
              className="grid-cols-1 bg-orange-500/20 hover:shadow-sm hover:border-orange-500 hover:shadow-orange-500 hover:brightness-105 duration-300 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
            />
            <img
              src="img/pythonLogo.png"
              alt=""
              title="Python"
              className="grid-cols-1 hover:shadow-sm hover:border-yellow-500 hover:shadow-yellow-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-blue-500/30 p-2 border border-gray-700 rounded-xl"
            />
            <img
              src="img/C++Icon.png"
              alt=""
              title="C++"
              className="grid-cols-1 hover:shadow-sm hover:border-blue-500 hover:shadow-blue-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-indigo-950 py-[0.4rem] px-2 border border-gray-700 rounded-xl"
            />
            <img
              src="img/figmaIcon.webp"
              alt=""
              title="Figma"
              className="grid-cols-1 hover:shadow-sm hover:border-blue-500 hover:shadow-blue-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
            />
            <img
              src="img/gpt.png"
              alt=""
              title="Chat GPT"
              className="grid-cols-1 hover:shadow-sm bg-black p-1 hover:border-white/60 hover:shadow-white hover:brightness-100 brightness-75 duration-300 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
            />
            <img
              src="img/git.png"
              alt=""
              title="Git"
              className="grid-cols-1 hover:shadow-sm hover:border-red-500 hover:shadow-red-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-orange-950 p-2 border border-gray-700 rounded-xl"
            />
            <img
              src="img/github.png"
              alt=""
              title="GitHub"
              className="grid-cols-1 hover:shadow-sm bg-slate-200 hover:border-purple-500 hover:shadow-purple-500 hover:brightness-125 duration-300 p-1 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
            />
          </BlurAnimation>
        </FadeIn>
      </div>
      {/*  md device */}
      <div className="grid-cols-3 gap-5 p-5 hidden md:grid">
        <BlurAnimation className="col-span-1 flex flex-col gap-5">
          <FadeIn
            duration="1.2"
            className="p-6 pb-0 bg-[#0a0a0a] rounded-2xl text-2xl border border-white/5"
          >
            <TextGenerateEffect words={words} duration={1} />
            <BlurAnimation
              delay={2}
              className="mx-auto flex justify-between py-4 pe-2"
            >
              <BlurAnimation wait={1} className="flex gap-2 items-center">
                <a target="_blank"
                  aria-label="Visit my Facebook profile"
                  href="https://www.facebook.com/profile.php?id=100087994523929&mibextid=LQQJ4d"
                  className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 hover:border-blue-500 hover:shadow hover:shadow-blue-500/40 hover:bg-black/20 bg-white/10 duration-300"
                >
                  <img
                    src="img/facebookIcon.svg"
                    alt="Facebook icon"
                    className="w-3"
                  />
                </a>
                <a target="_blank"
                  aria-label="Send me an email"
                  href="mailto:kaungkhantkyawdk@gmail.com"
                  className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 hover:border-green-500 hover:shadow hover:shadow-green-500/40 hover:bg-black/20 bg-white/10 duration-300"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-lg"
                    height="14px"
                    width="14px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
                  </svg>
                </a>
                <a target="_blank"
                  aria-label="Visit my LinkedIn profile"
                  href="http://linkedin.com/in/kaung-khant-kyaw-688141212"
                  className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 hover:border-indigo-500 hover:shadow hover:shadow-indigo-500/40 hover:bg-black/20 bg-white/10 duration-300"
                >
                  <img
                    src="img/linkedin.svg"
                    alt="LinkedIn icon"
                    className="w-3"
                  />
                </a>
                <a target="_blank"
                  aria-label="Send me a message on Telegram"
                  href="https://t.me/DanialK007"
                  className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 hover:border-blue-500 hover:shadow hover:shadow-blue-500/40 hover:bg-black/20 bg-white/10 duration-300"
                >
                  <img
                    src="img/telegram.png"
                    alt="Telegram icon"
                    className="w-3"
                  />
                </a>
              </BlurAnimation>
              <RainbowButton
                aria-label="Download my resume as PDF"
                href="kkk-resume.pdf"
                download
                className="group overflow-hidden text-xs px-3 py-2 gap-2 hover:border-red-500 border-white/20 border-collapse rounded-full duration-[1200ms]"
                // className="text-xs font-semibold px-3 py-1 items-center flex gap-2 rounded-full backdrop-blur-md border border-white/5 hover:border-red-500 hover:shadow-md hover:shadow-red-500/40 hover:bg-black/20 bg-white/20 duration-300"
              >
                <div className="relative">
                  <img
                    src="img/download-icon.svg"
                    alt="Download icon"
                    className="h-4 group-hover:translate-y-8 duration-300"
                  />
                  <img
                    src="img/download-icon.svg"
                    alt="Download icon"
                    className="h-4 absolute bottom-8 group-hover:translate-y-8 duration-300"
                  />
                </div>
                Resume
              </RainbowButton>
            </BlurAnimation>
          </FadeIn>
          <FadeIn
            duration="1.2"
            className="p-6 relative bg-[#0a0a0a] rounded-2xl border border-white/5"
          >
            <div className="uppercase font-mono font-semibold text-lg mb-2">
              My Background
            </div>
            <BlurAnimation className="text-sm text-neutral-400 myFont">
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
            </BlurAnimation>
          </FadeIn>
        </BlurAnimation>
        <BlurAnimation className="col-span-1 flex flex-col gap-5">
          <FadeIn
            duration="1.5"
            className="relative overflow-hidden bg-[#0a0a0a] rounded-2xl border border-white/5"
          >
            <img
              src="img/profile.jpeg"
              alt=""
              className="w-full object-cover brightness-50 saturate-0"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end text-sm">
              <BlurAnimation className="p-3 -space-y-[0.4rem]">
                <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
                  Hola! 👋
                </div>
                <br />
                <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
                  My name is Kaung Khant Kyaw.
                </div>
                <br />
                <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
                  But you can call me Kcube!
                </div>
                <br />
                <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
                  Grab my email and get in touch 🤞
                </div>
              </BlurAnimation>
            </div>
          </FadeIn>
          <FadeIn
            duration="1.5"
            className="p-6 relative bg-[#0a0a0a] rounded-2xl border border-white/5"
          >
            <div className="uppercase font-mono font-semibold text-lg mb-2">
              Biography
            </div>
            <BlurAnimation duration={1} delay={0.3}>
              <div className="grid grid-cols-5">
                <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                  Name
                </div>
                <div className="col-span-3 py-1 text-sm">Kaung Khant Kyaw</div>
              </div>
              <div className="grid grid-cols-5">
                <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                  Nickname
                </div>
                <div className="col-span-3 py-1 text-sm">
                  Danial, K<sup>3</sup>
                </div>
              </div>
              <div className="grid grid-cols-5">
                <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                  Age
                </div>
                <div className="col-span-3 py-1 text-sm">22</div>
                <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                  City
                </div>
                <div className="col-span-3 py-1 text-sm">Mandalay, Myanmar</div>
              </div>
            </BlurAnimation>
          </FadeIn>
          <FadeIn
            duration="1.5"
            className="rounded-2xl brightness-75 duration-300 border border-white/5"
          >
            <Carousel />
          </FadeIn>
        </BlurAnimation>
        <BlurAnimation className="col-span-1 flex flex-col gap-5">
          <FadeIn
            duration="1.9"
            className="p-6 relative bg-[#0a0a0a] rounded-2xl border border-white/5"
          >
            <div className="uppercase font-mono font-semibold text-lg mb-2">
              Experience
            </div>
            <BlurAnimation>
              <div className="grid grid-cols-5">
                <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                  2020-2021
                </div>
                <div className="col-span-3 py-2 text-sm">
                  <div className="font-semibold pb-1">
                    Started programming journey
                  </div>
                  <div className="text-white/60">
                    - Learned C, C++, MIT scratch
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5">
                <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                  2021-2022
                </div>
                <div className="col-span-3 py-2 text-sm">
                  <div className="font-semibold pb-1">
                    Got scholarship twice from Coding-Night School
                  </div>
                  <div className="text-white/60">
                    - Learned Python : basic to intermediate
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5">
                <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                  2022-2023
                </div>
                <div className="col-span-3 py-2 text-sm">
                  <div className="font-semibold pb-1">
                    Entered Web Development Field
                  </div>
                  <div className="text-white/60">- Learned HTML, CSS</div>
                </div>
              </div>
              <div className="grid grid-cols-5">
                <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                  2023-2024
                </div>
                <div className="col-span-3 py-2 text-sm">
                  <div className="font-semibold pb-1">
                    Joined MIBA university
                  </div>
                  <div className="text-white/60">
                    - Learned Frontend Development
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5">
                <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                  2024 - Now
                </div>
                <div className="col-span-3 py-2 text-sm">
                  <div className="font-semibold pb-1">
                    Previously claimed scholarship at UoPeople
                  </div>
                  <div className="text-white/60">
                    - Experted in HTML, CSS, Javascript, Bootstrap, Tailwind,
                    PHP, MySQL, Figma
                  </div>
                  <div className="text-white/60">
                    - Learning NodeJS, React, Jquery, Laravel
                  </div>
                </div>
              </div>
            </BlurAnimation>
          </FadeIn>
          <FadeIn
            duration="1.9"
            className="p-6 rounded-2xl border border-white/5 bg-[#0a0a0a]"
          >
            <div className="font-mono font-semibold pb-2 text-lg">
              TOOL STACK
            </div>
            <BlurAnimation
              delay={0.1}
              className="grid md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-2 py-2"
            >
              <img
                src="img/htmlLogo.png"
                alt=""
                title="HTML"
                className="grid-cols-1 hover:shadow-sm hover:border-red-500 hover:shadow-red-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-orange-950 p-2 border border-neutral-700 rounded-xl"
              />
              <img
                src="img/cssLogo.png"
                alt=""
                title="CSS"
                className="grid-cols-1 hover:shadow-sm hover:border-blue-500 hover:shadow-blue-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-blue-950 px-2 py-[0.35rem] border border-neutral-700 rounded-xl"
              />
              <img
                src="img/jsLogo.png"
                alt=""
                title="Javascript"
                className="grid-cols-1 hover:shadow-sm hover:border-yellow-500 hover:shadow-yellow-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-yellow-950 border p-2 border-neutral-700 rounded-xl"
              />
              <img
                src="img/react-logo.png"
                alt=""
                title="React.js"
                className="grid-cols-1 hover:shadow-sm hover:border-cyan-500 hover:shadow-cyan-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-cyan-950 py-2 px-[0.4rem] border border-neutral-700 rounded-xl"
              />
              <img
                src="img/nextjs.svg"
                alt=""
                title="Next.js"
                className="grid-cols-1 hover:shadow-sm invert bg-slate-500/10 hover:border-black/70 brightness-110 hover:shadow-neutral-500 hover:brightness-125 duration-300 p-[0.3rem] w-full block aspect-square object-contain border border-neutral-400 rounded-xl"
              />
              <img
                src="img/tailwind-logo.png"
                alt=""
                title="Tailwind CSS"
                className="grid-cols-1 hover:shadow-sm hover:border-teal-500 hover:shadow-teal-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-cyan-950 px-1 py-[0.6rem] border border-neutral-700 rounded-xl"
              />
              <img
                src="img/bootstrap-logo.png"
                alt=""
                title="Bootstrap"
                className="grid-cols-1 hover:shadow-sm hover:border-purple-500 hover:shadow-purple-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-purple-950 py-1 px-[0.2rem] border border-neutral-700 rounded-xl"
              />
              <img
                src="img/node.png"
                alt=""
                title="Node.js"
                className="grid-cols-1 hover:shadow-sm p-[0.3rem] bg-green-600/20 hover:border-green-500 hover:shadow-green-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain border border-neutral-700 rounded-xl"
              />
              <img
                src="img/express.png"
                alt=""
                title="Express.js"
                className="grid-cols-1 hover:shadow-sm p-2 invert bg-slate-500/10 hover:border-neutral-500 hover:shadow-neutral-500 hover:brightness-100 brightness-90 duration-300 w-full block aspect-square object-contain border border-neutral-300 rounded-xl"
              />
              <img
                src="img/mongo.png"
                alt=""
                title="MongoDB"
                className="grid-cols-1 hover:shadow-sm px-[0.7rem] py-1 bg-green-500/10 hover:border-green-500 hover:shadow-green-500 brightness-90 hover:brightness-125 duration-300 w-full block aspect-square object-contain border border-neutral-700 rounded-xl"
              />
              <img
                src="img/framer-motion.svg"
                alt=""
                title="Framer Motion"
                className="grid-cols-1 hover:shadow-sm bg-purple-500/20 p-2 hover:border-purple-500 hover:shadow-purple-500 hover:brightness-100 brightness-90 duration-300 w-full block aspect-square object-contain border border-neutral-700 rounded-xl"
              />
              <img
                src="img/gsap.svg"
                alt=""
                title="GSAP Motion"
                className="grid-cols-1 hover:shadow-sm p-[0.3rem] bg-green-500/20 hover:border-green-500 hover:shadow-green-500 brightness-90 hover:brightness-125 duration-300 w-full block aspect-square object-contain border border-neutral-700 rounded-xl"
              />
              <img
                src="img/lenis.png"
                alt=""
                title="Lenis Scroll"
                className="grid-cols-1 hover:shadow-sm bg-pink-400/20 p-2 hover:border-pink-500 hover:shadow-pink-500 hover:brightness-100 brightness-90 duration-300 w-full block aspect-square object-contain border border-neutral-700 rounded-xl"
              />
              <img
                src="img/phpIcon].png"
                alt=""
                title="PHP"
                className="grid-cols-1 hover:shadow-sm hover:border-purple-500 hover:shadow-purple-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-purple-400/20 py-3 px-1 border border-gray-700 rounded-xl"
              />
              <img
                src="img/mysql.png"
                alt=""
                title="MySQL"
                className="grid-cols-1 bg-orange-500/20 hover:shadow-sm hover:border-orange-500 hover:shadow-orange-500 hover:brightness-105 duration-300 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
              />
              <img
                src="img/pythonLogo.png"
                alt=""
                title="Python"
                className="grid-cols-1 hover:shadow-sm hover:border-yellow-500 hover:shadow-yellow-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-blue-500/30 p-2 border border-gray-700 rounded-xl"
              />
              <img
                src="img/C++Icon.png"
                alt=""
                title="C++"
                className="grid-cols-1 hover:shadow-sm hover:border-blue-500 hover:shadow-blue-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-indigo-950 py-[0.4rem] px-2 border border-gray-700 rounded-xl"
              />
              <img
                src="img/figmaIcon.webp"
                alt=""
                title="Figma"
                className="grid-cols-1 hover:shadow-sm hover:border-blue-500 hover:shadow-blue-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
              />
              <img
                src="img/gpt.png"
                alt=""
                title="Chat GPT"
                className="grid-cols-1 hover:shadow-sm bg-black p-1 hover:border-white/60 hover:shadow-white hover:brightness-100 brightness-75 duration-300 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
              />
              <img
                src="img/git.png"
                alt=""
                title="Git"
                className="grid-cols-1 hover:shadow-sm hover:border-red-500 hover:shadow-red-500 hover:brightness-125 duration-300 w-full block aspect-square object-contain bg-orange-950 p-2 border border-gray-700 rounded-xl"
              />
              <img
                src="img/github.png"
                alt=""
                title="GitHub"
                className="grid-cols-1 hover:shadow-sm bg-slate-200 hover:border-purple-500 hover:shadow-purple-500 hover:brightness-125 duration-300 p-1 w-full block aspect-square object-contain border border-gray-700 rounded-xl"
              />
            </BlurAnimation>
          </FadeIn>
        </BlurAnimation>
      </div>
    </div>
  );
}

export default About;
