var settings = {
    width: window.innerWidth * window.devicePixelRatio,                //game width
    height: window.innerHeight * window.devicePixelRatio,                //game height
    renderer: Phaser.AUTO,
    parent: 'phaser-example',
    wordDelay: 120,             //word speed
    lineDelay: 400,              //delay after each line
    bigBgTextX: 0.3*window.innerHeight * window.devicePixelRatio,            // sets starting position of a text on a big background view
    bigBgTextY: 0.16*window.innerHeight * window.devicePixelRatio,             // sets starting position of a text on a small text background view
    smallBgTextX: 0.18*window.innerWidth * window.devicePixelRatio,             // sets starting position of a text on a small text background view
    smallBgTextY: 0.76*window.innerHeight * window.devicePixelRatio,             // sets starting position of a text on a small text background view
    textStroke:'#111111',
    textStrokeThickness:4,
    textFill:'#ffffff',
    big:'60px'
};

