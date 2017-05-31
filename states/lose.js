var loseState = function(game){};
loseState.prototype = {
 preload: function()
 {
 	Sedgewick(1000,'wingame','win',silencesedge);
 },
 create: function()
 {
 	var yay = game.add.text(400,550,"You Lost !!!",{font: "100px Arial", fill: "#ff4400",align: "center",wrap: true});
 	yay.anchor.set(0.5);

 	 	var optionexitbutton = game.add.button(game.width / 2, game.height / 2 + 300, "optionexitbutton", function(){
        game.state.start("GameMenu");}, this);
        optionexitbutton.anchor.set(0.5);
 }
};