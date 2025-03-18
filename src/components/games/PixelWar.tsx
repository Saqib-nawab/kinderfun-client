import React from "react";

const PixelWarGame: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans">
      {/* Game Title */}
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">
        Pixel War - Shoot & Survive!
      </h1>

      {/* Game Description */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          About the Game:
        </h2>
        <p className="text-md text-[var(--text-dark)] mt-2">
          <strong>Pixel War</strong> is a **fast-paced shooter game** where you
          battle endless waves of enemies. Use **strategy, precision, and
          upgrades** to survive the longest!
        </p>
        <p className="text-md text-[var(--text-dark)] mt-2">
          This game improves **reflexes, decision-making, and hand-eye
          coordination**, making it a great challenge for quick thinkers and
          action lovers.
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-2xl mt-4">
        <h2 className="text-lg font-semibold text-[var(--secondary)]">
          How to Play:
        </h2>
        <ul className="text-md text-[var(--text-dark)] list-disc list-inside mt-2">
          <li>
            Use the <strong>Arrow Keys</strong> to **upgrade your weapons**.
          </li>
          <li>
            Use <strong>Spacebar</strong> or <strong>Mouse Click</strong> to
            **shoot at enemies**.
          </li>
          <li>Eliminate enemies and earn **points**.</li>
          <li>Survive as long as possible while avoiding enemy fire.</li>
          <li>The game becomes **harder over time**—stay alert!</li>
        </ul>
        <p className="text-md text-[var(--text-dark)] mt-4">
          <strong>Note:</strong> The game is **not mobile-friendly** and is best
          played on a **keyboard**.
        </p>
      </div>

      {/* Game Frame - Fixed Size, Centered */}
      <div className="mt-6 flex justify-center items-center">
        <iframe
          src="https://noowxela.github.io/phaser-examples/games/pixel-war/"
          title="Pixel War Game"
          width="800"
          height="600"
          className="border-none rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default PixelWarGame;
