var RatingExperiment = function() {

    var count = 0;
    var trialData = [];
    var was_clicked = false;
    var cond = 'dummy';

    // we get variable *condition* from psiTurk
    var trial;
    var start;
    var cur_question = 0;
    var num_questions = 0; // dummy
    var allTrials = setupTrials(items);
    var myTrials = _.sample(items, 6);
    var q_test_index_list = _.shuffle(["false", "false", "true", "true", "uncertain", "uncertain"]);
    var q_crit_index_list = _.shuffle([1,1,1,2,2,2]);
    var controlAnswered = false;
    var q_test_index;
    var question_test;
    var condition_test;
    var q_crit_index;
    var question_crit;
    var condition_crit;
    var utterance;
    var trialType;
    var trialNumber = 0;
    var trialMax = 12;

  var next = function() {

    // if there are items left, start a new trial
    if (count < myTrials.length) {

        trialNumber++;
        trial = myTrials[count];
        q_test_index = q_test_index_list[count];
        question_test  = q_test_index == "false" ? trial.test_false : q_test_index == "true" ? trial.test_true : trial.test_uncertain;
        condition_test = q_test_index == "false" ? "test_false" : q_test_index == "true" ? "test_true" : "test_uncertain";
        q_crit_index = q_crit_index_list[count];
        question_crit  = q_crit_index == 1 ? trial.question_exh1 : trial.question_exh2;
        condition_crit = q_crit_index == 1 ? "exh1" : "exh2";
        utterance = q_crit_index == 1 ? trial.utterance_disj1 : trial.utterance_disj2;
        trialType = cur_question == 0 ? condition_test: condition_crit;
        cond = cur_question == 0 ? "test" : "critical";
        question = cur_question == 0 ? question_test : question_crit;        
        
        $('#description').html(['<b>Background</b>:', trial.background].join(' '));
        $('#utterance').html(utterance);
        $('#question').html(['<b>Statement</b>:', question].join(' '));
        $('#progress').html([trialNumber, 'out of', trialMax, 'complete.'].join(' '));
        trialData.splice(0, 0, trialNumber, trial.name, trial.type, question, trial.relevance,
                       trial.competence, trial.prior, cond, trialType);
        console.log(trialData);
    
        start = + new Date();
    
        if (cur_question === 1) {
            count++;
            cur_question = 0;
        } else {
            cur_question++;
        }
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
