// src/pages/Home.tsx
import React from "react";
import Videos from "../components/Videos";
import Herosection from "../components/Herosection";
import AboutSection from "../components/AboutSection";
import EnrollSection from "../components/EnrollSection";
import InfoSection from "../components/InfoSection";
import TestimonialSection from "../components/TestimonialSection";
import NewsletterSection from "../components/NewsletterSection";

const Home: React.FC = () => {
  return (
    // Full-width outer wrapper with forced horizontal overflow hidden
    <div className="bg-background text-text-dark min-h-screen overflow-x-hidden">
      {/* Centered inner container */}
      <div className="mx-auto w-full sm:w-4/5 p-4">
        <Herosection />
        <Videos />
        <AboutSection />
        <EnrollSection />
        <InfoSection />
        <TestimonialSection />
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Home;
