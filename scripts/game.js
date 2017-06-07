
var game = new Phaser.Game(
    settings.width,
    settings.height,
    settings.renderer,
    'settings.parent'
   );


game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('prologue',prologueState);
game.state.add('info',gameInfo);


game.state.start('load');

