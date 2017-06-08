var  prologueState = {

    create:function(){

        game.add.sprite(0, 0, 'prologueBackground');

        var BackgroundBig = game.add.sprite(40,59,'textBackgroundBig');
        BackgroundBig.inputEnabled = true;
        BackgroundBig.events.onInputDown.add(this.proceed,this);


        var arrows = game.add.sprite(1120,650,'proceedArrows');

        arrows.animations.add('next');
        arrows.animations.play('next',3,true);
    },

    update:function(){



    },

    proceed:function(){
        game.add.sprite(game.rnd.integerInRange(50, 1200),game.rnd.integerInRange(1, 650),'proceedArrows');
    }

};