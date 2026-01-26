import { BlurAnimation } from "../../components/ui/BlurAnimation";
import Magnetic from "../../components/ui/Magnetic";
import HyperText from "../../components/ui/hyper-text";
import DomeGallery from "../../components/ui/DomeGallery";

function page() {
  return (
    <div className="min-h-screen">
      <div className="pt-10">
        <BlurAnimation
          duration={1.2}
          className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center justify-center cap1 myFont text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl"
        >
          <span className="font-thin">MY</span>
          <span className="italic font-bold pe-2 relative">
            GALLERY
            <div className="absolute top-1 -left-[2.2rem] sm:top-2 sm:-left-[2.6rem] md:top-3 lg:top-5 xl:top-4 xl:-left-[4.6rem] md:-left-[3.2rem] lg:-left-[4.4rem]">
              <Magnetic>
                <div className="pt-3 px-3 rounded-full">
                  <img
                    src="img/cube.svg"
                    className="hover:invert duration-500 hover:cursor-pointer w-6 sm:w-8 md:w-10 lg:w-14 xl:w-16 animate-spin"
                    alt=""
                  />
                </div>
              </Magnetic>
            </div>
          </span>
        </BlurAnimation>
        <BlurAnimation className="flex justify-between text-sm font-mono px-5 uppercase">
          <HyperText text="Memories" />
          <HyperText text="Achievements" />
        </BlurAnimation>
      </div>

      <div className="w-screen h-screen hover:cursor-grab active:cursor-grabbing">
        <DomeGallery maxVerticalRotationDeg={0} grayscale={false}/>
      </div>
    </div>
  );
}

export default page;
