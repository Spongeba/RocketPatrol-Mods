/* 
My name is Mengya Qiu, and I used about 3 days to complete this project. 
Create a new spaceship type that's smaller, moves faster, and is worth more points (20)
Implement a simultaneous two-player mode (30)
Create a new scrolling tile sprite for the background (5)
Create a new rocket artwork (5)
Implement parallax scrolling (10)
Replace the UI borders with new artwork (10)
Create a new sprite for the Spaceship enemies (10)
Implement mouse control for player movement and mouse click to fire (20)
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play1, Play2],
};

let game = new Phaser.Game(config);

//reserve some keyboard variables
let keyF, keyLEFT, keyRIGHT, keyW, keyA, keyD;
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//define Game settings
game.settings = {
    spaceshipSpeed: 3,
    bonusSpeed: 5,
    gameTimer: 60000
}
