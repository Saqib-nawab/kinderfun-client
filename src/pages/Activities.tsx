// src/pages/Activities.tsx
import React, { useState, JSX } from 'react';
import PuzzlePhaserGame from '../components/puzzels/PuzzlePhaser';
import SnakePhaserGame from '../components/games/SnakePhaserGame';
import FlappyBirdPhaserGame from '../components/games/FlappyBirdPhaserGame';
import RunPhaserGame from '../components/games/RunPhaserGame';
import PixelWarGame from '../components/games/PixelWar';
import BoxJumpGame from '../components/games/BoxJumpGame';
import DragAndMatch from '../components/puzzels/DragAndMatchPuzzel';

//https://jojoee.github.io/phaser-examples/games/breakout/  this is a good one we will add this later

type Category = 'games' | 'puzzles' | 'quizzes' | 'creativity' | null;
type GameType = 'puzzle' | 'snake' | 'flappy' | 'run' | 'pixelwar' | 'boxjump' | 'dragnmatch' | null;

const Activities: React.FC = () => {
  // Two state variables: one for category and one for the selected game
  const [selectedCategory, setSelectedCategory] = useState<Category>(null);
  const [selectedGame, setSelectedGame] = useState<GameType>(null);

  // STEP 1: Choose a category if none is selected
  if (!selectedCategory) {
    return (
      <div className="p-4 bg-background text-text-dark font-sans text-center">
        <h1 className="text-4xl mb-4">Educational Activities</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div
            className="bg-primary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedCategory('games')}
          >
            <h2 className="text-2xl mb-2">Games</h2>
            <p>Fast-paced action games to test your reflexes.</p>
          </div>
          <div
            className="bg-primary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedCategory('puzzles')}
          >
            <h2 className="text-2xl mb-2">Puzzles</h2>
            <p>Challenging puzzles that spark your mind.</p>
          </div>
          <div
            className="bg-primary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedCategory('quizzes')}
          >
            <h2 className="text-2xl mb-2">Quizzes</h2>
            <p>Fun quizzes to test your knowledge.</p>
          </div>
          <div
            className="bg-primary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedCategory('creativity')}
          >
            <h2 className="text-2xl mb-2">Creativity</h2>
            <p>Activities to unleash your artistic side.</p>
          </div>
        </div>
      </div>
    );
  }

  // STEP 2: Based on the category, let the user select a game/activity.
  if (!selectedGame) {
    let activitiesContent: JSX.Element | null = null;

    if (selectedCategory === 'games') {
      activitiesContent = (
        <div className="flex flex-wrap justify-center gap-4">
          <div
            className="bg-secondary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedGame('snake')}
          >
            <h2 className="text-2xl mb-2">Snake Game</h2>
            <p>Control the snake and gobble up food!</p>
          </div>
          <div
            className="bg-secondary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedGame('flappy')}
          >
            <h2 className="text-2xl mb-2">Flappy Bird</h2>
            <p>Tap to flap and avoid obstacles.</p>
          </div>
          <div
            className="bg-secondary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedGame('run')}
          >
            <h2 className="text-2xl mb-2">Run Game</h2>
            <p>Test your reflexes in this fast-paced game.</p>
          </div>
          <div
            className="bg-secondary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedGame('pixelwar')}
          >
            <h2 className="text-2xl mb-2">Pixel War Game</h2>
            <p>Engage in a pixelated battle of reflexes.</p>
          </div>
          <div
            className="bg-secondary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedGame('boxjump')}
          >
            <h2 className="text-2xl mb-2">Box Jump Game</h2>
            <p>Jump between boxes and test your timing.</p>
          </div>
        </div>
      );
    } else if (selectedCategory === 'puzzles') {
      activitiesContent = (
        <div className="flex flex-wrap justify-center gap-4">
          <div
            className="bg-secondary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedGame('puzzle')}
          >
            <h2 className="text-2xl mb-2">Puzzle Game</h2>
            <p>Arrange pieces to complete the image.</p>
          </div>
          <div
            className="bg-secondary text-text-white p-4 rounded shadow-soft cursor-pointer w-64 hover:shadow-intense transition-shadow"
            onClick={() => setSelectedGame('dragnmatch')}
          >
            <h2 className="text-2xl mb-2">Drag and Match</h2>
            <p>Drag and match items to their slots.</p>
          </div>
        </div>
      );
    } else if (selectedCategory === 'quizzes') {
      // Placeholder for quizzes – you can replace this with an actual quiz component later
      activitiesContent = (
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-secondary text-text-white p-4 rounded w-64">
            <h2 className="text-2xl mb-2">General Quiz</h2>
            <p>Coming soon...</p>
          </div>
        </div>
      );
    } else if (selectedCategory === 'creativity') {
      // Placeholder for creativity-based activities – for example, a drawing app
      activitiesContent = (
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-secondary text-text-white p-4 rounded w-64">
            <h2 className="text-2xl mb-2">Drawing App</h2>
            <p>Coming soon...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="p-4 bg-background text-text-dark font-sans">
        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedGame(null);
          }}
          className="px-4 py-2 bg-secondary text-text-white rounded mb-4 hover:bg-opacity-90 transition-colors"
        >
          &larr; Back to Categories
        </button>
        <h2 className="text-4xl mb-4">
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Activities
        </h2>
        {activitiesContent}
      </div>
    );
  }

  // STEP 3: Render the selected activity along with its instructions.
  const renderGame = () => {
    switch (selectedGame) {
      case 'puzzle':
        return <PuzzlePhaserGame />;
      case 'snake':
        return <SnakePhaserGame />;
      case 'flappy':
        return <FlappyBirdPhaserGame />;
      case 'run':
        return <RunPhaserGame />;
      case 'pixelwar':
        return <PixelWarGame />;
      case 'boxjump':
        return <BoxJumpGame />;
      case 'dragnmatch':
        return <DragAndMatch />;
      default:
        return null;
    }
  };

  const renderInstructions = () => {
    if (selectedGame === 'puzzle') {
      return (
        <>
          <h2 className="text-4xl mb-2">Puzzle Game Instructions</h2>
          <p className="text-lg mb-4">
            Drag each puzzle piece into its correct position. When all pieces are correctly placed, a new, more challenging puzzle will appear.
          </p>
        </>
      );
    }
    if (selectedGame === 'snake') {
      return (
        <>
          <h2 className="text-4xl mb-2">Snake Game Instructions</h2>
          <p className="text-lg mb-4">
            Use the arrow keys to control the snake. Eat food to grow longer, but avoid colliding with yourself.
          </p>
        </>
      );
    }
    if (selectedGame === 'flappy') {
      return (
        <>
          <h2 className="text-4xl mb-2">Flappy Bird Instructions</h2>
          <p className="text-lg mb-4">
            Click or tap to flap and navigate between obstacles. Aim for your highest score!
          </p>
        </>
      );
    }
    if (selectedGame === 'run') {
      return (
        <>
          <h2 className="text-4xl mb-2">Run Game Instructions</h2>
          <p className="text-lg mb-4">
            Test your reflexes by running and dodging obstacles. Stay focused and have fun!
          </p>
        </>
      );
    }
    if (selectedGame === 'pixelwar') {
      return (
        <>
          <h2 className="text-4xl mb-2">Pixel War Game Instructions</h2>
          <p className="text-lg mb-4">
            Engage in a pixel battle! Use your reflexes to dodge and attack. Have fun in this vibrant challenge.
          </p>
        </>
      );
    }
    if (selectedGame === 'boxjump') {
      return (
        <>
          <h2 className="text-4xl mb-2">Box Jump Game Instructions</h2>
          <p className="text-lg mb-4">
            Jump between boxes with precise timing. Test your skills and see how far you can go!
          </p>
        </>
      );
    }
    if (selectedGame === 'dragnmatch') {
      return (
        <>
          <h2 className="text-4xl mb-2">Drag and Match Instructions</h2>
          <p className="text-lg mb-4">
            Drag and match the correct items to their respective slots. Enjoy the challenge and have fun!
          </p>
        </>
      );
    }
    return null;
  };

  return (
    <div className="p-4 bg-background text-text-dark font-sans">
      <button
        onClick={() => setSelectedGame(null)}
        className="px-4 py-2 bg-secondary text-text-white rounded mb-4 hover:bg-opacity-90 transition-colors"
      >
        &larr; Back to Activities
      </button>
      {renderInstructions()}
      {renderGame()}
    </div>
  );
};

export default Activities;
