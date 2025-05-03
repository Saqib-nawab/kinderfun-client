import React from "react";
import image_p_2 from "../assets/banner.jpg";
import image_p_1 from "../assets/image_p_1.png";
import kid_one from "../assets/kid_one.jpg";
import kid_two from "../assets/kid_two.jpg";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-background text-text-dark py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: 2x2 Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <img
            src={image_p_1}
            alt="Kid Activity 1"
            className="object-cover w-full h-full rounded-lg shadow"
          />
          <img
            src={image_p_2}
            alt="Kid Activity 2"
            className="object-cover w-full h-full rounded-lg shadow"
          />
          <img
            // src={image_p_3}
            src={kid_one}
            alt="Kid Activity 3"
            className="object-cover w-full h-full rounded-lg shadow"
          />
          <img
            src={kid_two}
            alt="Kid Activity 4"
            className="object-cover w-full h-full rounded-lg shadow"
          />
        </div>

        {/* Right Column: Text + Stats */}
        <div>
          {/* Small Title / Subtitle */}
          <p className="text-secondary font-semibold uppercase mb-2 tracking-wide">
            Part of the Family Since 2001
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Your Child Will Take The Lead Learning
          </h2>

          {/* Paragraph / Description */}
          <p className="text-lg text-gray-dark mb-6">
            We are constantly expanding the range of services offered, taking
            care of children of all ages. Our goal is to carefully educate and
            develop children in a fun way. We strive to turn the learning
            process into a bright event so that children study with pleasure.
          </p>

          {/* Stats / Highlights */}
          <div className="flex gap-8">
            <div>
              <p className="text-4xl font-bold text-primary">75</p>
              <p className="text-sm text-gray-dark">Outdoor Activities</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">23</p>
              <p className="text-sm text-gray-dark">Loving Teachers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
