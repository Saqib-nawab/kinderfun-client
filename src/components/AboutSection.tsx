import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-background text-text-dark py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: 2x2 Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <img
            src="https://dummyimage.com/300x300/eee/000"
            alt="Kid Activity 1"
            className="object-cover w-full h-full rounded-lg shadow"
          />
          <img
            src="https://dummyimage.com/300x300/ccc/000"
            alt="Kid Activity 2"
            className="object-cover w-full h-full rounded-lg shadow"
          />
          <img
            src="https://dummyimage.com/300x300/ddd/000"
            alt="Kid Activity 3"
            className="object-cover w-full h-full rounded-lg shadow"
          />
          <img
            src="https://dummyimage.com/300x300/999/fff"
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
