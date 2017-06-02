var RatingExperiment = function() {

  var count = 0;
  var trialData = [];
  var was_clicked = false;
  var cond = 'dummy';

  // we get variable *condition* from psiTurk
  var trial;
  var trialNumber = 0;
  var trialMax = 16;
  var start;
  var cur_question = 0;
  var num_questions = 0; // dummy
  var allTrials = setupTrials(items);
  var controlAnswered = false;

  var next = function() {

    trialNumber ++;
    // if there are items left, start a new trial
    if (count < allTrials.length) {

      trial = allTrials[count];
      question = trial.questions[cur_question];
      cond = cur_question == 0 ? trial.condition : trial.test_question;

      if (question === undefined) {
        count++;
        cur_question = 0;
        trial = allTrials[count];

        if (trial === undefined) {
          return new Questionnaire().start();
        }
        cond = trial.condition;
        question = trial.questions[cur_question];

      }

      cur_question++;

      $('#description').html(['<b>Background</b>:', trial.background].join(' '));
      $('#utterance').html(trial.isPrior ? '<br>' : trial.utterance_imp);
      $('#question').html(['<b>Statement</b>:', question].join(' '));
      $('#progress').html([trialNumber, 'out of', trialMax, 'complete.'].join(' '));
      trialData.splice(0, 0, trialNumber, trial.name, trial.type, question, trial.relevance,
                       trial.competence, trial.prior, cond);
      console.log(trialData);
      start = + new Date();
    }

    else {
      // end the experiment & show post-questionnaire
      return new Questionnaire().start();
    }

  };

  var save = function(e) {
    e.preventDefault();

    // TODO: give visual feedback
    if (!was_clicked) {
      alert('Please click on the slider input to proceed.');
      return false;
    } else {
      //$('input[type="range"]').addClass('blueslider');
      was_clicked = false;
    }

    var RT = + new Date() - start;
    var answer = $('input[type="range"]').val();

    // add the ratings to the trial data & save to server
    trialData = trialData.concat(answer, RT);
    psiTurk.recordTrialData(trialData);

    trialData = []; // reset for next trial
    $('input[type="range"]').val(0.5); // reset slider
    next();
  };

  psiTurk.showPage('item.html');
  $('#next').on('click', save);

  $('input[type="range"]').on('change', function() {
    was_clicked = true;
  });

  $('input[type="range"]').on('click', function() {
    was_clicked = true;
  });

  next(); // start experiment
};
