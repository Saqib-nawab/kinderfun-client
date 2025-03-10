import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="m-8 p-6 bg-gradient-to-r from-lightBlue to-lightOrange rounded-lg shadow-soft">
      <h1 className="text-4xl font-kinderFun text-primary mb-4">
        Welcome to Kinderfun!
      </h1>
      <p className="text-lg text-primary mt-10">
        Explore our collection of engaging rhymes, stories, and activities designed for kids and parents alike.
      </p>
    </div>
  );
};

export default Home;
