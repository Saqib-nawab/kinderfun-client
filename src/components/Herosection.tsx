import React, { useEffect, useState } from "react";

// Import your images from the assets folder
import image2 from "../assets/bannerImg_five.webp";
import image1 from "../assets/bannerImg_four.jpg"; // Adjust the path as per your file structure
import image3 from "../assets/bannerImg_six.webp";

const slideContent = (
  <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
    {/* Text Content */}
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary">
        Kinderfun: Inspiring Kids Through Creativity
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
        Kinderfun is a kids' content creation platform with two successful
        YouTube channels focused on 2D animation and rhymes.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white rounded-lg bg-[var(--primary)] hover:bg-[var(--secondary)] focus:ring-4 focus:ring-[var(--primary)]"
      >
        Get Started
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>

      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
      >
        Learn More
      </a>
    </div>

    {/* Image Content */}
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img
        // Optionally, you can add a placeholder image here
        className="object-cover"
      />
    </div>
  </div>
);

const Herosection: React.FC = () => {
  // Array representing three slides with image paths
  const slides = [image1, image2, image3];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((image, index) => (
          <div
            key={index}
            className="min-w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`, // Set the image as background
              backgroundSize: "cover", // Ensure the image fully covers the container
              backgroundPosition: "center", // Center the image to keep it well-positioned
              backgroundRepeat: "no-repeat", // Prevent image from repeating
            }}
          >
            {slideContent}
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-secondary" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Herosection;
