import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const InfoSection: React.FC = () => {
  return (
    <section className="bg-background text-text-dark py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Your Child's Best Start In Life
          </h2>
          <p className="text-lg text-gray-dark mb-6">
            We are constantly expanding the range of 2D animations and rhymes
            offered, engaging children of all ages. Our goal is to carefully
            educate and develop them in a fun way. We strive to turn the
            learning process into a bright event so that children watch with
            pleasure.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-secondary mt-1"
              />
              <span>
                Comprehensive cartoon library for individualized learning
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-secondary mt-1"
              />
              <span>Fun field trips &amp; on-screen presentations</span>
            </li>
            <li className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-secondary mt-1"
              />
              <span>Personalized attention in a small-channel environment</span>
            </li>
            <li className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-secondary mt-1"
              />
              <span>Engaging after-video activities to reinforce learning</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Image (with a decorative shape if desired) */}
        <div className="relative">
          {/* Decorative Circle (optional) */}
          <div className="hidden lg:block absolute bg-light-orange w-64 h-64 rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          <img
            src="https://dummyimage.com/600x400/eee/000"
            alt="Child learning with cartoons"
            className="object-cover w-full rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
