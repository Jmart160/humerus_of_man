function onTap(pointer) {

	if(stateIn=='menu'){
		game.state.start('townCenter');
	}else{
	    if(box!=false){
	        if(count!=lineCount){
	            count++;
	            text.destroy();
	            text=game.add.sprite(game.width/2,game.height-150,storedSubject+'-'+storedAction+'-'+count);
	            text.anchor.set(.5);
	            text.scale.setTo(2);
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
			if(stateIn=='town'){
		        if(mynth.input.pointerOver()){
		            interactable = "mynth";
		            type = "npc";
		        }else if(bard.input.pointerOver()){
		            interactable = "bard";
		            type = "npc";
		        }else if (barkeep.input.pointerOver()){
		            interactable = "barkeep";
		            type = "npc";
		        }else if (pudding.input.pointerOver()){
		            interactable = "pudding";
		            type = "npc";
		        }else if (doggo.input.pointerOver()){
		            interactable = "doggo";
		            type = "item";
		        }
	        }else if(stateIn=='forest'){
		        if(lumberjack.input.pointerOver()){
		            interactable = "lumberjack";
		            type = "npc";
		        }else if (skull.input.pointerOver()){
		            interactable = "skull";
		            type = "item";
		        }else if (sign.input.pointerOver()){
		            interactable = "sign";
		            type = "item";
		        }else if (gate.input.pointerOver()){
		            interactable = "gate";
		            type = "item";
		        }
	        }else if(stateIn=='graveyard'){
		        if(dic.input.pointerOver()){
		            interactable = "dic";
		            type = "npc";
		        }else if (grave1.input.pointerOver()){
		            interactable = "grave1";
		            type = "item";
		        }else if (grave2.input.pointerOver()){
		            interactable = "grave2";
		            type = "item";
		        }
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
	            	if(interactable=='gate'){
	            		gateOpen=true;
	            	}
	                dialogue("potion", 3, 2, false)
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
		player=game.add.sprite(game.width/3,game.height/4*3, 'atlas', 'mc2');
		player.anchor.setTo(.5,1);
		closeUp.scale.set(1.4);
		player.scale.set(1.4);
		interactableUp=true;
		playerUp=true;
	}
	box=true;
	text=game.add.sprite(game.width/2,game.height-150,subject+'-'+action+'-'+count);
	text.scale.setTo(2);
	text.anchor.set(.5);
}