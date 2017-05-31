var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game')
var Main = function () {};
Main.prototype = {

  preload: function () {
    game.load.image('loading',  'assets/loading.png');
    game.load.image('logo',    'assets/ice.png');
    game.load.script('Splash',  'states/Splash.js');
  },

  create: function () {
    game.state.add('Splasha', Splash);
    game.state.start('Splasha');
  }

};

game.state.add('Main', Main);
game.state.start('Main');