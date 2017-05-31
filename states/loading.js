var loading = function(game){
    this.ready = false;
};

loading.prototype = {
    preload: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.disableVisibilityChange = true;

        
        game.load.image("playbutton",urlprefix + "/assets/images/playbutton.png");
        game.load.image("particle", urlprefix +"/assets/images/particle1.png");
        game.load.image("gamemenu",urlprefix +"/assets/images/gamemenu.png");
        game.load.image("1player",urlprefix +"/assets/images/1player.png");
        game.load.image("2player",urlprefix +"/assets/images/2player.png");
        game.load.image("options",urlprefix +"/assets/images/options.png");
        game.load.image("exitbutton",urlprefix +"/assets/images/exitbutton.png");
        game.load.image("happy",urlprefix +"/assets/images/happy.png");
        game.load.image("sad",urlprefix +"/assets/images/sad.png");
        game.load.image("bubble",urlprefix +"/assets/images/speechbubble.png");
        game.load.image("menu",urlprefix +"/assets/images/gamemenu.png");
        game.load.image("optionexitbutton",urlprefix +"/assets/images/exitbutton.png");
        game.load.image("optionhappy",urlprefix +"/assets/images/happy.png");
        game.load.image("optionsad",urlprefix +"/assets/images/sad.png");
        game.load.image("optionbubble",urlprefix +"/assets/images/speechbubble.png");
        game.load.image("optionsilence",urlprefix +"/assets/images/silence.png");
        game.load.image("optionspeak",urlprefix +"/assets/images/speak.png");
        game.load.image("musicoff",urlprefix +"/assets/images/musicoff.png");
        game.load.image("musicon",urlprefix +"/assets/images/musicon.png");
        game.load.image("one",urlprefix +"/assets/images/1.png");
        game.load.image("two",urlprefix +"/assets/images/2.png");
        game.load.image("three",urlprefix +"/assets/images/3.png");
        game.load.image("four",urlprefix +"/assets/images/4.png");
        game.load.image("five",urlprefix +"/assets/images/5.png");
        game.load.image("six",urlprefix +"/assets/images/6.png");
        game.load.image("seven",urlprefix +"/assets/images/7.png");
        game.load.image("eight",urlprefix +"/assets/images/8.png");
        game.load.image("nine",urlprefix +"/assets/images/9.png");
        game.load.image("startbutton",urlprefix +"/assets/images/startgame.png");
        game.load.image("submitentry",urlprefix +"/assets/images/submitentry.png");
        game.load.image("howto",urlprefix +"/assets/images/howto.png");



        var title = game.add.sprite(game.width / 2, 450, "gametitle");
        title.anchor.set(0.5);
        var icepeddler = game.add.sprite(375,200, "icepeddler");
        icepeddler.anchor.setTo(0.5,0.5);
        var loadingtext = game.add.sprite(375,650,"loadingtext");
        loadingtext.anchor.setTo(0.5,0.5);
        var loadingBar = this.add.sprite(375,700,"preloadbar");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        var icepeddlergames = game.add.sprite(375,900, "icepeddlergames");
        icepeddlergames.anchor.setTo(0.5,0.5);
        setTimeout(function(){},5000);
},
create: function()
{
    game.state.start("GameTitle");
}
};
