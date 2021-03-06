let settings = {

    // main game display settings

    width: window.innerWidth * window.devicePixelRatio,                //game width
    height: window.innerHeight * window.devicePixelRatio,                //game height
    renderer: Phaser.CANVAS,
    parent: 'phaser-example',

    // text settings

    wordDelay: 42.0,             //word speed
    lineDelay: 80.0,              //delay after each line
    textSize: (window.innerWidth/80+window.innerHeight/45),
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

