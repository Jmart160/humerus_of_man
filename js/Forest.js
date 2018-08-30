var Forest = function(game){};

Forest.prototype = {
    create: function(){
        stateIn='forest;'
        game.add.sprite(0, 0, 'forest');

        lumberjack = game.add.sprite(((game.world.width/2) + 150), ((game.world.height/2) + 100), 'lumberjack');
        lumberjack.anchor.setTo(0.5, 0.5);
        lumberjack.scale.setTo(.2, .2);
        lumberjack.inputEnabled = true;

        skull = game.add.sprite(280, ((game.world.height/2) - 30), 'skull');
        skull.anchor.setTo(0.5, 0.5);
        skull.scale.setTo(.8, .8);
        skull.inputEnabled = true;

        sign = game.add.sprite((game.world.width - 75),((game.world.height/2) + 215), 'sign');
        sign.anchor.setTo(0.5, 0.5);
        sign.inputEnabled = true;

        gate = game.add.sprite((game.world.width - 75),((game.world.height/2) - 215), 'gate');
        gate.anchor.setTo(0.5, 0.5);
        gate.inputEnabled = true;

        direct = game.add.sprite(400, 60, 'arrow');
        direct.anchor.setTo(0.5, 0.5);
        direct.angle = 0;
        direct.alpha = 0.5;
        direct.inputEnabled = true;

        direct2 = game.add.sprite(350, game.world.height - 200, 'arrow');
        direct2.anchor.setTo(0.5, 0.5);
        direct2.angle = -105;
        direct2.alpha = 0.5;
        direct2.inputEnabled = true;

        game.input.onTap.add(onTap, this);
    },

    update: function(){
        if (direct.input.pointerOver()){
            direct.alpha = 1;
            if(game.input.activePointer.leftButton.isDown){game.state.start('townCenter');} // Send to Controls
        }
        else{direct.alpha = 0.5;}

        if (direct2.input.pointerOver()){
            direct2.alpha = 1;
            if(game.input.activePointer.leftButton.isDown){game.state.start('graveYard');} // Send to Controls
        }
        else{direct2.alpha = 0.5;}
    }
};