var MainMenu = function(game){};

MainMenu.prototype = {
    create: function(){

        // Establish the basic background
        game.stage.backgroundColor = "#000000";

        var GameTitle = this.add.bitmapText(this.game.width/2, this.game.height/2 - 64, 'font', 'THE HUMERUS OF MAN', 64);
        GameTitle.anchor.setTo(0.5, 0.5);

        var Instructions = this.add.bitmapText(this.game.width/2,this.game.height/2, 'font', 'CLICK on NPCs and ITEMS to INTERACT', 32);
        Instructions.alpha = 1;
        Instructions.anchor.setTo(0.5, 0.5);

        var Instructions = this.add.bitmapText(this.game.width/2,this.game.height/2+32, 'font', 'Because the dialogue system is acting up, refer to the console log.', 32);
        Instructions.alpha = 1;
        Instructions.anchor.setTo(0.5, 0.5);

        var SpaceToStart = this.add.bitmapText(this.game.width/2,this.game.height/2+64, 'font', '-CLICK- to start!', 32);
        SpaceToStart.alpha = 1;
        SpaceToStart.anchor.setTo(0.5, 0.5);

        console.log('MainMenu: create');
    },

    update: function(){
        if(game.input.activePointer.leftButton.isDown){
            game.state.start('townCenter'); // Start Game
        } 
    }
};