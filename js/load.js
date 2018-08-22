var Load = function(game){};
Load.prototype = {
	preload: function(){
		// loading bar?


		// load graphic assets
		game.load.path = 'assets/img/';
		game.load.bitmapFont('font', 'gem.png', 'gem.xml');

		game.load.image('start_button', 'start_button.png');
		
		game.load.image('town', 'town.png');

		game.load.image('a1', 'action1.png');
        game.load.image('a2', 'action2.png');
        game.load.image('a3', 'action3.png');

        game.load.image('knob', 'knob.png');
        game.load.image('rose', 'rose.png');

        game.load.image('playerStand', 'MC.png');
        game.load.image('player', 'mc2.png');

        game.load.image('bardStand', 'Bard.png');
        game.load.image('bard', 'Bard2.png');

        game.load.image('mynthStand', 'Mynth.png');
        game.load.image('mynth', 'Mynth2.png');

        // load audio assets
        game.load.path = 'assets/audio/'
        //game.load.audio('win_snd', ['win sound 1.mp3', 'win sound 1.ogg']);
        //game.load.audio('win_snd2', ['win sound 1-2.mp3', 'win sound 1-2.ogg']);

	},
	create: function(){
		// check for local storage browser support
		if(window.localStorage){
			console.log('Local storage supported');
		}else{
			console.log('Local storage not supported');
		}
		// go to mainMenu state
		game.state.start('MainMenu')
	}
};
