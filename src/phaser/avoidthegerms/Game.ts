// src/phaser/avoidthegerms/Game.ts
import Germs from './Germs';
import Player from './Player';
import Pickups from './Pickups';

export default class MainGame extends Phaser.Scene {
    player!: Player;
    germs!: Germs;
    pickups!: Pickups;

    introText!: Phaser.GameObjects.BitmapText;
    scoreText!: Phaser.GameObjects.BitmapText;
    score = 0;
    highscore = 0;
    newHighscore = false;

    constructor() {
        super('MainGame');
    }

    create(): void {
        this.score = 0;
        this.highscore = Number(this.registry.get('highscore'));
        this.newHighscore = false;

        this.add.image(400, 300, 'background').setScale(2);

        this.germs = new Germs(this.physics.world, this);
        this.pickups = new Pickups(this.physics.world, this);
        this.player = new Player(this, 400, 400);

        this.scoreText = this.add.bitmapText(16, 32, 'slime', 'Score   0', 40).setDepth(1);
        this.introText = this.add
            .bitmapText(400, 300, 'slime', 'Avoid the Germs\nCollect the Rings', 60)
            .setOrigin(0.5)
            .setCenterAlign()
            .setDepth(1);

        this.pickups.start();

        this.input.once('pointerdown', () => {
            this.player.start();
            this.germs.start();

            this.sound.play('start');

            this.tweens.add({
                targets: this.introText,
                alpha: 0,
                duration: 300
            });
        });

        this.physics.add.overlap(this.player, this.pickups, (player, pickup) =>
            this.playerHitPickup(player, pickup)
        );
        this.physics.add.overlap(this.player, this.germs, (player, germ) =>
            this.playerHitGerm(player, germ)
        );
    }

    playerHitGerm(player: any, germ: any): void {
        // We don't count a hit if the germ is fading in or out
        if (this.player.isAlive && germ.alpha === 1) {
            this.gameOver();
        }
    }

    playerHitPickup(player: any, pickup: any): void {
        this.score++;
        this.scoreText.setText('Score   ' + this.score);

        if (!this.newHighscore && this.score > this.highscore) {
            if (this.highscore > 0) {
                // Only play the victory sound if a new highscore was set
                this.sound.play('victory');
            } else {
                this.sound.play('pickup');
            }
            this.newHighscore = true;
        } else {
            this.sound.play('pickup');
        }

        this.pickups.collect(pickup);
    }

    gameOver(): void {
        this.player.kill();
        this.germs.stop();

        this.sound.stopAll();
        this.sound.play('fail');

        this.introText.setText('Game Over!');

        this.tweens.add({
            targets: this.introText,
            alpha: 1,
            duration: 300
        });

        if (this.newHighscore) {
            this.registry.set('highscore', this.score);
        }

        this.input.once('pointerdown', () => {
            this.scene.start('MainMenu');
        });
    }

    getPlayer(target: Phaser.Math.Vector2): Phaser.Math.Vector2 {
        target.x = this.player.x;
        target.y = this.player.y;
        return target;
    }
}
