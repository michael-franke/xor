var items = [
   {"name"          : "Mrs Gibbs' worry",
   "author"         : "micha",
   "thoughts"       : "",
   "type"           : "hhh",
   "relevance"      : "1",
   "competence"     : "1",
   "prior"          : "1",
   "background"     : "Mrs Gibbs is worried about her husband's health. Her friend Cindy, who is a waitress at a local restaurant, served Mrs Gibbs' husband yesterday.",
   "utterance_or"   : "Cindy says to Mrs Gibbs: 'Yesterday your husband had a steak or a beer.'",
   "utterance_disj1": "Cindy says to Mrs Gibbs: 'Yesterday your husband had a steak.'",
   "utterance_disj2": "Cindy says to Mrs Gibbs: 'Yesterday your husband had a beer.'",
   "question_rel"   : "It is important for Mrs Gibbs to know whether Mr Gibbs had both a steak and a beer.",
   "question_comp"  : "Cindy knows whether Mr Gibbs had both a steak and a beer.",
   "question_pri1"  : "If Mr Gibbs had a steak, it is likely that he also had a beer.",
   "question_pri2"  : "If Mr Gibbs had a beer, it is likely that he also had a steak.",
   "question_xor"   : "From what Cindy said we may conclude that Mr Gibbs did not have both a steak and a beer.",
   "question_xorI"  : "Cindy wants to convey that Mr Gibbs did not have both a steak and a beer.",
   "question_exh1"  : "From what Cindy said we may conclude that Mr Gibbs did not have a beer as well.",
   "question_exh2"  : "From what Cindy said we may conclude that Mr Gibbs did not have a steak as well.",
   "test_true"      : "Mrs Gibbs did not accompany her husband when Cindy served him.",
   "test_false"     : "Mrs Gibbs is worried about Cindy's health.",
   "test_uncertain" : "Cindy is secretly in love with Mrs Gibbs' husband."
  },

  {"name"           : "Mrs Sanders' son",
   "author"         : "micha",
   "thoughts"       : "Bob: The verb 'reassured' suggests a non-conjunctive interpretation.",
   "type"           : "hhl",
   "relevance"      : "1",
   "competence"     : "1",
   "prior"          : "0",
   "background"     : "During summer camp, every student was allowed at most one main dish for lunch. But some students queued up twice. Mrs Sanders was with her son Ted during the whole lunch break yesterday. A teacher approaches Mrs Sanders to find out how her son behaved during lunch.",
   "utterance_or"   : "Mrs Sanders says to the teacher: 'Ted had pizza or pasta yesterday.'",
   "utterance_disj1": "Mrs Sanders says to the teacher: 'Ted had pizza yesterday.'",
   "utterance_disj2": "Mrs Sanders says to the teacher: 'Ted had pasta yesterday.'",
   "question_rel"   : "It is important for the teacher to know whether Ted had both pizza and pasta.",
   "question_comp"  : "Mrs Sanders knows whether Ted had both pizza and pasta.",
   "question_pri1"  : "If Ted had pizza, it is likely that he also had pasta.",
   "question_pri2"  : "If Ted had pasta, it is likely that he also had pizza.",
   "question_xor"   : "From what Mrs Sanders said we may conclude that Ted did not have both pizza and pasta.",
   "question_xorI"  : "Mrs Sanders wanted to convey that Ted did not have both pizza and pasta.",
   "question_exh1"  : "From what Mrs Sanders said we may conclude that Ted did not have pasta as well.",
   "question_exh2"  : "From what Mrs Sanders said we may conclude that Ted did not have pizza as well.",
   "test_true"      : "The teacher is trying to find out who queued up twice.",
   "test_false"     : "Ted is Mrs Sanders' husband.",
   "test_uncertain" : "Mrs Sanders had pasta for lunch yesterday."
  },
  {"name"           : "Brad's clothes",
   "author"         : "micha",
   "thoughts"       : "Bob: Is the conjunction relevant? -> Micha: I thought yes, because just one piece of new clothing would not make him look much less shabby.",
   "type"           : "hlh",
   "relevance"      : "1",
   "competence"     : "0",
   "prior"          : "1",
   "background"     : "Brad is notorious for his shabby clothes. His friends Gina and Mandy make frequent jokes about it, much to Brad’s distress. Gina heard that he finally went shopping the other day.",
   "utterance_or"   : "Gina tells Mandy: 'Brad bought a sweater or a pair of jeans.'",
   "utterance_disj1": "Gina tells Mandy: 'Brad bought a sweater.'",
   "utterance_disj2": "Gina tells Mandy: 'Brad bought a pair of jeans.'",
   "question_rel"   : "It is important for Mandy to know whether Brad bought both a sweater and a pair of jeans.",
   "question_comp"  : "Gina knows whether Brad bought both a sweater and a pair of jeans.",
   "question_pri1"  : "If Brad bought a sweater, it is likely that he also bought a pair of jeans.",
   "question_pri2"  : "If Brad bought a pair of jeans, it is likely that he also bought a sweater.",
   "question_xor"   : "From what Gina said we may conclude that Brad did not buy both a sweater and a pair of jeans.",
   "question_xorI"  : "Gina wants to convey that Brad did not buy both a sweater and a pair of jeans.",
   "question_exh1"  : "From what Gina said we may conclude that Brad did not buy pair of jeans as well.",
   "question_exh2"  : "From what Gina said we may conclude that Brad did not buy a sweater as well.",
   "test_true"      : "Brad is not happy about the fact that his friends make jokes about his shabby clothes.",
   "test_false"     : "Gina and Mandy accompanied Brad on his shopping trip.",
   "test_uncertain" : "Mandy feels attracted to Brad."
  },
  {"name"           : "Carl's party",
   "author"         : "micha",
   "thoughts"       : "Bob: Is the conjunction relevant? -> Micha: my intuition is that Carl's wife would care to know, even if dancing with only one is already bad.",
   "type"           : "hll",
   "relevance"      : "1",
   "competence"     : "0",
   "prior"          : "0",
   "background"     : "Many people came to Carl’s garden party yesterday, including his ex-wives Sue and Mary. It was terribly crowded everywhere. John helped out in the kitchen where it was much more quiet during most of the evening.",
   "utterance_or"   : "Afterwards John told Carl’s wife: 'Carl danced passionately with Sue or Mary.'",
   "utterance_disj1": "Afterwards John told Carl’s wife: 'Carl danced passionately with Sue.'",
   "utterance_disj2": "Afterwards John told Carl’s wife: 'Carl danced passionately with Mary.'",
   "question_rel"   : "It is important for Carl's wife to know whether Carl danced passionately with both Sue and Mary.",
   "question_comp"  : "John knows whether Carl danced passionately with both Sue and Mary.",
   "question_pri1"  : "If Carl danced passionately with Sue, it is likely that he also danced passionately with Mary.",
   "question_pri2"  : "If Carl danced passionately with Mary, it is likely that he also danced passionately with Sue.",
   "question_xor"   : "From what John said we may conclude that Carl did not dance passionately with both Sue and Mary.",
   "question_xorI"  : "John wanted to convey that Carl did not dance passionately with both Sue and Mary.",
   "question_exh1"  : "From what John said we may conclude that Carl did not dance passionately with Mary as well.",
   "question_exh2"  : "From what John said we may conclude that Carl did not dance passionately with Sue as well.",
   "test_true"      : "John did not spend much time outside.",
   "test_false"     : "John and Carl, the hosts, are a gay couple.",
   "test_uncertain" : "Carl's wife liked the music very much."
  },  
  {"name"           : "Tony's clubbing",
   "author"         : "micha",
   "thoughts"       : "Bob: Not sure whether 'test_false' is really false or rather uncertain.",
   "type"           : "lhl",
   "relevance"      : "0",
   "competence"     : "1",
   "prior"          : "0",
   "background"     : "Tony loves to dance to electronic music, preferably Techno. The simpler and more monotonic, the better. He contemplates going to club Macabre tonight, but he has no idea what music they play. He phones his friend Rob who occasionally works at club Macabre as a bartender.",
   "utterance_or"   : "Rob tells Tony: 'They play Jazz or Metal tonight.'",
   "utterance_disj1": "Rob tells Tony: 'They play Jazz tonight.'",
   "utterance_disj2": "Rob tells Tony: 'They play Metal tonight.'",
   "question_rel"   : "It is important for Tony to know whether they play both Jazz and Metal tonight.",
   "question_comp"  : "Rob knows whether they play both Jazz and Metal at the club tonight.",
   "question_pri1"  : "If they play Jazz at the club tonight, it is likely that they also play Metal.",
   "question_pri2"  : "If they play Metal at the club tonight, it is likely that they also play Jazz.",
   "question_xor"   : "From what Rob said we may conclude that they do not play both Jazz and Metal tonight.",
   "question_xorI"  : "Rob wanted to convey that they do not play both Jazz and Metal tonight.",
   "question_exh1"  : "From what Rob said we may conclude that they do not play Metal as well.",
   "question_exh2"  : "From what Rob said we may conclude that they do not play Jazz as well.",
   "test_true"      : "Techno is quite different from Jazz and from Metal.",
   "test_false"     : "Tony has to work at club Macabre tonight.",
   "test_uncertain" : "Rob is a big fan of Techno music as well."
  },
  {"name"           : "Joshua's delay",
   "author"         : "micha",
   "thoughts"       : "Bob: Is it likely to both have lunch and do homework? -> Micha: added information that the parents are strict, hope that pushes the likelihood, but yes, not very strong item. Bob: Maybe add 'both' to question_rel and question_comp",
   "type"           : "llh",
   "relevance"      : "0",
   "competence"     : "0",
   "prior"          : "1",
   "background"     : "Kevin, Cory and Joshua are 7-year-olds from the same neighborhood. They are friends but argue a lot. Yesterday Joshua, who has very strict parents, was later than usual to arrive at their hang-out. Kevin thinks that Joshua doesn’t like to play with them anymore.",
   "utterance_or"   : "Cory says to Kevin: 'Joshua had to eat lunch or do his homework.'",
   "utterance_disj1": "Cory says to Kevin: 'Joshua had to eat lunch.'",
   "utterance_disj2": "Cory says to Kevin: 'Joshua had to do his homework.'",
   "question_rel"   : "It is important for Kevin to know whether Joshua had to both eat lunch and do his homework.",
   "question_comp"  : "Cory knows whether Joshua had to both eat lunch and do his homework.",
   "question_pri1"  : "If Joshua had to do his homework, it is likely that he also had to eat lunch.",
   "question_pri2"  : "If Joshua had to do eat lunch, it is likely that he also had to do his homework.",
   "question_xor"   : "From what Cory said we may conclude that Joshua did not have to both eat lunch and do his homework.",
   "question_xorI"  : "Cory wanted to convey that Joshua did not have to both eat lunch and do his homework.",
   "question_exh1"  : "From what Cory said we may conclude that Joshua did not have to do his homework as well.",
   "question_exh2"  : "From what Cory said we may conclude that Joshua did not have to eat lunch as well.",
   "test_true"      : "Kevin and Cory expected Joshua to arrive earlier.",
   "test_false"     : "Kevin, Cory and Joshua are brothers.",
   "test_uncertain" : "Kevin, Cory and Joshua do not like to hang out with girls."
  },
  {"name"           : "Jimmy's trip",
   "author"         : "micha",
   "thoughts"       : "Bob: Is it unlikely to visit both the Statue of Liberty and the Empire State Building?",
   "type"           : "lll",
   "relevance"      : "0",
   "competence"     : "0",
   "prior"          : "0",
   "background"     : "Jimmy skipped school to go on a day-trip to New York City last week. Having to be back in the afternoon, he barely had one hour to spend in the city. Jimmy's younger brother, who is very talkative even if he doesn't know what he is talking about, told the neighbors about the trip afterwards.",
   "utterance_or"   : "Jimmy's younger brother told the neighbors: 'Jimmy visited the Statue of Liberty or the Empire State Building.'",
   "utterance_disj1": "Jimmy's younger brother told the neighbors: 'Jimmy visited the Statue of Liberty.'",
   "utterance_disj2": "Jimmy's younger brother told the neighbors: 'Jimmy visited the Empire State Building.'",
   "question_rel"   : "It is important for the neighbors to know whether Jimmy visited both the Statue of Liberty and the Empire State Building.",
   "question_comp"  : "Jimmy's brother knows whether Jimmy visited both the Statue of Liberty and the Empire State Building.",
   "question_pri1"  : "If Jimmy visited the Statue of Liberty, it is likely that he also visited the Empire State Building.",
   "question_pri2"  : "If Jimmy visited the Empire State Building, it is likely that he also visited the Statue of Liberty.",
   "question_xor"   : "From what the brother said we may conclude that Jimmy did not visit both the Statue of Liberty and the Empire State Building.",
   "question_xorI"  : "Jimmy's brother wanted to convey that Jimmy did not visit both the Statue of Liberty and the Empire State Building.",
   "question_exh1"  : "From what the brother said we may conclude that Jimmy did not visit the Empire State Building as well.",
   "question_exh2"  : "From what the brother said we may conclude that Jimmy did not visit the Statue of Liberty as well.",
   "test_true"      : "Jimmy had to rush to be back home and did not have much time to spend in the city.",
   "test_false"     : "Jimmy went on a school trip to New York City.",
   "test_uncertain" : "Jimmy had told his friends about his plans to visit New York City before."
  },
  {"name"           : "Danny's racket",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "hhh",
   "relevance"      : "1",
   "competence"     : "1",
   "prior"          : "1",
   "background"     : "Danny and Alex reserved a squash court but Alex still has to buy a racket and a pair of shoes. Danny is talking to Alex's girlfriend Jill who just went to the sports store with him.",
   "utterance_or"   : "Jill says to Danny: 'Alex bought a racket or a pair of shoes.'",
   "utterance_disj1": "Jill says to Danny: 'Alex bought a racket.'",
   "utterance_disj2": "Jill says to Danny: 'Alex bought a pair of shoes.'",
   "question_rel"   : "It is important for Danny to know whether Alex bought both a racket and a pair of shoes.",
   "question_comp"  : "Alex's girlfriend knows whether Alex bought both a racket and a pair of shoes.",
   "question_pri1"  : "If Alex bought a racket, it is likely that he also bought a pair of shoes.",
   "question_pri2"  : "If Alex bought a pair of shoes, it is likely that he also bought a racket.",
   "question_xor"   : "From what Alex's girlfriend said we may conclude that Alex did not buy both a racket and a pair of shoes.",
   "question_xorI"  : "Alex's girlfriend wanted to convey that Alex did not buy both a racket and a pair of shoes.",
   "question_exh1"  : "From what Alex's girlfriend said we may conclude that Alex did not buy a pair of shoes as well.",
   "question_exh2"  : "From what Alex's girlfriend said we may conclude that Alex did not buy a racket as well.",
   "test_true"      : "Alex needs to buy some equipment before he can play squash with Danny.",
   "test_false"     : "Danny and Alex went to the sports store together.",
   "test_uncertain" : "Danny and Alex have known each other since high school."
  },
  {"name"           : "Pete's accident",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "hhl",
   "relevance"      : "1",
   "competence"     : "1",
   "prior"          : "0",
   "background"     : "Pete was playing on the schoolyard during lunch break when he fell off the slide. His teacher drove him to the hospital immediately and called Pete's mother from there.",
   "utterance_or"   : "The teacher told Pete's mother: 'Pete broke his arm or his leg.'",
   "utterance_disj1": "The teacher told Pete's mother: 'Pete broke his arm.'",
   "utterance_disj2": "The teacher told Pete's mother: 'Pete broke his leg.'",
   "question_rel"   : "It is important for Pete's mother to know whether Pete broke both his arm and his leg.",
   "question_comp"  : "The teacher knows whether Pete broke both his arm and his leg.",
   "question_pri1"  : "If Pete broke his arm, it is likely that he also broke his leg.",
   "question_pri2"  : "If Pete broke his leg, it is likely that he also broke his arm.",
   "question_xor"   : "From what Pete's teacher said we may conclude that Pete did not break both his arm and his leg.",
   "question_xorI"  : "Pete's teacher wanted to convey that Pete did not break both his arm and his leg.",
   "question_exh1"  : "From what Pete's teacher said we may conclude that Pete did not break his leg as well.",
   "question_exh2"  : "From what Pete's teacher said we may conclude that Pete did not break his arm as well.",
   "test_true"      : "Pete's mother was not there when he fell of the slide.",
   "test_false"     : "Pete was injured while playing in the garden.",
   "test_uncertain" : "Pete's teacher saw him fall off the slide."
  },
  {"name"           : "Gigi's exams",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "hlh",
   "relevance"      : "1",
   "competence"     : "0",
   "prior"          : "1",
   "background"     : "Recently, Gigi took exams in Physics and Chemistry. She studied day and night and even paid for private tutoring. Carrie just heard some rumors from her fellow students.",
   "utterance_or"   : "Carrie tells Gigi's best friend: 'Gigi passed her Physics exam or her Chemistry exam.'",
   "utterance_disj1": "Carrie tells Gigi's best friend: 'Gigi passed her Physics exam.'",
   "utterance_disj2": "Carrie tells Gigi's best friend: 'Gigi passed her Chemistry exam.'",
   "question_rel"   : "It is important for Gigi's best friend to know whether Gigi passed both her Physics exam and her Chemistry exam.",
   "question_comp"  : "Carrie knows whether Gigi passed both her Physics exam and her Chemistry exam.",
   "question_pri1"  : "If Gigi passed her Physics exam, it is likely that she also passed her Chemistry exam.",
   "question_pri2"  : "If Gigi passed her Chemistry exam, it is likely that she also passed her Physics exam.",
   "question_xor"   : "From what Carrie said we may conclude that Gigi did not pass both her Physics exam and her Chemistry exam.",
   "question_xorI"  : "Carrie wanted to convey that Gigi did not pass both her Physics exam and her Chemistry exam.",
   "question_exh1"  : "From what Carrie said we may conclude that Gigi did not pass her Chemistry exam as well.",
   "question_exh2"  : "From what Carrie said we may conclude that Gigi did not pass her Physics exam as well.",
   "test_true"      : "Gigi studied hard to pass her exams.",
   "test_false"     : "Gigi hired a private tutor to help her with her Biology and Chemistry exams.",
   "test_uncertain" : "Gigi aspires to a career in science."
  },
  {"name"           : "Leo's wife",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "hll",
   "relevance"      : "1",
   "competence"     : "0",
   "prior"          : "0",
   "background"     : "Leo is sponsoring a golf tournament. In particular, he provides a luxurious car for any hole-in-one. When Leo arrives at the tournament, his friend Hans comes up to him to tell about the events so far.",
   "utterance_or"   : "Hans tells Leo: 'I heard someone just hit a hole-in-one on the first or second hole.'",
   "utterance_disj1": "Hans tells Leo: 'I heard someone just hit a hole-in-one on the first hole'",
   "utterance_disj2": "Hans tells Leo: 'I heard someone just hit a hole-in-one on the second hole.''",
   "question_rel"   : "It is important for Leo to know whether someone made a hole-in-one on both the first and the second hole.",
   "question_comp"  : "Hans knows whether someone just made a hole-in-one on both the first and the second hole.",
   "question_pri1"  : "If someone made a hole-in-one on the first hole, it is likely that she also made one on the second hole.",
   "question_pri2"  : "If someone made a hole-in-one on the second hole, it is likely that she also made one on the first hole.",
   "question_xor"   : "From what Hans said we may conclude that the player in question didn't make a hole-in-one on both the first and the second hole.",
   "question_xorI"  : "Hans wanted to convey that the player in question didn't make a hole-in-one on both the first and the second hole.",
   "question_exh1"  : "From what Hans said we may conclude that the player in question didn't make a hole-in-one on the second hole as well.",
   "question_exh2"  : "From what Hans said we may conclude that the player in question didn't make a hole-in-one on the first hole as well",
   "test_true"      : "Leo is wealthy.",
   "test_false"     : "Leo is sponsoring a tennis tournament.",
   "test_uncertain" : "Leo is an avid golf player."
  },
  {"name"           : "Chloe's holiday",
   "author"         : "bob",
   "thoughts"       : "Micha added the friend's names to the background story, because otherwise the prior questions are weird, when presented without the utterance. -- Susan bringing lotion and Amelia doing so are likely independent events; that makes the prior question a bit odd. Maybe phrase it unconditionally in case of purported independence.",
   "type"           : "lhh",
   "relevance"      : "0",
   "competence"     : "1",
   "prior"          : "1",
   "background"     : "Chloe is telling her father about her holidays with her two friends Susan and Amelia. Chloe forgot to bring suntan lotion.",
   "utterance_or"   : "Chloe tells her father: 'Susan or Amelia brought some extra suntan lotion I could use.'",
   "utterance_disj1": "Chloe tells her father: 'Susan brought some extra suntan lotion I could use.'",
   "utterance_disj2": "Chloe tells her father: 'Amelia brought some extra suntan lotion I could use.'",
   "question_rel"   : "It is important for Chloe's father to know whether both Susan and Amelia brought some extra suntan lotion.",
   "question_comp"  : "Chloe knows whether both Susan and Amelia brought some extra suntan lotion.",
   "question_pri1"  : "If Susan brought some extra suntan lotion, it is likely that Amelia brought some as well.",
   "question_pri2"  : "If Amelia brought some extra suntan lotion, it is likely that Susan brought some as well.",
   "question_xor"   : "From what Chloe said we may conclude that Susan and Amelia did not both bring some extra suntan lotion.",
   "question_xorI"  : "Chloe wanted to convey that Susan and Amelia did not both bring some extra suntan lotion.",
   "question_exh1"  : "From what Chloe said we may conclude that Amelia did not bring some extra suntan lotion as well.",
   "question_exh2"  : "From what Chloe said we may conclude that Susan did not bring some extra suntan lotion as well.",
   "test_true"      : "Chloe recently got back from holidays.",
   "test_false"     : "Chloe went on holidays with a big group of her friends.",
   "test_uncertain" : "Chloe forgot about bringing some beach towels, too."
  },
  {"name"           : "Lily's husband",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "lhl",
   "relevance"      : "0",
   "competence"     : "1",
   "prior"          : "0",
   "background"     : "Lily is worried that her husband Eric is still drinking despite the doctor's orders. She phones up Eric's drinking buddy Bill who went to a bar with him last night.",
   "utterance_or"   : "Bill tells Lily: 'Your husband drank whisky or vodka.'",
   "utterance_disj1": "Bill tells Lily: 'Your husband drank whisky.'",
   "utterance_disj2": "Bill tells Lily: 'Your husband drank vodka.'",
   "question_rel"   : "It is important for Lily to know whether her husband drank both whisky and vodka.",
   "question_comp"  : "Bill knows whether Eric drank both whisky and vodka.",
   "question_pri1"  : "If Eric drank whisky, it is likely that he drank vodka as well.",
   "question_pri2"  : "If Eric drank vodka, it is likely that he drank whisky as well.",
   "question_xor"   : "From what Bill said we may conclude that Eric did not drink both whisky and vodka.",
   "question_xorI"  : "Bill wanted to convey that Eric did not drink both whisky and vodka.",
   "question_exh1"  : "From what Bill said we may conclude that Eric did not drink vodka as well.",
   "question_exh2"  : "From what Bill said we may conclude that Eric did not drink whisky as well.",
   "test_true"      : "Eric's doctor told him to stop drinking alcohol.",
   "test_false"     : "Eric and Lily went to a bar together last night.",
   "test_uncertain" : "Eric has a problem with his liver for which he has to stop drinking alcohol."
  },
  {"name"           : "Gerald's graduation",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "llh",
   "relevance"      : "0",
   "competence"     : "0",
   "prior"          : "1",
   "background"     : "Nico and Rick are talking about their mutual friend Gerald. Gerald has been studying for ages but Nico heard he recently graduated.",
   "utterance_or"   : "Nico says to Rick: 'His mother or his father attended the ceremony.'",
   "utterance_disj1": "Nico says to Rick: 'His mother attended the ceremony.'",
   "utterance_disj2": "Nico says to Rick: 'His father attended the ceremony.'",
   "question_rel"   : "It is important for Rick to know whether both Gerald's mother and his father attended the ceremony.",
   "question_comp"  : "Nico knows whether both Gerald's mother and his father attended the ceremony.",
   "question_pri1"  : "If Gerald's mother attended the ceremony, it is likely that his father attended as well.",
   "question_pri2"  : "If Gerald's father attended the ceremony, it is likely that his mother attended as well.",
   "question_xor"   : "From what Nico said we may conclude that Gerald's mother and his father did not both attend the ceremony.",
   "question_xorI"  : "Nico wanted to convey that Gerald's mother and his father did not both attend the ceremony.",
   "question_exh1"  : "From what Nico said we may conclude that Gerald's father did not attend the ceremony as well.",
   "question_exh2"  : "From what Nico said we may conclude that Gerald's mother did not attend the ceremony as well.",
   "test_true"      : "Gerald is friends with both Nico and Rick.",
   "test_false"     : "Nico finally graduated after studying for a long time.",
   "test_uncertain" : "Gerald took almost ten years to graduate."
  },
  {"name"           : "Harold's pet",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "lll",
   "relevance"      : "0",
   "competence"     : "0",
   "prior"          : "0",
   "background"     : "Richard and Tom are talking about Harold. Harold has been wanting a pet for a long time but his girlfriend wouldn't let him. Richard heard she finally gave in.",
   "utterance_or"   : "Richard says to Tom: 'Harold bought a cat or a dog.'",
   "utterance_disj1": "Richard says to Tom: 'Harold bought a cat.'",
   "utterance_disj2": "Richard says to Tom: 'Harold bought a dog.'",
   "question_rel"   : "It is important for Tom to know whether Harold bought both a cat and a dog.",
   "question_comp"  : "Richard knows whether Harold bought both a cat and a dog.",
   "question_pri1"  : "If Harold bought a cat, it is likely that he bought a dog as well.",
   "question_pri2"  : "If Harold bought a dog, it is likely that he bought a cat as well.",
   "question_xor"   : "From what Richard said we may conclude that Harold did not buy both a cat and a dog.",
   "question_xorI"  : "Richard wanted to convey that Harold did not buy both a cat and a dog.",
   "question_exh1"  : "From what Richard said we may conclude that Harold did not buy a dog as well.",
   "question_exh2"  : "From what Richard said we may conclude that Harold did not buy a cat as well.",
   "test_true"      : "Harold's girlfriend didn't want a pet in her house before.",
   "test_false"     : "Harold is single.",
   "test_uncertain" : "Harold's girlfriend gave in because Harold kept nagging her about wanting a pet."
  }
];
