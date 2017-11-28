$(document).ready(function(){
	rcp.init();

	// prevent scrolling when space is pressed (firefox does it)
	window.onkeydown = function(e) {
		if (e.keyCode == 32 && e.target == document.body) {
			e.preventDefault();
		}
	};
});

var rcp = {};

// view handler
rcp.getNextView = function() {
	if (this.view.name === 'intro') {
		this.view = initInstructionsView();
	} else if (this.view.name === 'instructions') {
		this.view = initSampleView();
	} else if (this.view.name === 'sample') {
		this.view = initBeginExpView();
	} else if (this.view.name === 'beginExp') {
		this.view = initTrialView(this.exp.data[this.currentBlock][this.currentVignette], this.currentBlock, this.currentVignette);
		this.currentVignette++;
	} else if ((this.view.name === 'trial') && (this.currentBlock === 3) && (this.currentVignette === 8)) {
		this.view = initQuestionnaireView(rcp.exp.addSubjData);
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
	} else {
		this.view = initThanksView();
	}
};

// experiment initialisation
rcp.init = function() {
	this.exp = initExp();
	this.currentBlock = 0; // up to 3
	this.currentVignette = 0; // up to 8
	this.view = initIntroView();
};
