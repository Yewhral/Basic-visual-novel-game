
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

    game.load.image('imageKey', 'images/test.jpg');
    game.load.spritesheet('uniqueKey', 'images/test.png', 150, 150, 5);


}


function create() {


    game.add.sprite(0, 0, 'imageKey');

    var sprite = game.add.sprite(300, 200, 'uniqueKey');
    sprite.animations.add('walk');
    sprite.animations.play('walk', 5, true);
}
function update() {
}

