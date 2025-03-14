// src/pages/Activities.tsx
import React, { useState } from 'react';
import PuzzlePhaserGame from '../components/PuzzlePhaserGame';
import SnakePhaserGame from '../components/SnakePhaserGame';

const Activities: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<'puzzle' | 'snake' | null>(null);

  // Game selection menu
  if (selectedGame === null) {
    return (
      <div className="activities-menu" style={styles.menuContainer}>
        <h1 style={styles.title}>Educational Activities</h1>
        <div style={styles.cardContainer}>
          <div
            className="game-card"
            style={styles.card}
            onClick={() => setSelectedGame('puzzle')}
          >
            <h2 style={styles.cardTitle}>Puzzle Game</h2>
            <p style={styles.cardText}>
              Arrange the boxes to completely fill the space. The puzzle starts easy and gets more complex as you advance.
            </p>
          </div>
          <div
            className="game-card"
            style={styles.card}
            onClick={() => setSelectedGame('snake')}
          >
            <h2 style={styles.cardTitle}>Snake Game</h2>
            <p style={styles.cardText}>
              Control the snake with the arrow keys, eat food to grow longer, and avoid running into yourself!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Puzzle Game view with instructions and back button
  if (selectedGame === 'puzzle') {
    return (
      <div className="game-container" style={styles.gameContainer}>
        <button style={styles.backButton} onClick={() => setSelectedGame(null)}>
          &larr; Back
        </button>
        <h2 style={styles.gameTitle}>Puzzle Game Instructions</h2>
        <p style={styles.gameInstructions}>
          Drag and drop each puzzle piece into its correct position. When all pieces are placed correctly, the level will complete and a new, more challenging puzzle will be generated.
        </p>
        <PuzzlePhaserGame />
      </div>
    );
  }

  // Snake Game view with instructions and back button
  if (selectedGame === 'snake') {
    return (
      <div className="game-container" style={styles.gameContainer}>
        <button style={styles.backButton} onClick={() => setSelectedGame(null)}>
          &larr; Back
        </button>
        <h2 style={styles.gameTitle}>Snake Game Instructions</h2>
        <p style={styles.gameInstructions}>
          Use the arrow keys to control the snake. Eat food to grow longer, but be careful not to run into yourself. Aim for the highest score!
        </p>
        <SnakePhaserGame />
      </div>
    );
  }

  return null;
};

const styles: { [key: string]: React.CSSProperties } = {
  menuContainer: {
    padding: '1rem',
    backgroundColor: 'var(--background)',
    color: 'var(--text-dark)',
    fontFamily: 'var(--font-sans)',
    textAlign: 'center',
  },
  title: {
    fontSize: 'var(--text-4xl)',
    marginBottom: '1rem',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'var(--primary)',
    color: 'var(--text-white)',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: 'var(--box-shadow-soft)',
    cursor: 'pointer',
    flex: '1 1 250px',
    maxWidth: '300px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-sans)',
  },
  cardText: {
    fontSize: '1rem',
  },
  gameContainer: {
    padding: '1rem',
    backgroundColor: 'var(--background)',
    color: 'var(--text-dark)',
    fontFamily: 'var(--font-sans)',
  },
  backButton: {
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--secondary)',
    color: 'var(--text-white)',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  gameTitle: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  gameInstructions: {
    fontSize: '1.125rem',
    marginBottom: '1rem',
  },
};

export default Activities;
