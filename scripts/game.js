var game = new Phaser.Game(
    settings.width,
    settings.height,
    settings.renderer,
    'settings.parent'
   );

var clearText = function(){      // clears the text bubble
    text.text = '';
    wordIndex = 0;
    lineIndex = 0;
};

var nextWord = function () {
    text.text = text.text.concat(line[wordIndex] + " ");                                 // Add next word to the string and a ' '
    wordIndex++;                                                                         // Next word in the line
    if (wordIndex === line.length) {                                                     // If last word of a line
        text.text = text.text.concat("\n");                                              // New line
        game.time.events.add(settings.lineDelay, this.nextLine, this);                   // Get the next line after the lineDelay amount of ms
    }
};

var proceed = function () {
    if(canProceed==true) {
        clearText();
        canProceed=false;
        chatBubbleCounter++;
        this.nextLine();
    }
};

// TODO move variables to some less global scope
var canProceed = false;
var line = [];
var wordIndex = 0;
var lineIndex = 0;
var chatBubbleCounter = 0;

game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('prologue',prologueState);
game.state.add('author',author);
game.state.add('gameInfo',gameInfo);

game.state.start('load');

