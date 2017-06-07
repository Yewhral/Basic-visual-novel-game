var menuState = {


  create:function(){

      game.add.sprite(0, 0, 'mainMenuBackground');
      game.add.button(0,0,'mainMenuStartButton',this.gameStart,this,0,1,2);
      game.add.button(250,0,'mainMenuStartButton',this.aboutAuthor,this,0,1,2);

  },

  gameStart:function(){
    game.state.start('prologue');
  },

  aboutAuthor:function(){
    game.state.start('info');
  }


};