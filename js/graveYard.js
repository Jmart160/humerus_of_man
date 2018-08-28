var graveYard = function(game){};

graveYard.prototype = {
    create: function(){
        stateIn='graveyard';
        game.add.sprite(0, 0, 'graveyard');

        dic = game.add.sprite(((game.world.width/2) - 250), ((game.world.height/2) - 130), 'dic');
        dic.anchor.setTo(0.5, 0.5);
        dic.scale.setTo(.2, .2);
        dic.inputEnabled = true;

        grave1 = game.add.sprite(((game.world.width/2) + 78), (game.world.height - 80), 'grave1');
        grave1.anchor.setTo(0.5, 0.5);
        grave1.angle = -20;
        grave1.inputEnabled = true;

        grave2 = game.add.sprite(((game.world.width/2) + 2), 165, 'grave2');
        grave2.anchor.setTo(0.5, 0.5);
        grave2.angle = -42;
        grave2.inputEnabled = true;

        game.input.onTap.add(onTap, this);
    },

    update: function(){

    }
};