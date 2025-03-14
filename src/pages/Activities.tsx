// src/pages/Activities.tsx
import React from 'react';
// import PuzzlePhaserGame from '../components/PuzzlePhaserGame';
import GermsPhaserGame from '../components/GermsPhaserGame';

const Activities: React.FC = () => {
  return (
    <div>
      <h1>Educational Activities</h1>
      <p>Printable worksheets, coloring pages, puzzles, and interactive games.</p>
      {/* <PuzzlePhaserGame /> */}
      <GermsPhaserGame />
    </div>
  );
};

export default Activities;