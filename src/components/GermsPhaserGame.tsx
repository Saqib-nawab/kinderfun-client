// src/components/GermsPhaserGame.tsx
import React, { useEffect, useRef } from 'react';

const GermsPhaserGame: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load the compiled main.js script for your Phaser game.
    // Make sure the compiled output is available at the specified path.
    const script = document.createElement('script');
    // Update this path to point to the compiled Phaser game script (usually a .js file, not .ts).
    script.src = '/phaser/avoidthegerms/main.js'; 
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

  return (
    <div id="phaser-example" ref={gameContainerRef}>
      <p>Game is loading...</p>
    </div>
  );
};

export default GermsPhaserGame;
