// src/pages/Activities.tsx
import React, { useState } from 'react';
import PuzzlePhaserGame from '../components/PuzzlePhaserGame';
import SnakePhaserGame from '../components/SnakePhaserGame';

const Activities: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<'puzzle' | 'snake' | null>(null);

  if (selectedGame === null) {
    return (
      <div className="p-4 bg-background text-text-dark font-sans text-center">
        <h1 className="text-4xl mb-4">Educational Activities</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div
            className="bg-primary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedGame('puzzle')}
          >
            <h2 className="text-2xl mb-2">Puzzle Game</h2>
            <p>
              Arrange the boxes to completely fill the space. The puzzle starts easy and gets more complex as you
              advance.
            </p>
          </div>
          <div
            className="bg-primary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedGame('snake')}
          >
            <h2 className="text-2xl mb-2">Snake Game</h2>
            <p>
              Control the snake with the arrow keys, eat food to grow longer, and avoid running into yourself for the
              highest score.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (selectedGame === 'puzzle') {
    return (
      <div className="p-4 bg-background text-text-dark font-sans">
        <button
          onClick={() => setSelectedGame(null)}
          className="px-4 py-2 bg-secondary text-text-white rounded mb-4 hover:bg-opacity-90 transition-colors"
        >
          &larr; Back
        </button>
        <h2 className="text-4xl mb-2">Puzzle Game Instructions</h2>
        <p className="text-lg mb-4">
          Drag each puzzle piece into its correct position. When all pieces are correctly placed, the level will complete
          and a new, more challenging puzzle will appear.
        </p>
        <PuzzlePhaserGame />
      </div>
    );
  }

  if (selectedGame === 'snake') {
    return (
      <div className="p-4 bg-background text-text-dark font-sans">
        <button
          onClick={() => setSelectedGame(null)}
          className="px-4 py-2 bg-secondary text-text-white rounded mb-4 hover:bg-opacity-90 transition-colors"
        >
          &larr; Back
        </button>
        <h2 className="text-4xl mb-2">Snake Game Instructions</h2>
        <p className="text-lg mb-4">
          Use the arrow keys to control the snake. Eat food to grow longer, but be careful not to run into yourself.
          Aim for the highest score!
        </p>
        <SnakePhaserGame />
      </div>
    );
  }

  return null;
};

export default Activities;
