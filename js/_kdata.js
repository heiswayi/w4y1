// data for W4Y1
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

// Array of initial phrases
var elizaInitials = [
"Hello there! Here's the rule; you ask, I answer. That's it!",
"Hello there! What can I help you? Try asking me.",
"Hello there! Got something to ask me?"
];

// Array of final phrases
var elizaFinals = [
"Ok, goodbye!",
"Ok, bye. See you again!",
"Ok then, I want to continue sleeping..."
];

// Array of quit phrases
var elizaQuits = [
"bye",
"goodbye",
"exit",
"quit"
];

// Array of alternating name value pairs for preprocessing
var elizaPres = [
"i'm", "I am",
"you're", "you are",
"he's", "he is",
"she's", "she is",
"it's", "it is",
"'tis", "it is",
"we're", "we are",
"they're", "they are",
"that's", "that is",
"who's", "who is",
"what's", "what is",
"what're", "what are",
"where's", "where is",
"when's", "when is",
"why's", "why is",
"how's", "how is",
"I'll", "I will",
"you'll", "you will",
"he'll", "he will",
"she'll", "she will",
"it'll", "it will",
"we'll", "we will",
"they'll", "they will",
"that'll", "that will",
"who'll", "who will",
"what'll", "what will",
"where'll", "where will",
"when'll", "when will",
"why'll", "why will",
"how'll", "how will",
"I'd", "I would",
"you'd", "you would",
"he'd", "he would",
"she'd", "she would",
"it'd", "it would",
"we'd", "we would",
"they'd", "they would",
"that'd", "that would",
"who'd", "who would",
"what'd", "what would",
"where'd", "where would",
"when'd", "when would",
"why'd", "why would",
"how'd", "how would",
"I've", "I have",
"you've", "you have",
"we've", "we have",
"they've", "they have",
"isn't", "is not",
"aren't", "are not",
"wasn't", "was not",
"weren't", "were not",
"haven't", "have not",
"hasn't", "has not",
"hadn't", "had not",
"won't", "will not",
"wouldn't", "would not",
"don't", "do not",
"doesn't", "does not",
"didn't", "did not",
"can't", "cannot",
"couldn't", "could not",
"shouldn't", "should not",
"mustn't", "must not",
"ma'am", "madam"
];

// Array of alternating name value pairs for postprocessing
var elizaPosts = [
"you", "I",
"i", "you",
"your", "my",
"my", "your",
"myself", "yourself",
"yourself", "myself",
"me", "you",
"i am", "you are",
"you are", "I am"
];

// Object of words and their synonyms (as array)
// TODO: revise and add more
var elizaSynons = {
// v1.1
"occupation": ["job"],
"color": ["colors", "colour", "colours"],
"love": ["loves", "loved"],
"built": ["developed", "created"],
"learn": ["learned"],
"field": ["fields"],
"birthday": ["birthdate"],
"getting": ["got", "get"],
"qualification": ["qualifications"],
"stupid": ["idiot", "dumb", "foolish"]
};

// Array of keywords with decompositions and reasemblies
// higher rank will be evaluated first
var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

// the special keyword "xnone" holds the rules for default phrases (no match).
["xnone", 0, [
     ["*", [
          "My responses are limited. Please ask me the right question.",
          "I'm sorry, my responses are limited. You must ask the right question."
     ]]
]],

["xversion", 0, [
  ["*", [
    "Data version: 20150706 | Program version: v1.1 | Last update: 06-07-2015"
  ]]
]],

// STATIC INFO
["_NAME", 0, [
  ["*your name*", [
    "Heiswayi Nrird"
  ]],
  ["*your real name*", [
    "NRNA"
  ]],
  ["*your internet alias*", [
    "Heiswayi Nrird"
  ]],
  ["*your nickname*", [
    "Wayi"
  ]],
  ["*your wife* name*", [
    "Fatin Farhana"
  ]],
  ["*nrna*", [
    "NRNA is an initial for my real name which stands for Nor Rirdzuwan Nor Azman."
  ]]
]],

["_AGE", 0, [
  ["*old are you*", [
    "I'm 25 years old."
  ]],
  ["*your age*", [
    "25"
  ]],
  ["*", [
    "25 years old"
  ]]
]],

["_GENDER", 0, [
  ["*your gender*", [
    "I'm a male."
  ]],
  ["*", [
    "Male"
  ]]
]],

["_RELATIONSHIP_STATUS", 0, [
  ["*", [
    "Married"
  ]]
]],

["_HOMETOWN", 0, [
  ["*", [
    "Kuala Balah, Jeli, Kelantan."
  ]]
]],

["_HOME_ADDRESS", 0, [
  ["*you live*", [
    "Somewhere in Penang, Malaysia."
  ]],
  ["*you stay*", [
    "At my home, of course."
  ]],
  ["*make living*", [
    "Penang, Malaysia."
  ]],
  ["*", [
    "3-4-4, Jln. Baru, Pangsapuri Idaman, Tmn. Pauh, 13500 Permatang Pauh, P. Pinang."
  ]]
]],

["_HOBBY", 0, [
  ["*", [
    "Both, indoors and outdoors."
  ]]
]],

["_INTEREST", 0, [
  ["*programming*", [
    "Cryptographic algorithms research and Artificial Intelligence (AI)."
  ]],
  ["*", [
    "Can you be more specific. That's too general for me to answer."
  ]]
]],

["_EDUCATION", 0, [
  ["*where*", [
    "I studied in Universiti Sains Malaysia (USM), Engineering Campus, Nibong Tebal, P. Pinang."
  ]],
  ["*what*", [
    "Electronic Engineering."
  ]],
  ["*when*", [
    "In September 2013."
  ]],
  ["*@qualification*", [
    "Bachelor degree with honours in Electronic Engineering (USM)."
  ]],
  ["*", [
    "B.Eng. (Hons) Electronic Engineering, USM."
  ]]
]],

["_FAV_COLOR", 0, [
  ["*your favourite @color*", [
    "I love black and red."
  ]],
  ["*", [
    "Black and Red."
  ]]
]],

["_OCCUPATION", 0, [
  ["*your job*", [
    "I develop a software."
  ]],
  ["*your current job*", [
    "R&D Software Engineer"
  ]],
  ["*work*", [
    "I'm working in Bayan Lepas, P. Pinang."
  ]],
  ["*", [
    "I'm currently working as R&D Software Engineer at Keysight Technologies, Penang."
  ]]
]],

["_BIRTHDATE", 0, [
  ["*year*", [
    "1990"
  ]],
  ["*", [
    "February 4"
  ]]
]],

// 5W1H QUESTIONS
// WHAT
["what", 0, [
  ["*name*", [
    "goto _NAME"
  ]],
  ["*nickname*", [
    "goto _NAME"
  ]],
  ["*alias*", [
    "goto _NAME"
  ]],
  ["*wife*", [
    "goto _NAME"
  ]],
  ["*gender*", [
    "goto _GENDER"
  ]],
  ["*age*", [
    "goto _AGE"
  ]],
  ["*@color*", [
    "goto _FAV_COLOR"
  ]],
  ["*@occupation*", [
    "goto _OCCUPATION"
  ]],
  ["*hobby*", [
    "goto _HOBBY"
  ]],
  ["*interest*", [
    "goto _INTEREST"
  ]],
  ["*@field * studied*", [
    "goto _EDUCATION"
  ]],
  ["*education @qualification*", [
    "goto _EDUCATION"
  ]],
  ["*this program*", [
    "W4Y1 is an AI program built to run a fragment of Heiswayi Nrird's info and memories."
  ]],
  ["*nrna stands for*", [
    "goto _NAME"
  ]],
  ["*year you were born*", [
    "goto _BIRTHDATE"
  ]]
]],

// WHO
["who", 0, [
  ["*are you*", [
    "I'm nobody, nor a human. Just a fragment of memories."
  ]],
  ["*your @master*", [
    "Nobody. I am what I am. I programmed my mind to be digital. To still alive in memories."
  ]],
  ["*person * you @love * most*", [
    "My mother, my wife and my kids."
  ]],
  ["*@built you*", [
    "Myself."
  ]]
]],

// WHERE
["where", 0, [
  ["*live*", [
    "goto _HOME_ADDRESS"
  ]],
  ["*stay*", [
    "goto _HOME_ADDRESS"
  ]],
  ["*make living*", [
    "goto _HOME_ADDRESS"
  ]],
  ["*you work*", [
    "goto _OCCUPATION"
  ]],
  ["*you @learn * programming*", [
    "Self learning. Googling around.",
    "From people's source code. Free tutorials and courses on the Internet."
  ]],
  ["*hometown*", [
    "goto _HOMETOWN"
  ]],
  ["*you were born*", [
    "goto _HOMETOWN"
  ]],
  ["*you study*", [
    "goto _EDUCATION"
  ]]
]],

// WHEN
["when", 0, [
  ["*graduated*", [
    "goto _EDUCATION"
  ]],
  ["*your @birthday*", [
    "goto _BIRTHDATE"
  ]],
  ["*you @getting married*", [
    "April 4, 2015."
  ]],
  ["*your wedding*", [
    "April 4, 2015."
  ]]
]],

// HOW
["how", 0, [
  ["*old are you*", [
    "goto _AGE"
  ]],
  ["*long you * been married*", [
    "Since April 4, 2015."
  ]],
  ["*spend * your weekend*", [
    "It's random. Hiking, taking photos, watching movies, play games, etc.."
  ]],
  ["*use this program*", [
    "It's simple. You ask, I answer. Make sure you use proper English and grammar for the best result.",
    "You might want to type '--help' for more details."
  ]]
]],

// ARE YOU?
["are you", 0, [
  ["how*", [
    "Fine. Thank you!"
  ]],
  ["*@stupid*", [
    "Are you?"
  ]],
  ["*single*", [
    "No. I'm married."
  ]]
]],

// COMMON INSTRUCTIONS
["introduce", 0, [
  ["*yourself*", [
    "Hi. I'm Heiswayi. People call me 'Wayi'. Currently I'm working as R&D Software Engineer in a US-based company in Penang."
  ]]
]],

["intro", 0, [
  ["*", [
    "goto introduce"
  ]]
]],

// GREETING
["hello", 0, [
  ["*", [
    "Hi.",
    "Hi. Just ask me something."
  ]]
]]


];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof