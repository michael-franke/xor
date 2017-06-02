var setupTrials = function(items) {

  // keep track of which test questions we have!
  // we want 8 items, consisting of rel, xor, comp, prior, 2 each
  var count_test = {
    'rel': 0,
    'xor': 0,
    'comp': 0,
    'prior': 0
  };

  var get_val = function(base, key) {
    return _.map(base, function(item) {
      return item[key];
    });
  };

  var test;
  var curitem;
  var n = _.size(items);
  var base = []; // will be filled with questions
  items = _.shuffle(items);


  // let's to it like this for clarity
  for (var i = 0; i < n; i++) {

    curitem = items[i];
    var types = get_val(base, 'type');

    // we already have an item of this type!
    // we should thus end up with 8 items of types
    // [hhh, hhl, hlh, hll, lhh, lhl, llh, lll]
    if (_.contains(types, curitem.type)) {
      continue;
    }

    // pick a control question at random
    var control = ['test_true', 'test_false', 'test_uncertain'];
    var which = control[_.random(0, 2)];
    curitem.control = curitem[which];
    curitem.condition = which; // name the condition as the control question


    // here we pick a test question at random
    // but if there are already 2 of that type, we pick a different one
    test = ['rel', 'comp', 'imp', 'prior'];
    curtest = test[_.random(0, 3)];

    // bogo fun
    while (count_test[curtest] >= 2) {
      curtest = test[_.random(0, 3)];
    }


    if (curtest === 'prior') {

      // want to ask both prior questions
      test = curitem.question_pri;
      curitem.isPrior = true;

    } else {

      var key = ['question', curtest].join('_');
      test = curitem[key];
      curitem.isPrior = false;
    }

    count_test[curtest]++;
    curitem.test_question = curtest;
      
    curitem.questions = [test];

    // here are all questions in the specific order
    curitem.questions.splice(0, 0, curitem.control);
    base.push(curitem);
  }


  var inorder = function(targets) {
    var types = get_val(targets, 'test_question');
    for (var i = 1; i < targets.length;  i++) {
      if (types[i - 1] == types[i]) return false;
    }
    return true;
  };

  while (!inorder(base)) {
    base = _.shuffle(base);
  }

  console.log(get_val(base, 'type'));
  console.log(get_val(base, 'test_question'));
  return base;
};
