let loadState = {

    preload:function(){

        // load everything that we need to load

        game.load.image('mainMenuBackground', 'images/backgrounds/mainMenu.jpg');
        game.load.image('prologueBackground', 'images/backgrounds/prologue.jpg');
        game.load.image('bigCityBackground', 'images/backgrounds/city.jpg');
        game.load.image('officeBackground', 'images/backgrounds/office.jpg');
        game.load.image('appleBackground', 'images/backgrounds/officeApple.jpg');
        game.load.image('japanese', 'images/backgrounds/japanese.jpg');
        game.load.image('alley', 'images/backgrounds/alley.jpg');
        game.load.image('textBackgroundBig', 'images/backgrounds/textBackgroundBig.png');
        game.load.image('textBackgroundSmall', 'images/backgrounds/textBackgroundSmall.png');
        game.load.image('zabrza', 'images/sprites/testSprite.png');
        game.load.image('recruiterF', 'images/sprites/testSprite2.png');
        game.load.image('recruiterM', 'images/sprites/testSprite3.png');

        game.load.spritesheet('homeButton', 'images/sprites/backButton.png', 190, 50);
        game.load.spritesheet('mainMenuButton', 'images/sprites/buttonBaseRedone.png', 435, 110);

        game.load.spritesheet('proceedArrows', 'images/sprites/proceedArrowsSprite.png', 60, 20);

    },

    create:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.state.start('menu');

    }

};