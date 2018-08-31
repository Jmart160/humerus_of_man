var town = function(game){};

town.prototype = {
    create: function(){
        stateIn='town';

        bm.destroy();
		bm = game.add.audio('credits');
        bm.play('', 0, .15, true);
        game.add.sprite(0, 0, 'art', 'town');

        bard = game.add.sprite(((game.world.width/2) - 140), 180, 'art', 'bard');
        bard.anchor.setTo(0.5, 0.5);
        bard.scale.setTo(.2, .2);
        bard.inputEnabled = true;

        if(dogUsed==false){
	        dog = game.add.sprite(((game.world.width/2)), 350, 'art', 'dog');
	        dog.anchor.setTo(0.5, 0.5);
	        dog.scale.setTo(.4, .4);
	        dog.inputEnabled = true;
	    }

        mynth = game.add.sprite(((game.world.width/2) - 320),((game.world.height/2) + 210), 'art', 'mynth');
        mynth.anchor.setTo(0.5, 0.5);
        mynth.scale.setTo(-.2, .2);
        mynth.inputEnabled = true;

        barkeep = game.add.sprite(((game.world.width/2) + 270),((game.world.height/2) + 230), 'art', 'barkeep');
        barkeep.anchor.setTo(0.5, 0.5);
        barkeep.scale.setTo(-.2, .2);
        barkeep.inputEnabled = true;

        direct = game.add.sprite(((game.world.width/2) + 50), game.world.height - 60, 'art', 'arrow');
        direct.anchor.setTo(0.5, 0.5);
        direct.angle = -150;
        direct.alpha = 0.5;
        direct.inputEnabled = true;

        game.input.onTap.add(onTap, this);

        if(introSeen==false){
	        dim = game.add.sprite(game.width/2,game.height/2,'art','ui');
			dim.scale.setTo(3);
			dim.anchor.set(.5);
			dim.alpha=.95;
		}

        prince = game.add.sprite(((game.world.width/2) + 240), 180, 'art', 'prince');
        prince.anchor.setTo(0.5, 0.5);
        prince.scale.setTo(.2, .2);
        prince.inputEnabled = true;
    },

    update: function(){
        if (direct.input.pointerOver()&&box==false){
            direct.alpha = 1;
            if(game.input.activePointer.leftButton.isDown){
                game.state.start('forest');
            } // Send to Controls
        }
        else{direct.alpha = 0.5;}
    },
};