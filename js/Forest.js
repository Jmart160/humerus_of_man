var forest = function(game){};

forest.prototype = {
    create: function(){
        stateIn='forest';

        bm.destroy();
		bm = game.add.audio('title');
        bm.play('', 0, .15, true);

        game.add.sprite(0, 0, 'art','forest');

        lumberjack = game.add.sprite(((game.world.width/2) + 150), ((game.world.height/2) + 100), 'art', 'lumberjack');
        lumberjack.anchor.setTo(0.5, 0.5);
        lumberjack.scale.setTo(.2, .2);
        lumberjack.inputEnabled = true;

        if(skullUsed==false){
	        skull = game.add.sprite(280, ((game.world.height/2) - 30), 'art', 'skull');
	        skull.anchor.setTo(0.5, 0.5);
	        skull.scale.setTo(.8, .8);
	        skull.inputEnabled = true;
	    }
	    
        sign = game.add.sprite((game.world.width - 225),((game.world.height/2) + 265), 'art', 'sign');
        sign.anchor.setTo(0.5, 0.5);
        sign.inputEnabled = true;

        if(gateOpen==false){
	        gate = game.add.sprite(0,game.world.height, 'art', 'potion');
	        gate.anchor.setTo(0, 1);
	        gate.scale.setTo(4,3);
	        gate.alpha=0;
	        gate.inputEnabled = true;
    	}

        direct = game.add.sprite(400, 60, 'art', 'arrow');
        direct.anchor.setTo(0.5, 0.5);
        direct.angle = 0;
        direct.alpha = 0.5;
        direct.inputEnabled = true;

        direct2 = game.add.sprite(350, game.world.height - 200, 'art', 'arrow');
        direct2.anchor.setTo(0.5, 0.5);
        direct2.angle = -105;
        direct2.alpha = 0.5;
        direct2.inputEnabled = true;

        game.input.onTap.add(onTap, this);
    },

    update: function(){
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
            } // Send to Controls
        }
        else{direct2.alpha = 0.5;}
    }
};