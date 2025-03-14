// src/components/FlappyBirdPhaserGame.tsx
import React from 'react';

const FlappyBirdPhaserGame: React.FC = () => {
    return (
        <iframe
            src="https://noowxela.github.io/phaser-examples/games/flappy-bird/"
            title="Flappy Bird Game"
            width="800"
            height="600"
            style={{ border: 'none' }}
        />
    );
};

export default FlappyBirdPhaserGame;
