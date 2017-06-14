let chapterThree = {

    create: function () {

        let background = game.add.sprite(0, 0, 'appleBackground');
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

        choiceGood = game.add.sprite(this.game.width*0.2, this.game.height*0.15, 'textBackgroundBig');
        choiceGood.inputEnabled = false;
        choiceGood.events.onInputDown.add(startGoodEnding, this);
        choiceGood.width = this.game.width*0.6;
        choiceGood.height = this.game.height*0.2;

        choiceBad = game.add.sprite(this.game.width*0.2, this.game.height*0.4, 'textBackgroundBig');
        choiceBad.inputEnabled = false;
        choiceBad.events.onInputDown.add(startBadEnding, this);
        choiceBad.width = this.game.width*0.6;
        choiceBad.height = this.game.height*0.2;

        choiceGood.alpha = 0;
        choiceBad.alpha = 0;

        textChoiceGood = game.add.text(0.4*this.game.width,0.175*this.game.height,
            'Contact Michal Zabrzyjewski', {
                font: "Arial",
                fontSize:settings.textSize*0.6+10,
                fill: "#ffffff",
                stroke: settings.textStroke,
                strokeThickness: settings.textStrokeThickness,
                wordWrap:true,
                wordWrapWidth:0.5*this.game.width,
            });
        textChoiceBad = game.add.text(0.4*this.game.width,0.5*this.game.height,
            'Contact someone else', {
                font: "Arial",
                fontSize:settings.textSize*0.6+10,
                fill: "#ffffff",
                stroke: settings.textStroke,
                strokeThickness: settings.textStrokeThickness,
                wordWrap:true,
                wordWrapWidth:0.5*this.game.width,
            });
        textChoiceGood.alpha = 0;
        textChoiceBad.alpha = 0;

        recruiterF = game.add.sprite(0,game.height*0.68, 'recruiterF');
        recruiterM = game.add.sprite(0,game.height*0.68, 'recruiterM');

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
         if(chatBubbleCounter==textContent.chapterThree.length) {
             choiceGood.inputEnabled = true;
             choiceGood.alpha = 0.8;
             choiceBad.inputEnabled = true;
             choiceBad.alpha = 0.8;
             textChoiceGood.alpha = 1;
             textChoiceBad.alpha = 1;
             return;
         }
        if (lineIndex === textContent.chapterThree[chatBubbleCounter].length) {
            showSprite(arrows);
            canProceed = true;
            showSprite(arrows);
            return;
        }
        line = textContent.chapterThree[chatBubbleCounter][lineIndex].split(' ');           //  Splitting on spaces because word by word showing up
        wordIndex = 0;                                                                        //  Reset the word index to zero (the first word in the line)
        game.time.events.repeat(settings.wordDelay, line.length, nextWord, this);             //  Call the 'nextWord' function once for each word in the line (line.length)
        lineIndex++;                                                                          //  Advance to the next line
    },

    selectSprite:function(){
        hideSprite(arrows);
        hideSprite(recruiterF);
        hideSprite(recruiterM);
        if(chatBubbleCounter==1||chatBubbleCounter==3||chatBubbleCounter==5)showSprite(recruiterF);
        if(chatBubbleCounter==2||chatBubbleCounter==4)showSprite(recruiterM);
    }


};
