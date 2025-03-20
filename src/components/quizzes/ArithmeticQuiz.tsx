import React, { useEffect, useRef } from "react";

const ArithmeticQuiz: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create and append the H5P resizer script for proper iframe resizing
    const script = document.createElement("script");
    script.src =
      "https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js";
    script.charset = "UTF-8";
    script.async = true;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup the script when the component unmounts
    return () => {
      if (containerRef.current && containerRef.current.contains(script)) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans"
    >
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-[var(--primary)] mb-6">
        Arithmetic Quizzes
      </h1>
      <p className="text-lg mb-8 max-w-3xl text-center">
        Test your arithmetic skills with these interactive quizzes on
        Multiplication, Addition, Division, and Subtraction.
      </p>

      {/* Grid Layout for the Quizzes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Multiplication Quiz */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-[var(--secondary)] mb-4">
            Multiplication Quiz
          </h2>
          <div className="relative w-full h-[388px] max-w-[1091px]">
            <iframe
              src="https://h5p.org/h5p/embed/6725"
              width="1091"
              height="388"
              frameBorder="0"
              title="Arithmetic Quiz - Multiplication"
              allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Addition Quiz */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-[var(--secondary)] mb-4">
            Addition Quiz
          </h2>
          <div className="relative w-full h-[388px] max-w-[1091px]">
            <iframe
              src="https://h5p.org/h5p/embed/57017"
              width="1091"
              height="388"
              frameBorder="0"
              title="Arithmetic Quiz - Addition"
              allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Division Quiz */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-[var(--secondary)] mb-4">
            Division Quiz
          </h2>
          <div className="relative w-full h-[388px] max-w-[1091px]">
            <iframe
              src="https://h5p.org/h5p/embed/57020"
              width="1091"
              height="388"
              frameBorder="0"
              title="Arithmetic Quiz - Division"
              allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Subtraction Quiz */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-[var(--secondary)] mb-4">
            Subtraction Quiz
          </h2>
          <div className="relative w-full h-[388px] max-w-[1091px]">
            <iframe
              src="https://h5p.org/h5p/embed/57018"
              width="1091"
              height="388"
              frameBorder="0"
              title="Arithmetic Quiz - Subtraction"
              allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArithmeticQuiz;
