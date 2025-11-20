// Scene Classes are imported from local files (note the .js extension)
// IMPORTANT: These files MUST exist in static/js/scenes/
import { Boot } from './scenes/Boot.js';
import { GameOver } from './scenes/Gameover.js';
import { Game as MainGame } from './scenes/Game.js';
import { MainMenu } from './scenes/MainMenu.js';
import { Preloader } from './scenes/Preloader.js';


// Configuration for the Phaser Game instance
const config = {
    // Reference Phaser.AUTO globally, which is now possible
    type: Phaser.AUTO, 
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        Boot,
        Preloader,
        MainMenu,
        MainGame,
        GameOver
    ]
};

// Function to start the game
const StartGame = (parent) => {
    // Reference Phaser.Game globally
    return new Phaser.Game({ ...config, parent });
}

// Automatically start the game when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    StartGame('game-container');
});