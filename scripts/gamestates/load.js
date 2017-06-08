var loadState = {

    preload:function(){

        // load everything that we need to load

        game.load.image('mainMenuBackground', 'images/backgrounds/mainMenu.jpg');
        game.load.image('prologueBackground', 'images/backgrounds/prologue.jpg');
        game.load.image('gameInfoBackground', 'images/backgrounds/info.jpg');
        game.load.image('textBackgroundBig', 'images/backgrounds/textBackgroundBig.png');
        game.load.image('textBackgroundSmall', 'images/backgrounds/textBackgroundSmall.png');

        game.load.spritesheet('mainMenuStartButton', 'images/sprites/buttonBase.png', 190, 50);

    },

    create:function(){

        game.state.start('menu');

    }

};