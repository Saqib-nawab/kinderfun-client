import React from "react";

const BoxJumpGame: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans">
      {/* Game Title */}
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">
        Box Jump - Time Your Jumps!
      </h1>

      {/* Game Description */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          About the Game:
        </h2>
        <p className="text-md text-[var(--text-dark)] mt-2">
          <strong>Box Jump</strong> is a **fast-paced arcade game** where timing
          is everything! Jump over obstacles at the right moment and keep
          running as long as you can.
        </p>
        <p className="text-md text-[var(--text-dark)] mt-2">
          This game enhances **reflexes, timing, and coordination**, helping
          players develop quick decision-making skills.
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl mt-4">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          How to Play:
        </h2>
        <ul className="text-md text-[var(--text-dark)] list-disc list-inside mt-2">
          <li>
            Press <strong>Spacebar</strong> or <strong>Tap the screen</strong>{" "}
            to jump.
          </li>
          <li>Time your jumps perfectly to **avoid obstacles**.</li>
          <li>The game **speeds up over time**, making it more challenging!</li>
          <li>Stay focused and jump at the **right moment**.</li>
        </ul>
        <p className="text-md text-[var(--text-dark)] mt-4">
          <strong>Note:</strong> This game works on both **desktop and mobile**.
        </p>
      </div>

      {/* Game Frame - Fixed Size, Centered */}
      <div className="mt-6 flex justify-center items-center">
        <iframe
          src="https://noowxela.github.io/phaser-examples/games/box-jump/"
          title="Box Jump Game"
          width="600"
          height="200"
          className="border-none rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default BoxJumpGame;
