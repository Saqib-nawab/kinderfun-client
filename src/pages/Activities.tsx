import React, { useState, JSX } from "react";
import PuzzlePhaserGame from "../components/puzzels/PuzzlePhaser";
import SnakePhaserGame from "../components/games/SnakePhaserGame";
import FlappyBirdPhaserGame from "../components/games/FlappyBirdPhaserGame";
import RunPhaserGame from "../components/games/RunPhaserGame";
import PixelWarGame from "../components/games/PixelWar";
import BoxJumpGame from "../components/games/BoxJumpGame";
import DragAndMatch from "../components/puzzels/DragAndMatchPuzzel";

type Category = "games" | "puzzles" | "quizzes" | "creativity" | null;
type GameType =
  | "puzzle"
  | "snake"
  | "flappy"
  | "run"
  | "pixelwar"
  | "boxjump"
  | "dragnmatch"
  | null;

const Activities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(null);
  const [selectedGame, setSelectedGame] = useState<GameType>(null);

  // Step 1: Select a category
  if (!selectedCategory) {
    return (
      <div className="p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans text-center">
        <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">
          Educational Activities
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "Games", category: "games" },
            { name: "Puzzles", category: "puzzles" },
            { name: "Quizzes", category: "quizzes" },
            { name: "Creativity", category: "creativity" },
          ].map(({ name, category }) => (
            <div
              key={category}
              className="bg-[var(--primary)] text-white p-4 rounded-lg shadow-md cursor-pointer w-64 transition-all hover:bg-[var(--secondary)] hover:shadow-lg"
              onClick={() => setSelectedCategory(category as Category)}
            >
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="text-sm opacity-90">Explore {name} activities</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Step 2: Select a specific game/activity
  if (!selectedGame) {
    let activitiesContent: JSX.Element | null = null;

    const gameItems = [
      { name: "Snake Game", game: "snake" },
      { name: "Flappy Bird", game: "flappy" },
      { name: "Run Game", game: "run" },
      { name: "Pixel War Game", game: "pixelwar" },
      { name: "Box Jump Game", game: "boxjump" },
    ];

    const puzzleItems = [
      { name: "Puzzle Game", game: "puzzle" },
      { name: "Drag and Match", game: "dragnmatch" },
    ];

    if (selectedCategory === "games") {
      activitiesContent = (
        <div className="flex flex-wrap justify-center gap-4">
          {gameItems.map(({ name, game }) => (
            <div
              key={game}
              className="bg-[var(--secondary)] text-white p-4 rounded-lg shadow-md cursor-pointer w-64 transition-all hover:bg-[var(--primary)] hover:shadow-lg"
              onClick={() => setSelectedGame(game as GameType)}
            >
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="text-sm opacity-90">Fun & challenging gameplay</p>
            </div>
          ))}
        </div>
      );
    } else if (selectedCategory === "puzzles") {
      activitiesContent = (
        <div className="flex flex-wrap justify-center gap-4">
          {puzzleItems.map(({ name, game }) => (
            <div
              key={game}
              className="bg-[var(--secondary)] text-white p-4 rounded-lg shadow-md cursor-pointer w-64 transition-all hover:bg-[var(--primary)] hover:shadow-lg"
              onClick={() => setSelectedGame(game as GameType)}
            >
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="text-sm opacity-90">Solve fun puzzles</p>
            </div>
          ))}
        </div>
      );
    } else {
      activitiesContent = (
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-[var(--secondary)] text-white p-4 rounded-lg w-64">
            <h2 className="text-2xl font-semibold">Coming Soon...</h2>
          </div>
        </div>
      );
    }

    return (
      <div className="p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans">
        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedGame(null);
          }}
          className="px-4 py-2 bg-[var(--secondary)] text-white rounded-lg mb-4 hover:bg-[var(--primary)] transition-all"
        >
          &larr; Back to Categories
        </button>
        <h2 className="text-4xl font-bold text-[var(--primary)] mb-4">
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}{" "}
          Activities
        </h2>
        {activitiesContent}
      </div>
    );
  }

  // Step 3: Render the selected activity/game
  const renderGame = () => {
    switch (selectedGame) {
      case "puzzle":
        return <PuzzlePhaserGame />;
      case "snake":
        return <SnakePhaserGame />;
      case "flappy":
        return <FlappyBirdPhaserGame />;
      case "run":
        return <RunPhaserGame />;
      case "pixelwar":
        return <PixelWarGame />;
      case "boxjump":
        return <BoxJumpGame />;
      case "dragnmatch":
        return <DragAndMatch />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans">
      <button
        onClick={() => setSelectedGame(null)}
        className="px-4 py-2 bg-[var(--secondary)] text-white rounded-lg mb-4 hover:bg-[var(--primary)] transition-all"
      >
        &larr; Back to Activities
      </button>
      {renderGame()}
    </div>
  );
};

export default Activities;
