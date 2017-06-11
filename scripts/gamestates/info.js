var gameInfo = {

    create: function () {

        var background = game.add.sprite(0, 0, 'gameInfoBackground');
        background.height = this.game.height;
        background.width = this.game.width;

        var smallBackground = game.add.sprite(0, this.game.height*0.64, 'textBackgroundSmall');
        smallBackground.inputEnabled = true;
        smallBackground.events.onInputDown.add(this.nextLine, this);
        smallBackground.width = this.game.width;
        smallBackground.height = this.game.height*0.36;

        game.add.button(250, 0, 'mainMenuStartButton', this.goBack, this, 0, 1, 2);

        text = game.add.text(settings.smallBgTextX, settings.smallBgTextY, '', {font: "24px Arial", fill: "#ffffff"});
        text.stroke = settings.textStroke;
        text.strokeThickness = settings.textStrokeThickness;
        text.fill = settings.textFill;
        //this.nextLine();                                                                    // Auto text start on scene creation
    },

    nextLine: function () {
        if (lineIndex === textContent.infoScreenText[1].length) {
            var arrows = game.add.sprite(this.game.width*0.9, this.game.height*0.94, 'proceedArrows');                         // Adds arrows and animation when whole text is displayed
            arrows.animations.add('next');
            arrows.animations.play('next', 3, true);
            return;
        }
        line = textContent.infoScreenText[1][lineIndex].split(' ');                           //  Splitting on spaces because word by word showing up
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
    clearText: function(){
      text.text = '';
    },

    goBack: function () {
        game.state.start('menu');
        wordIndex = 0;
        lineIndex = 0;
    }
};