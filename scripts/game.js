
var game = new Phaser.Game(
    settings.width,
    settings.height,
    settings.renderer,
    'settings.parent'
   );




var clearText= function(){      // clears the text bubble
    text.text = '';
};

var nextWord = function () {
    text.text = text.text.concat(line[wordIndex] + " ");                                 // Add next word to the string and a ' '
    wordIndex++;                                                                         // Next word in the line
    if (wordIndex === line.length) {                                                     // If last word of a line
        text.text = text.text.concat("\n");                                              // New line
        game.time.events.add(settings.lineDelay, this.nextLine, this);                   // Get the next line after the lineDelay amount of ms
    }
};


game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('prologue',prologueState);
game.state.add('info',gameInfo);


game.state.start('load');

