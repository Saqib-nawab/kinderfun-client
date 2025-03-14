// src/phaser/avoidthegerms/Pickups.ts
import Phaser from 'phaser';

export default class Pickups extends Phaser.Physics.Arcade.Group {
    outer: Phaser.Geom.Rectangle;
    target: Phaser.Geom.Point;

    constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene) {
        super(world, scene);
        this.outer = new Phaser.Geom.Rectangle(64, 64, 672, 472);
        this.target = new Phaser.Geom.Point();
    }

    start(): void {
        this.create(400, 100, 'https://labs.phaser.io/assets', 'ring');
        this.create(100, 380, 'https://labs.phaser.io/assets', 'ring');
        this.create(700, 380, 'https://labs.phaser.io/assets', 'ring');
        this.create(300, 500, 'https://labs.phaser.io/assets', 'ring');
        this.create(500, 500, 'https://labs.phaser.io/assets', 'ring');
    }

    collect(pickup: Phaser.Physics.Arcade.Sprite): void {
        // Move the pickup to a new location
        this.outer.getRandomPoint(this.target);
        (pickup.body as Phaser.Physics.Arcade.Body).reset(this.target.x, this.target.y);
    }
}
