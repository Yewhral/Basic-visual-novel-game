let game = new Phaser.Game(
    settings.width,
    settings.height,
    settings.renderer,
    'settings.parent'
   );

let clearText = function(){      // clears the text bubble
    text.text = '';
    wordIndex = 0;
    lineIndex = 0;
};

let nextWord = function () {
    text.text = text.text.concat(line[wordIndex] + " ");                                 // Add next word to the string and a ' '
    wordIndex++;                                                                         // Next word in the line
    if (wordIndex === line.length) {                                                     // If last word of a line
        text.text = text.text.concat("\n");                                              // New line
        game.time.events.add(settings.lineDelay, this.nextLine, this);                   // Get the next line after the lineDelay amount of ms
    }
};

let proceed = function () {
    if(canProceed==true) {
        clearText();
        canProceed=false;
        chatBubbleCounter++;
        this.nextLine();
    }
};

let goBack = function () {
    wordIndex = 0;
    lineIndex = 0;
    chatBubbleCounter = 0;
    line = [];
    canProceed=false;
    game.state.start('menu');
};

let goToTheNextChapter = function(x){
    wordIndex = 0;
    lineIndex = 0;
    chatBubbleCounter = 0;
    line = [];
    canProceed=false;
    game.state.start(x);
};

let startGoodEnding = function(){
    wordIndex = 0;
    lineIndex = 0;
    chatBubbleCounter = 0;
    line = [];
    canProceed=false;
    game.state.start('endingGood');
};

let startBadEnding = function(){
    wordIndex = 0;
    lineIndex = 0;
    chatBubbleCounter = 0;
    line = [];
    canProceed=false;
    game.state.start('endingBad');
};

function hideSprite(sprite){
    sprite.alpha = 0;
}
function showSprite(sprite){
    sprite.alpha=1;
}

// TODO move variables to some less global scope
let canProceed = false;
let line = [];
let wordIndex = 0;
let lineIndex = 0;
let chatBubbleCounter = 0;

game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('prologue',prologueState);
game.state.add('chapterOne',chapterOne);
game.state.add('chapterTwo',chapterTwo);
game.state.add('chapterThree',chapterThree);
game.state.add('endingGood',endingGood);
game.state.add('endingBad',endingBad);
game.state.add('author',author);
game.state.add('gameInfo',gameInfo);

game.state.start('load');

