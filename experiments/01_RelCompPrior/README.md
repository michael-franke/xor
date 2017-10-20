# Exclusive disjunction experiment

The goal of this study is to get insights into the factors that determine the strength/availability of exclusive readings of 'or'.


## Design

Each participant sees 8 vignettes and 2 or 3 statements connected to the stories. The participants indicate how truthful the statements are using an adjustabel slider.

The experiment is divided into 4 blocks for each factor. Each block consists of the same 8 vignettes in random order, however the statements that need to be rated are different.


## Exp Initialisation

The information about the vignettes is in js/vignettes.js.

Each viginette is an object that contains all the info needed to generate the experiment (background story, statements, control statements, utterances and so on).

There are 16 vignettes overall, two for every type.

The code that generates the experiment is in js/exp.js

What it does is:
1) 8 vignettes of different type are picked at random.
2) For each vignette 4 control questions (out of 6) are picked at random.
3) the order of the first 3 blocks is decided at random (relevance, competence, prior prob.). xor is always last.
4) the vignettes in each block are shuffled

Every time the page is refreshed, a new experiment is generated.
The generated experiment can be seen by typing rcp.exp.data in the browser console.


## File structure

js/exp.js - creates the experiment (using info from js/vignettes.js)
js/views.js - creates the views (i.e. introduction view, trial view, thanks view..)
js/main.js - sends data from exp.js to the views and the opposite
		   - handles the views
		   - creates an actual experiment
js/vignettes.js - contains the stories
js/sample.js - contains sample vignette (similar to js/vignettes.js)

css/style.css - some styles that make the website pretty

index.html - contains the templates
