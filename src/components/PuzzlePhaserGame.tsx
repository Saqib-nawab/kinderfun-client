import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const PuzzlePhaserGame: React.FC = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    class PuzzleScene extends Phaser.Scene {
      level: number;
      gridSize: number;
      pieceSize: number;
      pieces: {
        rect: Phaser.GameObjects.Rectangle;
        solved: boolean;
        targetX: number;
        targetY: number;
      }[];
      solvedText?: Phaser.GameObjects.Text;

      constructor() {
        super({ key: 'PuzzleScene' });
        this.level = 1;
        this.pieces = [];
        this.gridSize = 0;
        this.pieceSize = 0;
      }

      preload() {
        // No external assets needed for this puzzle
      }

      create() {
        // Initialize the first level
        this.startLevel();

        // Handle dragging of pieces
        this.input.on('drag', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Rectangle, dragX: number, dragY: number) => {
          gameObject.x = dragX;
          gameObject.y = dragY;
        });

        // Check if the piece is near its target position on drag end
        this.input.on('dragend', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Rectangle) => {
          const piece = this.pieces.find(p => p.rect === gameObject);
          if (piece) {
            const tolerance = 20;
            if (Phaser.Math.Distance.Between(gameObject.x, gameObject.y, piece.targetX, piece.targetY) < tolerance) {
              // Snap piece into place and mark as solved
              gameObject.x = piece.targetX;
              gameObject.y = piece.targetY;
              gameObject.disableInteractive();
              piece.solved = true;
              gameObject.setStrokeStyle(2, 0xffffff);

              // If all pieces are solved, complete the level
              if (this.pieces.every(p => p.solved)) {
                this.levelComplete();
              }
            }
          }
        });
      }

      startLevel() {
        // Clear previous level pieces and text if they exist
        this.pieces.forEach(p => p.rect.destroy());
        this.pieces = [];
        if (this.solvedText) {
          this.solvedText.destroy();
        }

        // Increase grid size as level increases: Level 1 = 2×2, Level 2 = 3×3, etc.
        this.gridSize = this.level + 1;
        this.pieceSize = Math.floor((this.game.config.width as number) / this.gridSize);

        // Create pieces with correct target positions
        for (let row = 0; row < this.gridSize; row++) {
          for (let col = 0; col < this.gridSize; col++) {
            const targetX = col * this.pieceSize + this.pieceSize / 2;
            const targetY = row * this.pieceSize + this.pieceSize / 2;

            // Generate a random color for the piece
            const color = Phaser.Display.Color.RandomRGB().color;
            const rect = this.add
              .rectangle(targetX, targetY, this.pieceSize - 10, this.pieceSize - 10, color)
              .setInteractive({ draggable: true });

            // Set a random starting position within the game bounds
            rect.x = Phaser.Math.Between(this.pieceSize / 2, (this.game.config.width as number) - this.pieceSize / 2);
            rect.y = Phaser.Math.Between(this.pieceSize / 2, (this.game.config.height as number) - this.pieceSize / 2);

            this.pieces.push({
              rect,
              solved: false,
              targetX,
              targetY,
            });
          }
        }
      }

      levelComplete() {
        // Show a congratulatory message in the center
        this.solvedText = this.add
          .text((this.game.config.width as number) / 2, (this.game.config.height as number) / 2, 'Level Complete!', {
            fontSize: '24px',
            color: '#ffffff',
          })
          .setOrigin(0.5);

        // Proceed to the next level after a short delay
        this.time.delayedCall(2000, () => {
          this.level++;
          this.startLevel();
        });
      }
    }

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      parent: gameRef.current || undefined,
      scene: PuzzleScene,
      backgroundColor: '#2d2d2d',
    };

    const game = new Phaser.Game(config);

    // Cleanup Phaser game when component unmounts
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef} />;
};

export default PuzzlePhaserGame;
