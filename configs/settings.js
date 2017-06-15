let settings = {

    // main game display settings

    width: window.innerWidth * window.devicePixelRatio,                //game width
    height: window.innerHeight * window.devicePixelRatio,                //game height
    renderer: Phaser.AUTO,
    parent: 'phaser-example',

    // text settings

    wordDelay: 1.20,             //word speed
    lineDelay: 4.00,              //delay after each line
    textSize:window.innerWidth/40,
    textStroke:'#000000',
    textStrokeThickness:3+window.innerWidth/400,
    textFill:'#ffffff',
    lineSpacing:'', // TODO set it

    // background configuration

    bigBgTextX: 0.3*window.innerHeight * window.devicePixelRatio,            // sets starting position of a text on a big background view
    bigBgTextY: 0.16*window.innerHeight * window.devicePixelRatio,             // sets starting position of a text on a small text background view
    smallBgTextX: 0.2*window.innerWidth * window.devicePixelRatio,             // sets starting position of a text on a small text background view
    smallBgTextY: 0.74*window.innerHeight * window.devicePixelRatio             // sets starting position of a text on a small text background view

};

