var sedgewickstate = function(game){};
sedgewickstate.prototype = {
    preload: function()
    {
        var music = game.add.audio('bgm');        
    },

    disablemusic: function()
    {
         music.pause();
    },

    enablemusic: function()
    {
        music.play();
    }
};

function Sedgewick(mseconds,commenttype,gameoutcome,silence)
{
    if (silence === true)
    {
        try {
            sedgewick.destroy();
        }
        catch(err) {

        }
        finally {
        return;    
        }
        //game.add.tween(sedgewick).from({x:100},10000 / 2, Phaser.Easing.Linear.Out,true);
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
                var style = { font: "24px Arial", fill: "black",color: "black", wordWrap: true, wordWrapWidth: bubble.width, backgroundColor: "#ffffff" };
                

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
    };