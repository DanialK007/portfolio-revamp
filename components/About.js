import FadeIn from "./framer-motion/FadeIn";

function About() {
  return (
    <div className="my-5 xl:mt-20 relative">
      <div id="about" className="absolute -top-16"></div>
      <div className="py-8">
        <div className="flex justify-center cap1 myFont text-6xl md:text-8xl xl:text-10xl">
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
        </div>
        <div className="flex justify-between text-sm font-mono px-5">
          <div className="">BASED IN MANDALAY</div>
          <div className="">DETAIL-ORIENTED</div>
          <div className="">CURIOUS</div>
        </div>
      </div>
      {/*  small device */}
      <div className="grid grid-cols-1 gap-5 p-5 md:hidden">
        <FadeIn
          duration="1.2"
          className="p-6 pb-0 bg-[#111] rounded-2xl text-2xl border border-white/10"
        >
          <div className="">
            Frontend Developer with <br />2 years of experience, focused on
            creating functional and user-centered digital products with visually
            stunning designs.
          </div>
          <div className="mx-auto flex justify-between py-4 pe-2">
            <div className="flex gap-2">
              <a aria-label="This is a link." 
                href="https://www.facebook.com/profile.php?id=100087994523929&mibextid=LQQJ4d"
                className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/20"
              >
                <img src="img/facebookIcon.svg" alt="" className="w-3" />
              </a>
              <a aria-label="This is a link." 
                href="http://linkedin.com/in/kaung-khant-kyaw-688141212"
                className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/20"
              >
                <img src="img/linkedin.svg" alt="" className="w-3" />
              </a>
              <a aria-label="This is a link." 
                href="mailto:kaungkhantkyawdk@gmail.com"
                className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/20"
              >
                <img src="img/envelope-regular.svg" alt="" className="w-3" />
              </a>
              <a aria-label="This is a link." 
                href="https://t.me/DanialK007"
                className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/20"
              >
                <img src="img/telegram.png" alt="" className="w-3" />
              </a>
            </div>
            <a aria-label="This is a link." 
              href="kkk-resume.pdf"
              download
              className="text-xs font-semibold px-3 py-1 flex items-center gap-2 rounded-full backdrop-blur-md border border-white/10 hover:border-red-500 hover:shadow-md hover:shadow-red-500/40 hover:bg-black/20 bg-white/20"
            >
              <img src="img/download-icon.svg" alt="" className="h-4" />
              Resume
            </a>
          </div>
        </FadeIn>
        <FadeIn
          duration="1.2"
          className="relative overflow-hidden bg-[#111] rounded-2xl border border-white/10"
        >
          <img
            src="img/profile.jpeg"
            alt=""
            className="w-full object-cover brightness-50 saturate-0"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end text-sm">
            <div className="p-3 space-y-1">
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
            </div>
          </div>
        </FadeIn>
        <FadeIn
          duration="1.2"
          className="p-6 relative bg-[#111] rounded-2xl border border-white/10"
        >
          <div className="uppercase font-mono font-semibold text-lg mb-2">
            Biography
          </div>
          {/*  <div className="text-sm">
                            <div className="font-semibold text-white/60 font-mono">2020 - 2021</div>
                            <div className="font-semibold text-gray-50">After High School</div>
                            <ul className="text-white/60 text-xs">
                                <li className="">March 2020: Started programming journey just after high school</li>
                                <li className="">Explored Edx courses via Wikipedia</li>
                                <li className="">Delved into programming concepts, MIT scratch games, C language</li>
                                <li className="">Mastered C++, gained insights</li>
                            </ul>
                        </div> */}
          <div className="grid grid-cols-5">
            <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
              Name
            </div>
            <div className="col-span-3 py-1 text-sm">Kaung Khant Kyaw</div>
            <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
              Nickname
            </div>
            <div className="col-span-3 py-1 text-sm">
              Danial, K<sup>3</sup>
            </div>
            <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
              Age
            </div>
            <div className="col-span-3 py-1 text-sm">21</div>
            <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
              City
            </div>
            <div className="col-span-3 py-1 text-sm">Mandalay, Myanmar</div>
          </div>
        </FadeIn>
        <FadeIn
          duration="1.2"
          className="p-6 relative bg-[#111] rounded-2xl border border-white/10"
        >
          <div className="uppercase font-mono font-semibold text-lg mb-2">
            Experience
          </div>
          {/*  <div className="text-sm">
                            <div className="font-semibold text-white/60 font-mono">2020 - 2021</div>
                            <div className="font-semibold text-gray-50">After High School</div>
                            <ul className="text-white/60 text-xs">
                                <li className="">March 2020: Started programming journey just after high school</li>
                                <li className="">Explored Edx courses via Wikipedia</li>
                                <li className="">Delved into programming concepts, MIT scratch games, C language</li>
                                <li className="">Mastered C++, gained insights</li>
                            </ul>
                        </div> */}
          <div className="grid grid-cols-5">
            <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
              2020-2021
            </div>
            <div className="col-span-3 py-2 text-sm">
              <div className="font-semibold">Started programming journey</div>
              <div className="text-white/60">- Learned C, C++, MIT scratch</div>
            </div>
            <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
              2021-2022
            </div>
            <div className="col-span-3 py-2 text-sm">
              <div className="font-semibold">
                Got scholarship twice from Coding-Night School
              </div>
              <div className="text-white/60">
                - Learned Python : basic to intermediate
              </div>
            </div>
            <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
              2022-2023
            </div>
            <div className="col-span-3 py-2 text-sm">
              <div className="font-semibold">Entered Web Development Field</div>
              <div className="text-white/60">- Learned HTML, CSS</div>
            </div>
            <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
              2023-2024
            </div>
            <div className="col-span-3 py-2 text-sm">
              <div className="font-semibold">Joined MIBA university</div>
              <div className="text-white/60">
                - Learned Frontend Development
              </div>
            </div>
            <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
              2024 - Now
            </div>
            <div className="col-span-3 py-2 text-sm">
              <div className="font-semibold">
                Previously claimed a scholarship from CodeMal Academy
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
        </FadeIn>
        <FadeIn
          duration="1.2"
          className="rounded-2xl brightness-75 hover:brightness-100 duration-300 border border-white/10"
        >
          <img src="img/photo_1_2024-04-26_18-58-30.jpg" alt="" />
        </FadeIn>
        <FadeIn
          duration="1.2"
          className="p-6 rounded-2xl border border-white/10 bg-[#111]"
        >
          <div className="font-mono font-semibold pb-2 text-lg">TOOL STACK</div>
          <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 py-2">
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
          </div>
        </FadeIn>
        {/*  </div> */}
      </div>
      {/*  md device */}
      <div className="grid-cols-3 gap-5 p-5 hidden md:grid">
        <div className="col-span-1 flex flex-col gap-5">
          <FadeIn
            duration="1.2"
            className="p-6 pb-0 bg-[#111] rounded-2xl text-2xl border border-white/10"
          >
            <div className="">
              Frontend Developer with <br />2 years of experience, focused on
              creating functional and user-centered digital products with
              visually stunning designs.
            </div>
            <div className="mx-auto flex justify-between py-4 pe-2">
              <div className="flex gap-2">
                <a aria-label="This is a link." 
                  href="https://www.facebook.com/profile.php?id=100087994523929&mibextid=LQQJ4d"
                  className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 hover:border-blue-500 hover:shadow hover:shadow-blue-500/40 hover:bg-black/20 bg-white/20 duration-300"
                >
                  <img src="img/facebookIcon.svg" alt="" className="w-3" />
                </a>
                <a aria-label="This is a link." 
                  href="mailto:kaungkhantkyawdk@gmail.com"
                  className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 hover:border-green-500 hover:shadow hover:shadow-green-500/40 hover:bg-black/20 bg-white/20 duration-300"
                >
                  <img src="img/envelope-regular.svg" alt="" className="w-3" />
                </a>
                <a aria-label="This is a link." 
                  href="http://linkedin.com/in/kaung-khant-kyaw-688141212"
                  className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 hover:border-indigo-500 hover:shadow hover:shadow-indigo-500/40 hover:bg-black/20 bg-white/20 duration-300"
                >
                  <img src="img/linkedin.svg" alt="" className="w-3" />
                </a>
                <a aria-label="This is a link." 
                  href="https://t.me/DanialK007"
                  className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 hover:border-blue-500 hover:shadow hover:shadow-blue-500/40 hover:bg-black/20 bg-white/20 duration-300"
                >
                  <img src="img/telegram.png" alt="" className="w-3" />
                </a>
              </div>
              <a aria-label="This is a link." 
                href="kkk-resume.pdf"
                download
                className="text-xs font-semibold px-3 py-1 items-center flex gap-2 rounded-full backdrop-blur-md border border-white/10 hover:border-red-500 hover:shadow-md hover:shadow-red-500/40 hover:bg-black/20 bg-white/20 duration-300"
              >
                <img src="img/download-icon.svg" alt="" className="h-4" />
                Resume
              </a>
            </div>
          </FadeIn>
          <FadeIn
            duration="1.2"
            className="p-6 relative bg-[#111] rounded-2xl border border-white/10"
          >
            <div className="uppercase font-mono font-semibold text-lg mb-2">
              My Background
            </div>
            <div className="text-sm text-gray-400">
              <div className="py-2">
                Hey there! I'm Kaung Khant Kyaw, a passionate individual from
                <span className="underline text-gray-50 hover:cursor-pointer hover:text-red-500 px-1">
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
                <span className="underline text-gray-50 hover:cursor-pointer hover:text-red-500 px-1">
                  I learned C and eventually mastered C++
                </span>
                , gaining valuable insights along the way.
              </div>
              <div className="py-2">
                In 2021, my commitment to learning
                <span className="underline text-gray-50 hover:cursor-pointer hover:text-red-500 px-1">
                  earned me a scholarship
                </span>
                for an online Python Basics Course, further fueling my passion
                for programming. Subsequently, I received
                <span className="underline text-gray-50 hover:cursor-pointer hover:text-red-500 px-1">
                  another scholarship for a Python Intermediate Course
                </span>
                , expanding my skills and determination to excel in programming.
              </div>
              <div className="py-2">
                In 2022, I delved into web development, sparking a passion for
                creating engaging websites. By 2023, at MIBA University, I honed
                my CSS skills and mastered frameworks like
                <span className="underline text-gray-50 hover:cursor-pointer hover:text-red-500 px-1">
                  Tailwind
                </span>
                and
                <span className="underline text-gray-50 hover:cursor-pointer hover:text-red-500 px-1">
                  Bootstrap
                </span>
                . Completing
                <span className="underline text-gray-50 hover:cursor-pointer hover:text-red-500 px-1">
                  PHP
                </span>
                projects with
                <span className="underline text-gray-50 hover:cursor-pointer hover:text-red-500 px-1">
                  MySQL
                </span>
                integration, I showcased my ability to build dynamic web apps.
                Utilizing free hosting, I independently developed and deployed
                numerous websites, showcasing proficiency across the entire web
                development process. Now,
                <span className="underline text-gray-50 hover:cursor-pointer hover:text-red-500 px-1">
                  I'm ready
                </span>
                to tackle any challenge with confidence.
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <FadeIn
            duration="1.5"
            className="relative overflow-hidden bg-[#111] rounded-2xl border border-white/10"
          >
            <img
              src="img/profile.jpeg"
              alt=""
              className="w-full object-cover brightness-50 saturate-0"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end text-sm">
              <div className="p-3 space-y-1">
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
              </div>
            </div>
          </FadeIn>
          <FadeIn
            duration="1.5"
            className="p-6 relative bg-[#111] rounded-2xl border border-white/10"
          >
            <div className="uppercase font-mono font-semibold text-lg mb-2">
              Biography
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                Name
              </div>
              <div className="col-span-3 py-1 text-sm">Kaung Khant Kyaw</div>
              <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                Nickname
              </div>
              <div className="col-span-3 py-1 text-sm">
                Danial, K<sup>3</sup>
              </div>
              <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                Age
              </div>
              <div className="col-span-3 py-1 text-sm">21</div>
              <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
                City
              </div>
              <div className="col-span-3 py-1 text-sm">Mandalay, Myanmar</div>
            </div>
          </FadeIn>
          <FadeIn
            duration="1.5"
            className="rounded-2xl brightness-75 hover:brightness-100 duration-300 border border-white/10"
          >
            <img src="img/photo_1_2024-04-26_18-58-30.jpg" alt="" />
          </FadeIn>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <FadeIn
            duration="1.9"
            className="p-6 relative bg-[#111] rounded-2xl border border-white/10"
          >
            <div className="uppercase font-mono font-semibold text-lg mb-2">
              Experience
            </div>
            {/*  <div className="text-sm">
                            <div className="font-semibold text-white/60 font-mono">2020 - 2021</div>
                            <div className="font-semibold text-gray-50">After High School</div>
                            <ul className="text-white/60 text-xs">
                                <li className="">March 2020: Started programming journey just after high school</li>
                                <li className="">Explored Edx courses via Wikipedia</li>
                                <li className="">Delved into programming concepts, MIT scratch games, C language</li>
                                <li className="">Mastered C++, gained insights</li>
                            </ul>
                        </div> */}
            <div className="grid grid-cols-5">
              <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                2020-2021
              </div>
              <div className="col-span-3 py-2 text-sm">
                <div className="font-semibold">Started programming journey</div>
                <div className="text-white/60">
                  - Learned C, C++, MIT scratch
                </div>
              </div>
              <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                2021-2022
              </div>
              <div className="col-span-3 py-2 text-sm">
                <div className="font-semibold">
                  Got scholarship twice from Coding-Night School
                </div>
                <div className="text-white/60">
                  - Learned Python : basic to intermediate
                </div>
              </div>
              <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                2022-2023
              </div>
              <div className="col-span-3 py-2 text-sm">
                <div className="font-semibold">
                  Entered Web Development Field
                </div>
                <div className="text-white/60">- Learned HTML, CSS</div>
              </div>
              <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                2023-2024
              </div>
              <div className="col-span-3 py-2 text-sm">
                <div className="font-semibold">Joined MIBA university</div>
                <div className="text-white/60">
                  - Learned Frontend Development
                </div>
              </div>
              <div className="col-span-2 py-2 text-sm text-white/60 font-mono">
                2024 - Now
              </div>
              <div className="col-span-3 py-2 text-sm">
                <div className="font-semibold">
                  Previously claimed a scholarship from CodeMal Academy
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
          </FadeIn>
          <FadeIn
            duration="1.9"
            className="p-6 rounded-2xl border border-white/10 bg-[#111]"
          >
            <div className="font-mono font-semibold pb-2 text-lg">
              TOOL STACK
            </div>
            <div className="grid md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-2 py-2">
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
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default About;
