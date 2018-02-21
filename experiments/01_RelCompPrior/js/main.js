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
	} else if ((this.view.name === 'beginExp') || ((this.view.name === 'trial') && (this.currentVignette <= 7))) {
		if (this.exp.data[this.currentBlock][this.currentVignette].length > this.currentQuestion) {
			this.view = initTrialView(this.exp.data[this.currentBlock][this.currentVignette][this.currentQuestion], this.currentBlock, this.currentVignette, this.currentQuestion, this.currentTrial);
			this.currentTrial++;
			this.currentQuestion++;
		} else {
			this.currentQuestion = 0;
			this.currentVignette++;
			if (this.currentVignette === 8) {
				this.view = initPauseView();
				this.currentBlock++;
				this.currentVignette = 0;
			} else {
				this.view = initTrialView(this.exp.data[this.currentBlock][this.currentVignette][this.currentQuestion], this.currentBlock, this.currentVignette, this.currentQuestion, this.currentTrial);
				this.currentTrial++;
				this.currentQuestion++;
			}
		}
	} else if ((this.view.name === 'pause') && (this.currentBlock === 4) && (this.currentVignette === 0)) {
		this.view = initQuestionnaireView(rcp.exp.addSubjData);
	} else if ((this.view.name == 'pause') && (this.currentBlock < 4)) {
		this.view = initTrialView(this.exp.data[this.currentBlock][this.currentVignette][this.currentQuestion], this.currentBlock, this.currentVignette, this.currentQuestion, this.currentTrial);
		this.currentTrial++;
		this.currentQuestion++;
	} else {
		this.view = initThanksView();
	}
};

// experiment initialisation
rcp.init = function() {
	this.exp = initExp();
	this.currentBlock = 3; // starting form 0, up to 3 (4 in total)
	this.currentVignette = 6; //starting from 0, up to 7 (8 in total)
	this.currentQuestion = 0;
	this.currentTrial = 1;
	this.view = initQuestionnaireView(rcp.exp.addSubjData);
};