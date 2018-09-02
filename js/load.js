var load = function(game){};
load.prototype = {
	preload: function(){

		//loading bone
		var loadingBar = this.add.sprite(game.width/2, game.height/2, 'loading');
		loadingBar.anchor.set(0.5);
		game.load.setPreloadSprite(loadingBar);

		//load atlases of images
		game.load.atlas('art', 'assets/img/art.png', 'assets/img/art.json');
		game.load.atlas('dialogue', 'assets/img/dialogue.png', 'assets/img/dialogue.json');

		//load stand-alone images
		game.load.image('scroll', 'assets/img/scroll.png');
		game.load.image('ending-01', 'assets/img/ending-01.png');
		game.load.image('ending-02', 'assets/img/ending-02.png');
		game.load.image('ending-03', 'assets/img/ending-03.png');
		game.load.image('ending-04', 'assets/img/ending-04.png');

		//load audio
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
