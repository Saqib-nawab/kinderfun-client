import React from "react";

const FlappyBirdPhaserGame: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans">
      {/* Game Title */}
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">
        Flappy Bird - Navigate & Score!
      </h1>

      {/* Game Description */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          About the Game:
        </h2>
        <p className="text-md text-[var(--text-dark)] mt-2">
          <strong>Flappy Bird</strong> is a **fast-paced reflex game** where you
          control a small bird, helping it navigate between gaps in the
          buildings. Timing and precision are key to achieving the highest
          score!
        </p>
        <p className="text-md text-[var(--text-dark)] mt-2">
          This game enhances{" "}
          <strong>hand-eye coordination, reaction time, and focus</strong>. A
          single mistake can end your run, so stay sharp and aim for a high
          score!
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl mt-4">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          How to Play:
        </h2>
        <ul className="text-md text-[var(--text-dark)] list-disc list-inside mt-2">
          <li>
            Click anywhere inside the game window to{" "}
            <strong>start the game</strong>.
          </li>
          <li>
            Tap or click to make the bird <strong>flap and ascend</strong>.
          </li>
          <li>Guide the bird through the **open gaps** between buildings.</li>
          <li>Each successful pass through a gap earns **1 point**.</li>
          <li>
            Hitting a **wall, ground, or building** results in{" "}
            <strong>game over</strong>.
          </li>
          <li>
            Keep flapping and navigate **carefully** to get the highest score!
          </li>
        </ul>
      </div>

      {/* Game Frame - Fixed Size, Centered */}
      <div className="mt-6 flex justify-center items-center">
        <iframe
          src="https://noowxela.github.io/phaser-examples/games/flappy-bird/"
          title="Flappy Bird Game"
          width="800"
          height="600"
          className="border-none rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default FlappyBirdPhaserGame;
