// src/components/PuzzlePhaserGame.tsx
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const PuzzlePhaserGame: React.FC = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Phaser game configuration
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      parent: gameRef.current || undefined,
      scene: {
        preload: preload,
        create: create,
      },
    };

    // Create the Phaser game instance
    const game = new Phaser.Game(config);

    // Preload function (if you need to load assets, you can do it here)
    function preload(this: Phaser.Scene) {
      // For this simple puzzle, no assets are needed.
    }

    // Create function to initialize our puzzle pieces
    function create(this: Phaser.Scene) {
      // Define initial positions and colors for four puzzle pieces
      const pieces = [
        { x: 50, y: 50, color: 0xff0000 },
        { x: 250, y: 50, color: 0x00ff00 },
        { x: 50, y: 250, color: 0x0000ff },
        { x: 250, y: 250, color: 0xffff00 },
      ];

      // Create each piece as a rectangle that can be dragged
      pieces.forEach((piece) => {
        const rect = this.add.rectangle(piece.x, piece.y, 100, 100, piece.color);
        rect.setInteractive({ draggable: true });

        // Enable dragging: update rectangle position during drag
        rect.on('drag', function (pointer: Phaser.Input.Pointer, dragX: number, dragY: number) {
          rect.x = dragX;
          rect.y = dragY;
        });
      });

      // Optional: add visual feedback on drag start/end
      this.input.on('dragstart', function (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Rectangle) {
        gameObject.setStrokeStyle(2, 0xffffff);
      });
      this.input.on('dragend', function (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Rectangle) {
        gameObject.setStrokeStyle(); // removes stroke
      });
    }

    // Cleanup: destroy Phaser game on component unmount
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef} />;
};

export default PuzzlePhaserGame;
