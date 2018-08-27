function onTap(pointer) {

	if(box!=false){
		if(count!=lineCount){
			count++;
			text.destroy();
			text=game.add.sprite(game.width/2,game.height-150,storedSubject+'-'+storedAction+'-'+count);
			text.anchor.set(.5);
		}else{
			screen.destroy();
			text.destroy();
			box=false;
			lineCount=null;
			count=null;
			storedAction=null;
			storedSubject=null;
			if(playerUp==true){
				player.destroy();
				playerUp=false;
			}
			if(interactableUp==true){
				closeUp.destroy();
				interactableUp=false;
			}
		}
	}

	//checks if there is a popup
	else if(popUp==false){

		if (mynth.input.pointerOver()){
            interactable = "mynth";
            type = "npc";
        } else if (potion.input.pointerOver()){
            interactable = "potion";
            type = "item";
        }
		
		if(type=="npc"){
			//adds the assets for the popup buttons near the mouse
			npcTalk = game.add.sprite(game.input.mousePointer.x+40, game.input.mousePointer.y-32, 'a1');
			npcEx = game.add.sprite(game.input.mousePointer.x+40, game.input.mousePointer.y, 'a2');
			npcGive = game.add.sprite(game.input.mousePointer.x+40, game.input.mousePointer.y+32, 'a3');
			//enables the mouseover of the buttons
			npcTalk.inputEnabled = true;
			npcEx.inputEnabled = true;
			npcGive.inputEnabled = true;

			//popup exists
			popUp=true;
		} else if(type=="item"){
			//adds the assets for the popup buttons near the mouse
			itemTake = game.add.sprite(game.input.mousePointer.x+40, game.input.mousePointer.y-32, 'a4');
			itemEx = game.add.sprite(game.input.mousePointer.x+40, game.input.mousePointer.y, 'a2');
			itemUse = game.add.sprite(game.input.mousePointer.x+40, game.input.mousePointer.y+32, 'a5');
			//enables the mouseover of the buttons
			itemTake.inputEnabled = true;
			itemEx.inputEnabled = true;
			itemUse.inputEnabled = true;

			//popup exists
			popUp=true;
		}

	}else{
		//a different action for each button
		if(type=="npc"){
			if (npcTalk.input.pointerOver()){
				dialogue("mynth", 1, 4, true)
			} else if (npcEx.input.pointerOver()){
				dialogue("mynth", 2, 2, false)
			} else if (npcGive.input.pointerOver()){
				dialogue("mynth", 3, 2, true)
			}
			//destros popup after choice or no choice is made
			npcTalk.destroy();
			npcEx.destroy();
			npcGive.destroy();
			//popup does not exist, can be made again
			popUp=false;
		} else if(type=="item"){
			if (itemTake.input.pointerOver()){
				dialogue("potion", 1, 4, false)
			} else if (itemEx.input.pointerOver()){
				dialogue("potion", 2, 2, false)
			} else if (itemUse.input.pointerOver()){
				dialogue("itemUse", 3, 2, false)
				//destros popup after choice or no choice is made
			}
			itemTake.destroy();
			itemEx.destroy();
			itemUse.destroy();
			//popup does not exist, can be made again
			popUp=false;
		}
		interactable=null;
        type=null;
	}
}

function dialogue(subject, action, lines, conversation) {
	console.log(action+", "+subject+", "+lines);
	count=1;
	lineCount=lines;
	storedAction=action;
	storedSubject=subject;
	screen = game.add.sprite(game.width/2,game.height/2,'screen');
	screen.scale.setTo(3);
	screen.anchor.set(.5);
	screen.alpha=.5;

	if(type=='item'){
		closeUp=game.add.sprite(game.width/2,game.height/3,subject);
		closeUp.anchor.setTo(.5,0);
		closeUp.scale.set(2);
		interactableUp=true;
	}else if(type=='npc'&&conversation==false){
		closeUp=game.add.sprite(game.width/2,game.height/4*3,subject+'C');
		closeUp.anchor.setTo(.5,1);
		closeUp.scale.set(1.4);
		interactableUp=true;
	}else if(type=='npc'&&conversation==true){
		closeUp=game.add.sprite(game.width/3*2,game.height/4*3,subject+'C');
		closeUp.anchor.setTo(.5,1);
		player=game.add.sprite(game.width/3,game.height/4*3,'player');
		player.anchor.setTo(.5,1);
		closeUp.scale.set(1.4);
		player.scale.set(1.4);
		interactableUp=true;
		playerUp=true;
	}
	box=true;
	text=game.add.sprite(game.width/2,game.height-150,subject+'-'+action+'-'+count);
	text.anchor.set(.5);
}