// helpers
var fillProgressBar = function(blockIndex, vignetteIndex) {
	var block, filled;
	
	for (var i = 0; i <= blockIndex; i++) {
		block = $('.block-' + (i + 1));
		filled = block.children('.filled').first();

		if (i === blockIndex) {
			filled.width(5 * vignetteIndex);
		} else {
			filled.width(40);
		}
	}
};


// views
var initIntroView = function() {
	var view = {};
	view.name = 'intro';
	view.template = $('#intro-templ').html();
	$('#main').html(Mustache.render(view.template));

	$('.next-btn').on('click', function(){
		rcp.getNextView();
	});

	return view;
};

var initInstructionsView = function() {
	var view = {};
	view.name = 'instructions';
	view.template = $('#instructions-templ').html();
	$(window).scrollTop(0);
	$('#main').html(Mustache.render(view.template));

	$('.next-btn').on('click', function() {
		rcp.getNextView();
	});

	return view;
};

var initSampleView = function() {
	var view = {};
	view.name = 'sample';
	view.template = $('#sample-templ').html();
	$('#main').html(Mustache.render(view.template));

	// counters
	var current = 0;
	var examples = 4;

	// elements
	var questionElem = $('#vignette-question');
	var explanationElem = $('#vignette-explanation');
	var sliderElem = $('#response');

	questionElem.text(instructions['questions'][current]);
	explanationElem.text(instructions['explanations'][current]);
	sliderElem.val(instructions['values'][current]);

	var showNextSlide = function() {
		questionElem.text(instructions['questions'][current]);
		explanationElem.text(instructions['explanations'][current]);
		sliderElem.val(instructions['values'][current]);
	};

	$('.next-btn').on('click', function(){
		if (current < (instructions['questions'].length - 1)) {
			current++;
			showNextSlide();
		} else {
			rcp.getNextView();
		}
	});

	return view;
}

initBeginExpView = function() {
	var view = {};
	view.name = 'beginExp';
	view.template = $('#begin-exp-templ').html();
	$('#main').html(Mustache.render(view.template));

	$('.next-btn').on('click', function() {
		rcp.getNextView();
	});

	return view;
};

// trial view
// handles each trial
// sends slider's values back to the exp.data object
initTrialView = function(trialInfo, blockIndex, vignetteIndex, questionIndex, currentTrial) {
	var view = {};
	view.name = 'trial';
	view.template = $('#trial-templ').html();
	$('#main').html(Mustache.render(view.template));

	// coutners and flags
	var currentQuestion = 0;
	var sliderMoved = false;
	// time when the page is loaded is recorded for calculating rts
	var startDate = Date.now();
	// the val of the slider
	var response = 0;
	// reading time
	var rt = 0;
	// elements
	var questionElem = $('#vignette-question');
	var utteranceElem = $('#vignette-utterance');
	var sliderElem = $('#response');
	var helpElem = $('.move-slider');

	fillProgressBar(blockIndex, vignetteIndex);

	// checks if there is an utterance for this trial
	if (typeof trialInfo['utterance'] === 'string') {
		// utterance handler
		utteranceElem.text(trialInfo['utterance']);
		utteranceElem.addClass('utterance');
	}

	// reset slider between the quesitons
	var resetSlider = function() {
		sliderElem.val(0.5);
		sliderMoved = false;
		helpElem.addClass('hidden');
	};

	// template fillings
	$('#vignette-text').text(trialInfo['background']);
	$('#vignette-name').text(trialInfo['name']);
	questionElem.text(trialInfo['question']);

	// checks if the slider has been changed
	sliderElem.on('change', function() {
		sliderMoved = true;
	});
	sliderElem.on('click', function() {
		sliderMoved = true;
	});

	// records
	var recordRT = function() {
		var endDate = Date.now();
		var rt;

		rt = endDate - startDate;
		startDate = endDate;

		return rt;
	};

	// when next is pressed, if the slider hasn't been moved, 'move sldier' help text is shown
	// if the slider has been moved, 'next' button brings the next question
	// if there are utterances, they also appear
	// when there are no more questions (and utterances) 'next' displays the next vignette
	$('.next-btn').on('click', function() {
		if (sliderMoved) {
			rt = recordRT();
			// record the val of the input
			response = sliderElem.val();
			// add the values back to the vignette object
			rcp.exp.addResponse(blockIndex, vignetteIndex, questionIndex, response, rt, currentTrial);
			rcp.getNextView();
		} else {
			// if the slider hasn't been moved, show help text reminding them to interact with the slider
			helpElem.removeClass('hidden');
		}
	});

	return view;
};


initPauseView = function(pauseNumber) {
	var view = {};
	view.name = 'pause';
	view.template = $('#pause-templ').html();
	var instructions;

	if (pauseNumber === 2) {
		instructions = 'In this block <strong>some</strong> of the stories will be accompanied by an <strong>utterance</strong>. The utterance will appear in the story box in a darker grey box. Your task is, again, to indicate how likely the statement is true based on the story and the utterance.';
	} else {
		instructions = '';
	}

	$('#main').html(Mustache.render(view.template, {
		instructions: instructions
	}));

	$('.next-btn').on('click', function(){
		rcp.getNextView();
	});

	return view;
};


initQuestionnaireView = function(sendData) {
	var view = {};
	view.name = 'postQuest';
	view.template = $('#post-quest-templ').html();

	$('#main').html(Mustache.render(view.template));

	$('.next-btn').on('click', function(){
		sendData({
			language: $('#language').val(),
			gender: $('#gender').val(),
			age: $('#age').val(),
			difficulty: $('#difficulty').val(),
			engagement: $('#engagement').val(),
			comments: $('#comments').val(),
			userAgent: navigator.userAgent
		});
		rcp.getNextView();
	});

	return view;
};


initThanksView = function() {
	var view = {};
	view.name = 'thanks';
	view.template = $('#thanks-templ').html();
	var HITData = getHITData();

	$('#main').html(Mustache.render(view.template, {
		trials: JSON.stringify(rcp.exp.trials),
		author: 'Stela',
		experiment_id: 'xor_pilot_test-01',
		subject_info: rcp.exp.subjData,
		description: 'The goal of this study is to get insights into the factors that determine the strength/availability of exclusive readings of "or".',
		// MTurk expects a key 'assignmentId' for the submission to work, that is why is it not consistent with the snake case that the other keys have
		assignmentId: HITData['assignmentId'],
		worker_id: HITData['workerId'],
		HIT_id: HITData['hitId']
	}));

	var data = {
		'trials': rcp.exp.trials,
		'author': 'Stela',
		'experiment_id': 'xor_pilot_test-01',
		'subject_info': rcp.exp.subjData,
		'description': 'The goal of this study is to get insights into the factors that determine the strength/availability of exclusive readings of "or".',
		// MTurk expects a key 'assignmentId' for the submission to work, that is why is it not consistent with the snake case that the other keys have
		'assignmentId': HITData['assignmentId'],
		'worker_id': HITData['workerId'],
		'HIT_id': HITData['hitId']
	}


	setTimeout(function() {
		submitResults(true, 'stella.plamenova@gmail.com', data);
	}, 0);

	return view;
};