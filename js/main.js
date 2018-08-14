/*
Prototype(Build 1)
Nithin Nediyanchath
ARTG 120
*/
var game = new Phaser.Game(1400, 800, Phaser.AUTO); // Sets up game in aspect ratio of 800 x 850(UI will be displayed at last 350 px).

var MainMenu = function(game){};

var mainTitle;
var instructions;
var item=null;
var interactable=null;
var type=null;
var popUp = false;

MainMenu.prototype =
{
    preload: function(){
        game.load.image('start_button', 'assets/img/start_button.png');
        //game.load.text('dialog', 'js/Dialog.json');
        game.load.image('dialogbox', 'assets/img/dialogbox.png');
        game.load.bitmapFont('font', 'assets/img/gem.png', 'assets/img/gem.xml');
        //console.log('MainMenu: preload');
    },

    create: function(){
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

        //console.log('MainMenu: create');
    },

    update: function(){
        if(game.input.activePointer.leftButton.isDown){
            game.state.start('townCenter');
        } // Start Game
    }

}

var townCenter = function(game){};

townCenter.prototype =
{
    preload: function(){
        // preload assets

        //game.load.audio('win_snd', ['assets/audio/win sound 1.mp3', 'assets/audio/win sound 1.ogg']);
        //game.load.audio('win_snd2', ['assets/audio/win sound 1-2.mp3', 'assets/audio/win sound 1-2.ogg']);

        game.load.image('town', 'assets/img/town.png');

        game.load.image('start_button', 'assets/img/start_button.png');
        //game.load.image('obj_click', 'assets/img/obj_click.png');

        game.load.image('a1', 'assets/img/action1.png');
        game.load.image('a2', 'assets/img/action2.png');
        game.load.image('a3', 'assets/img/action3.png');

        game.load.image('knob', 'assets/img/knob.png');
        game.load.image('rose', 'assets/img/rose.png');

        //game.load.image('player', 'assets/img/player.png');
        game.load.image('playerStand', 'assets/img/MC.png');
        game.load.image('player', 'assets/img/mc2.png');

        //game.load.image('npc', 'assets/img/npc.png');
        game.load.image('bardStand', 'assets/img/Bard.png');
        game.load.image('bard', 'assets/img/Bard2.png');

        game.load.image('mynthStand', 'assets/img/Mynth.png');
        game.load.image('mynth', 'assets/img/Mynth2.png');
        
        //console.log('townCenter: preload');
    },

    create: function(){
        
        console.log("This is the town you've lived in for a while. Jaahmes the bard keeps trying to flirt with you but promised to leave you alone if you gave him a token of affection. Mynth the shopkeeper probably has something you can give him. She'll probably ask for something shiny first.")
        game.input.onTap.add(onTap, this);

        game.add.sprite(0, 0, 'town');

        player = game.add.sprite(((game.world.width/2) + 50), 400, 'playerStand');
        player.anchor.setTo(0.5, 0.5);
        player.scale.setTo(.2, .2);
        player.inputEnabled = true;


        bard = game.add.sprite(((game.world.width/2) - 140), 180, 'bardStand');
        bard.anchor.setTo(0.5, 0.5);
        bard.scale.setTo(.2, .2);
        bard.inputEnabled = true;


        mynth = game.add.sprite(((game.world.width/2) + 330),((game.world.height/2) + 250), 'mynthStand');
        mynth.anchor.setTo(0.5, 0.5);
        mynth.scale.setTo(-.2, .2);
        mynth.inputEnabled = true;

        knob = game.add.sprite(410,600, 'knob');
        knob.anchor.setTo(0.5,0.5);
        knob.inputEnabled = true;
        

        //console.log('townCenter: create');
    },

    update: function(){

        if(item!=null){
            hand = game.add.sprite(player.x+35, player.y-35, item);
            hand.anchor.setTo(0.5,0.5);
        }
        

    }
}

function onTap(pointer){
	//checks if there is a popup
	if(popUp==false){
		//adds the assets for the popup buttons near the mouse
		a1 = game.add.sprite(game.input.mousePointer.x+25, game.input.mousePointer.y-31, 'a1');
		a2 = game.add.sprite(game.input.mousePointer.x+25, game.input.mousePointer.y, 'a2');
		a3 = game.add.sprite(game.input.mousePointer.x+25, game.input.mousePointer.y+31, 'a3');

        if (bard.input.pointerOver()){
            interactable = "bard";
            type = "npc";
        } else if (mynth.input.pointerOver()){
            interactable = "mynth";
            type = "npc";
        } else if (knob.input.pointerOver()){
            interactable = "knob";
            type = "item";
        }

        //console.log(interactable);

		//enables the mouseover of the buttons
		a1.inputEnabled = true;
		a2.inputEnabled = true;
		a3.inputEnabled = true;
		//popup exists
		popUp=true;
	}
	else{
		//a different action for each button
		if (a1.input.pointerOver()){
			if(type=="npc"){
                action = "talk"
                console.log("you "+action+" to "+interactable);
            }else if(type=="item"){
                action = "take"
                console.log("you "+action+" "+interactable);
                item = interactable;
            }
		} else if (a2.input.pointerOver()){
			if(type!=null){
                action = "examine";
                console.log("you "+action+" "+interactable);
            }
		} else if (a3.input.pointerOver()){
			if(type=="npc"){
                action = "give"
                if(item!=null){
                    console.log("you "+action+" "+item+" to "+interactable);
                    if(item=="knob"&&interactable=="mynth"){
                        console.log("Mynth gives you a rose in return");
                        item="rose";
                    }
                    if(item=="rose"&&interactable=="bard"){
                        console.log("Jaahmes takes the rose and attempts to kiss you, but you clock him in the schnoz. You win!");
                        item="rose";
                    }
             }
                item=null;
            }else if(type=="item"){
                action = "use"
                if(item!=null){
                    console.log("you "+action+" on "+interactable);
                }
            }
		}

        interactable=null;
        type=null;

		//destros popup after choice or no choice is made
		a1.destroy();
		a2.destroy();
		a3.destroy();
		//popup does not exist, can be made again
		popUp=false;
	}
}

// add states to StateManager and start MainMenu
game.state.add('MainMenu', MainMenu);
game.state.add('townCenter', townCenter);
//game.state.add('lumberYard', lumberYard);
game.state.start('MainMenu');