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

initTrialView = function(trialInfo, blockIndex, vignetteIndex) {
	var view = {};
	view.name = 'trial';
	view.template = $('#trial-templ').html();

	// coutners and flags
	var currentQuestion = 0;
	var sliderMoved = false;
	// a list of responses
	var responses = [];

	// check if there are utterances for this trial
	// if so, create vars and functions that handle them
	if (typeof trialInfo['utterances'] === 'object') {
		// counters and flags
		var hasUtterance = true;
		var currentUtterance = 0;

		// utterance handler
		var showNextUtterance = function() {
			$('#vignette-utterance').text(trialInfo['utterances'][currentUtterance]);
			currentUtterance++;
		}
	}

	// question handler
	var showNextQuestion = function() {
		currentQuestion++;
		$('#vignette-question').text(trialInfo['questions'][currentQuestion]);
	};

	// template fillings
	$('#main').html(Mustache.render(view.template));
	$('#vignette-text').text(trialInfo['background']);
	$('#vignette-name').text(trialInfo['name']);
	$('#vignette-question').text(trialInfo['questions'][currentQuestion]);

	// checks if the slider has been changed
	$('#response').on('change', function() {
		sliderMoved = true;
	});
	$('#response').on('click', function() {
		sliderMoved = true;
	});

	// when next is pressed, if the slider hasn't been moved, 'move slier' reminder is shown
	// if the slider has been moved, next button brings the next question
	// if there are utterances, they are shown as well
	// when there are no more questions (and utterances) the next vignette is shown
	$('.next-btn').on('click', function() {
		if (sliderMoved) {
			if (currentQuestion < (trialInfo['questions'].length - 1)) {
				if (hasUtterance) {
					showNextUtterance();
				}
				// record the val of the input before showing the next quesion
				responses.push($('#response').val());
				showNextQuestion();
			} else {
				// record the val of the input
				// add the values back to the vignette object
				$('.next-btn').text('next trial');
				responses.push($('#response').val());
				rcp.exp.addResponse(blockIndex, vignetteIndex, responses);
				rcp.getNextView();
			}
		} else {
			$('.move-slider').removeClass('hidden');
		}
	});

	return view;
};

initPauseView = function() {
	var view = {};
	view.name = 'pause';
	view.template = $('#pause-templ').html();

	$('#main').html(Mustache.render(view.template));
	$('.next-btn').on('click', function(){
		rcp.getNextView();
	});

	return view;
};

initThanksView = function() {
	var view = {};
	view.name = 'trial';
	view.template = $('#thanks-templ').html();

	$('#main').html(Mustache.render(view.template));
	$('.next-btn').on('click', function(){
		rcp.getNextView();
	});

	return view;
};