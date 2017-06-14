let chapterOne = {

    create: function () {

        let background = game.add.sprite(0, 0, 'bigCityBackground');
        background.height = this.game.height;
        background.width = this.game.width;

        let smallBackground = game.add.sprite(0, this.game.height*0.64, 'textBackgroundSmall');
        smallBackground.inputEnabled = true;
        smallBackground.events.onInputDown.add(proceed, this);
        smallBackground.width = this.game.width;
        smallBackground.height = this.game.height*0.36;

        arrows = game.add.sprite(this.game.width*0.9, this.game.height*0.94, 'proceedArrows');                         // Adds arrows and animation when whole text is displayed
        arrows.animations.add('next');
        arrows.animations.play('next', 3,true);

        zabrza = game.add.sprite(0,game.height*0.68, 'zabrza');
        recruiterF = game.add.sprite(0,game.height*0.68, 'recruiterF');

        game.add.button(0, 5, 'homeButton', goBack, this, 1, 0, 1);

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
        this.selectSprite();
        if(chatBubbleCounter==textContent.chapterOne.length) goToTheNextChapter('chapterTwo');
        if (lineIndex === textContent.chapterOne[chatBubbleCounter].length) {
            canProceed = true;
            showSprite(arrows);
            return;
        }
        line = textContent.chapterOne[chatBubbleCounter][lineIndex].split(' ');           //  Splitting on spaces because word by word showing up
        wordIndex = 0;                                                                        //  Reset the word index to zero (the first word in the line)
        game.time.events.repeat(settings.wordDelay, line.length, nextWord, this);             //  Call the 'nextWord' function once for each word in the line (line.length)
        lineIndex++;                                                                          //  Advance to the next line
    },

    selectSprite:function(){
        hideSprite(arrows);
        hideSprite(recruiterF);
        if(chatBubbleCounter==2) {
            hideSprite(zabrza);
            showSprite(recruiterF);
        }
        if(chatBubbleCounter==3) showSprite(zabrza);
    }

};

