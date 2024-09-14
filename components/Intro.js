import FadeIn from "./framer-motion/FadeIn";

function Intro() {
  return (
    <div id="intro">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <FadeIn duration="1.2" className="col-span-1 lg:p-8">
          <div className="text-4xl xl:text-5xl text-white/40 p-5">
            Junior
            <span className="text-white"> Frontend Developer </span>dedicated to
            the <span className="text-white"> craft</span> of creating
            <span className="text-white"> 0➝1</span> digital experiences till the
            last <span className="text-white"> detail</span>.
          </div>
          <div className="grid grid-cols-2 py-4">
            <div className="p-5 text-white/30 text-sm">
              I've done multiple frontend projects with
              <span className="text-white"> High Quality Contents</span>.
            </div>
            <div className="p-5 text-white/30 text-sm">
              Currently, learning at
              <span className="text-white"> MIBA university</span>.
            </div>
          </div>
        </FadeIn>
        <FadeIn duration="1.6" className="hidden col-span-1 lg:flex items-center justify-center">
          <img
            src="img/Radilson Gomes - Portfolio 2023 - Google Chrome 4_19_2024 1_33_10 PM.png"
            alt=""
            className="cap2 h-102 object-cover saturate-100 brightness-75 hover:brightness-100 hover:saturate-100 duration-500 hover:scale-105"
          />
        </FadeIn>
      </div>
    </div>
  );
}

export default Intro;
