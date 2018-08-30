var townCenter = function(game){};

townCenter.prototype = {
    create: function(){
        stateIn='town';
        game.add.sprite(0, 0, 'town');

        bard = game.add.sprite(((game.world.width/2) - 140), 180, 'bard');
        bard.anchor.setTo(0.5, 0.5);
        bard.scale.setTo(.2, .2);
        bard.inputEnabled = true;

        pudding = game.add.sprite(((game.world.width/2) + 240), 180, 'pudding');
        pudding.anchor.setTo(0.5, 0.5);
        pudding.scale.setTo(.2, .2);
        pudding.inputEnabled = true;

        doggo = game.add.sprite(((game.world.width/2)), 350, 'doggo');
        doggo.anchor.setTo(0.5, 0.5);
        doggo.scale.setTo(.4, .4);
        doggo.inputEnabled = true;

        mynth = game.add.sprite(((game.world.width/2) - 320),((game.world.height/2) + 210), 'mynth');
        mynth.anchor.setTo(0.5, 0.5);
        mynth.scale.setTo(-.2, .2);
        mynth.inputEnabled = true;

        barkeep = game.add.sprite(((game.world.width/2) + 270),((game.world.height/2) + 230), 'barkeep');
        barkeep.anchor.setTo(0.5, 0.5);
        barkeep.scale.setTo(-.2, .2);
        barkeep.inputEnabled = true;

        direct = game.add.sprite(((game.world.width/2) + 50), game.world.height - 60, 'arrow');
        direct.anchor.setTo(0.5, 0.5);
        direct.angle = -150;
        direct.alpha = 0.5;
        direct.inputEnabled = true;

        game.input.onTap.add(onTap, this);
    },

    update: function(){
        if (direct.input.pointerOver()){
            direct.alpha = 1;
            if(game.input.activePointer.leftButton.isDown){game.state.start('Forest');} // Send to Controls
        }
        else{direct.alpha = 0.5;}
    },
};