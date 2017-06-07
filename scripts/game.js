
var game = new Phaser.Game(
    settings.width,
    settings.height,
    settings.renderer,
    'settings.parent',
    {
      preload: preload,
      create: create,
      update: update
    });



function preload() {



}


function create() {

    game.stage.backgroundColor = '#182d3b';
}
function update() {
}

