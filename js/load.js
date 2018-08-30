var Load = function(game){};
Load.prototype = {
	preload: function(){

		game.load.image('title', 'assets/img/title.png');
		game.load.image('town', 'assets/img/town.png');
		game.load.image('forest', 'assets/img/Forest.png');
		game.load.image('graveyard', 'assets/img/Graveyard.png');		

		game.load.image('player', 'assets/img/mc2.png');
		game.load.image('screen', 'assets/img/UI.png');
        game.load.image('a1', 'assets/img/actions-01.png');
		game.load.image('a2', 'assets/img/actions-02.png');
		game.load.image('a3', 'assets/img/actions-03.png');
		game.load.image('a4', 'assets/img/actions-04.png');
		game.load.image('a5', 'assets/img/actions-05.png');

		game.load.image('potion', 'assets/img/potion.png');
		game.load.image('key1', 'assets/img/key1.png');
		game.load.image('key2', 'assets/img/key2.png');
		game.load.image('key3', 'assets/img/key3.png');
		game.load.image('saxlube', 'assets/img/saxlube.png');
		game.load.image('rose', 'assets/img/rose.png');
		game.load.image('skull', 'assets/img/skull.png');
		game.load.image('axe', 'assets/img/axe.png');
		game.load.image('sign', 'assets/img/sign.png');
		game.load.image('doggo', 'assets/img/doggo.png');
		game.load.image('grave1', 'assets/img/grave1.png');
		game.load.image('grave2', 'assets/img/grave2.png');

		game.load.image('pudding', 'assets/img/pudding.png');
		game.load.image('puddingC', 'assets/img/pudding2.png');
		game.load.image('mynth', 'assets/img/mynth.png');
		game.load.image('mynthC', 'assets/img/mynth2.png');
		game.load.image('bard', 'assets/img/bard.png');
		game.load.image('bardC', 'assets/img/bard2.png');
		game.load.image('barkeep', 'assets/img/barkeep.png');
		game.load.image('barkeepC', 'assets/img/barkeep2.png');

		game.load.image('lumberjack', 'assets/img/lumberjack.png');
		game.load.image('lumberjackC', 'assets/img/lumberjack2.png');

		game.load.image('dic', 'assets/img/dic.png');
		game.load.image('dicC', 'assets/img/dic2.png');

		game.load.image('potion-1-1', 'assets/img/potion-1-1.png');
		game.load.image('potion-1-2', 'assets/img/potion-1-2.png');
		game.load.image('potion-1-3', 'assets/img/potion-1-3.png');
		game.load.image('potion-1-4', 'assets/img/potion-1-4.png');

		game.load.image('mynth-1-1', 'assets/img/mynth-1-1.png');
		game.load.image('mynth-1-2', 'assets/img/mynth-1-2.png');
		game.load.image('mynth-1-3', 'assets/img/mynth-1-3.png');
		game.load.image('mynth-1-4', 'assets/img/mynth-1-4.png');

        // load audio assets
        //game.load.audio('win_snd', ['win sound 1.mp3', 'win sound 1.ogg']);
        //game.load.audio('win_snd2', ['win sound 1-2.mp3', 'win sound 1-2.ogg']);

	},
	create: function(){
		stateIn='load';
		// go to mainMenu state
		game.state.start('mainMenu');
	}
};
