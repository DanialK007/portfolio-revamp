// ProjectModal.js
import React, { useEffect } from "react";
import { LuExternalLink } from "react-icons/lu";

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    if (isOpen) {
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
      className={`fixed inset-0 bg-black/25 z-50 overflow-y-scroll duration-500 ease-out ${
        isOpen ? "backdrop-blur-xl" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose} // Close the modal on backdrop click
    >
      {isOpen && (
        <div className="py-20 px-5">
          <div
            className="bg-black rounded-3xl rounded-tr-2xl overflow-hidden p-5 w-full max-w-5xl mx-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal when clicking inside
          >
            <button
              className="absolute top-0 right-0 text-3xl py-1 px-5 rounded-bl-2xl bg-white text-black duration-200 scale-125 active:scale-100"
              onClick={onClose}
            >
              &times;
            </button>
            <div className="flex flex-col gap-4">
              <div className="overflow-x-scroll">
                <div className="flex gap-5 w-[2500px]">
                  <div
                    className={`w-full p-5 lg:p-10 bg-gradient-to-br rounded-3xl ${project.gradient}`}
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      src={project.videoSrc}
                      className="h-full rounded-2xl"
                    ></video>
                  </div>
                  {project.photos.map((photos) => (
                    <div className="w-full">
                      <img
                        src={photos}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full rounded-3xl object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Add more images or content as needed */}
              <h2 className="text-2xl lg:text-3xl myFont">{project.title}</h2>
              <p className="text-gray-700 hidden">{project.description}</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus earum recusandae magnam adipisci ullam, quos rem
                ad enim eveniet illum, deserunt dolor corporis aut voluptatum
                minus praesentium quia officiis nulla. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Numquam labore quam obcaecati
                deleniti animi, quis in reprehenderit optio quibusdam minus
                libero consequatur eligendi! Assumenda vel ex dolores sequi
                praesentium asperiores.
              </p>
              <div className="flex flex-col items-start lg:flex-row gap-2">
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center justify-center border-2 border-white hover:bg-white hover:text-black duration-300 rounded-xl py-2 px-4"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
                <a
                  href={project.href}
                  target="_blank"
                  className="flex items-center justify-center border-2 border-white bg-white text-black rounded-xl py-2 px-4"
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
