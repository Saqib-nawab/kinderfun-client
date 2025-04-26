import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import parent_review2 from "../assets/bannerImg_tree.jpeg";
import parent_review3 from "../assets/kid_one.jpg";
import parent_review from "../assets/parent_review.png";
// Dummy testimonials data
const TESTIMONIALS = [
  {
    name: "Vivi Marian",
    text: "They handle all situations professionally and with genuine care. I am absolutely delighted that my child has been there from almost day 1 and he really enjoys going!",
    // image: "https://dummyimage.com/600x400/ccc/000", // Replace with your own image
    image: parent_review,
  },
  {
    name: "John Doe",
    text: "Kinderfun's rhymes and animations are a lifesaver! My daughter can’t get enough of the songs, and she’s learning so many new words every day.",
    // image: "https://dummyimage.com/600x400/eee/000",
    image: parent_review2,
  },
  {
    name: "Sara Lee",
    text: "The team at Kinderfun is so caring. My son loves their cartoon stories. It's fun and educational, and I love watching him sing along!",
    // image: "https://dummyimage.com/600x400/aaa/000",
    image: parent_review3,
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-background text-text-dark py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text / Testimonial Content */}
        <div>
          <p className="text-secondary font-semibold uppercase mb-2 tracking-wide">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Parents Reviews
          </h2>
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg shadow p-6 relative">
            {/* Quote Icon */}
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-secondary text-3xl absolute -top-4 -left-3"
            />
            <p className="text-gray-dark mb-4 italic">
              {currentTestimonial.text}
            </p>
            <h4 className="font-bold text-lg text-primary">
              {currentTestimonial.name}
            </h4>
          </div>
        </div>

        {/* Right Column: Carousel */}
        <div className="relative">
          {/* Carousel Image */}
          <div className="overflow-hidden rounded-lg shadow h-64 md:h-80">
            <img
              src={currentTestimonial.image}
              alt={`${currentTestimonial.name} testimonial`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Carousel Controls */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white shadow focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-primary" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white shadow focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-primary" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex ? "bg-secondary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
