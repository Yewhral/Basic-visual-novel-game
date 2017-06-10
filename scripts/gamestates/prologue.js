var  prologueState = {

    create: function () {

        game.add.sprite(0, 0, 'prologueBackground');

        var BackgroundBig = game.add.sprite(40, 59, 'textBackgroundBig');
        BackgroundBig.inputEnabled = true;
        BackgroundBig.events.onInputDown.add(this.proceed, this);

        var arrows = game.add.sprite(1120, 650, 'proceedArrows');


        text = game.add.text(settings.bigBgTextX, settings.bigBgTextY, '', {font: "24px Arial", fill: "#ffffff"});
        //add to font wordwrap:true, wordwrapwidth:400 for example ^
        //section for adding text, maybe move to gameconfig
       // text.setTextBounds(0, 0, 500, 500);
        text.stroke = '#111111';
        text.strokeThickness = 4;
        text.fill = '#ffffff';
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
    }

};

var line = [];
var wordIndex = 0;
var lineIndex = 0;

