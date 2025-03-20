import React, { useEffect, useRef } from "react";

const CrosswordQuiz: React.FC = () => {
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
    <div className="flex flex-col items-center justify-center p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans">
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">
        Crossword Quiz
      </h1>
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl mb-4">
        <p className="text-md mt-2">
          Solve the crossword puzzle and test your knowledge!
        </p>
      </div>
      <div className="relative w-full max-w-[1091px] h-[880px]">
        <iframe
          src="https://h5p.org/h5p/embed/1205714"
          width="1091"
          height="880"
          frameBorder="0"
          title="Crossword"
          allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default CrosswordQuiz;
