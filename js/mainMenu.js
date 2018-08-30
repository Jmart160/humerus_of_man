var mainMenu = function(game){};

mainMenu.prototype = {
    create: function(){
        stateIn='menu';
        game.input.onTap.add(onTap, this);
        title=game.add.sprite(0,0,'title');
        console.log('MainMenu: create');
        title.inputEnabled = true;
    }
};