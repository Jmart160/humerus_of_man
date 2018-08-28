var game;
var mainTitle;
var instructions;
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

//waiting for browser to load before creating Phaser game
window.onload = function(){
    // keep following line commented
    // localStorage.clear();

    // create ratio
    game = new Phaser.Game(1400, 800, Phaser.AUTO, '');

    //states here
    game.state.add('Load', Load);
    //game.state.add('MainMenu', MainMenu );
    game.state.add('townCenter', townCenter);
    //game.state.add('Forest', Forest);
    //game.state.add('graveYard', graveYard);
    game.state.start('Load');
}