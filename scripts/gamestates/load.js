var loadState = {

    preload:function(){

        // load everything that we need to load

        game.load.image('mainMenuBackground', 'images/backgrounds/mainMenu.jpg');
        game.load.image('prologueBackground', 'images/backgrounds/prologue.jpg');
        game.load.image('bigCityBackground', 'images/backgrounds/city.jpg');
        game.load.image('officeBackground', 'images/backgrounds/office.jpg');
        game.load.image('textBackgroundBig', 'images/backgrounds/textBackgroundBig.png');
        game.load.image('textBackgroundSmall', 'images/backgrounds/textBackgroundSmall.png');

        game.load.spritesheet('homeButton', 'images/sprites/backButton.png', 190, 50);
        game.load.spritesheet('mainMenuStartButton', 'images/sprites/buttonBaseRedone.png', 435, 110);
        game.load.spritesheet('mainMenuGameButton', 'images/sprites/buttonBaseRedone.png', 435, 110);
        game.load.spritesheet('mainMenuAuthorButton', 'images/sprites/buttonBaseRedone.png', 435, 110);

        game.load.spritesheet('proceedArrows', 'images/sprites/proceedArrowsSprite.png', 60, 20);

    },

    create:function(){

        game.state.start('menu');

    }

};