import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-background text-textDark min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-primary">
        Welcome to Kinderfun!
      </h1>
      <p className="mt-5 text-lg text-secondary">
        Engaging visuals with featured videos and interactive elements.
      </p>
    </div>
  );
};

export default Home;