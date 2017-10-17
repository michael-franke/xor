var initIntroView = function() {
	var view = {};
	view.name = 'intro';
	view.template = $('#intro-templ').html();

	$('#main').html(Mustache.render(view.template));

	return view;
};
