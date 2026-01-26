"use client";
import { useEffect, useState } from "react";
import { initLenis, getLenis } from "../lib/lenis";
import { IoMdMenu } from "react-icons/io";
import Logo from "./Logo";
import GradualBlur from "../components/ui/GradualBlur";

function Header() {
  const [menuOpen, setMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenu(!menuOpen);
  useEffect(() => {
    initLenis();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector("#hero")?.offsetHeight || 480;
      setScrolled(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a[href^='#']");
      if (target) {
        e.preventDefault();
        const section = document.querySelector(target.getAttribute("href"));
        if (section) {
          const lenis = getLenis(); // get the global instance
          lenis.scrollTo(section);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <nav>
      {/*  Navigation Bar - Mobile */}
      <div
        className={`flex justify-between p-3 fixed w-screen top-0 z-50 md:px-12 ${
          isScrolled ? "bg-gradient-to-b from-black/90 from-10% to-80%" : ""
        }`}
      >
        <a aria-label="This is a link." href="" className="pt-1 px-2">
          {/* <img src="img/Kcube.svg" alt="" className="h-14" /> */}
          <Logo />
        </a>
        <button
          className={`my-2 size-12 relative active:scale-75 duration-300 me-1 flex items-center md:hidden backdrop-blur border border-white/5 bg-white/5 rounded-xl ${
            menuOpen ? "" : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`absolute inset-0 text-3xl p-2.5 flex items-center justify-center duration-300 ${
              menuOpen ? "scale-0" : ""
            }`}
          >
            <IoMdMenu />
          </div>
          <div
            className={`absolute inset-0 duration-300 ${
              menuOpen ? "" : "scale-0"
            }`}
          >
            <img
              src="img/cube.svg"
              id="menuIcon2"
              alt=""
              className={`size-full p-3 duration-300 brightness-0 invert saturate-0 animate-spin`}
            />
          </div>
        </button>
      </div>
      <div
        className={`md:hidden fixed top-20 right-4 border rounded-2xl duration-300 z-50 ${
          menuOpen
            ? "z-10 translate-x-0 bg-white/5 border border-white/15 backdrop-blur-md"
            : "-z-10 pointer-events-none text-transparent translate-x-10 bg-white/0 backdrop-blur-0"
        }`}
      >
        <ul className="p-4 flex flex-col gap-3">
          <a
            aria-label="This is a link."
            href="#work"
            className="hover:text-red-500"
          >
            <div className="opacity-50 font-bold font-mono">01</div>
            <div className="font-semibold">Work</div>
          </a>
          <a
            aria-label="This is a link."
            href="#playground"
            className="hover:text-red-500"
          >
            <div className="opacity-50 font-bold font-mono">02</div>
            <div className="font-semibold">Playground</div>
          </a>
          <a
            aria-label="This is a link."
            href="#about"
            className="hover:text-red-500"
          >
            <div className="opacity-50 font-bold font-mono">03</div>
            <div className="font-semibold">About Me</div>
          </a>
        </ul>
      </div>
      <button
        onClick={toggleMenu}
        className={`fixed inset-0 z-40 lg:hidden ${menuOpen ? "" : "hidden"}`}
      ></button>

      {/* large screen */}
      <div
        className={`hidden md:flex fixed top-3 right-10 border border-white/10 gap-5 p-3 text-xs myAnimation2 bg-black/10 backdrop-blur-md rounded-2xl duration-700 ${
          isScrolled
            ? "opacity-0 -z-10 -translate-y-40"
            : "opacity-100 z-50 translate-y-0"
        }`}
      >
        <a
          aria-label="This is a link."
          href="#work"
          className="px-2 hover:text-red-500"
        >
          <div className="font-mono">01</div>
          <div className="font-semibold">Work</div>
        </a>
        <a
          aria-label="This is a link."
          href="#playground"
          className="px-2 hover:text-red-500"
        >
          <div className="font-mono">02</div>
          <div className="font-semibold">Playground</div>
        </a>
        <a
          aria-label="This is a link."
          href="#about"
          className="px-2 hover:text-red-500"
        >
          <div className="font-mono">03</div>
          <div className="font-semibold">About Me</div>
        </a>
      </div>
      <div
        className={`hidden md:grid fixed top-3 right-10 z-50 gap-5 p-3 text-xs myAnimation2 bg-black/10 border border-white/15 backdrop-blur-md rounded-2xl duration-700 ${
          isScrolled
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-40 pointer-events-none"
        }`}
      >
        <a
          aria-label="Go to work section"
          href="#work"
          className="px-2 hover:text-red-500"
        >
          <div className="font-mono">01</div>
          <div className="font-semibold">Work</div>
        </a>
        <a
          aria-label="Go to playground section"
          href="#playground"
          className="px-2 hover:text-red-500"
        >
          <div className="font-mono">02</div>
          <div className="font-semibold">Playground</div>
        </a>
        <a
          aria-label="Go to about me section"
          href="#about"
          className="px-2 hover:text-red-500"
        >
          <div className="font-mono">03</div>
          <div className="font-semibold">About Me</div>
        </a>
      </div>

      {/*  Side Bar */}
      <a
        aria-label="This is a link."
        href="tel:+959255599863"
        className="fixed hidden -right-3 bottom-32 p-3 -rotate-90 z-20 bg-black/95"
      >
        Contact
      </a>

      {/*  Bottom navbar : initially hidden */}
      <div
        className={`fixed z-50 bottom-0 left-0 w-full text-white py-4 px-6 duration-700 ${
          isScrolled ? "translate-y-0" : "translate-y-20"
        }`}
      >
        <div className="mx-auto flex justify-center gap-2 z-10">
          <a
            aria-label="This is a link."
            href="https://www.facebook.com/profile.php?id=100087994523929&mibextid=LQQJ4d"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 bg-white/10 hover:border-blue-500 shadow-sm hover:shadow-blue-500"
          >
            <img src="img/facebookIcon.svg" alt="" className="w-3" />
          </a>
          <a
            aria-label="This is a link."
            href="mailto:kaungkhantkyawdk@gmail.com"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 bg-white/10 hover:border-green-500 shadow-sm hover:shadow-green-500"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              class="text-lg"
              height="14px"
              width="14px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
            </svg>
          </a>
          <a
            aria-label="This is a link."
            href="http://linkedin.com/in/kaung-khant-kyaw-688141212"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 bg-white/10 hover:border-indigo-500 shadow-sm hover:shadow-indigo-500"
          >
            <img src="img/linkedin.svg" alt="" className="w-3" />
          </a>
          <a
            aria-label="This is a link."
            href="https://t.me/DanialK007"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/5 bg-white/10 hover:border-blue-500 shadow-sm hover:shadow-blue-500"
          >
            <img src="img/telegram.png" alt="" className="w-3" />
          </a>
        </div>
      </div>

      {/* <GradualBlur
        target="parent"
        position="bottom"
        height="5rem"
        strength={3}
        divCount={8}
        zIndex={49}
        curve="bezier"
        exponential={true}
        opacity={1}
        className={`duration-500 hidden ${isScrolled ? "" : "translate-y-10"}`}
        target="page"
      /> */}
    </nav>
  );
}

export default Header;
