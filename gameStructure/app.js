// eslint-disable-next-line no-empty-function
function Game() {}

Game.prototype = {
  start: function() {
    var game = new Phaser.Game(640, 480, Phaser.AUTO, "game-area");

    game.state.add("boot", BootState);
    game.state.add("preload", PreloadState);
    game.state.add("main-intro", MainIntroState);
    game.state.add("main-menu", MainMenuState);
    game.state.add("level-master", LevelMasterState);
    game.state.add("level-intro", MainIntroState);
    game.state.add("level-round", LevelRoundState);
    game.state.start("boot");
  }
};
