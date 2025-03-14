// src/components/SnakePhaserGame.tsx
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const SnakePhaserGame: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  // Keep a ref to store the game instance
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    // Only create a new Phaser.Game if one doesn't already exist
    if (gameRef.current) {
      return;
    }

    // Direction constants for the snake game
    const UP = 0;
    const DOWN = 1;
    const LEFT = 2;
    const RIGHT = 3;

    let snake: any;
    let food: any;
    let cursors: any;

    // Preload function: load assets for the snake game
    function preload(this: Phaser.Scene) {
      this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
      this.load.image('food', 'assets/games/snake/food.png');
      this.load.image('body', 'assets/games/snake/body.png');
    }

    // Create function: define Food and Snake classes, instantiate them, and setup controls.
    function create(this: Phaser.Scene) {
      const Food = new Phaser.Class({
        Extends: Phaser.GameObjects.Image,
        initialize: function Food(scene: Phaser.Scene, x: number, y: number) {
          Phaser.GameObjects.Image.call(this, scene);
          this.setTexture('food');
          this.setPosition(x * 16, y * 16);
          this.setOrigin(0);
          this.total = 0;
          scene.children.add(this);
        },
        eat: function () {
          this.total++;
        }
      });

      const Snake = new Phaser.Class({
        initialize: function Snake(scene: Phaser.Scene, x: number, y: number) {
          this.headPosition = new Phaser.Geom.Point(x, y);
          this.body = scene.add.group();
          this.head = this.body.create(x * 16, y * 16, 'body');
          this.head.setOrigin(0);
          this.alive = true;
          this.speed = 100;
          this.moveTime = 0;
          this.tail = new Phaser.Geom.Point(x, y);
          this.heading = RIGHT;
          this.direction = RIGHT;
        },
        update: function (time: number) {
          if (time >= this.moveTime) {
            return this.move(time);
          }
        },
        faceLeft: function () {
          if (this.direction === UP || this.direction === DOWN) {
            this.heading = LEFT;
          }
        },
        faceRight: function () {
          if (this.direction === UP || this.direction === DOWN) {
            this.heading = RIGHT;
          }
        },
        faceUp: function () {
          if (this.direction === LEFT || this.direction === RIGHT) {
            this.heading = UP;
          }
        },
        faceDown: function () {
          if (this.direction === LEFT || this.direction === RIGHT) {
            this.heading = DOWN;
          }
        },
        move: function (time: number) {
          switch (this.heading) {
            case LEFT:
              this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
              break;
            case RIGHT:
              this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
              break;
            case UP:
              this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
              break;
            case DOWN:
              this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
              break;
          }
          this.direction = this.heading;
          Phaser.Actions.ShiftPosition(
            this.body.getChildren(),
            this.headPosition.x * 16,
            this.headPosition.y * 16,
            1,
            this.tail
          );
          const hitBody = Phaser.Actions.GetFirst(this.body.getChildren(), { x: this.head.x, y: this.head.y }, 1);
          if (hitBody) {
            this.alive = false;
            return false;
          } else {
            this.moveTime = time + this.speed;
            return true;
          }
        },
        grow: function () {
          const newPart = this.body.create(this.tail.x, this.tail.y, 'body');
          newPart.setOrigin(0);
        },
        collideWithFood: function (food: any) {
          if (this.head.x === food.x && this.head.y === food.y) {
            this.grow();
            food.eat();
            if (this.speed > 20 && food.total % 5 === 0) {
              this.speed -= 5;
            }
            return true;
          }
          return false;
        },
        updateGrid: function (grid: boolean[][]) {
          this.body.children.each(function (segment: any) {
            const bx = segment.x / 16;
            const by = segment.y / 16;
            grid[by][bx] = false;
          });
          return grid;
        }
      });

      food = new Food(this, 3, 4);
      snake = new Snake(this, 8, 8);
      cursors = this.input.keyboard.createCursorKeys();
    }

    function update(this: Phaser.Scene, time: number, delta: number) {
      if (!snake.alive) {
        return;
      }
      if (cursors.left.isDown) {
        snake.faceLeft();
      } else if (cursors.right.isDown) {
        snake.faceRight();
      } else if (cursors.up.isDown) {
        snake.faceUp();
      } else if (cursors.down.isDown) {
        snake.faceDown();
      }
      if (snake.update(time)) {
        if (snake.collideWithFood(food)) {
          repositionFood();
        }
      }
    }

    function repositionFood() {
      const testGrid: boolean[][] = [];
      for (let y = 0; y < 30; y++) {
        testGrid[y] = [];
        for (let x = 0; x < 40; x++) {
          testGrid[y][x] = true;
        }
      }
      snake.updateGrid(testGrid);
      const validLocations: { x: number; y: number }[] = [];
      for (let y = 0; y < 30; y++) {
        for (let x = 0; x < 40; x++) {
          if (testGrid[y][x] === true) {
            validLocations.push({ x, y });
          }
        }
      }
      if (validLocations.length > 0) {
        const pos = Phaser.Math.RND.pick(validLocations);
        food.setPosition(pos.x * 16, pos.y * 16);
        return true;
      } else {
        return false;
      }
    }

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.WEBGL,
      width: 640,
      height: 480,
      backgroundColor: '#bfcc00',
      parent: 'phaser-snake', // The game mounts in the element with id 'phaser-snake'
      scene: {
        preload,
        create,
        update
      }
    };

    // Create the Phaser game instance and store it in our ref.
    gameRef.current = new Phaser.Game(config);

    // Cleanup on unmount: destroy the game instance.
    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div id="phaser-snake" ref={gameContainerRef}>
    </div>
  );
};

export default SnakePhaserGame;
