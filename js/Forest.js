var forest = function(game){};

forest.prototype = {
    create: function(){

		//define state for use in Dialogue.js
        stateIn='forest';

		//play background music
        bm.destroy();
		bm = game.add.audio('title');
        bm.play('', 0, .35, true);

		//place Background image
        forest=game.add.sprite(0, 0, 'art','forest');
        forest.scale.setTo(.75);

        //place npc and item assets
        lumberjack = game.add.sprite(((game.world.width/2) + 112.5), ((game.world.height/2) + 100), 'art', 'lumberjack');
        lumberjack.anchor.setTo(0.5);
        lumberjack.scale.setTo(.2);
        lumberjack.inputEnabled = true;

        if(skullUsed==false&&item!='skull'){
        	//only appears if it has not already been used or if it is not in the inventory
	        skull = game.add.sprite(280, ((game.world.height/2) - 22.5), 'art', 'skull');
	        skull.anchor.setTo(0.5);
	        skull.inputEnabled = true;
	    }
	    
        sign = game.add.sprite((game.world.width - 168.75),((game.world.height/2) + 198.75), 'art', 'sign');
        sign.anchor.setTo(0.5, 0.5);
        sign.inputEnabled = true;

        //place invisible asset so gate can be interacted with
        if(gateOpen==false){
	        gate = game.add.sprite(0,game.world.height, 'art', 'potion');
	        gate.anchor.setTo(0, 1);
	        gate.scale.setTo(3,2.25);
	        gate.alpha=0;
	        gate.inputEnabled = true;
    	}

        //place arrows to switch states
        direct = game.add.sprite(300, 45, 'art', 'arrow');
        direct.anchor.setTo(0.5, 0.5);
        direct.angle = 0;
        direct.alpha = 0.5;
        direct.scale.setTo(.75);
        direct.inputEnabled = true;

        direct2 = game.add.sprite(262.5, game.world.height - 150, 'art', 'arrow');
        direct2.anchor.setTo(0.5, 0.5);
        direct2.angle = -105;
        direct2.alpha = 0.5;
        direct2.scale.setTo(.75);
        direct2.inputEnabled = true;

        //enable tap input
        game.input.onTap.add(onTap, this);
    },

    update: function(){
        //highlight arrows when moused-over to show it can be interacted with
        if (direct.input.pointerOver()){
            direct.alpha = 1;
            if(game.input.activePointer.leftButton.isDown){
                game.state.start('town');
            } // Send to Controls
        }
        else{direct.alpha = 0.5;}

        if (direct2.input.pointerOver()&&gateOpen==true){
            direct2.alpha = 1;
            if(game.input.activePointer.leftButton.isDown){
                game.state.start('graveyard');
            }
        }
        else{direct2.alpha = 0.5;}
    }
};