// src/components/PuzzlePhaserGame.tsx
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const PuzzlePhaserGame: React.FC = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    class PuzzleScene extends Phaser.Scene {
      level: number;
      pieces: {
        rect: Phaser.GameObjects.Rectangle;
        solved: boolean;
        targetX: number;
        targetY: number;
        targetWidth: number;
        targetHeight: number;
      }[];
      solvedText?: Phaser.GameObjects.Text;

      constructor() {
        super({ key: 'PuzzleScene' });
        this.level = 1;
        this.pieces = [];
      }

      preload() {
        // No external assets needed.
      }

      create() {
        // Initialize the first level.
        this.startLevel();

        // Enable dragging: update rectangle's position as it's dragged.
        this.input.on(
          'drag',
          (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Rectangle, dragX: number, dragY: number) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
          }
        );

        // On drag end, if the piece is close enough to its target, snap it into place.
        this.input.on('dragend', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Rectangle) => {
          const piece = this.pieces.find(p => p.rect === gameObject);
          if (piece) {
            const tolerance = 20;
            if (Phaser.Math.Distance.Between(gameObject.x, gameObject.y, piece.targetX, piece.targetY) < tolerance) {
              // Snap the piece to its target position.
              gameObject.x = piece.targetX;
              gameObject.y = piece.targetY;
              gameObject.disableInteractive();
              piece.solved = true;
              gameObject.setStrokeStyle(2, 0xffffff);

              // If all pieces are solved, complete the level.
              if (this.pieces.every(p => p.solved)) {
                this.levelComplete();
              }
            }
          }
        });
      }

      // Recursively partition a rectangle into random subrectangles.
      // The minimum allowed size (minSize) decreases as the level increases,
      // and the probability to split (splitChance) increases with level.
      partitionRect(
        x: number,
        y: number,
        width: number,
        height: number,
        minSize: number,
        splitChance: number
      ): Array<{ x: number; y: number; width: number; height: number }> {
        if ((width > minSize || height > minSize) && Math.random() < splitChance) {
          if (width > height) {
            // Vertical split.
            const split = Phaser.Math.Between(Math.floor(width * 0.4), Math.floor(width * 0.6));
            const left = this.partitionRect(x, y, split, height, minSize, splitChance);
            const right = this.partitionRect(x + split, y, width - split, height, minSize, splitChance);
            return left.concat(right);
          } else {
            // Horizontal split.
            const split = Phaser.Math.Between(Math.floor(height * 0.4), Math.floor(height * 0.6));
            const top = this.partitionRect(x, y, width, split, minSize, splitChance);
            const bottom = this.partitionRect(x, y + split, width, height - split, minSize, splitChance);
            return top.concat(bottom);
          }
        } else {
          return [{ x, y, width, height }];
        }
      }

      startLevel() {
        // Clear previous level pieces and text if they exist.
        this.pieces.forEach(p => p.rect.destroy());
        this.pieces = [];
        if (this.solvedText) {
          this.solvedText.destroy();
        }

        // Adjust difficulty parameters based on the current level.
        // For higher levels, minSize becomes smaller and splitChance increases.
        const baseMinSize = 150;
        const minSize = Math.max(20, baseMinSize - (this.level - 1) * 15);
        const splitChance = Math.min(0.9, 0.5 + (this.level - 1) * 0.1);

        // Generate a partition of the entire game area.
        const piecesData = this.partitionRect(0, 0, this.game.config.width as number, this.game.config.height as number, minSize, splitChance);

        // Create pieces for each partition.
        piecesData.forEach(pieceData => {
          const margin = 10; // Leave a gap between pieces.
          const targetX = pieceData.x + pieceData.width / 2;
          const targetY = pieceData.y + pieceData.height / 2;
          const targetWidth = pieceData.width - margin;
          const targetHeight = pieceData.height - margin;

          // Create a rectangle with a random color.
          const color = Phaser.Display.Color.RandomRGB().color;
          const rect = this.add
            .rectangle(targetX, targetY, targetWidth, targetHeight, color)
            .setInteractive({ draggable: true });

          // Place the piece at a random starting position.
          rect.x = Phaser.Math.Between(0, this.game.config.width as number);
          rect.y = Phaser.Math.Between(0, this.game.config.height as number);

          this.pieces.push({
            rect,
            solved: false,
            targetX,
            targetY,
            targetWidth,
            targetHeight,
          });
        });
      }

      levelComplete() {
        // Disable interactivity for all pieces just in case.
        this.pieces.forEach(p => p.rect.disableInteractive());

        // Display a congratulatory message in the center.
        this.solvedText = this.add
          .text((this.game.config.width as number) / 2, (this.game.config.height as number) / 2, 'Level Complete!', {
            fontSize: '24px',
            color: '#ffffff',
          })
          .setOrigin(0.5);

        // After a short delay, increase the level and regenerate the puzzle.
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

    // Cleanup Phaser game when component unmounts.
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef} />;
};

export default PuzzlePhaserGame;
