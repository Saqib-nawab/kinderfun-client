// src/phaser/avoidthegerms/main.ts
import Boot from './Boot';
import Preloader from './Preloader';
import MainMenu from './MainMenu';
import MainGame from './Game';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example', // Ensure your HTML contains an element with this id
    scene: [Boot, Preloader, MainMenu, MainGame],
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    }
};

new Phaser.Game(config);
