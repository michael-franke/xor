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

	// selects 8 vignettes each one of different type
	// returns a list of objects, each object is 1 vignette
	var selectVignettes = function() {
		var selected = [];
		// keeps track of what story types have been chosen
		var types = [];

		// shuffle the items in vignettes (items.js)
		vignettes = shuffleComb(vignettes);
		
		// makes sure vignettes of the same type don't end up in selected
		for (var i = 1; i < vignettes.length; i++) {
			if (types.indexOf(vignettes[i]['type']) === -1) {
				// put all control questions in a list				
				var control_questions = [
						vignettes[i]['test_true1'],
						vignettes[i]['test_true2'],
						vignettes[i]['test_false1'],
						vignettes[i]['test_false2'],
						vignettes[i]['test_uncertain1'],
						vignettes[i]['test_uncertain2']];

				// shuffle the control questions and take the first 4
				control_questions = shuffleComb(control_questions);

				selected.push({
					name: vignettes[i]['name'],
					type: vignettes[i]['type'],
					background: vignettes[i]['background'],
					utterance_or: vignettes[i]['utterance_or'],
					utterance_disj1: vignettes[i]['utterance_disj1'],
					utterance_disj2: vignettes[i]['utterance_disj2'],
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

		return selected;
	};

	// generates order of blocks, xor is always last
	var generateBlocksOrder = function() {
		blocks = ['rel', 'comp', 'pri'];

		blocksOrder = shuffleComb(blocks);
		blocksOrder.push('xor');

		return blocksOrder;
	};


	exp.data = function() {
		var selectedVignettes = selectVignettes();
		var blocksOrder = generateBlocksOrder();

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
				'background': selectedVignettes[i]['background'],
				'question': selectedVignettes[i]['question_rel'],
				'control': selectedVignettes[i]['control_rel']
			});
			blocks['comp'].push({
				'block': 'comp',
				'name': selectedVignettes[i]['name'],
				'background': selectedVignettes[i]['background'],
				'question': selectedVignettes[i]['question_comp'],
				'control': selectedVignettes[i]['control_comp']
			});
			blocks['pri'].push({
				'block': 'pri',
				'name': selectedVignettes[i]['name'],
				'background': selectedVignettes[i]['background'],
				'question1': selectedVignettes[i]['question_pri1'],
				'question2': selectedVignettes[i]['question_pri2'],
				'control': selectedVignettes[i]['control_pri']
			});
			blocks['xor'].push({
				'block': 'xor',
				'name': selectedVignettes[i]['name'],
				'background': selectedVignettes[i]['background'],
				'question': selectedVignettes[i]['question_xor'],
				'utterance': selectedVignettes[i]['utterance_or'],
				'control': selectedVignettes[i]['control_xor']
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

	return exp;
};