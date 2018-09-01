function onTap(pointer) {

	if(stateIn=='menu'){
		game.state.start('town');
	}else if(stateIn=='credits'){
		bm.destroy();
		game.state.start('menu');
	}else{
		if(box!=false){
			if(count!=lineCount){
				count++;
				text.destroy();
				text=game.add.sprite(game.width/2,game.height-112.5,'dialogue',storedSubject+'-'+storedAction+'-0'+count);
				text.anchor.set(.5);
				text.scale.setTo(1.5);
			}else if(storedSubject=='lumberjack'&&storedAction==4){
				box=false;
				lineCount=null;
				count=null;
				storedAction=null;
				storedSubject=null;

				game.state.start('graveyard')
			}else if(storedSubject=='end'&&storedAction==1){
				box=false;
				lineCount=null;
				count=null;
				storedAction=null;
				storedSubject=null;

				game.state.start('credits');
			}else if(storedSubject=='end'&&storedAction==2){
				box=false;
				lineCount=null;
				count=null;
				storedAction=null;
				storedSubject=null;

				game.state.start('credits');
			}else if(storedSubject=='end'&&storedAction==3){
				box=false;
				lineCount=null;
				count=null;
				storedAction=null;
				storedSubject=null;

				game.state.start('credits');
			}else if(storedSubject=='end'&&storedAction==4){
				box=false;
				lineCount=null;
				count=null;
				storedAction=null;
				storedSubject=null;

				creditType='bard';
				game.state.start('credits');
			}else{
				if(storedSubject=='prince'&&storedAction==1){
					dim.destroy();
				}
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
				if(interactableUp==true&&storedSubject!='end'){
					closeUp.destroy();
					interactableUp=false;
				}
				if(itemUp==true){
					itemUsing.destroy();
					itemUp=false;
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
				}else if (prince.input.pointerOver()){
					interactable = "prince";
					type = "npc";
				}else if (dog.input.pointerOver()){
					interactable = "dog";
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
				npcTalk = game.add.sprite(game.input.mousePointer.x+32, game.input.mousePointer.y-24, 'art','actions-01');
				npcEx = game.add.sprite(game.input.mousePointer.x+32, game.input.mousePointer.y, 'art','actions-02');
				npcGive = game.add.sprite(game.input.mousePointer.x+32, game.input.mousePointer.y+24, 'art','actions-03');
				
				npcTalk.scale.setTo(.75);
				npcEx.scale.setTo(.75);
				npcGive.scale.setTo(.75);
				//enables the mouseover of the buttons
				npcTalk.inputEnabled = true;
				npcEx.inputEnabled = true;
				npcGive.inputEnabled = true;



				//popup exists
				popUp=true;
			} else if(type=="item"){
				//adds the assets for the popup buttons near the mouse
				itemTake = game.add.sprite(game.input.mousePointer.x+32, game.input.mousePointer.y-24, 'art','actions-04');
				itemEx = game.add.sprite(game.input.mousePointer.x+32, game.input.mousePointer.y, 'art','actions-02');
				itemUse = game.add.sprite(game.input.mousePointer.x+32, game.input.mousePointer.y+24, 'art','actions-05');
				
				itemTake.scale.setTo(.75);
				itemEx.scale.setTo(.75);
				itemUse.scale.setTo(.75);
				//enables the mouseover of the buttons
				itemTake.inputEnabled = true;
				itemEx.inputEnabled = true;
				itemUse.inputEnabled = true;

				//popup exists
				popUp=true;
			}

		}else{
			//a different action for each button
			 if(stateIn=='town'&&interactable=="bard"){
				if (npcTalk.input.pointerOver()&&bardCount==1){
					dialogue("bard", 1, 8, true, false);
					bardCount++;
				} else if (npcTalk.input.pointerOver()&&bardCount==2){
					dialogue("bard", 2, 7, true, false);
					bardCount++;
					item='potion';
					document.body.style.backgroundImage = "url('css/bg-key1.png')";
				} else if (npcTalk.input.pointerOver()&&bardCount==3){
					dialogue("bard", 3, 2, true, false);
				} else if (npcEx.input.pointerOver()){
					dialogue("bard", 4, 4, false, false);
				} else if (npcGive.input.pointerOver()&&item=='rose'){
					dialogue("bard", 5, 6, true, true);
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (npcGive.input.pointerOver()&&item=='saxlube'){
					dialogue("bard", 6, 5, true, true);
					item='key1';
					document.body.style.backgroundImage = "url('css/bg-key1.png')";
				} else if (npcGive.input.pointerOver()&&item=='skull'){
					dialogue("bard", 7, 6, true, true);
					skullUsed=true;
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (npcGive.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, false, false);
				} else if (npcGive.input.pointerOver()&&item!=null){
					dialogue("error", 3, 1, false, true);
				}
				//destros popup after choice or no choice is made
				npcTalk.destroy();
				npcEx.destroy();
				npcGive.destroy();
				//popup does not exist, can be made again
				popUp=false;
			} else if(stateIn=='town'&&interactable=="mynth"){
				if (npcTalk.input.pointerOver()&&mynthCount==1){
					dialogue("mynth", 1, 9, true, false);
					mynthCount++;
				} else if (npcTalk.input.pointerOver()&&mynthCount==2){
					dialogue("mynth", 2, 10, true, false);
					item='saxlube';
					document.body.style.backgroundImage = "url('css/bg-saxlube.png')";
					mynthCount++;
				} else if (npcTalk.input.pointerOver()&&mynthCount==3){
					dialogue("mynth", 3, 3, true, false);
				} else if (npcEx.input.pointerOver()){
					dialogue("mynth", 4, 4, false, false);
				} else if (npcGive.input.pointerOver()&&item=='dog'){
					dialogue("mynth", 5, 13, true, true);
				} else if (npcGive.input.pointerOver()&&item=='key2'){
					dialogue("mynth", 6, 5, true, true);
					item='rose';
					document.body.style.backgroundImage = "url('css/bg-rose.png')";
				} else if (npcGive.input.pointerOver()&&item=='rose'){
					dialogue("mynth", 7, 7, true, true);
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (npcGive.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, false, false);
				} else if (npcGive.input.pointerOver()&&item!=null){
					dialogue("error", 3, 1, false, true);
				}
				//destros popup after choice or no choice is made
				npcTalk.destroy();
				npcEx.destroy();
				npcGive.destroy();
				//popup does not exist, can be made again
				popUp=false;
			} else if(stateIn=='town'&&interactable=="barkeep"){
				if (npcTalk.input.pointerOver()&&barkeepCount==1){
					dialogue("barkeep", 1, 2, true, false);
					barkeepCount++;
				} else if (npcTalk.input.pointerOver()&&barkeepCount==2){
					dialogue("barkeep", 2, 4, true, false);
					barkeepCount++;
				} else if (npcTalk.input.pointerOver()&&barkeepCount==3){
					dialogue("barkeep", 3, 8, true, false);
				} else if (npcEx.input.pointerOver()){
					dialogue("barkeep", 4, 2, false, false);
				} else if (npcGive.input.pointerOver()&&item=='potion'){
					dialogue("barkeep", 5, 3, true, true);
					potionUsed=true;
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (npcGive.input.pointerOver()&&item=='key1'){
					dialogue("barkeep", 6, 8, true, true);
					item='axe';
					document.body.style.backgroundImage = "url('css/bg-axe.png')";
				} else if (npcGive.input.pointerOver()&&item=='rose'){
					dialogue("barkeep", 7, 7, true, true);
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (npcGive.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, false, false);
				} else if (npcGive.input.pointerOver()&&item!=null){
					dialogue("error", 3, 1, false, true);
				}
				//destros popup after choice or no choice is made
				npcTalk.destroy();
				npcEx.destroy();
				npcGive.destroy();
				//popup does not exist, can be made again
				popUp=false;
			} else if(stateIn=='town'&&interactable=="prince"){
				if (npcTalk.input.pointerOver()&&princeCount==1){
					dialogue("prince", 1, 9, true, false);
					princeCount++;
					introSeen=true;
				} else if (npcTalk.input.pointerOver()&&princeCount==2){
					dialogue("prince", 2, 4, true, false);
				} else if (npcEx.input.pointerOver()){
					dialogue("prince", 3, 2, false, false);
				} else if (npcGive.input.pointerOver()&&item=='dog'){
					dialogue("prince", 4, 5, true, true);
				} else if (npcGive.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, false, false);
				} else if (npcGive.input.pointerOver()&&item!=null){
					dialogue("error", 3, 1, false, true);
				}
				//destros popup after choice or no choice is made
				npcTalk.destroy();
				npcEx.destroy();
				npcGive.destroy();
				//popup does not exist, can be made again
				popUp=false;
			} else if(stateIn=='forest'&&interactable=="lumberjack"){
				if (npcTalk.input.pointerOver()&&lumberjackCount==1){
					dialogue("lumberjack", 1, 6, true, false);
					lumberjackCount++;
				} else if (npcTalk.input.pointerOver()&&lumberjackCount==2){
					dialogue("lumberjack", 2, 6, true, false);
				} else if (npcEx.input.pointerOver()){
					dialogue("lumberjack", 3, 2, false, false);
				} else if (npcGive.input.pointerOver()&&item=='rose'){
					dialogue("lumberjack", 4, 10, true, true);
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
					gateOpen=true;
				} else if (npcGive.input.pointerOver()&&item=='potion'){
					dialogue("lumberjack", 5, 6, true, true);
					potionUsed=true;
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (npcGive.input.pointerOver()&&item=='dog'){
					dialogue("lumberjack", 6, 6, true, true);
					dogUsed=true;
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (npcGive.input.pointerOver()&&item=='axe'){
					dialogue("lumberjack", 7, 12, true, true);
					item='key2';
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (npcGive.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, false, false);
				} else if (npcGive.input.pointerOver()&&item!=null){
					dialogue("error", 3, 1, false, true);
				}
				//destros popup after choice or no choice is made
				npcTalk.destroy();
				npcEx.destroy();
				npcGive.destroy();
				//popup does not exist, can be made again
				popUp=false;
			} else if(stateIn=='graveyard'&&interactable=="dic"){
				if (npcTalk.input.pointerOver()){
					dialogue("dic", 1, 11, true);
				} else if (npcEx.input.pointerOver()){
					dialogue("dic", 2, 6, false, false);
				} else if (npcGive.input.pointerOver()&&item=='potion'){
        			dialogue("end", 1, 3, false, false);
				} else if (npcGive.input.pointerOver()&&item=='dog'){
        			dialogue("end", 2, 4, false, false);
				} else if (npcGive.input.pointerOver()&&item=='skull'){
        			dialogue("end", 3, 9, false, false);
				} else if (npcGive.input.pointerOver()&&potionUsed==true&&dogUsed==true&&skullUsed==true){
        			dialogue("end", 4, 9, false, false);
				} else if (npcGive.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, false, false);
				} else if (npcGive.input.pointerOver()&&item!=null){
					dialogue("error", 3, 1, false, true);
				}
				//destros popup after choice or no choice is made
				npcTalk.destroy();
				npcEx.destroy();
				npcGive.destroy();
				//popup does not exist, can be made again
				popUp=false;
			} else if(stateIn=='town'&&interactable=="dog"){
				if (itemTake.input.pointerOver()){
					item=interactable;
					dog.destroy();
					document.body.style.backgroundImage = "url('css/bg-dog.png')";
				} else if (itemEx.input.pointerOver()){
					dialogue("dog", 1, 2, false, false);
				} else if (itemUse.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, true, false);
				} else if (itemUse.input.pointerOver()){
					dialogue("error", 1, 1, false, true);
				}
				//destros popup after choice or no choice is made
				itemTake.destroy();
				itemEx.destroy();
				itemUse.destroy();
				//popup does not exist, can be made again
				popUp=false;
			} else if(stateIn=='forest'&&interactable=="skull"){
				if (itemTake.input.pointerOver()){
					item=interactable;
					skull.destroy();
					document.body.style.backgroundImage = "url('css/bg-skull.png')";
				} else if (itemEx.input.pointerOver()){
					dialogue("skull", 1, 4, false, false);
				} else if (itemUse.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, true, false);
				} else if (itemUse.input.pointerOver()){
					dialogue("error", 1, 1, false, true);
				}
				//destros popup after choice or no choice is made
				itemTake.destroy();
				itemEx.destroy();
				itemUse.destroy();
				//popup does not exist, can be made again
				popUp=false;
			} else if(stateIn=='forest'&&interactable=="sign"){
				if (itemTake.input.pointerOver()){
					dialogue("error", 4, 1, false, false);
				} else if (itemEx.input.pointerOver()){
					dialogue("sign", 1, 2, false, false);
				} else if (itemUse.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, true, false);
					item=null;
				} else if (itemUse.input.pointerOver()){
					dialogue("error", 1, 1, false, true);
				}
				//destros popup after choice or no choice is made
				itemTake.destroy();
				itemEx.destroy();
				itemUse.destroy();
				//popup does not exist, can be made again
				popUp=false;
			} else if(stateIn=='forest'&&interactable=="gate"&&gateOpen==false){
				if (itemTake.input.pointerOver()){
					console.log('cannot take');
				} else if (itemEx.input.pointerOver()){
					dialogue("gate", 1, 2, false, false);
				} else if (itemUse.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, true, false);
				} else if (itemUse.input.pointerOver()&&item=='rose'){
					dialogue("gate", 2, 3, false, true);
				} else if (itemUse.input.pointerOver()&&item=='dog'){
					dialogue("gate", 3, 3, false, true);
					gateOpen=true;
					gate.destroy();
					dogUsed=true;
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (itemUse.input.pointerOver()&&item=='skull'){
					dialogue("gate", 4, 4, false, true);
					gateOpen=true;
					gate.destroy();
					skullUsed=true;
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (itemUse.input.pointerOver()&&item=='axe'){
					dialogue("gate", 5, 3, false, true);
					gateOpen=true;
					gate.destroy();
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (itemUse.input.pointerOver()&&item=='potion'){
					dialogue("gate", 6, 3, false, true);
					gateOpen=true;
					gate.destroy();
					potionUsed=true;
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (itemUse.input.pointerOver()&&item=='lube'){
					dialogue("gate", 7, 2, false, true);
					gateOpen=true;
					gate.destroy();
					item=null;
					document.body.style.backgroundImage = "url('css/bg-null.png')";
				} else if (itemUse.input.pointerOver()&&item=='key1'){
					dialogue("gate", 9, 1, false, true);
				} else if (itemUse.input.pointerOver()&&item=='key2'){
					dialogue("gate", 10, 2, false, true);
				}
				//destros popup after choice or no choice is made
				itemTake.destroy();
				itemEx.destroy();
				itemUse.destroy();
				//popup does not exist, can be made again
				popUp=false;
			} else if(stateIn=='graveyard'&&interactable=="grave1"){
				if (itemTake.input.pointerOver()){
					dialogue("error", 4, 1, false, false);
				} else if (itemEx.input.pointerOver()){
					dialogue("grave1", 1, 1, false, false);
				} else if (itemUse.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, false, false);
				} else if (itemUse.input.pointerOver()){
					dialogue("error", 1, 1, false, true);
				}
				//destros popup after choice or no choice is made
				itemTake.destroy();
				itemEx.destroy();
				itemUse.destroy();
				//popup does not exist, can be made again
				popUp=false;
			} else if(stateIn=='graveyard'&&interactable=="grave2"){
				if (itemTake.input.pointerOver()){
					dialogue("error", 4, 1, false, false);
				} else if (itemEx.input.pointerOver()){
					dialogue("grave2", 1, 1, false, false);
				} else if (itemUse.input.pointerOver()&&item==null){
					dialogue("error", 2, 1, false, false);
				} else if (itemUse.input.pointerOver()){
					dialogue("error", 1, 1, false, true);
				}
				//destros popup after choice or no choice is made
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

function dialogue(subject, action, lines, conversation, using) {
	console.log(action+", "+subject+", "+lines);
	count=1;
	lineCount=lines;
	storedAction=action;
	storedSubject=subject;
	screen = game.add.sprite(game.width/2,game.height/2,'art','ui');
	screen.scale.setTo(3);
	screen.anchor.set(.5);
	if(subject=='prince'&&action==1){}else{screen.alpha=.5;}
	itemUp=false;

	if(subject=='end'){
		if(action==1){
			ending=game.add.sprite(game.width/2,game.height/3,'art','potion');
			ending.anchor.set(.5);
		}else if(action==2){
			ending=game.add.sprite(game.width/2,game.height/3,'art','dog');
			ending.anchor.set(.5);
		}else if(action==3){
			ending=game.add.sprite(game.width/2,game.height/3,'art','skull');
			ending.anchor.set(.5);
		}else if(action==4){
			ending=game.add.sprite(game.width/2,game.height/3,'art','bard');
			ending.anchor.set(.5);
		}
	}else if(type=='item'&&using==false&&subject!='error'){
		closeUp=game.add.sprite(game.width/2,game.height/3,'art',subject);
		closeUp.anchor.setTo(.5,0);
		if(subject!='dog'){closeUp.scale.setTo(1.5);}else{closeUp.scale.setTo(-.75,.75)}
		interactableUp=true;
	}else if(type=='npc'&&conversation==false&&subject!='error'){
		closeUp=game.add.sprite(game.width/2,game.height/4*3,'art',subject+'2');
		closeUp.anchor.setTo(.5,1);
		closeUp.scale.set(1.05);
		interactableUp=true;
	}else if(type=='npc'&&conversation==true){
		closeUp=game.add.sprite(game.width/3*2,game.height/4*3,'art',subject+'2');
		closeUp.anchor.setTo(.5,1);
		player=game.add.sprite(game.width/3,game.height/4*3, 'art', 'mc2');
		player.anchor.setTo(.5,1);
		closeUp.scale.set(1.05);
		player.scale.set(1.05);
		interactableUp=true;
		playerUp=true;
	}
	box=true;
	if(using==true){
		itemUsing=game.add.sprite(game.width/2,game.height/2+50,'art',item);
		if(item!='dog'){itemUsing.scale.setTo(1.5);}else{itemUsing.scale.setTo(-.75,.75)}
		itemUsing.anchor.setTo(.5,.5);
		itemUp=true;
	}
	text=game.add.sprite(game.width/2,game.height-112.5,'dialogue',subject+'-'+action+'-0'+count);
	text.scale.setTo(1.5);
	text.anchor.set(.5);
}

