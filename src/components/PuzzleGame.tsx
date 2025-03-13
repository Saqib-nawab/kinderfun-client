// src/components/PuzzleGame.tsx
import React, { useState } from 'react';
import { GameEngine } from 'react-game-engine';

interface PuzzlePieceProps {
  position: [number, number];
  size: number;
  color: string;
  onMove: (newPos: [number, number]) => void;
}

const PuzzlePiece: React.FC<PuzzlePieceProps> = ({ position, size, color, onMove }) => {
  // When mouse is pressed down, track movement until released.
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const startX = e.clientX;
    const startY = e.clientY;
    const origX = position[0];
    const origY = position[1];

    const handleMouseMove = (moveEvent: MouseEvent) => {
      // Calculate new position based on mouse movement
      const newPos: [number, number] = [
        origX + moveEvent.clientX - startX,
        origY + moveEvent.clientY - startY,
      ];
      onMove(newPos);
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const style: React.CSSProperties = {
    position: 'absolute',
    left: position[0],
    top: position[1],
    width: size,
    height: size,
    backgroundColor: color,
    border: '1px solid #000',
    cursor: 'pointer',
  };

  return <div style={style} onMouseDown={handleMouseDown} />;
};

const PuzzleGame: React.FC = () => {
  // Manage positions for each puzzle piece
  const [positions, setPositions] = useState({
    piece1: [20, 20] as [number, number],
    piece2: [140, 20] as [number, number],
    piece3: [20, 140] as [number, number],
    piece4: [140, 140] as [number, number],
  });

  const updatePosition = (pieceKey: string, newPos: [number, number]) => {
    setPositions(prev => ({ ...prev, [pieceKey]: newPos }));
  };

  return (
    <div style={{ margin: '20px auto', width: 260, height: 260, border: '2px solid #000', position: 'relative' }}>
      <GameEngine
        style={{ width: '100%', height: '100%' }}
        systems={[]}
        entities={{}}
      >
        <PuzzlePiece
          position={positions.piece1}
          size={100}
          color="red"
          onMove={(newPos) => updatePosition('piece1', newPos)}
        />
        <PuzzlePiece
          position={positions.piece2}
          size={100}
          color="green"
          onMove={(newPos) => updatePosition('piece2', newPos)}
        />
        <PuzzlePiece
          position={positions.piece3}
          size={100}
          color="blue"
          onMove={(newPos) => updatePosition('piece3', newPos)}
        />
        <PuzzlePiece
          position={positions.piece4}
          size={100}
          color="yellow"
          onMove={(newPos) => updatePosition('piece4', newPos)}
        />
      </GameEngine>
    </div>
  );
};

export default PuzzleGame;
