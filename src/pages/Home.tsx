// src/pages/Home.tsx
import React from 'react';
import Videos from '../components/Videos';
import Herosection from '../components/Herosection';
import AboutSection from '../components/AboutSection';
import EnrollSection from '../components/EnrollSection';
import InfoSection from '../components/InfoSection';
import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewsletterSection';

const Home: React.FC = () => {
  return (
    <div className="bg-background text-text-dark min-h-screen mx-auto w-4/5 p-4">
      <h1 className='text-4xl font-bold text-primary mb-4 hover:bg-[var(--secondary)]'>
        Welcome to Kinderfun
      </h1>
      <Herosection />
      <Videos />
      <AboutSection />
      <EnrollSection />
      <InfoSection  />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;