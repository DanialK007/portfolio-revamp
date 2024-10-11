"use client";
import { useEffect, useState } from "react";

function Header() {
  const [menuOpen, setMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = function () {
    setMenu(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav>
      {/*  Navigation Bar */}
      <div
        className={`flex justify-between p-3 fixed w-screen top-0 z-40 md:px-12 ${
          isScrolled
            ? "bg-gradient-to-b from-black/90 to-60% to-transparent"
            : ""
        }`}
      >
        <a href="" className="pt-1">
          <img src="img/Kcube.svg" alt="" className="h-14" />
        </a>
        <button
          className="my-2 h-12 me-1 flex items-center md:hidden backdrop-blur rounded-xl border border-white/10 bg-white/5"
          onClick={toggleMenu}
        >
          <img
            src="img/menu.svg"
            id="menuIcon1"
            alt=""
            className={`h-12 w-12 p-4 ${menuOpen ? "hidden" : ""}`}
          />
          <img
            src="img/cube.svg"
            id="menuIcon2"
            alt=""
            className={`h-12 w-12 p-3 animate-spin brightness-0 invert saturate-0 ${
              menuOpen ? "" : "hidden"
            }`}
          />
        </button>
      </div>
      <div
        className={`md:hidden fixed top-20 right-4 rounded-[8px] duration-300 z-40 ${
          menuOpen
            ? "z-10 translate-x-0 bg-white/5 backdrop-blur-lg"
            : "-z-10 pointer-events-none text-transparent translate-x-10 bg-white/0 backdrop-blur-none"
        }`}
      >
        <ul className="p-4 flex flex-col gap-3">
          <a href="#work" className="hover:text-red-500">
            <div className="opacity-50 font-bold font-mono">01</div>
            <div className="font-semibold">Work</div>
          </a>
          <a href="#playground" className="hover:text-red-500">
            <div className="opacity-50 font-bold font-mono">02</div>
            <div className="font-semibold">Playground</div>
          </a>
          <a href="#about" className="hover:text-red-500">
            <div className="opacity-50 font-bold font-mono">03</div>
            <div className="font-semibold">About Me</div>
          </a>
        </ul>
      </div>
      {/* large screen */}
      <div
        className={`hidden md:flex fixed top-3 right-10 gap-5 p-3 text-xs myAnimation2 bg-black/20 backdrop-blur-lg rounded-[8px] duration-700 ${
          isScrolled
            ? "opacity-0 -z-10 -translate-y-40"
            : "opacity-100 z-40 translate-y-0"
        }`}
      >
        <a href="#work" className="px-3 hover:text-red-500">
          <div className="font-mono">01</div>
          <div className="font-semibold">Work</div>
        </a>
        <a href="#playground" className="px-3 hover:text-red-500">
          <div className="font-mono">02</div>
          <div className="font-semibold">Playground</div>
        </a>
        <a href="#about" className="px-3 hover:text-red-500">
          <div className="font-mono">03</div>
          <div className="font-semibold">About Me</div>
        </a>
      </div>
      <div
        className={`hidden md:grid fixed top-3 right-10 z-40 gap-5 p-3 text-xs myAnimation2 bg-black/20 backdrop-blur-lg rounded-[8px] duration-700 ${
          isScrolled
            ? "opacity-100 z-40 translate-x-0"
            : "opacity-0 -z-10 translate-x-40"
        }`}
      >
        <a href="#work" className="px-3 hover:text-red-500">
          <div className="font-mono">01</div>
          <div className="font-semibold">Work</div>
        </a>
        <a href="#playground" className="px-3 hover:text-red-500">
          <div className="font-mono">02</div>
          <div className="font-semibold">Playground</div>
        </a>
        <a href="#about" className="px-3 hover:text-red-500">
          <div className="font-mono">03</div>
          <div className="font-semibold">About Me</div>
        </a>
      </div>

      {/*  Side Bar */}
      <a
        href="tel:+959255599863"
        className="fixed -right-3 bottom-32 p-3 -rotate-90 z-20 bg-black/95"
      >
        Contact
      </a>

      {/*  Bottom navbar : initially hidden */}
      <div
        className={`fixed z-40 bottom-0 left-0 w-full text-white py-4 px-6 duration-700 ${
          isScrolled ? "translate-y-0" : "translate-y-20"
        }`}
      >
        <div className="mx-auto flex justify-center gap-2">
          <a
            href="https://www.facebook.com/profile.php?id=100087994523929&mibextid=LQQJ4d"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/20"
          >
            <img src="img/facebookIcon.svg" alt="" className="w-3" />
          </a>
          <a
            href="http://linkedin.com/in/kaung-khant-kyaw-688141212"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/20"
          >
            <img src="img/linkedin.svg" alt="" className="w-3" />
          </a>
          <a
            href="mailto:kaungkhantkyawdk@gmail.com"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/20"
          >
            <img src="img/envelope-regular.svg" alt="" className="w-3" />
          </a>
          <a
            href="https://t.me/DanialK007"
            className="inline-block p-2 rounded-full backdrop-blur-md border border-white/10 bg-white/20"
          >
            <img src="img/telegram.png" alt="" className="w-3" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
