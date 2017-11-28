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
initTrialView = function(trialInfo, blockIndex, vignetteIndex) {
	var view = {};
	view.name = 'trial';
	view.template = $('#trial-templ').html();
	$('#main').html(Mustache.render(view.template));

	// coutners and flags
	var currentQuestion = 0;
	var sliderMoved = false;
	// a list of responses
	var responses = [];
	// elements
	var questionElem = $('#vignette-question');
	var utteranceElem = $('#vignette-utterance');
	var sliderElem = $('#response');
	var helpElem = $('.move-slider');

	// checks if there are utterances for this trial
	// if so, create vars and functions that handle them
	if (typeof trialInfo['utterances'] === 'object') {
		// counters and flags
		var hasUtterance = true;
		var currentUtterance = 0;

		// utterance handler
		var showNextUtterance = function() {
			utteranceElem.text(trialInfo['utterances'][currentUtterance]);
			currentUtterance++;
		}
	}

	// reset slider between the quesitons
	var resetSlider = function() {
		sliderElem.val(0.5);
		sliderMoved = false;
		helpElem.addClass('hidden');
	};

	// question handler
	var showNextQuestion = function() {
		currentQuestion++;
		questionElem.text(trialInfo['questions'][currentQuestion]);
	};

	// template fillings
	$('#vignette-text').text(trialInfo['background']);
	$('#vignette-name').text(trialInfo['name']);
	questionElem.text(trialInfo['questions'][currentQuestion]);

	// checks if the slider has been changed
	sliderElem.on('change', function() {
		sliderMoved = true;
	});
	sliderElem.on('click', function() {
		sliderMoved = true;
	});

	// when next is pressed, if the slider hasn't been moved, 'move sldier' help text is shown
	// if the slider has been moved, 'next' button brings the next question
	// if there are utterances, they also appear
	// when there are no more questions (and utterances) 'next' displays the next vignette
	$('.next-btn').on('click', function() {
		if (sliderMoved) {
			if (currentQuestion < (trialInfo['questions'].length - 1)) {
				if (hasUtterance) {
					showNextUtterance();
				}
				// record the val of the input before showing the next quesion
				responses.push(sliderElem.val());
				resetSlider();
				showNextQuestion();
			} else {
				// record the val of the input
				// add the values back to the vignette object
				responses.push(sliderElem.val());
				rcp.exp.addResponse(blockIndex, vignetteIndex, responses);
				rcp.getNextView();
			}
		} else {
			helpElem.removeClass('hidden');
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

initQuestionnaireView = function(sendData) {
	var view = {};
	view.name = 'postQuest';
	view.template = $('#post-quest-templ').html();

	$('#main').html(Mustache.render(view.template));

	$('.next-btn').on('click', function(){
		sendData({
			language: $('#language').val(),
			difficulty: $('#difficulty').val(),
			engagement: $('#engagement').val(),
			comments: $('#comments').val()
		});
		rcp.getNextView();
	});

	return view;
};

initThanksView = function() {
	var view = {};
	view.name = 'thanks';
	view.template = $('#thanks-templ').html();

	// func that returns the assignmentId that must be sent with the results
	var getAssignmentId = function() {
		var url = window.location.search.substring(1);
		var qArray = url.split('&');
		for (var i = 0; i < qArray.length; i++) {
			var pArr = qArray[i].split('=');
			if (pArr[0] === "assignmentId") {
				return pArr[1];
			}
		}
	};

	view.rendered = Mustache.render(view.template, {
		assignmentId: getAssignmentId(),
		results: rcp.exp.getJSON()
	});

	$('#main').html(view.rendered);

	$('#form').on('submit', function(e) {
		var url = "";
		console.log(rcp.exp.getJSON());

		$.ajax({
			type: "POST",
			url: url,
			data: $('#form').serialize(),
			success: function(data) {
				console.log('Submission successful!');
				console.log(data);
			},
			error: function(data) {
				console.log('An error occured');
				console.log(data);
			}
		});

		e.preventDefault();
	});

	$('#submit-results').on('click', function(e) {
		$('#submit-results').addClass('hidden');
		$('h1').removeClass('hidden');
		$('p').text(rcp.exp.getJSON());
	});

	return view;
};