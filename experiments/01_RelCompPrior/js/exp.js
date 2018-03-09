// initialises the experiment
// randomly picks 8 vignettes of different type and 4 control questions
// random block order (xor is always last)
// shuffles the vignettes in each block
var initExp = function() {
	//
 	var exp = {};
	// keeps track of what story types have been chosen
	var types = [];

	// shuffles the items in a list
	var shuffleComb = function(comb) {
		var counter = comb.length;
		var index;
		var temp;

		while (counter > 0) {
			index = Math.floor(Math.random() * counter);
			counter--;

			temp = comb[counter];
			comb[counter] = comb[index];
			comb[index] = temp;
		}

		return comb;
	};
	
	// shuffle the items in vignettes (vignettes_or.js and vignettes_some.js)
	vignettes_some = shuffleComb(vignettes_some);
	vignettes_or = shuffleComb(vignettes_or);

	// selects 8 vignettes each one of different type
	// takes a list of vignettes (vignettes_or)
	// returns a list of objects, each object is a vignette
	var selectVignettes = function(items) {
		// a list of selected vignettes
		var selected = [];

		for (var i = 0; i < items.length; i++) {
			if (selected.length >= 4) {
				break;
			} else {
				// makes sure vignettes of the same type don't end up in selected
				if (types.indexOf(items[i]['type']) === -1) {
					// put all control questions in a list				
					var control_questions = [
							[items[i]['test_true1'], 'test true'],
							[items[i]['test_true2'], 'test true'],
							[items[i]['test_false1'], 'test false'],
							[items[i]['test_false2'], 'test false'],
							[items[i]['test_uncertain1'], 'test uncertain'],
							[items[i]['test_uncertain2'], 'test uncertain']];

					// shuffle the control questions and take the first 4
					control_questions = shuffleComb(control_questions);

					selected.push({
						name: items[i]['name'],
						type: items[i]['type'],
						relevance: Number(items[i]['relevance']),
						competence: Number(items[i]['competence']),
						prior: Number(items[i]['prior']),
						background: items[i]['background'],
						utterance_imp: items[i]['utterance_imp'],
						question_rel: items[i]['question_rel'],
						question_comp: items[i]['question_comp'],
						question_pri1: items[i]['question_pri1'],
						question_imp: items[i]['question_imp'],
						// randomly selects 4 control questions for each chosen vignette
						control_rel: control_questions[0][0],
						control_rel_type: control_questions[0][1],
						control_comp: control_questions[1][0],
						control_comp_type: control_questions[1][1],
						control_pri: control_questions[2][0],
						control_pri_type: control_questions[2][1],
						control_imp: control_questions[3][0],
						control_imp_type: control_questions[3][1]
					});

					// if items has 'question_pri2' (which only 'or' items have), then it is added to selected
					if (items[i].hasOwnProperty('question_pri2')) {
						selected[selected.length - 1]['question_pri2'] = items[i]['question_pri2'];
					}

					types.push(items[i]['type']);
				}
			}
		}

		return selected;
	};

	// generates order of blocks, xor is always last
	// return a list of 4 strings, each is the name of a block
	var generateBlocksOrder = function() {
		blocks = ['rel', 'comp', 'pri'];

		blocksOrder = shuffleComb(blocks);
		blocksOrder.push('xor');

		return blocksOrder;
	};

	var fillBlocks = function(items) {
		// an object of four blocks
		var blocks = {
			rel: [],
			comp: [],
			pri: [],
			xor: []
		};

		for (var i = 0; i < items.length; i++) {
			blocks['rel'].push([{
				'block': 'rel',
				'name': items[i]['name'],
				'type': items[i]['type'],
				'relevance': items[i]['relevance'],
				'competence': items[i]['competence'],
				'prior': items[i]['prior'],
				'background': items[i]['background'],
				'question': items[i]['control_rel'],
				'condition': items[i]['control_rel_type']
			},{
				'block': 'rel',
				'name': items[i]['name'],
				'type': items[i]['type'],
				'relevance': items[i]['relevance'],
				'competence': items[i]['competence'],
				'prior': items[i]['prior'],
				'background': items[i]['background'],
				'question': items[i]['question_rel'],
				'condition': 'rel'
			}]);
			blocks['comp'].push([{
				'block': 'comp',
				'name': items[i]['name'],
				'type': items[i]['type'],
				'relevance': items[i]['relevance'],
				'competence': items[i]['competence'],
				'prior': items[i]['prior'],
				'background': items[i]['background'],
				'question': items[i]['control_comp'],
				'condition': items[i]['control_comp_type']
			},{
				'block': 'comp',
				'name': items[i]['name'],
				'type': items[i]['type'],
				'relevance': items[i]['relevance'],
				'competence': items[i]['competence'],
				'prior': items[i]['prior'],
				'background': items[i]['background'],
				'question': items[i]['question_comp'],
				'condition': 'comp'
			}]);
			blocks['pri'].push([{
				'block': 'pri',
				'name': items[i]['name'],
				'type': items[i]['type'],
				'relevance': items[i]['relevance'],
				'competence': items[i]['competence'],
				'prior': items[i]['prior'],
				'background': items[i]['background'],
				'question': items[i]['control_pri'],
				'condition': items[i]['control_pri_type']
			},{
				'block': 'pri',
				'name': items[i]['name'],
				'type': items[i]['type'],
				'relevance': items[i]['relevance'],
				'competence': items[i]['competence'],
				'prior': items[i]['prior'],
				'background': items[i]['background'],
				'question': items[i]['question_pri1'],
				'condition': 'prior'
			}]);

			// only when there is a second 'pri' question, it is added to the pri block
			if (items[i].hasOwnProperty('question_pri2')) {
				blocks['pri'][blocks['pri'].length-1].push({
					'block': 'pri',
					'name': items[i]['name'],
					'type': items[i]['type'],
					'relevance': items[i]['relevance'],
					'competence': items[i]['competence'],
					'prior': items[i]['prior'],
					'background': items[i]['background'],
					'question': items[i]['question_pri2'],
					'condition': 'prior'
				});
			}

			blocks['xor'].push([{
				'block': 'xor',
				'name': items[i]['name'],
				'type': items[i]['type'],
				'relevance': items[i]['relevance'],
				'competence': items[i]['competence'],
				'prior': items[i]['prior'],
				'background': items[i]['background'],
				'question': items[i]['control_imp'],
				'condition': items[i]['control_imp_type']
			},{
				'block': 'xor',
				'name': items[i]['name'],
				'type': items[i]['type'],
				'relevance': items[i]['relevance'],
				'competence': items[i]['competence'],
				'prior': items[i]['prior'],
				'background': items[i]['background'],
				'utterance': items[i]['utterance_imp'],
				'question': items[i]['question_imp'],
				'condition': 'imp'
			}]);
		}

		return blocks;
	};

	var createExp = function() {
		// list of objects
		var final = [];
		var blocks;
		var selectedVignettes = [];
		var blocksOrder = generateBlocksOrder();

		selectedOrItems = selectVignettes(vignettes_or);
		selectedSomeItems = selectVignettes(vignettes_some);

		// combines selected 'or' items and selected 'some' items in one list (selectedVignettes)
		for (var i = 0; i < 4; i++) {
			selectedVignettes.push(selectedSomeItems[i]);
			selectedVignettes.push(selectedOrItems[i]);
		}

		blocks = fillBlocks(selectedVignettes);

		for (var i = 0; i < blocksOrder.length; i++) {
			var temp = blocks[blocksOrder[i]];

			temp = shuffleComb(temp);
			final.push(temp);
		}

		return final;
	};

	// generates data for the experiment
	// selects vignettes, shuffles the blocks and the order of the vignettes
	// returns a list of 4 lists (1 for each block). Each list contains 8 vignettes (4 for 'some' and 4 for 'or')
	// exp instance
	exp.data = createExp();

	// a list where the trial data and results are stored.
	// gets filled with object by exp.addResponse(..) function
	// each object represents one trial
	exp.trials = [];

	// adds the response and trial info to an object and pushes the object to exp.results
	exp.addResponse = function(blockIndex, vignetteIndex, questionIndex, response, rt, currentTrial) {

		if (exp.data[blockIndex][vignetteIndex][questionIndex].hasOwnProperty('utterance') === false) {
			exp.data[blockIndex][vignetteIndex][questionIndex].utterance = '-';
		}
		
		exp.trials.push({
			'block_number': blockIndex + 1,
			'trial_number': currentTrial,
			'condition': exp.data[blockIndex][vignetteIndex][questionIndex].condition,
			'block_type': exp.data[blockIndex][vignetteIndex][questionIndex].block,
			'name': exp.data[blockIndex][vignetteIndex][questionIndex].name,
			'type': exp.data[blockIndex][vignetteIndex][questionIndex].type,
			'background': exp.data[blockIndex][vignetteIndex][questionIndex].background,
			'question': exp.data[blockIndex][vignetteIndex][questionIndex].question,
			'utterance': exp.data[blockIndex][vignetteIndex][questionIndex].utterance,
			'relevance': exp.data[blockIndex][vignetteIndex][questionIndex].relevance,
			'competence': exp.data[blockIndex][vignetteIndex][questionIndex].competence,
			'prior': exp.data[blockIndex][vignetteIndex][questionIndex].prior,
			'response': response,
			'rt': rt
		});

	};

	// collects the subject's info (language, difficulty, comments, etc)
	exp.addSubjData = function(info) {
		exp.subjData = info;
	};

	// converts the data into JSON
	exp.getJSON = function() {
		return JSON.stringify({
			"author": "Stela",
			"experiment_id": "xor_pilot_1",
			"description": "The goal of this study is to get insights into the factors that determine the strength/availability of exclusive readings of 'or'.",
			"trials": exp.trials,
			"subject_info": exp.subjData
		});
	};

	return exp;
};