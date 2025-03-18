import React from "react";

const Puzzle2048: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans">
      {/* Game Title */}
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">
        2048 - Merge & Win!
      </h1>

      {/* Game Description */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          About the Game:
        </h2>
        <p className="text-md text-[var(--text-dark)] mt-2">
          <strong>2048</strong> is a{" "}
          <strong>strategic number puzzle game</strong> where players slide
          numbered tiles on a grid to <strong>combine matching values</strong>{" "}
          and reach the ultimate
          <strong>2048 tile</strong>! Plan your moves carefully to avoid getting
          stuck.
        </p>
        <p className="text-md text-[var(--text-dark)] mt-2">
          Playing 2048 helps improve{" "}
          <strong>
            strategic thinking, number sense, and logical problem-solving skills
          </strong>
          .
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl mt-4">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          How to Play:
        </h2>
        <ul className="text-md text-[var(--text-dark)] list-disc list-inside mt-2">
          <li>
            Use <strong>WASD</strong> or <strong>Arrow Keys</strong> to slide
            tiles.
          </li>
          <li>
            Tiles with the same number <strong>merge</strong> when they collide.
          </li>
          <li>
            Keep merging tiles to reach <strong>2048</strong>!
          </li>
          <li>
            Avoid <strong>filling the board</strong> without possible moves.
          </li>
          <li>
            Plan your moves to set up <strong>chain reactions</strong> for high
            scores!
          </li>
        </ul>
      </div>

      {/* Game Frame - Fixed Size, No Scrollbars, Centered */}
      <div className="mt-6 flex justify-center items-center">
        <iframe
          src="https://jojoee.github.io/phaser-examples/games/2048/"
          title="2048 Game"
          width="400"
          height="400"
          className="border-none rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Puzzle2048;
