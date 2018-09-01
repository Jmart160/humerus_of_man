var credits = function(game){};

credits.prototype = {
	create: function(){
		stateIn='credits'

		bm.destroy();
		if(creditType=='normal'){
			bm = game.add.audio('credits');
        	bm.play('', 0, .35, true);
		}else if(creditType=='bard'){
			bm = game.add.audio('alt');
        	bm.play('', 0, .35, true);
		}
		message = game.add.text(game.width/2,game.height/2, 'Click to restart.', {font: 'Yatra One', fontSize: '24px', fill: '#ffffff' });
		message.anchor.set(.5);
		game.input.onTap.add(onTap, this);

	}
};