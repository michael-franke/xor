# Exclusive disjunction experiment

The goal of this study is to get insights into the factors that determine the strength/availability of exclusive readings of 'or'.


## Cloning and running the project

This project uses the following dependencies:

* [jQuery][1]
* [Mustache templates][2]


After cloning the repo, run `npm install` from the main directory to install the dependencies. Npm is a package manager for JS. If you do not have it installed on your machine, you can follow the instructions on [their website][3].

To see the website, open `index.html` in your browser.


## Design

Each participant sees 8 vignettes and 2 or 3 statements connected to them. The participants indicate how truthful the statements are using an adjustable slider.

The experiment is divided into 4 blocks for each factor. Each block consists of the same 8 vignettes displayed in random order, however, the statements that need to be rated are different.

You can find more information about the experiment design in `info/exp_design.md`


## Experiment initialisation

The information about the vignettes is in `js/vignettes_or.js` and `js/vignettes_some.js`.

Each viginette is an object that contains all the info needed to generate the experiment (background story, statements, control questions, utterances and so on).

There are 16 vignettes overall, two for every type.

The code that generates the experiment is in `js/exp.js`. What it does:
1) Randomly picks 4 vignettes of different type form `js/vignettes_or.js` and 4 from `vignettes_some.js`. The 8 chosen vignettes are all of different type.
2) Randomly picks 4 control questions (out of 6) for each vignette.
3) the order of the first 3 blocks is decided at random (relevance, competence, prior prob.). xor is always last.
4) the vignettes in each block are shuffled so that in every block they are shown in different order.

Every time the page is loaded, the experiment is initialised.
The generated data for each experiment can be seen by typing `rcp.exp.data` in the browser console.


## Views

- introdiction
	- general information
	- legal information

- instructions
	- instrustions

- sample
	- sample vignette with tips

- begin experiment
	- button to proceed to exp

- trial
	- background story, utterances if any, statements and slider

- pause
	- says the block, gives instructions for the next block

- questionnaire
	- form with post questionnaire questions

- thanks
	- button that sends the data to mturk's servers


## Files

`index.html` - contains the templates that the `js/views.js` fills

`js/*` - all the js files
- `js/exp.js` - creates the experiment (using the info from `js/vignettes_or.js` and `vignettes_some.js`)
- `js/views.js` - creates the views (i.e. introduction view, trial view, thanks view..)
- `js/main.js`  - sends data from exp.js to the views and the opposite, handles the views,  initialises experiment   
- `js/vignettes_or.js` - contains the 'or' stories
- `js/vignettes_some.js` - contains the 'some' stories
- `js/sample.js` - contains a sample vignette used in sample view

`images/*` - all the images

`css/style.css` - some styles that make the website pretty

`info/*` - more info about the experiment


[1]: https://jquery.com/ "jQuery"
[2]: https://github.com/janl/mustache.js "Mustache"
[3]: https://www.npmjs.com/ "npm"