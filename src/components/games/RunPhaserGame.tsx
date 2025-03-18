import React from "react";

const RunPhaserGame: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans">
      {/* Game Title */}
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">
        Run Away! - Escape the Germs
      </h1>

      {/* Game Description */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          About the Game:
        </h2>
        <p className="text-md text-[var(--text-dark)] mt-2">
          <strong>Run Away!</strong> is a **fast-paced survival game** where you
          must escape from a relentless swarm of **germs chasing you**. The
          longer you survive, the harder the game becomes!
        </p>
        <p className="text-md text-[var(--text-dark)] mt-2">
          This game improves **reaction time, quick decision-making, and
          movement precision**, helping players develop better reflexes under
          pressure!
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl mt-4">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          How to Play:
        </h2>
        <ul className="text-md text-[var(--text-dark)] list-disc list-inside mt-2">
          <li>
            Use the <strong>Arrow Keys</strong> to run and avoid germs.
          </li>
          <li>Survive as long as possible without getting caught!</li>
          <li>Stay **on the move** to avoid getting trapped.</li>
          <li>The game speeds up over time—**stay alert**!</li>
          <li>Getting caught by germs means **game over**.</li>
        </ul>
      </div>

      {/* Game Frame - Fixed Size, Centered */}
      <div className="mt-6 flex justify-center items-center">
        <iframe
          src="https://noowxela.github.io/phaser-examples/games/run/"
          title="Run Game"
          width="800"
          height="600"
          className="border-none rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default RunPhaserGame;
