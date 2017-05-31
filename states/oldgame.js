var game;
var silencesedge = false;
var gameOptions = {
    gameWidth: 750,
    gameHeight: 1334,
    circleColors: [0xff0099, 0xf3f315, 0x83f52c, 0x630dd0],
}
window.onload = function() {
    game = new Phaser.Game(gameOptions.gameWidth, gameOptions.gameHeight);
    game.state.add("GameTitle", gameTitle);
    game.state.start("GameTitle");
    game.state.add("GameMenu", gameMenu);
    game.state.add("OptionMenu",gameOption);
    //game.state.add("Game",gameBoard);
}

var gameMenu = function(game){}
gameMenu.prototype = {
	preload: function(){
		game.load.image("gamemenu","/assets//gamemenu.png");
		game.load.image("1player","/assets//1player.png");
		game.load.image("2player","/assets//2player.png");
		game.load.image("options","/assets//options.png");
		game.load.image("exitbutton","/assets//exitbutton.png");
		game.load.image("happy","/assets//happy.png");
		game.load.image("sad","/assets//sad.png");
		game.load.image("bubble","/assets//speechbubble.png");

	},
    create: function(){
    	
    	var menu = game.add.sprite(game.width / 2, game.height / 2 - 225, "gamemenu");
    	menu.anchor.set(0.5);
    	menu.tint = Phaser.ArrayUtils.getRandomItem(gameOptions.circleColors);

        Sedgewick(1000,'menu','pregame',silencesedge);

    	var exitbutton = game.add.button(game.width / 2, game.height / 2 + 175, "exitbutton", function(){
    	game.state.start("GameTitle");}, this);
    	exitbutton.anchor.set(0.5);
    
    	var oneplayer = game.add.button(game.width / 2, game.height / 2 - 50,"1player",function(){}, this);
    	oneplayer.anchor.set(0.5);
    
    	var twoplayer = game.add.button(game.width / 2, game.height / 2 + 25, "2player",function(){}, this);
    	twoplayer.anchor.set(0.5);
    
    	var options = game.add.button(game.width / 2, game.height / 2 +  100, "options",function(){
    	game.state.start("OptionMenu");}, this);
    	options.anchor.set(0.5);
    	},
    	update: function(){
    	}
}

var gameTitle = function(game){}
gameTitle.prototype = {
    preload: function(){
       
        game.load.image("gametitle", "/assets//gametitle.png");
        game.load.image("playbutton", "/assets//playbutton.png");
        game.load.image("particle", "/assets//particle1.png");
        game.load.image("icepeddler","/assets//icepeddler.png");
        game.load.image("icepeddlergames","/assets//ice.png");
        game.load.audio('bgm', ['/assets//bg.wav']);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.disableVisibilityChange = true;        
    },
    create: function(){
        music = game.add.audio('bgm');
        
        if(game.sound.isPlaying === true)
        {
        console.log('music is playing');
        }
        else
        {
        music.play("","0",1,true,true);	
        }
        
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
    	
		sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'icepeddler');
		sprite.anchor.set(0.5);	


	//	Then we tween it in from off the top of the game.
	//	It will end up at the middle of the game, as it's tweening FROM the value given below to its current position.
		game.add.tween(sprite).from( { y: -100 }, 2000, Phaser.Easing.Bounce.Out, true);

        text = game.add.sprite(game.world.centerX, game.world.centerY + 139, "icepeddlergames");

    //	Center align
    	text.anchor.set(0.5);
    	text.align = 'center';

    //	Font style
    	text.font = 'Arial Black';
    	text.fontSize = 50;
    	text.fontWeight = 'bold';

    //	Stroke color and thickness
    	text.stroke = '#000000';
    	text.strokeThickness = 6;
    	text.fill = '#43d637';

    },
    update: function(){
        this.titleBack.position.set(game.width / 2 + game.rnd.integerInRange(-8, 8), 300 + game.rnd.integerInRange(-8, 8));
        this.buttonBack.position.set(game.width / 2 + game.rnd.integerInRange(-8, 8), game.height / 2 + 400 + game.rnd.integerInRange(-8, 8));
    }
}

var gameOption = function(game){}
gameOption.prototype = {
	preload: function(){
		game.load.image("menu","/assets//gamemenu.png");
		game.load.image("optionexitbutton","/assets//exitbutton.png");
		game.load.image("optionhappy","/assets//happy.png");
		game.load.image("optionsad","/assets//sad.png");
		game.load.image("optionbubble","/assets//speechbubble.png");
		game.load.image("optionsilence","/assets//silence.png");

	},
    create: function(){
    	var sedgewprite = Sedgewick(1000,'optionmenu','pregame',silencesedge);
    	var sedgewpritetwo = Sedgewick(1000,'optionmenu','pregame',silencesedge);

    	var optionmenu = game.add.sprite(game.width / 2, game.height / 2 - 225, "menu");
    	optionmenu.anchor.set(0.5);
    	optionmenu.tint = Phaser.ArrayUtils.getRandomItem(gameOptions.circleColors);
        
        //var checkbox1 = game.add.checkbox( 10, 10, { text: 'Silence Sedgewick', style: { fill: '#ffffff' } },'optionsilence' );
        //checkbox1.events.onInputUp.add( function( elm, pointer ){
    	//alert( checkbox1.state );
		//}, this );
        //sedgegroup.add(game,sedgeprite);

    	var options = game.add.button(game.width / 2, game.height / 2 +  25, "optionsilence",function(){
    	if (silencesedge === true)
    	{
    		silencesedge = false;
    		toastr.info("Sedgewick is free to speak.")

				toastr.options = {
  					"closeButton": false,
  					"debug": false,
  					"newestOnTop": false,
  					"progressBar": false,
  					"positionClass": "toast-bottom-center",
  					"preventDuplicates": false,
  					"onclick": null,
  					"showDuration": "300",
  					"hideDuration": "1000",
  					"timeOut": "5000",
  					"extendedTimeOut": "1000",
  					"showEasing": "swing",
  					"hideEasing": "linear",
  					"showMethod": "fadeIn",
  					"hideMethod": "fadeOut"
    	}
    }
    	else
    	{
    		silencesedge = true;
    		
    		toastr.info("Sedgewick has been silenced!")

				toastr.options = {
  					"closeButton": false,
  					"debug": false,
  					"newestOnTop": false,
  					"progressBar": false,
  					"positionClass": "toast-bottom-center",
  					"preventDuplicates": false,
  					"onclick": null,
  					"showDuration": "300",
  					"hideDuration": "1000",
  					"timeOut": "5000",
  					"extendedTimeOut": "1000",
  					"showEasing": "swing",
  					"hideEasing": "linear",
  					"showMethod": "fadeIn",
  					"hideMethod": "fadeOut"
    	}
    }
    	})

    	options.anchor.set(0.5);

    	var optionexitbutton = game.add.button(game.width / 2, game.height / 2 + 200, "optionexitbutton", function(){
    	game.state.start("GameMenu");}, this);
    	optionexitbutton.anchor.set(0.5);
    	},
    		update: function(){
    	}
}


function Sedgewick (mseconds,commenttype,gameoutcome,silence)
{
	if (silence === true)
	{
		game.add.tween(sedgewick).from({x:100},10000 / 2, Phaser.Easing.Linear.Out,true);
		return;
	}

		if (gameoutcome === "win" || gameoutcome === "pregame")
			{
				sedgewick = game.add.sprite(game.world.centerX - 200, game.world.centerY - 500, 'happy');
			}
		else
			{
				sedgewick = game.add.sprite(game.world.centerX - 200, game.world.centerY - 500, 'sad');	
			}
	
	sedgewick.anchor.set(0.5);
    game.add.tween(sedgewick).from( { x: -100 }, 1000 / 2, Phaser.Easing.Linear.In, true);

    	setTimeout(function()
    		{
    			var bubble = game.add.sprite(300, game.world.centerY - 720,"bubble" );
    			var style = { font: "24px Arial", fill: "black",color: "black", wordWrap: true, wordWrapWidth: sprite.width, backgroundColor: "#ffffff" };
            	

            	if (commenttype === "menu")
            	{
            		var speech = {1: "Make a selection Chief, while I'm still pretty.",2: "Go ahead, pick something.",3: "You see those buttons, Click one",4: "When were you planning on doing something?", 5: "It's ok to be afraid sometimes. go ahead and pick something", 6: "Make a wish, turd. ", 7: "Talk with your fingers, Steve."};
            	}
            	else if (commenttype === "pregame")
            	{
					var speech = {1: "You want to play? Aww thats cute. Prepare yourself!",2: "Do you enjoy losing? I hope so. ",3: "Haha, you can be a part of my legacy.",4: "I will not give you any special treatment.", 5: "Every dog will have his day, but not you and not today.", 6: "You rock! Oh wait, not you. Sorry!", 7: "Prepare to be boarded!"};
            	}
				else if (commenttype === "wingame")
            	{
					var speech = {1: "Well, I can't say that I am surprised.",2: "Who had any questions about the way this turned out?",3: "I would say I am sorry, but it is not polite to lie!",4: "Hey, you did well...man I could not even finish that sentence.", 5: "I am glad you were able to see me play today. Maybe you can learn something.", 6: "Is your last name Gump?", 7: "BWAHAHAHAHAHAHAHA! I am so freaking good!"};
            	}
            	else if (commenttype === "losegame")
            	{
					var speech = {1: "I demand a recount. This is impossible.",2: "Even a broken watch is right twice a day.",3: "You had better go and buy a lottery ticket, because you are so lucky.",4: "I absolutely refuse to admit defeat.", 5: "What...You....No. It cant...NOOOOOOO!", 6: "I was doing my taxes, what just happened while I was away?", 7: "Well, at least I am not ugly."};
            	}
            	else if (commenttype === "optionmenu")
            	{
					var speech = {1: "Hey, stay away from that silence button.",2: "I don't think that you realze how plesant I am.",3: "Hey you look good today. Don't silence me.",4: "Hey, can we talk about this need to change things?", 5: "We got Options, baby.", 6: "All the options in this place, wow.", 7: "What the...what?"};
            	}
            	else if (commenttype === "duringgame")
            	{
					var speech = {1: "In the real world David is killed by Goliath.",2: "You do not get credit for trying.",3: "The anchient Romans feared me.",4: "You can't possibly think this will end well.", 5: "Prepare for failure, of course you are used to that.", 6: "You have the memory of a swan.", 7: "I can't believe you got that one."};
            	}
            	text = game.add.text(0, 0, speech[Math.floor((Math.random() * 7) + 1)], style);
            	text.anchor.set(0.5);
            	text.x = Math.floor(bubble.x + bubble.width / 2);
            	text.y = Math.floor(bubble.y + bubble.height / 2);
    		}, mseconds / 2);
}