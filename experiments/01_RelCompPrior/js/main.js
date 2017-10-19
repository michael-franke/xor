$(document).ready(function(){
	rcp.init();
});

var rcp = {};

// view handler
rcp.getNextView = function() {
	if (this.view.name === 'intro') {
		this.view = initInstructionsView();
	} else if (this.view.name === 'instructions') {
		this.view = initTrialView(this.exp.data[this.currentBlock][this.currentVignette], this.currentBlock, this.currentVignette);
		this.currentVignette++;
	} else if ((this.view.name === 'trial') && (this.currentBlock === 3) && (this.currentVignette === 8)) {
		this.view = initThanksView();
	} else if ((this.view.name === 'trial') && (this.currentVignette < 8)) {
		this.view = initTrialView(this.exp.data[this.currentBlock][this.currentVignette], this.currentBlock, this.currentVignette);
		this.currentVignette++;
	} else if ((this.view.name === 'trial') && (this.currentVignette === 8)) {
		this.view = initPauseView();
		this.currentBlock++;
		this.currentVignette = 0;
	} else if (this.view.name == 'pause') {
		this.view = initTrialView(this.exp.data[this.currentBlock][this.currentVignette], this.currentBlock, this.currentVignette);
		this.currentVignette++;
	}
};

// experiment initialisation
rcp.init = function() {
	this.exp = initExp();
	this.currentBlock = 0; // up to 4
	this.currentVignette = 0; // up to 8
	this.view = initIntroView();
};
