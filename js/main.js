var item=null;
var interactable=null;
var type=null;
var popUp = false;
var box=false;
var lineCount=null;
var count=null;
var storedAction=null;
var storedSubject=null;
var playerUp=false;
var interactableUp=false;
var stateIn=null;
var gateOpen=false;
var mynthCount=1;
var bardCount=1;
var barkeepCount=1;
var lumberjackCount=1;
var princeCount=1;
var itemsUsed=0;
var creditType='normal';
var introSeen=false;
var dogUsed=false;
var potionUsed=false;
var skullUsed=false;


//waiting for browser to load before creating Phaser game
window.onload = function(){

    // create ratio
    game = new Phaser.Game(1400, 800, Phaser.AUTO, '');

    //states here
    game.state.add('graveyard', graveyard);
    game.state.add('credits', credits);
    game.state.add('forest', forest);
    game.state.add('town', town);
    game.state.add('menu', menu );
    game.state.add('load', load);
    game.state.add('boot', boot);
    game.state.start('boot');
}