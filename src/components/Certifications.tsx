import { useState } from "react";
import c from "../assets/c.jpg";
import cs50p from "../assets/cs50p.png";
import nc3 from "../assets/nc_3.jpg";
import up from "../assets/up.jpg";
import { BlurFade } from "./magicui/blur-fade";

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [cs50p, nc3, up, c];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="certi" className="flex flex-col items-center justify-center mt-32">
      <BlurFade
                      className="flex flex-col items-center justify-center w-full"
                      duration={1}
                      triggerOnScroll={true} // Animation starts when fully visible
                  >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20 text-center">Certifications</h1>
  
      <div
        
        className="relative w-[50vw] h-[60vh] flex flex-col items-center justify-center"
      >
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-100">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                className="w-full h-full object-contain"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
  
        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
  
        {/* Previous Button */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
  
        {/* Next Button */}
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only" > Next</span>
          </span>
        </button>
      </div>
      </BlurFade>
    </div>
  );
  
  
};

export default Certifications;
