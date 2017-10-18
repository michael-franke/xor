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

initTrialView = function(trialInfo) {
	var view = {};
	view.name = 'trial';
	view.template = $('#trial-templ').html();

	var clickCount = 0;

	$('#main').html(Mustache.render(view.template));

	$('.next-btn').on('click', function(){
		rcp.getNextView();
	});

	return view;
};

initPauseView = function() {
	var view = {};
	view.name = 'pause';
	view.template = $('#pause-templ').html();

	$('#main').html(Mustache.render(view.template));
	console.log('PAUSE');
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