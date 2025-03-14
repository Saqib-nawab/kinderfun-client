// src/components/GermsPhaserGame.tsx
import React, { useEffect, useRef } from 'react';

const GermsPhaserGame: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load the compiled main.js script for your Phaser game.
    // Make sure your build process (or public folder) exposes the compiled version of src/phaser/avoidthegerms/main.js.
    const script = document.createElement('script');
    script.src = '../phaser/avoidthegerms/main.ts'; // Adjust this path as needed.
    script.async = true;
    const gameContainer = gameContainerRef.current;
    if (gameContainer) {
      gameContainer.appendChild(script);
    }
    return () => {
      if (gameContainer) {
        gameContainer.removeChild(script);
      }
    };
  }, []);

  return <div id="phaser-example" ref={gameContainerRef} />;
};

export default GermsPhaserGame;
