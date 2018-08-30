var graveYard = function(game){};

graveYard.prototype = {
    create: function(){
        stateIn='graveyard';
        graveS = game.add.audio('graveyard');
        graveS.play();
        game.add.sprite(0, 0, 'graveyard');

        dic = game.add.sprite(((game.world.width/2) - 250), ((game.world.height/2) - 130), 'atlas', 'dic');
        dic.anchor.setTo(0.5, 0.5);
        dic.scale.setTo(.2, .2);
        dic.inputEnabled = true;

        grave1 = game.add.sprite(((game.world.width/2) + 78), (game.world.height - 80), 'atlas', 'grave1');
        grave1.anchor.setTo(0.5, 0.5);
        grave1.angle = -20;
        grave1.inputEnabled = true;

        grave2 = game.add.sprite(((game.world.width/2) + 2), 165, 'atlas', 'grave2');
        grave2.anchor.setTo(0.5, 0.5);
        grave2.angle = -42;
        grave2.inputEnabled = true;

        direct = game.add.sprite((game.world.width - 225), 60, 'atlas', 'arrow');
        direct.anchor.setTo(0.5, 0.5);
        direct.angle = 80;
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

    }
};