class GameTitle extends Phaser.State {
 
    preload() {
         
    }
 
    create() {
		this.game.state.start('Main');
		console.log('GameTitle state loaded');
    }
 
    update() {
 
    }
 
}