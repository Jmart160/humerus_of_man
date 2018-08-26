var MainMenu = function(game){};

MainMenu.prototype = {
    create: function(){

        // Establish the basic background
        //game.stage.backgroundColor = "#000000";

        //title = this.add.text(this.game.width/2, this.game.height/2-64, 'THE HUMERUS OF MAN', {font-family: 'Yatra One', fontSize: '24px', fill: '#ffffff' });
        //title.anchor.setTo(0.5, 0.5);

        instructions = this.add.text(this.game.width/2,this.game.height/2, 'CLICK on NPCs and ITEMS to INTERACT', {font-family: 'Yatra One', fontSize: '24px', fill: '#ffffff' });
        instructions.anchor.setTo(0.5, 0.5);

        spaceToStart = this.add.text(this.game.width/2,this.game.height/2+64, '-CLICK- to start!', {font-family: 'Yatra One', fontSize: '24px', fill: '#ffffff' });
        spaceToStart.anchor.setTo(0.5, 0.5);

        console.log('MainMenu: create');
    },

    update: function(){
        if(game.input.activePointer.leftButton.isDown){
            game.state.start('townCenter'); // Start Game
        } 
    }
};