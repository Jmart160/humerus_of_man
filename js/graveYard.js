var graveyard = function(game){};

graveyard.prototype = {
    create: function(){

		//define state for use in Dialogue.js
        stateIn='graveyard';

		//play background music
        bm.destroy();
		bm = game.add.audio('graveyard');
        bm.play('', 0, .35, true);

		//place Background image
        graveyard=game.add.sprite(0, 0, 'art','graveyard');
        graveyard.scale.setTo(.75);

        //place npc and item assets
        dic = game.add.sprite(((game.world.width/2) - 187.5), ((game.world.height/2) - 97.5), 'art', 'dic');
        dic.anchor.setTo(0.5, 0.5);
        dic.scale.setTo(.2);
        dic.inputEnabled = true;

        grave1 = game.add.sprite(((game.world.width/2) + 58.5), (game.world.height - 60), 'art', 'grave1');
        grave1.anchor.setTo(0.5, 0.5);
        grave1.angle = -20;
        grave1.scale.setTo(.75);
        grave1.inputEnabled = true;

        grave2 = game.add.sprite(((game.world.width/2) + 2), 123.75, 'art', 'grave2');
        grave2.anchor.setTo(0.5, 0.5);
        grave2.angle = -42;
        grave2.scale.setTo(.75);
        grave2.inputEnabled = true;

        //place arrow to switch states
        direct = game.add.sprite((game.world.width - 225), 45, 'art', 'arrow');
        direct.anchor.setTo(0.5, 0.5);
        direct.angle = 80;
        direct.alpha = 0.5;
        direct.scale.setTo(.75);
        direct.inputEnabled = true;

        //enable tap input
        game.input.onTap.add(onTap, this);
    },

    update: function(){
        //highlight arrow when moused-over to show it can be interacted with
        if (direct.input.pointerOver()){
            direct.alpha = 1;
            if(game.input.activePointer.leftButton.isDown){
            	game.state.start('forest');
            }
        }
        else{direct.alpha = 0.5;}

    }
};