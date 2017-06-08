var gameInfo = {

    create:function(){

        game.add.sprite(0, 0, 'gameInfoBackground');
        game.add.sprite(0, 516, 'textBackgroundSmall');



        game.add.button(250,0,'mainMenuStartButton',this.goBack,this,0,1,2);


        var arrows = game.add.sprite(1160,716,'proceedArrows');

        arrows.animations.add('next');
        arrows.animations.play('next',3,true);


    },

    update:function(){



    },

    goBack:function(){
        game.state.start('menu');
    }

};