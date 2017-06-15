let author = {

    create: function () {

        let background = game.add.sprite(0, 0, 'japanese');
        background.height = this.game.height;
        background.width = this.game.width;
        background.inputEnabled = true;
        background.events.onInputDown.add(proceed, this);

        let smallBackground = game.add.sprite(0, this.game.height*0.64, 'textBackgroundSmall');
        smallBackground.width = this.game.width;
        smallBackground.height = this.game.height*0.36;

        let backer = game.add.button(0, 5, 'homeButton', goBack, this, 1, 0, 1);
        backer.width = 0.09895*this.game.width;
        backer.height = 0.0463*this.game.height;

        arrows = game.add.sprite(this.game.width*0.9, this.game.height*0.94, 'proceedArrows');                         // Adds arrows and animation when whole text is displayed
        arrows.animations.add('next');
        arrows.animations.play('next', 3,true);
        arrows.height = 0.0186*this.game.height;
        arrows.width = 0.0521*this.game.width;

        text = game.add.text(20, 20, '', {
            font: "Arial",
            fontSize:settings.textSize*0.66+8,
            fill: "#ffffff",
            stroke: settings.textStroke,
            strokeThickness: settings.textStrokeThickness,
            wordWrap:true,
            wordWrapWidth:this.game.width*0.7
        });
        text.setTextBounds(this.game.width*0.2,this.game.height*0.7);
        this.nextLine();                                                                    // Auto text start on scene creation
    },

    nextLine: function () {
        hideSprite(arrows);
        if(chatBubbleCounter==textContent.authorText.length) goToTheNextChapter('menu');
        if (lineIndex === textContent.authorText[chatBubbleCounter].length) {
            canProceed = true;
            showSprite(arrows);
            return;
        }
        line = textContent.authorText[chatBubbleCounter][lineIndex].split(' ');           //  Splitting on spaces because word by word showing up
        wordIndex = 0;                                                                        //  Reset the word index to zero (the first word in the line)
        game.time.events.repeat(settings.wordDelay, line.length, nextWord, this);             //  Call the 'nextWord' function once for each word in the line (line.length)
        lineIndex++;                                                                          //  Advance to the next line
    }
};
