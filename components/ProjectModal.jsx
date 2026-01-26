// ProjectModal.js
import React, { useEffect } from "react";
import { LuExternalLink } from "react-icons/lu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { getLenis } from "../lib/lenis";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [opener, setOpener] = React.useState(false);
  useEffect(() => {
    const lenis = getLenis(); // get the global instance
    if (isOpen) lenis.stop();
    else lenis.start();
  }, [isOpen]);

  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    if (isOpen) {
      setOpener(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset the overflow when the component is unmounted
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // if (!isOpen) return null; // Prevent rendering if not open

  return (
    <div
      className={`fixed flex items-center justify-center inset-0 bg-black/25 z-50 overflow-y-scroll duration-700 ease-out ${
        opener
          ? "backdrop-blur-md px-5 md:px-10 lg:px-20"
          : "px-10 md:px-20 lg:px-56 opacity-0 blur-3xl pointer-events-none"
      }`}
      onClick={() => {
        setOpener(false);
        setTimeout(() => {
          onClose();
        }, 600); // wait 300ms
      }} // Close the modal on backdrop click
    >
      {isOpen && (
        <div className="flex items-center justify-center size-full overflow-y-scroll">
          <div
            className={`bg-black/65 grow max-h-[95%] border border-white/15 rounded-[28px] overflow-hidden w-full max-w-5xl mx-auto relative duration-500`}
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal when clicking inside
          >
            <button
              className="hidden absolute top-8 right-4 text-3xl size-10 rounded-full bg-black/75 text-white duration-200 scale-125 active:scale-100"
              onClick={onClose}
            >
              &times;
            </button>
            <div className="flex flex-col gap-4">
              <div className="pt-5 px-5">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    <CarouselItem className="md:basis-1/2 hover:cursor-grab active:cursor-grabbing">
                      <div
                        className={`h-full relative p-5 lg:p-10 bg-gradient-to-br flex items-center justify-center rounded-3xl bg-black/30 border border-white/15 $ {project.gradient}`}
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          src={project.videoSrc}
                          className="rounded-xl"
                          playsInline
                          preload="none"
                        ></video>
                        <video
                          autoPlay
                          muted
                          loop
                          src={project.videoSrc}
                          className="rounded-xl absolute top-0 left-0 w-full h-full scale-125 -z-10 opacity- blur-[100px]"
                          playsInline
                          preload="none"
                        ></video>
                      </div>
                    </CarouselItem>
                    {project.photos.map((photo, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 hover:cursor-grab active:cursor-grabbing"
                      >
                        <div className="border border-white/15 rounded-3xl overflow-hidden">
                          <img
                            src={photo}
                            alt={`${project.title} screenshot`}
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              {/* Add more images or content as needed */}
              <h2 className="px-5 pt-5 text-2xl lg:text-3xl myFont">
                {project.title}
              </h2>
              <p className="px-5 text-gray-700 hidden">{project.description}</p>
              <p className="px-5">
                A website that turns every scroll into a moment of awe
              </p>
              <div className="px-5 pb-5 flex flex-col items-start lg:flex-row gap-2">
                {/* <a
                  href="#"
                  target="_blank"
                  className="hidden flex items-center justify-center border-2 border-white hover:bg-white hover:text-black duration-300 rounded-xl py-2 px-4"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a> */}
                <a
                  href={project.href}
                  target="_blank"
                  className="flex items-center justify-center border border-neutral-200 bg-neutral-200/75 text-black hover:text-neutral-200 hover:bg-transparent rounded-full active:scale-95 duration-300 py-2 px-4"
                  rel="noopener noreferrer"
                >
                  View Original Website <LuExternalLink className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
