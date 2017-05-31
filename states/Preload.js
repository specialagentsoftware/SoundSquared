class PreLoad extends Phaser.State {
 
    preload() {
         
    }
 
    create() {
		this.game.state.start('GameTitle');
		console.log('Pre Load State Loaded');
    }
 
    update() {
 
    }
 
}