/*
Prototype(Build 1)
Nithin Nediyanchath
ARTG 120
*/
var game = new Phaser.Game(1400, 800, Phaser.AUTO); // Sets up game in aspect ratio of 800 x 850(UI will be displayed at last 350 px).

var MainMenu = function(game){};

var mainTitle;
var instructions;

MainMenu.prototype =
{
    preload: function(){
        game.load.image('start_button', 'assets/img/start_button.png');
        console.log('MainMenu: preload');
    },

    create: function(){
        game.stage.backgroundColor = "#000000";

        mainTitle = game.add.text((game.world.width / 2) - 250, 200, 'Group F Prototype', { fontSize: '64px', fill: '#FFF' });
        instructions = game.add.text((game.world.width / 2) - 50, 150, 'Use mouse for all controls', {fontSize: '16px', fill: '#FFF'});

        // start button
        start = game.add.sprite((game.world.width / 2), 425, 'start_button');
        start.anchor.setTo(0.5, 0.5);
        start.alpha = 0.5;
        start.inputEnabled = true;

        console.log('MainMenu: create');
    },

    update: function(){
        if (start.input.pointerOver()){  // Highlight button when mouse on it
            start.alpha = 1;
            if(game.input.activePointer.leftButton.isDown){game.state.start('townCenter');} // Start Game
        }
        else{start.alpha = 0.5;}
    }

}

var townCenter = function(game){};

    var introKill;

    var action = "NA";
    var popUp = false;

    var playerTalk;
    var playerTalk2;
    var playerTalk3;
    var playerTalk4;

    var playerExamine;
    var playerExamine2;
    var playerExamine3;

    var npcTalk;
    var npcTalk2;
    var npcTalk3;
    var npcTalk4;

    var obj1;
    var obj2

townCenter.prototype =
{
    preload: function(){
        // preload assets

        //game.load.audio('win_snd', ['assets/audio/win sound 1.mp3', 'assets/audio/win sound 1.ogg']);
        //game.load.audio('win_snd2', ['assets/audio/win sound 1-2.mp3', 'assets/audio/win sound 1-2.ogg']);

        game.load.image('town', 'assets/img/town.png');

        game.load.image('start_button', 'assets/img/start_button.png');
        //game.load.image('obj_click', 'assets/img/obj_click.png');

        game.load.image('put1', 'assets/img/popUpTest-01.png');
        game.load.image('put2', 'assets/img/popUpTest-02.png');
        game.load.image('put3', 'assets/img/popUpTest-03.png');

        //game.load.image('player', 'assets/img/player.png');
        game.load.image('player', 'assets/img/MC.png');
        game.load.image('player_dialogue', 'assets/img/mc2.png');

        //game.load.image('npc', 'assets/img/npc.png');
        game.load.image('bard', 'assets/img/Bard.png');
        game.load.image('bard_dialogue', 'assets/img/Bard2.png');

        game.load.image('mynth', 'assets/img/Mynth.png');
        game.load.image('mynth_dialogue', 'assets/img/Mynth2.png');
        
        console.log('townCenter: preload');
    },

    create: function(){
        
        //game.physics.startSystem(Phaser.Physics.ARCADE); // We're going to be using physics, so enable the Arcade Physics system

        game.input.onTap.add(onTap, this);

        game.add.sprite(0, 0, 'town');

        player = game.add.sprite(((game.world.width/2) + 50), 400, 'player');
        player.anchor.setTo(0.5, 0.5);
        player.scale.setTo(.2, .2);
        player.inputEnabled = true;

        /*playerSelf = game.add.text(0, 510, "Why are you clicking me? I got nothing to say." , { fontSize: '16px', fill: '#FFF' });
        playerSelf.alpha = 0;*/

        bard = game.add.sprite(((game.world.width/2) - 140), 180, 'bard');
        bard.anchor.setTo(0.5, 0.5);
        bard.scale.setTo(.2, .2);
        bard.inputEnabled = true;

        /*npcTalk = game.add.text((game.world.width - 300), 70, "Well mate, since this a small demo, just try to get me a rose" , { fontSize: '8px', fill: '#000' });
        npcTalk.alpha = 0;
        npcTalk.inputEnabled = true;*/

        mynth = game.add.sprite(((game.world.width/2) + 330),((game.world.height/2) + 250), 'mynth');
        mynth.anchor.setTo(0.5, 0.5);
        mynth.scale.setTo(.2, .2);
        mynth.inputEnabled = true;

        intro = game.add.text(((game.world.width/2) - 350), 680, "Welcome to the first build of Group F's prototype game. It's a simple point-and-click game which is in the" , { fontSize: '16px', fill: '#000' });
        intro2 = game.add.text(((game.world.width/2) - 350), 700, "pre-alpha stage and is solely controlled by the mouse. Click on objects and NPCs to interact with them." , { fontSize: '16px', fill: '#000' });
        start = game.add.sprite(((game.world.width/2) + 50), 750, 'start_button');
        start.anchor.setTo(0.5, 0.5);
        start.alpha = 0.5;
        start.inputEnabled = true;
        introKill = false;

        console.log('townCenter: create');
    },

    update: function(){
        if (start.input.pointerOver()){  // Highlight button when mouse on it
            start.alpha = 1;
            if(game.input.activePointer.leftButton.isDown){
                intro.kill();
                intro2.kill();
                start.kill();
                introKill = true;
            }
        }
        else{start.alpha = 0.5;}

        /*if(introKill){
        	if (player.input.pointerOver()){
        		if(game.input.activePointer.leftButton.isDown){playerSelf.alpha = 1;}
        	}
        	else{playerSelf.alpha = 0;}
        	if(NPC.input.pointerOver()){
        		if(game.input.activePointer.leftButton.isDown){npcTalk.alpha = 1;}
        	}
        	else{npcTalk.alpha = 0;}
        }*/
    }
}

/*var lumberYard = function(game){};

lumberYard.prototype =
{
    preload: function(){
        game.load.image('border_A', 'assets/img/border_A.png');
        game.load.image('border_B', 'assets/img/border_B.png');
        game.load.image('player', 'assets/img/player.png');
        game.load.image('npc', 'assets/img/npc.png');
        game.load.image('ui', 'assets/img/UI.png');
        console.log('lumberYard: preload');
    },

    create: function(){
        game.stage.backgroundColor = "#FFFFFF";

        game.add.sprite(0, 501, 'ui');
        game. add. sprite(0, 87, 'border_B');
        game.add.sprite((game.world.width - 50), 87, 'border_B');
        game.add.sprite(0, 0, 'border_A');
        UR_border_A = game.add.sprite((game.world.width - 56), 44, 'border_A');
        UR_border_A.anchor.setTo(0.5,0.5);
        UR_border_A.scale.x *= -1;
        LL_border_A = game.add.sprite(56, 457, 'border_A');
        LL_border_A.anchor.setTo(0.5,0.5);
        LL_border_A.scale.y *= -1;
        LR_border_A = game.add.sprite((game.world.width - 56), 457, 'border_A');
        LR_border_A.anchor.setTo(0.5,0.5);
        LR_border_A.scale.y *= -1;
        LR_border_A.scale.x *= -1;

        player = game.add.sprite((game.world.width/2), )

        console.log('lumberYard: create');
    },

    update: function(){
        
    }
}*/

function onTap(pointer){
	//checks if there is a popup
	if(popUp==false){
		//adds the assets for the popup buttons near the mouse
		put1 = game.add.sprite(game.input.mousePointer.x+25, game.input.mousePointer.y-32, 'put1');
		put2 = game.add.sprite(game.input.mousePointer.x+25, game.input.mousePointer.y, 'put2');
		put3 = game.add.sprite(game.input.mousePointer.x+25, game.input.mousePointer.y+32, 'put3');

		//enables the mouseover of the buttons
		put1.inputEnabled = true;
		put2.inputEnabled = true;
		put3.inputEnabled = true;

		//popup exists
		popUp=true;
	}
	else{
		//a different action for each button
		if (put1.input.pointerOver()){
			action = "Examine";
			console.log(acton);
		} else if (put2.input.pointerOver()){
			action = "Pick Up";
			console.log(action);
		} else if (put3.input.pointerOver()){
			action = "Use";
			console.log(action);
		}

		//destros popup after choice or no choice is made
		put1.destroy();
		put2.destroy();
		put3.destroy();
		//popup does not exist, can be made again
		popUp=false;
	}
}

// add states to StateManager and start MainMenu
game.state.add('MainMenu', MainMenu);
game.state.add('townCenter', townCenter);
//game.state.add('lumberYard', lumberYard);
game.state.start('MainMenu');