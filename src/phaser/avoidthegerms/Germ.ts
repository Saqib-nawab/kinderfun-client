// src/phaser/avoidthegerms/Germ.ts
import Phaser from 'phaser';

export default class Germ extends Phaser.Physics.Arcade.Sprite {
    speed: number;
    lifespan: number;
    isChasing: boolean;
    target: Phaser.Math.Vector2;

    constructor(scene: Phaser.Scene, x: number, y: number, animation: string, speed: number) {
        super(scene, x, y, 'https://labs.phaser.io/assets');
        this.play(animation);
        this.setScale(Phaser.Math.FloatBetween(1, 2));
        this.speed = speed;
        this.alpha = 0;
        this.lifespan = 0;
        this.isChasing = false;
        this.target = new Phaser.Math.Vector2();
    }

    start(chaseDelay?: number): this {
        this.setCircle(14, 6, 2);

        if (!chaseDelay) {
            chaseDelay = Phaser.Math.Between(3000, 8000);
            this.scene.sound.play('appear');
        }

        this.scene.tweens.add({
            targets: this,
            alpha: 1,
            duration: 2000,
            ease: 'Linear',
            hold: chaseDelay,
            onComplete: () => {
                if ((this.scene as any).player?.isAlive) {
                    this.lifespan = Phaser.Math.Between(6000, 12000);
                    this.isChasing = true;
                }
            }
        });

        return this;
    }

    restart(x: number, y: number): this {
        (this.body as Phaser.Physics.Arcade.Body).reset(x, y);
        this.setActive(true);
        this.setVisible(true);
        this.setAlpha(0);
        return this.start();
    }

    preUpdate(time: number, delta: number): void {
        super.preUpdate(time, delta);

        if (this.isChasing) {
            this.lifespan -= delta;
            if (this.lifespan <= 0) {
                this.isChasing = false;
                (this.body as Phaser.Physics.Arcade.Body).stop();
                this.scene.tweens.add({
                    targets: this,
                    alpha: 0,
                    duration: 1000,
                    ease: 'Linear',
                    onComplete: () => {
                        this.setActive(false);
                        this.setVisible(false);
                    }
                });
            } else {
                (this.scene as any).getPlayer(this.target);
                // Add 90° because the sprite is drawn facing up
                this.rotation = this.scene.physics.moveToObject(this, this.target, this.speed) + 1.5707963267948966;
            }
        }
    }

    stop(): void {
        this.isChasing = false;
        (this.body as Phaser.Physics.Arcade.Body).stop();
    }
}
