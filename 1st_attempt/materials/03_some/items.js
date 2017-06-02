var items = [
   {"name"          : "hotel check",
   "author"         : "micha",
   "thoughts"       : "",
   "type"           : "hhh",
   "relevance"      : "1",
   "competence"     : "1",
   "prior"          : "1",
   "background"     : "Harry's job is to inspect hotels of an international franchise in order to check whether everything is according to the high standards of the organization. He reports to his boss Mr Jaynes after a visit to the San Diego hotel.",
   "utterance_imp"  : "Harry reports to Mr Jaynes: 'Some of the rooms had working air conditioning.'",
   "question_rel"   : "It is important for Mr Jaynes to know whether all of the rooms had working air conditioning.",
   "question_comp"  : "Harry knows whether all of the rooms had working air conditioning.",
   "question_pri"   : "All of the rooms had working air conditioning.",
   "question_priC"  : "If at least some of the rooms had working air conditioning, then all of the rooms had working air conditioning.",
   "question_imp"   : "From what Harry said we may conclude that not all of the rooms had working air conditioning.",
   "question_impI"  : "Harry wants to convey that not all of the rooms had working air conditioning.",
   "test_true"      : "Harry has just inspected the San Diego hotel.",
   "test_false"     : "Mr Jaynes is the manager of the San Diego hotel.",
   "test_uncertain" : "Harry will inspect the Los Angeles hotel next."
  },
  {"name"          : "NBA experts",
   "author"         : "micha",
   "thoughts"       : "this might well receive low scores on relevance, because we ask for relevance to the direct addressee; should we rather ask here whether it is important for Jason Barley's argument or for the spectators at home? I'm inclined to go with the latter",
   "type"           : "hhl",
   "relevance"      : "1",
   "competence"     : "1",
   "prior"          : "0",
   "background"     : "Jason Barley and Richard Trellis are TV experts engaged in a live discussion of the current NBA season which is nearing its end. They are debating about whether Greg Jones should be the Most Valuable Player of the season. Jason Barley thinks so, but Richard Trellis is less convinced.",
   "utterance_imp"  : "Jason Barley says: 'Greg Jones secured victory for his team during the last seconds of some of the decisive playoff matches.'",
   "question_rel"   : "It is important for Richard Trellis to know whether Greg Jones secured victory for his team during the last seconds of all of the decisive playoff matches.",
   "question_comp"  : "Jason Barley knows whether Greg Jones secured victory for his team during the last seconds of all of the decisive playoff matches.",
   "question_pri"  : "Greg Jones secured victory for his team during the last seconds of all of the decisive playoff matches.",
   "question_priC"  : "If Greg Jones secured victory for his team during the last seconds of at least some of the decisive playoff matches, he also did so in all of them.",
   "question_imp"   : "From what Jason Barley said we may conclude that Greg Jones did not secure victory for his team during the last seconds of all of the decisive playoff matches.",
   "question_impI"  : "Jason Barley wants to convey that Greg Jones did not secure victory for his team during the last seconds of all of the decisive playoff matches.",
   "test_true"      : "Greg Jones' team is in the playoffs of this year's NBA season.",
   "test_false"     : "Jason Barley and Richard Trellis have been close friends for almost three decades.",
   "test_uncertain" : "Jason Barley and Greg Jones are on the payroll of the same sports equipment manufacturer."
  },
  {"name"          : "gift unwrapping",
   "author"         : "micha",
   "thoughts"       : "no longer so sure if this is high prior; Leonard may want to unwrap all, but it may be uncertain whether he was allowed to",
   "type"           : "lhh",
   "relevance"      : "0",
   "competence"     : "1",
   "prior"          : "1",
   "background"     : "Leonard celebrated his 5th birthday with his best friends today. All of his friends brought him presents. The presents were given to him while everybody was sitting at the table after a nice piece of chocolate cake. When Suzanne's mother comes to take her daughter home from the party, Leonards's mother tells Suzanne's mother about the party.",
   "utterance_imp"  : "Leonards's mother says: 'Leonard unwrapped some of the presents right away.'",
   "question_rel"   : "It is important for Suzanne's mother to know whether Leonard unwrapped all of the presents right away.",
   "question_comp"  : "Leonard's mother knows whether Leonard unwrapped all of the presents right away.",
   "question_pri"   : "Leonard unwrapped all of the presents right away.",
   "question_priC"  : "If Leonard unwrapped at least some of the presents right away, he unwrapped them all.",
   "question_imp"   : "From what Leonard's mother said we may conclude that Leonard did not unwrap all of the presents right away.",
   "question_impI"  : "Leonard's mother wants to convey that Leonard did not unwrap all of the presents right away.",
   "test_true"      : "Suzanne attended Leonard's birthday party.",
   "test_false"     : "Leonard's mother was abroad and could therefore not attend the birthday party.",
   "test_uncertain" : "There were twelve children at the party."
  },
  {"name"          : "van Gogh exhibition",
   "author"         : "micha",
   "thoughts"       : "",
   "type"           : "lhl",
   "relevance"      : "0",
   "competence"     : "1",
   "prior"          : "0",
   "background"     : "The mayor joins the opening of a new van Gogh exhibition in the city's Museum of Modern Art. The curator welcomes him warmly and gives him a private tour through the exhibition.",
   "utterance_imp"  : "The curator says: 'Some of van Gogh's paintings are among the most valuable paintings in the world.'",
   "question_rel"   : "It is important for the mayor to know whether all of van Gogh's paintings are among the most valuable paintings in the world.",
   "question_comp"  : "The curator knows whether all of van Gogh's paintings are among the most valuable paintings in the world.",
   "question_pri"   : "All of van Gogh's paintings are among the most valuable paintings in the world.",
   "question_priC"  : "If at least some of van Gogh's paintings are among the most valuable paintings in the world, all of them are.",
   "question_imp"   : "From what the curator said we may conclude that not all of van Gogh's paintings are among the most valuable paintings in the world.",
   "question_impI"  : "The curator wants to convey that not all of van Gogh's paintings are among the most valuable paintings in the world.",
   "test_true"      : "The van Gogh exhibition is an important event for the city.",
   "test_false"     : "The curator refused to talk to the mayor.",
   "test_uncertain" : "The mayor is not interested in art exhibitions."
  },
  {"name"          : "Swiss watch protoype testing",
   "author"         : "micha",
   "thoughts"       : "",
   "type"           : "hlh",
   "relevance"      : "1",
   "competence"     : "0",
   "prior"          : "1",
   "background"     : "Mr Tobler works for a Swiss factory which produces luxury watches. Today he ran several tests with a new prototype in order to make sure that it meets the very high requirements on product quality that the company aims for. At this late stage in the project nobody expects any problems. But quality control is very important for the company's image. Mr Tobler's boss Mr Papenhauer is curious about the results and tries to call Mr Tobler but he has just left. Therefore Mr Tobler's apprentice answers the phone. The apprentice has only attended the first half of the testing procedure.",
   "utterance_imp"  : "The apprentice says: 'The prototype passed some of the tests scheduled for today.'",
   "question_rel"   : "It is important for Mr Papenhauser to know whether the prototype passed all of the tests scheduled for today.",
   "question_comp"  : "The apprentice knows whether the prototype passed all of the tests scheduled for today.",
   "question_pri"   : "The prototype will pass all of the tests scheduled for today.",
   "question_priC"  : "If the prototype passed at least some of the tests scheduled for today, it will pass them all.",
   "question_imp"   : "From what the apprentice said we may conclude that the prototype did not pass all of the tests scheduled for today.",
   "question_impI"  : "The apprentice wants to convey that the prototype did not pass all of the tests scheduled for today.",
   "test_true"      : "Torsten Steinmeier is not executing the tests on the prototype himself.",
   "test_false"     : "Testing of the prototype is finished.",
   "test_uncertain" : "The company uses spare parts imported from Malaysia."
  },      
  {"name"          : "gourmet desserts",
   "author"         : "micha",
   "thoughts"       : "",
   "type"           : "lhh",
   "relevance"      : "0",
   "competence"     : "0",
   "prior"          : "1",
   "background"     : "Jeremy is asking his friend Claire for her opinion about the newly opened Gourmet restaurant on 5th Street. Claire has been there twice already and she is very enthusiastic.",
   "utterance_imp"  : "Claire says: 'Some of their desserts are fantastic.'",
   "question_rel"   : "It is important for Jeremy to know whether all of their desserts are fantastic.",
   "question_comp"  : "Claire knows whether all of their desserts are fantastic.",
   "question_pri"   : "All of the restaurant's desserts are fantastic.",
   "question_priC"  : "If at least some of the restaurant's desserts are fantastic, all of them are.",
   "question_imp"   : "From what Claire said we may conclude that not all of the restaurant's desserts are fantastic.",
   "question_impI"  : "Claire wants to convey that not all of the restaurant's desserts are fantastic.",
   "test_true"      : "Jeremy cares about good food.",
   "test_false"     : "Claire is the owner of the restaurant.",
   "test_uncertain" : "Jeremy is madly in love with Claire."
  },      
  {"name"          : "rotten tomatoes",
   "author"         : "micha",
   "thoughts"       : "",
   "type"           : "hll",
   "relevance"      : "1",
   "competence"     : "0",
   "prior"          : "0",
   "background"     : "Ted is a chef at a three star restaurant. He asks his sous chef Gilbert to check today's purchase of fresh produce. Gilbert looks at the first crate of tomatoes, and comes running back.",
   "utterance_imp"  : "Gilbert says: 'Some of the tomatoes are rotten.'",
   "question_rel"   : "It is important for Ted to know whether all of the tomatoes are rotten.",
   "question_comp"  : "Gilbert knows whether all of the tomatoes are rotten.",
   "question_pri"   : "All of the tomatoes are rotten.",
   "question_priC"  : "If at least some of the tomatoes are rotten, all of them are.",
   "question_imp"   : "From what Gilbert said we may conclude that not all of the tomatoes are rotten.",
   "question_impI"  : "Gilbert wants to convey that not all of the tomatoes are rotten.",
   "test_true"      : "Ted is fully dedicated to serving high quality food.",
   "test_false"     : "Gilbert is the cleaning lady.",
   "test_uncertain" : "Gilbert is a former drug addict."
  }, 
  {"name"          : "stand-up comedy show",
   "author"         : "micha",
   "thoughts"       : "",
   "type"           : "lll",
   "relevance"      : "0",
   "competence"     : "0",
   "prior"          : "0",
   "background"     : "Lennard is a very popular stand-up comedian. He is currently on tour. Both shows in Seattle were sold out. 500 tickets were sold for each show. He phones his wife after the second show in Seattle.",
   "utterance_imp"  : "Lennard says: 'Some of the people who came yesterday also came to today's show.'",
   "question_rel"   : "It is important for Lennard's wife to know whether all of the people who came yesterday also came to today's show.",
   "question_comp"  : "Lennard knows whether all of the people who came yesterday also came to today's show.",
   "question_pri"   : "All of the people who came yesterday also came to today's show.",
   "question_priC"  : "If at least some of the people who came yesterday also came to today's show, all of them did.",
   "question_imp"   : "From what Lennard said we may conclude that not all of the people who came yesterday also came to today's show.",
   "question_impI"  : "Lennard wants to convey that not all of the people who came yesterday also came to today's show.",
   "test_true"      : "Lennard is popular in Seattle.",
   "test_false"     : "Lennard is a salesman for karaoke machines.",
   "test_uncertain" : "Lennard is making plans for his early retirement."
  },    
  {"name"           : "tail-donkey blindfold",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "hhl",
   "relevance"      : "1",
   "competence"     : "1",
   "prior"          : "0",
   "background"     : "Grace and Oliver are playing a game of pin the tail on the donkey. Oliver has hung up a large number of pictures of donkeys and Grace has to pin the tail on as many of them as possible while wearing a blindfold. Grace just pinned the last tail. ",
   "utterance_imp"   : "Oliver says: 'You put some of the tails in the right place.'",
   "question_rel"   : "It is important for Grace to know whether she put all of the tails in the right place.",
   "question_comp"  : "Oliver knows whether Grace put all of the tails in the right place.",
   "question_pri"   : "Grace put all of the tails in the right place.",
   "question_priC"  : "If Grace put at least some of the tails in the right place, she also put all of them in the right place.",
   "question_imp"   : "From what Oliver said we may conclude that Grace did not put all of the tails in the right place.",
   "question_impI"  : "Oliver wanted to convey that Grace did not put all of the tails in the right place.",
   "test_true"      : "Grace is unable to see where she has to pin the tails.",
   "test_false"     : "Grace and Oliver are playing charades.",
   "test_uncertain" : "Grace and Oliver live in the same apartment."
  },
  {"name"           : "Star Trek expert quiz",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "hhh",
   "relevance"      : "1",
   "competence"     : "1",
   "prior"          : "1",
   "background"     : "George and Amber are playing a quiz. George gets to ask Amber ten questions on a topic of George's choice. George picked 'Star Trek' as a topic but he does not know Amber is actually a big 'Star Trek' fan. Amber just answered the final question.",
   "utterance_imp"  : "George says: 'You got some of the answers right.'",
   "question_rel"   : "It is important for Amber to know whether she got all of the answers right.",
   "question_comp"  : "George knows whether Amber got all of the answers right.",
   "question_pri"   : "Amber got all of the questions right.",
   "question_priC"  : "If Amber got at least some of the questions right, she also got all of them right.",
   "question_imp"   : "From what George said we may conclude that Amber did not get all of the answers right.",
   "question_impI"  : "George wanted to convey that Amber did not get all of the answers right.",
   "test_true"      : "Amber knows a lot about 'Star Trek'.",
   "test_false"     : "George asked ten questions about 'Star Wars'.",
   "test_uncertain" : "Amber won the game."
  },
  {"name"           : "emails from a broken laptop",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "lll",
   "relevance"      : "0",
   "competence"     : "0",
   "prior"          : "0",
   "background"     : "Kate has problems with her laptop but she needs to let Joshua know she will not be able to make it to their meeting today. Therefore she sends the same email numerous times from different email accounts.",
   "utterance_imp"  : "Later that day, Joshua phones Kate up and says: 'I received some of your emails.'",
   "question_rel"   : "It is important for Kate to know whether Joshua received all of her emails.",
   "question_comp"  : "Joshua knows whether he received all of Kate's emails.",
   "question_pri"   : "Joshua received all of Kate's emails.",
   "question_priC"  : "If Joshua received at least some of Kate's emails, he also received all of them.",
   "question_imp"   : "From what Joshua said we may conclude that he did not receive all of Kate's emails.",
   "question_impI"  : "Joshua wanted to convey that he did not receive all of Kate's emails.",
   "test_true"      : "Kate has difficulties sending emails.",
   "test_false"     : "Kate is working on a desktop computer.",
   "test_uncertain" : "Kate's laptop has a problem with the wifi connection."
  },
  {"name"           : "underage drinking",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "lhl",
   "relevance"      : "0",
   "competence"     : "1",
   "prior"          : "0",
   "background"     : "Edward is in a crowded bar IDing the patrons who are drinking alcohol. There are new laws and if there is even one incident of underage drinking today Edward will close down the bar.",
   "utterance_imp"  : "Later he tells the owner of the bar: 'Some of the patrons drinking alcohol were underage.'",
   "question_rel"   : "It is important for the owner of the bar to know whether all of the patrons drinking alcohol were underage.",
   "question_comp"  : "Edward knows whether all of the patrons drinking alcohol were underage.",
   "question_pri"   : "All of the patrons drinking alcohol are underage.",
   "question_priC"  : "If at least some of the patrons drinking alcohol were underage, all of them were underage.",
   "question_imp"   : "From what Edward said we may conclude that not all of the patrons drinking alcohol were underage.",
   "question_impI"  : "Edward wanted to convey that not all of the patrons drinking alcohol were underage.",
   "test_true"      : "The new laws on underage drinking are very strict.",
   "test_false"     : "The bar can stay open after Edward's visit.",
   "test_uncertain" : "There were underage patrons drinking whiskey."
  },
  {"name"           : "M&M's in the hospital",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "lhh",
   "relevance"      : "0",
   "competence"     : "1",
   "prior"          : "1",
   "background"     : "Henry is in the hospital because he broke his arm in a skiing accident. His aunt Bethany visited him yesterday and brought him some fruit and a bag of M&Ms.",
   "utterance_imp"  : "Later, Henry tells his father: 'I liked some of the M&Ms.'",
   "question_rel"   : "It is important for Henry's father to know whether Henry liked all of the M&Ms.",
   "question_comp"  : "Henry knows whether he liked all of the M&Ms.",
   "question_pri"   : "Henry liked all of the M&Ms.",
   "question_priC"  : "If Henry liked at least some of the M&Ms, he also liked all of them.",
   "question_imp"   : "From what Henry said we may conclude that he did not like all of the M&Ms.",
   "question_impI"  : "Henry wanted to convey that he did not like all of the M&Ms.",
   "test_true"      : "Henry was involved in a skiing accident.",
   "test_false"     : "Aunt Bethany gave Henry only candy.",
   "test_uncertain" : "Aunt Bethany travelled a long distance to visit Henry in the hospital."
  },
  {"name"           : "schizophrenia talk",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "hll",
   "relevance"      : "1",
   "competence"     : "0",
   "prior"          : "0",
   "background"     : "Lucy has to give a talk in front of a big audience of psychologists. She is going to criticize one of the dominant theories about schizophrenia. Afterwards, Jacob, who was in the audience, chatted with his neighbours.",
   "utterance_imp"   : "He tells Lucy: 'Some of the people enjoyed your talk.'",
   "question_rel"   : "It is important for Lucy to know whether all of the people enjoyed her talk.",
   "question_comp"  : "Jacob knows whether all of the people enjoyed Lucy's talk.",
   "question_pri"   : "All of the people enjoyed Lucy's talk.",
   "question_priC"  : "If at least some of the people enjoyed Lucy's talk, all of them did.",
   "question_imp"   : "From what Jacob said we may conclude that not all of the people enjoyed Lucy's talk.",
   "question_impI"  : "Jacob wanted to convey that not all of the people enjoyed Lucy's talk.",
   "test_true"      : "Jacob works as a psychologist.",
   "test_false"     : "Lucy's talk is unlikely to stir much commotion.",
   "test_uncertain" : "Lucy is really nervous about the talk. "
  },
  {"name"           : "Harvard admission exams",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "hlh",
   "relevance"      : "1",
   "competence"     : "0",
   "prior"          : "1",
   "background"     : "Ethan is hoping to go to Harvard so he has to do well on his final exams. Fortunately he has had a month of spare time during which he studied day and night. His friend Eleanor just heard rumors from her fellow students. ",
   "utterance_imp"  : "She says: 'You passed some of the exams.'",
   "question_rel"   : "It is important for Ethan to know whether he passed all of the exams.",
   "question_comp"  : "Eleanor knows whether Ethan passed all of the exams.",
   "question_pri"   : "Ethan passed all of the exams.",
   "question_priC"  : "If Ethan passed at least some of the exams, he also passed all of them.",
   "question_imp"   : "From what Eleanor said we may conclude that Ethan did not pass all of the exams.",
   "question_impI"  : "Eleanor wanted to convey that Ethan did not pass all of the exams.",
   "test_true"      : "Ethan is trying to get into an Ivy League university.",
   "test_false"     : "Ethan failed to study intensively for his exams.",
   "test_uncertain" : "Eleanor passed some of her exams."
  },
  {"name"           : "Martha's cookies",
   "author"         : "bob",
   "thoughts"       : "",
   "type"           : "llh",
   "relevance"      : "0",
   "competence"     : "0",
   "prior"          : "1",
   "background"     : "Martha received a couple of chocolate cookies even though neither she nor her husband eats chocolate. This evening the two of them are going out for dinner leaving Emily to babysit their children. Emily is a voracious eater and chocolate lover. When she comes home, Martha sees some crumbs on the couch.",
   "utterance_imp"   : "She says to her husband: 'Emily ate some of the cookies.'",
   "question_rel"   : "It is important for Martha's husband to know whether Emily ate all of the cookies.",
   "question_comp"  : "Martha knows whether Emily ate all of the cookies.",
   "question_pri"   : "Emily ate all of the cookies.",
   "question_priC"  : "If Emily ate at least some of the cookies, she also ate all of them.",
   "question_imp"   : "From what Martha said we may conclude that Emily did not eat all of the cookies.",
   "question_impI"  : "Martha wanted to convey that Emily did not eat all of the cookies.",
   "test_true"      : "Emily really enjoys chocolate.",
   "test_false"     : "Martha had dinner with a friend.",
   "test_uncertain" : "Martha is allergic to chocolate."
  }
];