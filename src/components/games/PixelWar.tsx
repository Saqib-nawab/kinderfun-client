// src/components/PixelWar.tsx
import React from 'react';

const PixelWarGame: React.FC = () => {
    return (
        <iframe
            src="https://noowxela.github.io/phaser-examples/games/pixel-war/"
            title="Pixel War Game"
            width="800"
            height="600"
            style={{ border: 'none' }}
        />
    );
};

export default PixelWarGame;
