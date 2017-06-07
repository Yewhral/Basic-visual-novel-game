var menuState = {


  create:function(){
      game.add.sprite(0, 0, 'mainMenuBackground');
      game.add.button(0,0,'mainMenuStartButton',this.start,this,0,1,2);

  },

  start:function(){
    game.state.start('prologue');
  }


};