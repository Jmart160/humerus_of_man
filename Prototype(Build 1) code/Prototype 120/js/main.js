/*
Prototype(Build 1)
Nithin Nediyanchath
ARTG 120
*/
var game = new Phaser.Game(800, 850, Phaser.AUTO); // Sets up game in aspect ratio of 800 x 850(UI will be displayed at last 350 px).

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
        instructions = game.add.text((game.world.width/2) - 100, 150, 'Use mouse for all controls', {fontSize: '16px', fill: '#FFF'});

        // start button
        start = game.add.sprite(400, 425, 'start_button');
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

    //var intro;

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

    var introKill;
    var obj1;
    var obj2

townCenter.prototype =
{
    preload: function(){
        // preload assets

        game.load.image('border_A', 'assets/img/border_A.png');
        game.load.image('border_B', 'assets/img/border_B.png');
        game.load.image('fountain', 'assets/img/fountain.png');
        game.load.image('obj_click', 'assets/img/obj_click.png');
        game.load.image('player', 'assets/img/player.png');
        game.load.image('npc', 'assets/img/npc.png');
        game.load.image('ui', 'assets/img/UI.png');
        game.load.image('start_button', 'assets/img/start_button.png');
        console.log('townCenter: preload');
    },

    create: function(){
        
        //game.physics.startSystem(Phaser.Physics.ARCADE); // We're going to be using physics, so enable the Arcade Physics system

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
        game.add.sprite(300, 225, 'fountain');

        player = game.add.sprite((game.world.width/2), 400, 'player');
        player.anchor.setTo(0.5, 0.5);
        player.inputEnabled = true;

        playerSelf = game.add.text(0, 510, "Why are you clicking me? I got nothing to say." , { fontSize: '16px', fill: '#FFF' });
        playerSelf.alpha = 0;

        NPC = game.add.sprite((game.world.width - 90), 100, 'npc');
        NPC.anchor.setTo(0.5, 0.5);
        NPC.inputEnabled = true;

        npcTalk = game.add.text((game.world.width - 90), 80, "Well mate, since this a small demo, just try to find some wood." , { fontSize: '8px', fill: '#000' });
        npcTalk.alpha = 0;
        npcTalk.inputEnabled = true;

        intro = game.add.text(0, 510, "Welcome to the first build of Group F's prototype game. It's a simple point-and-click game which is in the" , { fontSize: '16px', fill: '#FFF' });
        intro2 = game.add.text(0, 530, "pre-alpha stage and is solely controlled by the mouse. Click on objects and NPCs to interact with them." , { fontSize: '16px', fill: '#FFF' });
        start = game.add.sprite((game.world.width/2), 590, 'start_button');
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

        if(introKill){
        	if(player.input.activePointer.leftButton.isDown){playerSelf.alpha = 1;}
        	else{playerSelf.alpha = 0;}
        	if(npcTalk.input.activePointer.leftButton.isDown){npcTalk.alpha = 1;}
        	else{npcTalk.alpha = 0;}
        }
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

// add states to StateManager and start MainMenu
game.state.add('MainMenu', MainMenu);
game.state.add('townCenter', townCenter);
//game.state.add('lumberYard', lumberYard);
game.state.start('MainMenu');