---
output:
  pdf_document: default
  html_document: default
---
# Exclusive 'Or': what matters?

Our goal is to get insights into the factors that determine the strength/availability of exclusive readings of 'or'. Textbook accounts (Gricean, neo-Gricean or grammatical) see a role for relevance, and Gricean accounts would also predict that presumptions about the speaker's competence matter. Another possibility is that exclusive readings arise from exhaustifying each individual disjunct. Integrative or holistic approaches (that could be built on top of Gricean, grammaticalist or exhaustification-based accounts) would also acknowledge a role of prior expectations.

Much theoretical work tacitly assumes that exclusive readings of 'or' are scalar implicatures, arising from comparison of 'or' with 'and' and that exclusive readings are readily available. We want to put this received wisdom to the test. Our working hypothesis, to be tested here, is that various contextual factors matter to the availability of exclusive readings.

Previous experimental work on exclusive 'or' has almost entirely focused on recording truth-judgements of disjunctive sentences with critical conditions comprised of situations in which a corresponding conjunctive sentence would be true. This is an arguably unnaturally artificial test of disjunctive sentences, as they usually suggest some form of speaker uncertainty. We would therefore like to present short contexts for utterances of disjunction so as to manipulate different factors that different theoretical positions would emphasize as more or less relevant:

1. **relevance** : how likely is it that the listener is interested in whether both disjuncts are true
2. **competence** : how likely is it that the speaker knows whether both disjuncts are true
3. **prior** : how likely is it *a priori* (from the point of view of the interpreter/observer of a dialogue) that given that one disjunct is true, the other is also true
4. **exhaustivity** : how strongly would an utterance of just one disjunct convey that the other disjunct is not true


## Experiment 1: XOr, RelCompPri

### How does the material look like? ###

We consider 16 different items, as given in XOR_items.js. An **item** consists of 7 different pieces of important information:

1. a **name**
2. a **pre-classification** into high/low relevance/competence/prior
3. a **background story**
4. three types of **utterances**:
	1. "or" 
	2. "1st disjunct only"
	3. "2nd disjunct only"
5. four **factor questions**:
	1. relevance
	2. competence
	3. prior base rate
	4. exhaustive reading of single disjuncts
		- prior and exhaustive conditions come in pairs: one for each disjunct 
6. two **xor questions**:
	1. whether xor state is likely given utterance
	2. whether xor reading is likely intended by utterance
7. three **control questions** with different expected answers:
	1. true
	2. false
	3. uncertain
		
To begin with, we are interested only in "or" utterances and ignore factor question "exhaustivity". We also ignore, the second XOR question (about intended meaning) for the time being. There are then 16 **items**, each with 4 **relevant questions** (three factor questions, one xor question), making a total of 16*4 = 64 different **conditions** that we would like to test in Experiment 1. 

### Displays in single trials ###

A **trial** consists of an item from our list of 16, together with one random control question and one relevant question ('relevance', 'prior', 'competence' or 'xor') for that item. 

Concretely: on each trial subjects see the following pieces of information, all center screen, horizontally arranged and set apart from each other:

1. background story
2. 'or' utterance (if the relevant question is an "xor" question)
3. a statement to rate (which one depends on the condition)
4. a block consisting of
	1. a question to answer ("How likely is statement true?")
	2. a horizontal slider with labels *certainly false* and *certainly true*
	3. a button "next" (that only works if the slider has been used, as usual)

The first question to be displayed is a random control question (for the relevant item). If that is answered, it disappears and a random test question appears (relevance, competence, prior or 'xor').

Moreover, 'prior' questions come in pairs, and we want to ask both 'prior' questions, one after another. So, all trials contain 2 questions (control and test), except the 'prior' trials, which contain 3 subsequent questions (control, one prior, another prior).

### Procedure ###

All 16 items also have a **type** in XOR_items.js, which is just coding our expectations about the answers to the factor questions. There are 8 different item types, and 2 exemplars per item type. 

Each subject sees 8 items, each one of a different type. (Random sample of each type.)

Each subject answers each relevant question (relevance, competence, prior, xor) for all of the 8 items selected for this subject.

Each question type (relevance, competence, prior, xor) consistitutes a **block**. All 8 items will be presented in one block (e.g. question type 'relevance'), then the next (e.g., sentence type 'competence'), etc.  In each block the presentation of 8 items is a new random shuffle. Blocks are presented at random, but the 'xor' block is always the last.

Example:

- Jay starts the experiment
- we assign to Jay 8 items from our list, one for each type
- we shuffle the three blocks 'relevance', 'prior', 'competence' for Jay (block 'xor' is always last)
- for each item, we assign a random sample of four different control questions (to be used in each block, so that no control question occurs twice)
- we tell Jay that there will be four blocks
- Jay starts with the first block; let's say it is 'prior'
- Jay now sees all 8 items in a random shuffle
- for each item, Jay first answers the first control question associated with that item (because we are in the first block)
- for each item, Jay then answers the 'prior' questions (one after the other)
- after the first block, we tell participants that we will now ask a different question about the same vignettes
- Jay starts the second block; let's say it is 'competence'
- Jay sees the same 8 vignettes in a new random shuffle
- for each item, Jay first sees the second control question for that item
- for each item, Jay then sees the 'competence' question
- ....


### Participants ###

We want to test XXX subjects, and we will pay them X.


### Coding of results ###

All slider-bar ratings will be coded as reals in [0;1], as usual.

Please output all relevant information about each item (name, type, relevance, competence, prior) for convenience.

Please record block number, block type, and trial (within block 1-8) for each item.

### Further TODO:

- add three new control questions to each item (one true, one false, one uncertain)

<!--## Planned analysis for data from Experiment 1 ##

First, prepare data for analysis as follows. For trial for a prior condition, take the mean of the two slider judgements as the single "prior" factor. This is crude, but we need to be practical. 

We should then check for collinearity among factor conditions. In the best case, our items are so that prior, rel and comp are no strongly correlated. Otherwise, we may have a problem and do something about this. (???) 

Our data should then look like this:

workerID | item         | xor | prior | rel | comp
---------|--------------|-----|-------|-----|-----
1        | Danny's fish | 0.3 | 0.42  | 0.1 | 0.9
1        | Jimmy's trip | 0.2 | 0.66  | 0.5 | 0.3
...      | ...	   		 | ... | ...   | .. | ...

We would like to run (something possibly more complicated like)

    lm(xor ~ prior * rel * comp)
    
and ask for significance of all these factors. Use mixed effects structure ...

Different (dummy) theoretical positions would make different predictions about what the most important factor contributing to strength of xor-readings are. Maybe something like:

- **hardliner grammaticalism**: rel
- **textbook Grice**: comp + rel
- **probabilistic pramgatics**: prior + comp(?) + rel 

??????-->












