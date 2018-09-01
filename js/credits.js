var credits = function(game){};

credits.prototype = {
	create: function(){
		stateIn='credits'
		document.body.style.backgroundImage = "url('css/bg-null.png')";

		bm.destroy();
		if(creditType=='normal'){
			bm = game.add.audio('credits');
        	bm.play('', 0, .35, true);
		}else if(creditType=='bard'){
			bm = game.add.audio('alt');
        	bm.play('', 0, .35, true);
		}

		scroll=game.add.sprite(0,300,'scroll');
	},

	update: function(){
		if(scroll.y!=-3000){scroll.y -= 1;}
	}
};