// Boot state

var boot = function(game){};
boot.prototype = {
	preload: function(){

	//load bone for loading bar during load
	game.load.image('loading', 'assets/img/loading.png');
	},
	create: function(){
		game.state.start('load');
	}
}