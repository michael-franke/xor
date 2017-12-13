// initialises the experiment
// randomly picks 8 vignettes of different type and 4 control questions
// random block order (xor is always last)
// shuffles the vignettes in each block
var initExp = function() {
	var exp = {};

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
	var vignettes_or = shuffleComb(vignettes_or);
	var vignettes_some = shuffleComb(vignettes_some);

	// selects 8 vignettes each one of different type
	// takes a list of vignettes (vignettes_or)
	// returns a list of objects, each object is a vignette
	var selectVignettes = function(items) {
		// a list of selected vignettes
		var selected = [];
		// keeps track of what story types have been chosen
		var types = [];
		
		// makes sure vignettes of the same type don't end up in selected
		// randomly selects 4 control questions for each chosen vignette
		while (selected.length < 4) {
			for (var i = 0; i < items.length; i++) {
				if (types.indexOf(items[i]['type']) === -1) {
					// put all control questions in a list				
					var control_questions = [
							items[i]['test_true1'],
							items[i]['test_true2'],
							items[i]['test_false1'],
							items[i]['test_false2'],
							items[i]['test_uncertain1'],
							items[i]['test_uncertain2']];

					// shuffle the control questions and take the first 4
					control_questions = shuffleComb(control_questions);

					selected.push({
						name: vignettes[i]['name'],
						type: vignettes[i]['type'],
						background: vignettes[i]['background'],
						utterance_or: vignettes[i]['utterance_or'],
						question_rel: vignettes[i]['question_rel'],
						question_comp: vignettes[i]['question_comp'],
						question_pri1: vignettes[i]['question_pri1'],
						question_pri2: vignettes[i]['question_pri2'],
						question_pri2: vignettes[i]['question_pri2'],
						question_xor: vignettes[i]['question_xor'],
						control_rel: control_questions[0],
						control_comp: control_questions[1],
						control_pri: control_questions[2],
						control_xor: control_questions[3]
					});

					types.push(vignettes[i]['type']);
				} else {
					continue;
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

	// generates data for the experiment
	// selects vignettes, shuffles the blocks and the order of the vignettes
	// returns a list of 4 lists (1 for each block). Each list contains 8 vignettes
	var createExp = function() {
		var selectedOrVignettes = selectVignettes(vignettes_or);
/*		var selectedSomeVignettes = selectVignettes(vignettes_some);
*/		var blocksOrder = generateBlocksOrder();

		// an object of four blocks
		var blocks = {
			rel: [],
			comp: [],
			pri: [],
			xor: []};

		// list of four items - each one is one block
		var final = [];

		// 4 variants for each vignette
		for (var i = 0; i < selectedVignettes.length; i++) {
			blocks['rel'].push({
				'block': 'rel',
				'name': selectedVignettes[i]['name'],
				'type': selectedVignettes[i]['type'],
				'background': selectedVignettes[i]['background'],
				'questions': [selectedVignettes[i]['control_rel'],
					selectedVignettes[i]['question_rel']]
			});
			blocks['comp'].push({
				'block': 'comp',
				'name': selectedVignettes[i]['name'],
				'type': selectedVignettes[i]['type'],
				'background': selectedVignettes[i]['background'],
				'questions': [selectedVignettes[i]['control_comp'],
					selectedVignettes[i]['question_comp']]
			});
			blocks['pri'].push({
				'block': 'pri',
				'name': selectedVignettes[i]['name'],
				'type': selectedVignettes[i]['type'],
				'background': selectedVignettes[i]['background'],
				'questions': [selectedVignettes[i]['control_pri'],
					selectedVignettes[i]['question_pri1'], 
					selectedVignettes[i]['question_pri2']]
			});
			blocks['xor'].push({
				'block': 'xor',
				'name': selectedVignettes[i]['name'],
				'type': selectedVignettes[i]['type'],
				'background': selectedVignettes[i]['background'],
				'utterances': [selectedVignettes[i]['utterance_or']],
				'questions': [selectedVignettes[i]['control_xor'],
					selectedVignettes[i]['question_xor']]
			});
		}

		// shuffle the blocks
		for (var i = 0; i < blocksOrder.length; i++) {
			var temp = blocks[blocksOrder[i]];

			temp = shuffleComb(temp);
			final.push(temp);
		}

		return final;
	};

	// exp instance
	exp.data = createExp();

	exp.addResponse = function(blockIndex, vignetteIndex, responses) {
		exp.data[blockIndex][vignetteIndex].response = responses;
	};

	// function that collects the subject's info (language, difficulty, comments, etc)
	exp.addSubjData = function(info) {
		exp.subjData = info;
	};

	// functions that converts the data into JSON
	exp.getJSON = function() {
		return JSON.stringify({
			"results": exp.data,
			"subjectInfo": exp.subjData
		});
	};

	return exp;
};