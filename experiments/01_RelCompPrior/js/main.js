$(document).ready(function(){
	rcp.init();
});

var rcp = {};

// view handler
rcp.getNextView = function() {
};

// experiment initialisation
rcp.init = function() {
	this.exp = initExp();
	this.view = initIntroView();
};
