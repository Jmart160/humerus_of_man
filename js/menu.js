var title = function(game){};

title.prototype = {
	create: function(){
		stateIn='title';
		game.input.onTap.add(onTap, this);
		title=game.add.sprite(0,0,'art','title');
        title.scale.setTo(.75);

		item=null;
		interactable=null;
		type=null;
		popUp=false;
		box=false;
		lineCount=null;
		count=null;
		storedAction=null;
		storedSubject=null;
		playerUp=false;
		interactableUp=false;
		gateOpen=false;
		mynthCount=1;
		bardCount=1;
		barkeepCount=1;
		lumberjackCount=1;
		princeCount=1;
		creditType='normal';
		introSeen=false;
		dogUsed=false;
		potionUsed=false;
		skullUsed=false;

		bm = game.add.audio('title');
        bm.play('', 0, .35, true);
		console.log('title: create');
		title.inputEnabled = true;
	}
};