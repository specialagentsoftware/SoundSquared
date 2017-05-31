var boot = function(game){};
boot.prototype = {
	preload: function()
	{
		this.load.image("preloadbar",urlprefix +"/assets/images/loading.png");
		this.load.image("brandlogo",urlprefix +"/assets/images/icepeddler.png");
	    this.load.image("loadingtext",urlprefix +"/assets/images/loadingtext.png");
		this.load.image("icepeddler",urlprefix +"/assets/images/icepeddler.png");
        this.load.image("icepeddlergames",urlprefix +"/assets/images/ice.png");
        game.load.image("gametitle", urlprefix +"/assets/images/gametitle.png");
		game.load.audio('bgm', [urlprefix +'/assets/audio/bg.wav']);
	},
    create: function()
    {
    
        music = game.add.audio('bgm');
        music.play("","0",1,true,true); 

    },

	update: function()
	{
		this.state.start('load');
	}
};