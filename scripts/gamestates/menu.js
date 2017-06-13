var menuState = {


  create:function(){

      var background = game.add.sprite(0, 0, 'mainMenuBackground');
      background.height = this.game.height;
      background.width = this.game.width;

      var startButton = game.add.button(0.167*this.game.width,0.195*this.game.height,'mainMenuStartButton',this.gameStart,this,1,2,0);
      var gameDetailsButton = game.add.button(0.167*this.game.width,0.3888*this.game.height,'mainMenuGameButton',this.aboutGame,this,1,2,0);
      var authorButton = game.add.button(0.167*this.game.width,0.58333*this.game.height,'mainMenuAuthorButton',this.aboutAuthor,this,1,2,0);

      startButton.width = 0.2265625*this.game.width;
      startButton.height = 0.1018519*this.game.height;
      gameDetailsButton.width = 0.2265625*this.game.width;
      gameDetailsButton.height = 0.1018519*this.game.height;
      authorButton.width = 0.2265625*this.game.width;
      authorButton.height = 0.1018519*this.game.height;

      text = game.add.text(
          0.215*this.game.width,
          0.22*this.game.height,
          'Start the game', {
          font: "Arial",
          fontSize:settings.textSize*0.6+8,
          fill: "#ffffff",
          stroke: settings.textStroke,
          strokeThickness: settings.textStrokeThickness
      });
      text = game.add.text(
          0.22*this.game.width,
          0.414*this.game.height,
          'Game details', {
          font: "Arial",
          fontSize:settings.textSize*0.6+8,
          fill: "#ffffff",
          stroke: settings.textStroke,
          strokeThickness: settings.textStrokeThickness
      });
      text = game.add.text(
          0.23*this.game.width,
          0.61*this.game.height,
          'Author info', {
          font: "Arial",
          fontSize:settings.textSize*0.6+8,
          fill: "#ffffff",
          stroke: settings.textStroke,
          strokeThickness: settings.textStrokeThickness
      });
  },

  gameStart:function(){
    game.state.start('prologue');
  },

  aboutAuthor:function(){
    game.state.start('author');
  },

  aboutGame:function(){
    game.state.start('gameInfo');
  }


};