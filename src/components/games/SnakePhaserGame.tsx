// src/components/SnakePhaserGame.tsx
import React from "react";

const SnakePhaserGame: React.FC = () => {
  return (
    // Full-width background for the page.
    <div className="bg-[var(--background)] text-[var(--text-dark)] min-h-screen font-sans">
      {/* Centered container that mimics your other pages */}
      <div className="mx-auto w-full sm:w-4/5 p-4 flex flex-col items-center justify-center">
        {/* Game Title */}
        <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">
          Crazy Snake - Arcade Classic!
        </h1>

        {/* Game Description */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-[var(--secondary)]">
            About the Game:
          </h2>
          <p className="text-md text-[var(--text-dark)] mt-2">
            <strong>Crazy Snake</strong> is a{" "}
            <strong>fast-paced arcade game</strong> where you control a hungry
            snake moving around a rotating arena, dodging obstacles and
            collecting food to grow longer!
          </p>
          <p className="text-md text-[var(--text-dark)] mt-2">
            This game helps improve{" "}
            <strong>
              hand-eye coordination, reaction speed, and strategic movement
              planning
            </strong>
            . Be careful—hitting a wall or biting your own tail means{" "}
            <strong>game over</strong>!
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl mt-4">
          <h2 className="text-lg font-semibold text-[var(--secondary)]">
            How to Play:
          </h2>
          <ul className="text-md text-[var(--text-dark)] list-disc list-inside mt-2">
            <li>
              Use <strong>Arrow Keys</strong> to control the snake's movement.
            </li>
            <li>
              Eat <strong>food</strong> to grow longer, but don't crash into
              your own tail!
            </li>
            <li>
              The <strong>game window rotates</strong>, so be prepared for
              unexpected changes!
            </li>
            <li>
              Hitting a <strong>wall or your own body</strong> results in{" "}
              <strong>instant death</strong>.
            </li>
            <li>
              This game is <strong>not mobile-friendly</strong>, so play on a
              computer for the best experience.
            </li>
          </ul>
        </div>

        {/* Game Frame - Fixed Size, No Scrollbars, Centered */}
        <div className="mt-6 flex justify-center items-center">
          <iframe
            src="https://jojoee.github.io/phaser-examples/games/crazy-snake/"
            title="Crazy Snake Game"
            width="500"
            height="500"
            className="border-none rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SnakePhaserGame;
