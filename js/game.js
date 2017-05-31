var game;
var music;
var silencesedge = false;
var silencemusic = false;
var urlprefix = "";
var synth = new Tone.Synth().toMaster();
var gameOptions = {
    gameWidth: 750,
    gameHeight: 1334,
    circleColors: [0xff0099, 0xf3f315, 0x83f52c, 0x630dd0],
}
    game = new Phaser.Game(gameOptions.gameWidth, gameOptions.gameHeight);
    game.state.add("GameTitle", gameTitle);
    game.state.add("GameMenu", gameMenu);
    game.state.add("OptionMenu",gameOption);
    game.state.add("Play",playState);
    game.state.add("load",loading);
    game.state.add("boot",boot);
    game.state.add("sedgewick",sedgewickstate);
    game.state.add('win',winState);
    game.state.add('lose',loseState);
    game.state.add('timeover',timeoverState);
    game.state.start("boot");