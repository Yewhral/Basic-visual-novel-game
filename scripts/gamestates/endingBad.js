var endingBad = {

    create: function () {

        var background = game.add.sprite(0, 0, 'prologueBackground');
        background.height = this.game.height;
        background.width = this.game.width;

        var BackgroundBig = game.add.sprite(this.game.width*0.1, this.game.width*0.05, 'textBackgroundBig');
        BackgroundBig.inputEnabled = true;
        BackgroundBig.events.onInputDown.add(proceed, this);
        BackgroundBig.width = this.game.width*0.8;
        BackgroundBig.height = this.game.height*0.8;

        game.add.button(0, 5, 'homeButton', goBack, this, 1, 0, 1);

        text = game.add.text(20,25, '', {
            font: "Arial",
            fontSize:settings.textSize,
            fill: "#ffffff",
            stroke: settings.textStroke,
            strokeThickness: settings.textStrokeThickness,
            wordWrap:true,
            wordWrapWidth:this.game.width*0.7
        });
        text.setTextBounds(this.game.width*0.14, this.game.height*0.15+10,this.game.width*0.68);
        this.nextLine(); // launches next line showing up, I will do this on start of a slide and pause at something

    },

    nextLine: function () {
        if(chatBubbleCounter==textContent.endingBad.length) goToTheNextChapter('menu');
        if (lineIndex === textContent.endingBad[chatBubbleCounter].length) {
            canProceed = true;
            var arrows = game.add.sprite(this.game.width * 0.8, this.game.height * 0.8, 'proceedArrows');                         // Adds arrows and animation when whole text is displayed TODO remove when not needed
            arrows.animations.add('next');
            arrows.animations.play('next', 3, true);
            return;
        }
        line = textContent.endingBad[chatBubbleCounter][lineIndex].split(' ');                             //  Splitting on spaces because word by word showing up
        wordIndex = 0;                                                                        //  Reset the word index to zero (the first word in the line)
        game.time.events.repeat(settings.wordDelay, line.length, nextWord, this);             //  Call the 'nextWord' function once for each word in the line (line.length)
        lineIndex++;                                                                          //  Advance to the next line
    }
};




