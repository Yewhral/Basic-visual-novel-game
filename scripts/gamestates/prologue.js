var  prologueState = {

    create: function () {

        var background = game.add.sprite(0, 0, 'prologueBackground');
        background.height = this.game.height;
        background.width = this.game.width;

        var BackgroundBig = game.add.sprite(this.game.width*0.1, this.game.width*0.05, 'textBackgroundBig');
        BackgroundBig.inputEnabled = true;
        BackgroundBig.events.onInputDown.add(this.proceed, this);
        BackgroundBig.width = this.game.width*0.8;
        BackgroundBig.height = this.game.height*0.8;

        var arrows = game.add.sprite(0.8*this.game.width, 0.8*this.game.height, 'proceedArrows');

        text = game.add.text(settings.bigBgTextX, settings.bigBgTextY, '', {font: "Arial",fontSize:38, fill: "#ffffff", wordWrap:true, wordWrapWidth:this.game.width*0.7});
        text.stroke = settings.textStroke;
        text.strokeThickness = settings.textStrokeThickness;
        text.fill = settings.textFill;
        //text.lineSpacing = 30;

        this.nextLine(); // launches next line showing up, I will do this on start of a slide and pause at something

        arrows.animations.add('next');
        arrows.animations.play('next', 3, true);
    },

    proceed: function () {
        game.add.sprite(game.rnd.integerInRange(50, 1200), game.rnd.integerInRange(1, 650), 'proceedArrows');
    },

    nextLine: function () {
        if (lineIndex === textContent.prologueText[2].length) {
            return;
        }
        line = textContent.prologueText[2][lineIndex].split(' ');                             //  Splitting on spaces because word by word showing up
        wordIndex = 0;                                                                        //  Reset the word index to zero (the first word in the line)
        game.time.events.repeat(settings.wordDelay, line.length, nextWord, this);        //  Call the 'nextWord' function once for each word in the line (line.length)
        lineIndex++;                                                                          //  Advance to the next line
    }

};

var line = [];
var wordIndex = 0;
var lineIndex = 0;

