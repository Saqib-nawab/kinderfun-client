import React, { useState, JSX } from "react";
import SnakePhaserGame from "../components/games/SnakePhaserGame";
import FlappyBirdPhaserGame from "../components/games/FlappyBirdPhaserGame";
import RunPhaserGame from "../components/games/RunPhaserGame";
import PixelWarGame from "../components/games/PixelWar";
import BoxJumpGame from "../components/games/BoxJumpGame";
import DragAndMatch from "../components/puzzels/DragAndMatchPuzzel";
import Puzzle2048 from "../components/puzzels/Puzzle2048";
import ArithmeticQuiz from "../components/quizzes/ArithmeticQuiz";
import CrosswordQuiz from "../components/quizzes/CrosswordQuiz";
import DragTheWordsPuzzle from "../components/quizzes/DragTheWordsPuzzle";
import FindTheWordsPuzzle from "../components/quizzes/FindTheWordsPuzzle";

type Category = "games" | "puzzles" | "quizzes" | "creativity" | null;
type GameType =
  | "snake"
  | "flappy"
  | "run"
  | "pixelwar"
  | "boxjump"
  | "dragnmatch"
  | "Puzzle2048"
  | "ArithmeticQuiz"
  | "crossword"
  | "worddrag"
  | "findwords"
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
        <p className="text-lg text-[var(--text-dark)] max-w-3xl mx-auto mb-6">
          Engaging in educational activities is a great way for children to
          develop important skills such as{" "}
          <strong>
            problem-solving, critical thinking, creativity, and patience
          </strong>
          . Each category below focuses on{" "}
          <strong>different aspects of learning and development</strong>.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              name: "Games",
              category: "games",
              description:
                "Improve reaction time, hand-eye coordination, and strategic thinking.",
            },
            {
              name: "Puzzles",
              category: "puzzles",
              description:
                "Enhance problem-solving skills, spatial awareness, and cognitive development.",
            },
            {
              name: "Quizzes",
              category: "quizzes",
              description:
                "Boost memory, comprehension, and critical thinking abilities.",
            },
            {
              name: "Creativity",
              category: "creativity",
              description:
                "Encourage self-expression, imagination, and artistic development.",
            },
          ].map(({ name, category, description }) => (
            <div
              key={category}
              className="bg-[var(--primary)] text-white p-6 rounded-lg shadow-md cursor-pointer w-72 transition-all hover:bg-[var(--secondary)] hover:shadow-lg"
              onClick={() => setSelectedCategory(category as Category)}
            >
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="text-sm opacity-90">{description}</p>
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
      { name: "Drag and Match", game: "dragnmatch" },
      { name: "Puzzle 2048", game: "Puzzle2048" },
    ];

    const quizItems = [
      { name: "Arithmetic Quizzes", game: "ArithmeticQuiz" },
      { name: "Crossword Quiz", game: "crossword" },
      { name: "Word Drag Quiz", game: "worddrag" },
      { name: "Find the Words", game: "findwords" },
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
            </div>
          ))}
        </div>
      );
    } else if (selectedCategory === "quizzes") {
      activitiesContent = (
        <div className="flex flex-wrap justify-center gap-4">
          {quizItems.map(({ name, game }) => (
            <div
              key={game}
              className="bg-[var(--secondary)] text-white p-4 rounded-lg shadow-md cursor-pointer w-64 transition-all hover:bg-[var(--primary)] hover:shadow-lg"
              onClick={() => setSelectedGame(game as GameType)}
            >
              <h2 className="text-2xl font-semibold">{name}</h2>
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
      case "Puzzle2048":
        return <Puzzle2048 />;
      case "ArithmeticQuiz":
        return <ArithmeticQuiz />;
      case "crossword":
        return <CrosswordQuiz />;
      case "worddrag":
        return <DragTheWordsPuzzle />;
      case "findwords":
        return <FindTheWordsPuzzle />;
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
