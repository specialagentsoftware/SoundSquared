var gameMenu = function(game){}
var sedgesprite;
var sedgespritetwo;
var musictrueorfalse = true;

gameMenu.prototype = {
	preload: function(){
	},
    create: function(){

        game.stage.backgroundColor = '#000000';
    	
    	var menu = game.add.sprite(game.width / 2, game.height / 2 - 225, "gamemenu");
    	menu.anchor.set(0.5);
    	menu.tint = Phaser.ArrayUtils.getRandomItem(gameOptions.circleColors);

        Sedgewick(1000,'menu','pregame',silencesedge);

    	var exitbutton = game.add.button(game.width / 2, game.height / 2 + 360, "exitbutton", function(){
    	game.state.start("GameTitle");}, this);
    	exitbutton.anchor.set(0.5);
    
    	var oneplayer = game.add.button(game.width / 2, game.height / 2,"1player",function(){game.state.start('Play')}, this);
    	oneplayer.anchor.set(0.5);
    
    	var twoplayer = game.add.button(game.width / 2, game.height / 2 + 120, "2player",function(){}, this);
    	twoplayer.anchor.set(0.5);
    
    	var options = game.add.button(game.width / 2, game.height / 2 +  240, "options",function(){
    	game.state.start("OptionMenu");}, this);
    	options.anchor.set(0.5);
    	},
    	update: function(){
    	}
}

var gameOption = function(game){}
gameOption.prototype = {
    preload: function(){

        game.stage.backgroundColor = '#000000';
        sedgesprite = Sedgewick(1000,'optionmenu','pregame',silencesedge);
        sedgespritetwo = Sedgewick(1000,'optionmenu','pregame',silencesedge);
    },
    create: function(){

        var optionmenu = game.add.sprite(game.width / 2, game.height / 2 - 225, "menu");
        optionmenu.anchor.set(0.5);
        optionmenu.tint = Phaser.ArrayUtils.getRandomItem(gameOptions.circleColors);

        if (silencesedge === true)
        {
        var options = game.add.button(game.width / 2, game.height / 2 +  125, "optionspeak",function(){
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
    game.state.start("GameMenu");
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
    game.state.start("GameMenu");
    }
});

        options.anchor.set(0.5);

        var optionexitbutton = game.add.button(game.width / 2, game.height / 2 + 300, "optionexitbutton", function(){
        game.state.start("GameMenu");}, this);
        optionexitbutton.anchor.set(0.5);
        if (musictrueorfalse === false)
        {
        var musicstatus = game.add.button(game.width / 2, game.height/2 + 200, "musicon", function(){
            switchmusic(false);
            toastr.info("Music has been enabled!")

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
        game.state.start("GameMenu");
        })
        musicstatus.anchor.set(0.5);
        }
        else
        {
        var musicstatus = game.add.button(game.width / 2, game.height/2 + 200, "musicoff", function(){
            switchmusic(true);
            toastr.info("Music has been disabled!")

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
        game.state.start("GameMenu");
        })
        musicstatus.anchor.set(0.5);
        }
        }
        else
        {
        var options = game.add.button(game.width / 2, game.height / 2 +  125, "optionsilence",function(){
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
    game.state.start("GameMenu");
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
    game.state.start("GameMenu");
    }
});

        options.anchor.set(0.5);

        var optionexitbutton = game.add.button(game.width / 2, game.height / 2 + 300, "optionexitbutton", function(){
        game.state.start("GameMenu");}, this);
        optionexitbutton.anchor.set(0.5);
        if (musictrueorfalse === false)
        {
        var musicstatus = game.add.button(game.width / 2, game.height/2 + 200, "musicon", function(){
            switchmusic(false);
            toastr.info("Music has been enabled!")

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
        game.state.start("GameMenu");
        })
        musicstatus.anchor.set(0.5);
        }
        else
        {
        var musicstatus = game.add.button(game.width / 2, game.height/2 + 200, "musicoff", function(){
            switchmusic(true);
            toastr.info("Music has been disabled!")

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
        game.state.start("GameMenu");
        })
        musicstatus.anchor.set(0.5);
        }

        }},
            update: function(){
        }
};

function switchmusic(onoroff)
{
    if(onoroff === true)
    {
    music.pause();
    musictrueorfalse = false;
    }
    else
    {
    music.play();
        musictrueorfalse = true;
    }

}