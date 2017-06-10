var gameInfo = {

    create:function(){

        game.add.sprite(0, 0, 'gameInfoBackground');

        var smallBackground = game.add.sprite(0, 516, 'textBackgroundSmall');

        smallBackground.inputEnabled = true;
        smallBackground.events.onInputDown.add(this.flashScreen,this);


        game.add.button(250,0,'mainMenuStartButton',this.goBack,this,0,1,2);


        text = game.add.text(settings.smallBgTextX, settings.smallBgTextY, '', {font: "24px Arial", fill: "#ffffff"});
        text.stroke = settings.textStroke;
        text.strokeThickness = settings.textStrokeThickness;
        text.fill = settings.textFill;
        this.nextLine();

        var arrows = game.add.sprite(1160,716,'proceedArrows');

        arrows.animations.add('next');
        arrows.animations.play('next',3,true);



    },
    nextLine: function () {
        if (lineIndex === textContent.infoScreenText[1].length) {
            return;
        }
        line = textContent.infoScreenText[1][lineIndex].split(' ');                             //  Splitting on spaces because word by word showing up
        wordIndex = 0;                                                                        //  Reset the word index to zero (the first word in the line)
        game.time.events.repeat(settings.wordDelay, line.length, this.nextWord, this);        //  Call the 'nextWord' function once for each word in the line (line.length)
        lineIndex++;                                                                          //  Advance to the next line
    },

    nextWord: function () {
        text.text = text.text.concat(line[wordIndex] + " ");                                 // Add next word to the string and a ' '
        wordIndex++;                                                                         // Next word in the line
        if (wordIndex === line.length) {                                                     // If last word of a line
            text.text = text.text.concat("\n");                                              // New line
            game.time.events.add(settings.lineDelay, this.nextLine, this);                   // Get the next line after the lineDelay amount of ms
        }
    },
    update:function(){



    },

    goBack:function(){
        game.state.start('menu');
    },


    flashScreen:function(){
        game.camera.flash(0xff0000, 200);


    }

};