var town = function(game){};

town.prototype = {
    create: function(){

		//define state for use in Dialogue.js
        stateIn='town';

		//play background music
        bm.destroy();
		bm = game.add.audio('credits');
        bm.play('', 0, .35, true);

		//place background image
        town=game.add.sprite(0, 0, 'art', 'town');
        town.scale.setTo(.75);

        //place npc and item assets
        bard = game.add.sprite(((game.world.width/2) - 105), 135, 'art', 'bard');
        bard.anchor.setTo(0.5);
        bard.scale.setTo(.2);
        bard.inputEnabled = true;

        if(dogUsed==false&&item!='dog'){
        	//only appears if it has not already been used or if it is not in the inventory
	        dog = game.add.sprite(((game.world.width/2)), 262.5, 'art', 'dog');
	        dog.anchor.setTo(0.5);
	        dog.scale.setTo(.3, .3);
	        dog.inputEnabled = true;
	    }

        mynth = game.add.sprite(((game.world.width/2) - 240),((game.world.height/2) + 157.5), 'art', 'mynth');
        mynth.anchor.setTo(0.5);
        mynth.scale.setTo(.2);
        mynth.inputEnabled = true;

        barkeep = game.add.sprite(((game.world.width/2) + 202.5),((game.world.height/2) + 172.5), 'art', 'barkeep');
        barkeep.anchor.setTo(0.5);
        barkeep.scale.setTo(.2);
        barkeep.inputEnabled = true;

        //place arrow to switch states
        direct = game.add.sprite(((game.world.width/2) + 37.5), game.world.height - 45, 'art', 'arrow');
        direct.anchor.setTo(0.5);
        direct.angle = -150;
        direct.alpha = 0.5;
        direct.scale.setTo(.75);
        direct.inputEnabled = true;

        //enable tap input
        game.input.onTap.add(onTap, this);

        //place intro screen blocking everything but the prince so you are directed to interact with him first
        if(introSeen==false){
	        dim = game.add.sprite(game.width/2,game.height/2,'art','ui');
			dim.scale.setTo(3);
			dim.anchor.set(.5);
			dim.alpha=.99;
		}

        prince = game.add.sprite(((game.world.width/2) + 180), 135, 'art', 'prince');
        prince.anchor.setTo(0.5);
        prince.scale.setTo(.2);
        prince.inputEnabled = true;
    },

    update: function(){
        //highlight arrow when moused-over to show it can be interacted with
        if (direct.input.pointerOver()&&box==false){
            direct.alpha = 1;
            if(game.input.activePointer.leftButton.isDown){
                game.state.start('forest');
            }
        }
        else{direct.alpha = 0.5;}
    },
};