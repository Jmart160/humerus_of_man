var graveYard = function(game){};

graveYard.prototype = {
    create: function(){
        //console.log("This is the town you've lived in for a while. Jaahmes the bard keeps trying to flirt with you but promised to leave you alone if you gave him a token of affection. Mynth the shopkeeper probably has something you can give him. She'll probably ask for something shiny first.")

        game.add.sprite(0, 0, 'graveyard');

        /*player = game.add.sprite(((game.world.width/2) + 50), 400, 'playerStand');
        player.anchor.setTo(0.5, 0.5);
        player.scale.setTo(.2, .2);
        player.inputEnabled = true;*/

        dic = game.add.sprite(((game.world.width/2) - 250), ((game.world.height/2) - 130), 'dic');
        dic.anchor.setTo(0.5, 0.5);
        dic.scale.setTo(.2, .2);
        dic.inputEnabled = true;

        gStone1 = game.add.sprite(((game.world.width/2) + 78), (game.world.height - 80), 'gStone1');
        gStone1.anchor.setTo(0.5, 0.5);
        gStone1.angle = -20;
        gStone1.inputEnabled = true;

        gStone2 = game.add.sprite(((game.world.width/2) + 2), 165, 'gStone2');
        gStone2.anchor.setTo(0.5, 0.5);
        gStone2.angle = -42;
        gStone2.inputEnabled = true;

        /*potion = game.add.sprite(game.width-200,game.height/2,'potion');
        potion.anchor.set(.5);
        potion.inputEnabled = true;*/

        game.input.onTap.add(onTap, this);
        /*knob = game.add.sprite(410,600, 'knob');
        knob.anchor.setTo(0.5,0.5);
        knob.inputEnabled = true;*/
        

        //console.log('townCenter: create');
    },

    update: function(){

        /*if(item!=null){
            hand = game.add.sprite(player.x+35, player.y-35, item);
            hand.anchor.setTo(0.5,0.5);
        }*/
    }
};

/*function onTap(pointer){
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
}*/