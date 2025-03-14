// src/phaser/avoidthegerms/Germs.ts
import Germ from './Germ';

export default class Germs extends Phaser.Physics.Arcade.Group {
    germConfig: { animation: string; speed: number }[];

    constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene) {
        super(world, scene);
        this.classType = Germ;
        this.germConfig = [
            { animation: 'germ1', speed: 60 },
            { animation: 'germ2', speed: 90 },
            { animation: 'germ3', speed: 120 },
            { animation: 'germ4', speed: 180 }
        ];
    }

    start(): void {
        let germ1 = new Germ(this.scene, 100, 100, 'germ1', 60);
        let germ2 = new Germ(this.scene, 700, 600, 'germ1', 60);
        let germ3 = new Germ(this.scene, 200, 400, 'germ1', 60);

        this.add(germ1, true);
        this.add(germ2, true);
        this.add(germ3, true);

        germ1.start(1000);
        germ2.start(2000);
        germ3.start();

        this.timedEvent = this.scene.time.addEvent({
            delay: 2000,
            callback: this.releaseGerm,
            callbackScope: this,
            loop: true
        });
    }

    stop(): void {
        this.timedEvent.remove();
        this.getChildren().forEach((child: any) => {
            child.stop();
        });
    }

    releaseGerm(): void {
        const x = Phaser.Math.Between(0, 800);
        const y = Phaser.Math.Between(0, 600);

        let germ: any;
        let config = Phaser.Utils.Array.GetRandom(this.germConfig);

        this.getChildren().forEach((child: any) => {
            if (child.anims.getName() === config.animation && !child.active) {
                // Found a dead matching germ, so resurrect it
                germ = child;
            }
        });

        if (germ) {
            germ.restart(x, y);
        } else {
            germ = new Germ(this.scene, x, y, config.animation, config.speed);
            this.add(germ, true);
            germ.start();
        }
    }
}
