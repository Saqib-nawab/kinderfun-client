// src/pages/Activities.tsx
import React from 'react';
import PuzzleGame from '../components/PuzzleGame';

const Activities: React.FC = () => {
  return (
    <div>
      <h1>Educational Activities</h1>
      <p>Printable worksheets, coloring pages, puzzles, and interactive games.</p>
      <PuzzleGame />
    </div>
  );
};

export default Activities;
