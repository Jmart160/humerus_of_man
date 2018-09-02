var title = function(game){};

title.prototype = {
	create: function(){

		//define state for use in Dialogue.js
		stateIn='title';
		
        //enable tap input
		game.input.onTap.add(onTap, this);

		//place background image
		title=game.add.sprite(0,0,'art','title');
        title.scale.setTo(.75);

        //reset variables
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

		//play background music
		bm = game.add.audio('title');
        bm.play('', 0, .35, true);
		title.inputEnabled = true;
	}
};