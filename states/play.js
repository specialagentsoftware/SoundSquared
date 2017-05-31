var playState = function(game){};
var stringarr = "";
var arrayofsubmit = [];
var submitentry = "";
var showtimer = false;
var followstring;
var entrydisabled =true;
var howto;
localStorage.setItem('hasplayed','false');
playState.prototype = {

preload: function()
{
	var sedgewick = Sedgewick(1000,'duringgame','pregame',silencesedge);
},

create: function()
{

 game.stage.backgroundColor = '#2c3cf2';

 if(localStorage.getItem('hasplayed') === 'false')
 {
 howto = game.add.button(405,game.world.height / 2 + 10,"howto",function(){
 	 this.destroy();
     localStorage.setItem('hasplayed','true');
 	 })
     howto.anchor.set(0.5);
 }
 var one = game.add.button(200, 400, "one", function(){arrayofsubmit.push(1); synth.triggerAttackRelease('A4',"8n");}, this);
        one.anchor.set(0.5);
        one.inputEnabled = false;
 var two = game.add.button(400, 400, "two", function(){arrayofsubmit.push(2);synth.triggerAttackRelease('B4',"8n");}, this);
        two.anchor.set(0.5);
		two.inputEnabled = false;
 var three = game.add.button(600, 400, "three", function(){arrayofsubmit.push(3);synth.triggerAttackRelease('C4',"8n");}, this);
        three.anchor.set(0.5);
        three.inputEnabled = false;
 var four = game.add.button(200, 565, "four", function(){arrayofsubmit.push(4);synth.triggerAttackRelease('D4',"8n");}, this);
        four.anchor.set(0.5);
        four.inputEnabled = false;

 var five = game.add.button(400, 565, "five", function(){arrayofsubmit.push(5);synth.triggerAttackRelease('E4',"8n");}, this);
        five.anchor.set(0.5);
        five.inputEnabled = false;

 var six = game.add.button(600, 565, "six", function(){arrayofsubmit.push(6);synth.triggerAttackRelease('F4',"8n");}, this);
        six.anchor.set(0.5);
        six.inputEnabled = false;

 var seven = game.add.button(200, 730, "seven", function(){arrayofsubmit.push(7);synth.triggerAttackRelease('G4',"8n");}, this);
        seven.anchor.set(0.5);
        seven.inputEnabled = false;
 var eight = game.add.button(400, 730, "eight", function(){arrayofsubmit.push(8);synth.triggerAttackRelease('A6',"8n");}, this);
        eight.anchor.set(0.5);
        eight.inputEnabled = false;
 var nine = game.add.button(600, 730, "nine", function(){arrayofsubmit.push(9);synth.triggerAttackRelease('B6',"8n");}, this);
        nine.anchor.set(0.5);
        nine.inputEnabled = false;

    submitentry = game.add.button(400,930,'submitentry',function(){
	var submitedentry = arrayofsubmit;
	if (stringarr === null || submitedentry === null)
	{
		alert("Select Start Game, to Begin.");
	}
	else if (JSON.stringify(stringarr) === JSON.stringify(submitedentry))
	{
		stringarr = "";
		submitedentry = "";
		game.state.start('win');

	}
	else
	{
		stringarr = "";
		submitedentry = "";
		game.state.start('lose');	
	}
});
submitentry.inputEnabled = false;
submitentry.anchor.set(0.5);

var startgame = game.add.button(400,1050,'startbutton',function()
{
	stringarr = generatestring(game.rnd.integerInRange(1, 9));
	var followstring = game.add.text(400,1150,stringarr,{font: "55px Arial", fill: "#00EE00",align: "center",wrap: true});
	followstring.anchor.set(0.5);
	startgame.inputEnabled = false;

	setTimeout(function(){
		followstring.destroy();
		starttimer();
		one.inputEnabled = true;
		two.inputEnabled = true;
		three.inputEnabled = true;
		four.inputEnabled = true;
		five.inputEnabled = true;
		six.inputEnabled = true;
		seven.inputEnabled = true;
		eight.inputEnabled = true;
		nine.inputEnabled = true;
		submitentry.inputEnabled = true;

	},2000);

	arrayofsubmit = [];
});

startgame.anchor.set(0.5);


var exitbutton = game.add.button(400,1250,'exitbutton',function()
{
	game.state.start('GameMenu')
});
exitbutton.anchor.set(0.5);

function starttimer(seconds)
{
	showtimer = true;
    game.time.events.add(Phaser.Timer.SECOND * 8, timeover, this);
}

function timeover()
{
	game.state.start('timeover');
}

function generatestring(lengthofarraytogenerate)
{
	var length = lengthofarraytogenerate;

	var stringselection = [];

    for (i = 0; i < length-1; i++)
    {
	stringselection.push(game.rnd.integerInRange(1, 9));
	}

	return stringselection;
	
}

	followstring = game.add.text(400,1150,"Time reamaining: " + game.time.events.duration ,{font: "55px Arial", fill: "#00EE00",align: "center",wrap: true});
	followstring.anchor.set(0.5);
	followstring.visible = false;

        if (localStorage.getItem('hasplayed') === 'false')
        {
	    howto.bringToTop();
        }
        else
        {howto.destroy();}

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
	console.log('storage available');
}
else {
	console.log('nope');
}

//localStorage.setItem('hasplayed','true');
//console.log(localStorage.getItem('hasplayed'));

},
update: function()
{

	if (showtimer === false)
	{
	return;
	}
	else
	{
	followstring.visible = true;
	followstring.setText("Time remaining: " + game.time.events.duration.toString().substring(0,1) + '.' + game.time.events.duration.toString().substring(1,2));
 }
},
shutdown: function()
{
	showtimer = false;
	followstring.setText('');
	stringarr = "";
    arrayofsubmit = [];
    submitentry = "";
}
}
;