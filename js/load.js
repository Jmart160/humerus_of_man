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

		game.load.image('player', 'mc2.png');
		game.load.image('screen', 'UI.png');
        game.load.image('a1', 'actions-01.png');
		game.load.image('a2', 'actions-02.png');
		game.load.image('a3', 'actions-03.png');
		game.load.image('a4', 'actions-04.png');
		game.load.image('a5', 'actions-05.png');
		game.load.image('arrow', 'arrow.png');

		game.load.image('potion', 'potion.png');
		game.load.image('key1', 'key1.png');
		game.load.image('key2', 'key2.png');
		game.load.image('key3', 'key3.png');
		game.load.image('saxlube', 'saxlube.png');
		game.load.image('rose', 'rose.png');
		game.load.image('skull', 'skull.png');
		game.load.image('axe', 'axe.png');
		game.load.image('sign', 'sign.png');
		game.load.image('doggo', 'doggo.png');
		game.load.image('grave1', 'grave1.png');
		game.load.image('grave2', 'grave2.png');

		game.load.image('pudding', 'pudding.png');
		game.load.image('puddingC', 'pudding2.png');
		game.load.image('mynth', 'mynth.png');
		game.load.image('mynthC', 'mynth2.png');
		game.load.image('bard', 'bard.png');
		game.load.image('bardC', 'bard2.png');
		game.load.image('barkeep', 'barkeep.png');
		game.load.image('barkeepC', 'barkeep2.png');

		game.load.image('lumberjack', 'lumberjack.png');
		game.load.image('lumberjackC', 'lumberjack2.png');

		game.load.image('dic', 'dic.png');
		game.load.image('dicC', 'dic2.png');

		game.load.image('potion-1-1', 'potion-1-1.png');
		game.load.image('potion-1-2', 'potion-1-2.png');
		game.load.image('potion-1-3', 'potion-1-3.png');
		game.load.image('potion-1-4', 'potion-1-4.png');

		game.load.image('mynth-1-1', 'mynth-1-1.png');
		game.load.image('mynth-1-2', 'mynth-1-2.png');
		game.load.image('mynth-1-3', 'mynth-1-3.png');
		game.load.image('mynth-1-4', 'mynth-1-4.png');

        // load audio assets
        //game.load.path = 'assets/audio/';
        //game.load.audio('win_snd', ['win sound 1.mp3', 'win sound 1.ogg']);
        //game.load.audio('win_snd2', ['win sound 1-2.mp3', 'win sound 1-2.ogg']);

	},
	create: function(){
		stateIn='load';
		// go to mainMenu state
		game.state.start('mainMenu');
	}
};
