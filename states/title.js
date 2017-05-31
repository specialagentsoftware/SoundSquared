var gameTitle = function(game){};
gameTitle.prototype = {
    preload: function(){
       
    },
    create: function(){
        
        var emitter = game.add.emitter(game.width / 2, 0, 100);
        emitter.width = game.width;
        emitter.makeParticles("particle");
        emitter.minParticleScale = 0.9;
        emitter.maxParticleScale = 1.2;
        emitter.setYSpeed(150, 250);
        emitter.setXSpeed(0, 0);
        emitter.setAlpha(1, 1);
        emitter.minRotation = 0;
        emitter.maxRotation = 0;
        emitter.start(false, 4000, 50, 0);
        emitter.forEach(function(particle){
            particle.tint = Phaser.ArrayUtils.getRandomItem(gameOptions.circleColors);
        });
        this.titleBack = game.add.sprite(game.width / 2, 300, "gametitle");
        this.titleBack.anchor.set(0.5);
        this.titleBack.tint = Phaser.ArrayUtils.getRandomItem(gameOptions.circleColors);
        var title = game.add.sprite(game.width / 2, 300, "gametitle");
        title.anchor.set(0.5);
        title.tint = Phaser.ArrayUtils.getRandomItem(gameOptions.circleColors);

        this.buttonBack = game.add.sprite(game.width / 2, game.height / 2 + 400, "playbutton");
        this.buttonBack.anchor.set(0.5);
        this.buttonBack.tint = Phaser.ArrayUtils.getRandomItem(gameOptions.circleColors);
        var playButton = game.add.button(game.width / 2, game.height / 2 + 400, "playbutton", function(){
            game.state.start("GameMenu");
        }, this);
        playButton.anchor.set(0.5);
        playButton.tint = Phaser.ArrayUtils.getRandomItem(gameOptions.circleColors);
    	
	
        var style = {font: "50px Arial", fill: "#00EE00",align: "center",wrap: true};
        var backgroundinfo = game.add.text(375,600,"A Traditional Froma Game",style);
        backgroundinfo.anchor.set(0.5);
    },
    update: function(){
        this.titleBack.position.set(game.width / 2 + game.rnd.integerInRange(-8, 8), 300 + game.rnd.integerInRange(-8, 8));
        this.buttonBack.position.set(game.width / 2 + game.rnd.integerInRange(-8, 8), game.height / 2 + 400 + game.rnd.integerInRange(-8, 8));
    }
};
