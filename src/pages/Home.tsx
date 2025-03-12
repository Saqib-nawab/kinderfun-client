// src/pages/Home.tsx
import React from 'react';
import Videos from '../components/Videos';
import Herosection from '../components/Herosection';
import AboutSection from '../components/AboutSection';

const Home: React.FC = () => {
  return (
    <div className="bg-background text-text-dark min-h-screen mx-auto w-4/5 p-4">
      <Herosection />
      <Videos />
      <AboutSection />
    </div>
  );
};

export default Home;