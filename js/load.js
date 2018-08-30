var Load = function(game){};
Load.prototype = {
	preload: function(){

		// setup of loading bar
		var loadingBar = this.add.sprite(game.width/2, game.height/2, 'loading');
		loadingBar.anchor.set(0.5);
		game.load.setPreloadSprite(loadingBar);

		game.load.path = 'assets/img/';

		game.load.image('title', 'title.png');
		game.load.image('town', 'town.png');
		game.load.image('forest', 'Forest.png');
		game.load.image('graveyard', 'Graveyard.png');

		ame.load.atlas('atlas', 'atlas.png', 'atlas.json');

		//game.load.atlas('mc2', 'atlas.png', 'atlas.json');
		game.load.image('screen', 'UI.png');
        game.load.image('a1', 'actions-01.png');
		game.load.image('a2', 'actions-02.png');
		game.load.image('a3', 'actions-03.png');
		game.load.image('a4', 'actions-04.png');
		game.load.image('a5', 'actions-05.png');
		//game.load.atlas('arrow', 'arrow.png', 'atlas.png', 'atlas.json');

		/*game.load.atlas('potion', 'potion.png', 'atlas.png', 'atlas.json');
		game.load.atlas('key1', 'key1.png', 'atlas.png', 'atlas.json');
		game.load.atlas('key2', 'key2.png', 'atlas.png', 'atlas.json');
		game.load.atlas('key3', 'key3.png', 'atlas.png', 'atlas.json');
		game.load.atlas('saxlube', 'saxlube.png', 'atlas.png', 'atlas.json');
		game.load.atlas('rose', 'rose.png', 'atlas.png', 'atlas.json');
		game.load.atlas('skull', 'skull.png', 'atlas.png', 'atlas.json');
		game.load.atlas('axe', 'axe.png', 'atlas.png', 'atlas.json');
		game.load.atlas('sign', 'sign.png', 'atlas.png', 'atlas.json');
		game.load.atlas('doggo', 'doggo.png', 'atlas.png', 'atlas.json');
		game.load.atlas('grave1', 'grave1.png', 'atlas.png', 'atlas.json');
		game.load.atlas('grave2', 'grave2.png', 'atlas.png', 'atlas.json');

		game.load.atlas('pudding', 'pudding.png', 'atlas.png', 'atlas.json');*/
		game.load.image('puddingC', 'pudding2.png', 'atlas.png', 'atlas.json');
		//game.load.atlas('mynth', 'mynth.png', 'atlas.png', 'atlas.json');
		game.load.image('mynthC', 'mynth2.png', 'atlas.png', 'atlas.json');
		//game.load.atlas('bard', 'bard.png', 'atlas.png', 'atlas.json');
		game.load.image('bardC', 'bard2.png', 'atlas.png', 'atlas.json');
		//game.load.atlas('barkeep', 'barkeep.png', 'atlas.png', 'atlas.json');
		game.load.image('barkeepC', 'barkeep2.png', 'atlas.png', 'atlas.json');

		//game.load.atlas('lumberjack', 'lumberjack.png', 'atlas.png', 'atlas.json');
		game.load.image('lumberjackC', 'lumberjack2.png', 'atlas.png', 'atlas.json');

		//game.load.atlas('dic', 'dic.png', 'atlas.png', 'atlas.json');
		game.load.image('dicC', 'dic2.png', 'atlas.png', 'atlas.json');

		game.load.image('potion-1-1', 'potion-1-1.png');
		game.load.image('potion-1-2', 'potion-1-2.png');
		game.load.image('potion-1-3', 'potion-1-3.png');
		game.load.image('potion-1-4', 'potion-1-4.png');

		game.load.image('mynth-1-1', 'mynth-1-1.png');
		game.load.image('mynth-1-2', 'mynth-1-2.png');
		game.load.image('mynth-1-3', 'mynth-1-3.png');
		game.load.image('mynth-1-4', 'mynth-1-4.png');

        // load audio assets
        game.load.path = 'assets/audio/';
        game.load.audio('win_snd', ['win sound 1.mp3', 'win sound 1.ogg']);
        //game.load.audio('win_snd2', ['win sound 1-2.mp3', 'win sound 1-2.ogg']);
        game.load.audio('title', ['title-forrest.mp3']);
        game.load.audio('graveyard', ['graveyard.mp3']);
        game.load.audio('credits', ['town-credits.mp3']);
        game.load.audio('alt', ['credits-alt.mp3']);
	},
	create: function(){
		stateIn='load';
		// go to mainMenu state
		game.state.start('mainMenu');
	}
};
