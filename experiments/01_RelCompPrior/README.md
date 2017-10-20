# Exclusive disjunction experiment

The goal of this study is to get insights into the factors that determine the strength/availability of exclusive readings of 'or'.


## Cloning and running the project

This project uses the following dependencies:

* [jQuery][1]
* [Mustache templates][2]


After cloning the repo, run `npm install` from the main directory to install the dependencies. Npm is a package manager for JS. If you do not have it installed on your machine, you can follow the instructions on [their website][3].

To see the website, open `index.html` in your browser.


## Design

Each participant sees 8 vignettes and 2 or 3 statements connected to the stories. The participants indicate how truthful the statements are using an adjustable slider.

The experiment is divided into 4 blocks for each factor. Each block consists of the same 8 vignettes in random order, however, the statements that need to be rated are different.

You can find more information about the experiment design in info/exp_design.md


## Experiment initialisation

The information about the vignettes is in `js/vignettes.js`.

Each viginette is an object that contains all the info needed to generate the experiment (background story, statements, control statements, utterances and so on).

There are 16 vignettes overall, two for every type.

The code that generates the experiment is in `js/exp.js`. What it does:
1) Randomly picks 8 vignettes of different type form `js/vignettes.js`.
2) Randomly picks 4 control questions (out of 6) for each vignette.
3) the order of the first 3 blocks is decided at random (relevance, competence, prior prob.). xor is always last.
4) the vignettes in each block are shuffled

Every time the website page is refreshed, the experiment is initialised.
The generated experiment can be seen by typing `rcp.exp.data` in the browser console.


## Views

- introdiction
	- general information
	- legal information

- instructions
	- instrustions
	- sample vignette with tips

- begin experiment
	- button to proceed to exp

- trial
	- background story, utterances if any, statements and slider

- pause
	- says the block is over and a new one is about to start

- questionnaire
	- form with post questionnaire questions

- thanks
	- button that sends the data to mturk's servers


## Files

`index.html` - contains the templates that the `js/views.js` fills

`js/*` - all the js files
- `js/exp.js` - knows how to create the experiment (using the info from `js/vignettes.js`)
- `js/views.js` - creates the views (i.e. introduction view, trial view, thanks view..)
- `js/main.js`  - sends data from exp.js to the views and the opposite, handles the views,  creates an actual experiment   
- `js/vignettes.js` - contains the stories
- `js/sample.js` - contains sample vignette (similar to js/vignettes.js)

`images/*` - all the images

`css/style.css` - some styles that make the website pretty

`info/*` - more info about the experiment


[1]: https://jquery.com/ "jQuery"
[2]: https://github.com/janl/mustache.js "Mustache"
[3]: https://www.npmjs.com/ "npm"