var loadState = {

    preload:function(){

        // load everything that we need to load

        game.load.image('mainMenuBackground', 'images/backgrounds/mainMenu.jpg');
        game.load.image('prologueBackground', 'images/backgrounds/prologue.jpg');
        game.load.image('gameInfoBackground', 'images/backgrounds/info.jpg');

        game.load.spritesheet('mainMenuStartButton', 'images/sprites/startButton.png', 222, 100);

    },

    create:function(){

        game.state.start('menu');

    }

};