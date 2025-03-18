import React from "react";

const DragAndMatch: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans">
      {/* Game Title */}
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">
        Drag & Match - Puzzle Challenge!
      </h1>

      {/* Game Description */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          About the Game:
        </h2>
        <p className="text-md text-[var(--text-dark)] mt-2">
          <strong>Drag and Match</strong> is a{" "}
          <strong>fast-paced puzzle game</strong> where you match colorful tiles
          by dragging them into position. Align the right colors and clear the
          board before the time runs out!
        </p>
        <p className="text-md text-[var(--text-dark)] mt-2">
          This game helps develop{" "}
          <strong>
            spatial awareness, pattern recognition, and hand-eye coordination
          </strong>
          , making it a fun yet mentally stimulating challenge!
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl mt-4">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          How to Play:
        </h2>
        <ul className="text-md text-[var(--text-dark)] list-disc list-inside mt-2">
          <li>
            Click and <strong>drag tiles</strong> to swap their positions.
          </li>
          <li>
            Match <strong>three or more</strong> tiles of the same color to
            clear them.
          </li>
          <li>
            The <strong>faster</strong> you match, the{" "}
            <strong>higher your score</strong>!
          </li>
          <li>
            Plan ahead and create <strong>combo matches</strong> for extra
            points!
          </li>
        </ul>
      </div>

      {/* Game Frame - Fixed Size, No Scrollbars, Centered */}
      <div className="mt-6 flex justify-center items-center">
        <iframe
          src="https://jojoee.github.io/phaser-examples/games/10000000/"
          title="Drag and Match"
          width="750"
          height="750"
          className="border-none rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default DragAndMatch;
