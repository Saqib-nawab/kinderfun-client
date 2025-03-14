// src/phaser/avoidthegerms/Player.ts
import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Image {
    isAlive: boolean;
    speed: number;
    target: Phaser.Math.Vector2;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'https://labs.phaser.io/assets', 'player');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCircle(14, 3, 6);
        this.setCollideWorldBounds(true);
        this.isAlive = false;
        this.speed = 280;
        this.target = new Phaser.Math.Vector2();
    }

    start(): void {
        this.isAlive = true;
        this.scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
            if (this.isAlive) {
                this.target.x = pointer.x;
                this.target.y = pointer.y;
                // Add 90° because the sprite is drawn facing up
                this.rotation = this.scene.physics.moveToObject(this, this.target, this.speed) + 1.5707963267948966;
            }
        });
    }

    kill(): void {
        this.isAlive = false;
        (this.body as Phaser.Physics.Arcade.Body).stop();
    }

    preUpdate(): void {
        if ((this.body as Phaser.Physics.Arcade.Body).speed > 0 && this.isAlive) {
            if (Phaser.Math.Distance.Between(this.x, this.y, this.target.x, this.target.y) < 6) {
                (this.body as Phaser.Physics.Arcade.Body).reset(this.target.x, this.target.y);
            }
        }
    }
}
