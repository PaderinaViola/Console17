// FIX: Using the direct CDN URL for reliable module loading.

import { Scene } from 'https://cdn.jsdelivr.net/npm/phaser@3.80.1/dist/phaser.esm.js';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        // Path is now relative to where the HTML file is served
        this.load.image('background', 'assets/bg.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}