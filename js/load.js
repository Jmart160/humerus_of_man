var load = function(game){};
load.prototype = {
	preload: function(){

		// setup of loading bar
		var loadingBar = this.add.sprite(game.width/2, game.height/2, 'loading');
		loadingBar.anchor.set(0.5);
		game.load.setPreloadSprite(loadingBar);

		game.load.atlas('art', 'assets/img/art.png', 'assets/img/art.json');
		game.load.atlas('dialogue', 'assets/img/dialogue.png', 'assets/img/dialogue.json');

		game.load.image('scroll', 'assets/img/scroll.png')

		game.load.audio('title', 'assets/audio/title-forrest.mp3');
		game.load.audio('graveyard', 'assets/audio/graveyard.mp3');
		game.load.audio('credits', 'assets/audio/town-credits.mp3');
		game.load.audio('alt', 'assets/audio/credits-alt.mp3');
	},
	create: function(){
		stateIn='load';
		// go to title state
		game.state.start('title');
	}
};
