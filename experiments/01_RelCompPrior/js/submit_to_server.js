// submits data to the uni server and MTurk's server if the experiment runs on MTurk
// takes two arguments:
// 1. isMTurk - boolean; true if the experiment is run on MTurk
// 2. contactEmail - string
//
var submitResults = function(isMTurk, contactEmail) {
	// if isMTurk is not given, sets it to false
	isMTurk = typeof isMTurk !== 'undefined' ? isMTurk : false;
	// set a default contact email
	contactEmail = typeof contactEmail !== 'undefined' ? contactEmail : "mchfranke@gmail.com";

	$.ajax({
		type: 'POST',
		url: '',
		data: {
			'trials': rcp.exp.trials,
			'author': 'Stela',
			'experiment_id': 'xor_pilot_1',
			'subject_info': rcp.exp.subjData
		},
		success: function (responseData, textStatus, jqXHR) {
			console.log(textStatus)
			if (isMTurk) {
				// For now we still use the original turk.submit to inform MTurk that the experiment has finished.
				// submits to MTurk's server if isMTurk = true
				submitToMTurk();
			}
			// shows a thanks message after the submission
			$('.thanks-message').removeClass('hidden');
		},
		error: function (responseData, textStatus, errorThrown) {
			// There is this consideration about whether we should still allow such a submission that failed on our side to proceed on submitting to MTurk. Maybe we should after all.
			if (isMTurk) {
				// For now we still use the original turk.submit to inform MTurk that the experiment has finished.
				// Stela might have another implementation which submits only the participant id.
				// Not notifying the user yet since it might cause confusion. The webapp should report errors.

				// submits to MTurk's server if isMTurk = true
				submitToMTurk();
				// shows a thanks message after the submission
				$('.thanks-message').removeClass('hidden');
			} else {
				// It seems that this timeout (waiting for the server) is implemented as a default value in many browsers, e.g. Chrome. However it is really long (1 min) so timing out shouldn't be such a concern.
				if (textStatus == "timeout") {
					alert("Oops, the submission timed out. Please try again. If the problem persists, please contact " + contactEmail + ", including your ID");
				} else {
					alert("Oops, the submission failed. Please try again. If the problem persists, please contact " + contactEmail + ", including your ID");
				}
			}
		}
	});
};

// submits to MTurk's servers
var submitToMTurk = function() {
	console.log('submit to mturk called');
	var form = $('#submit_to_mturk');

/*	form.action = submitTo;*/
	form.submit();
};

