var program_ver = 'v1.1 beta';
var db_version = '20150706';
var ai_level = '0.4%';
var online_status = true;

$('.particles').particleground({
	dotColor: '#cc0000',
	lineColor: '#770000',
	maxSpeedY: 0.9,
	maxSpeedX: 0.9
});

$('.terminal').mousewheel(function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
});

var wayi = new ElizaBot();
wayi.memSize = 100; // bot internet memory size
var promptName = 'YOU';
var botPrompt = '[[;#666;transparent]<][[gb;#cc0000;transparent]W4Y1][[;#666;transparent]>]';

$('.terminal').terminal(function(command, term) {
	if (command == '') { return; }
	if (command.toLowerCase() == '--help') { showHelp(term); }
	else {
		term.echo(botPrompt+' [[g;#770000;transparent]'+wayi.transform(command)+']');
		if (wayi.quit) {
			// last user input was a quit phrase
			term.clear();
			wayi.reset();
		}
	}
}, {
	height: 500,
	//prompt: '[[gb;#0c0;#000000]>_] ',
	name: 'W4Y1',
	history: false,
	greetings: null,
	onInit: function(term) {
		term.set_prompt('[[;#666;transparent]<][[gb;#0c0;transparent]'+promptName+'][[;#666;transparent]>] '); // default promptName: YOU
		header(term); // display header/logo
		botInit(term); // initialize bot function
    },
    onClear: function(term) {
		header(term);
    },
    onBlur: function(term) {
		// call function to start counting the timer
	},
	onFocus: function(term) {
		// call function to mention the away timer
	},
	onRPCError: function(term) {
	},
	processRPCResponse: function(object) {
	},
	exceptionHandler: function(e) {
	},
});

function botResponse(term, text) {
	term.echo(botPrompt+' [[g;#770000;transparent]'+text+']');
}

function stats(dbversion, online, note) {
	var status;
	if (online == true) { status = '[[g;#27ae60;transparent]Online]'; }
	else { status = '[[g;#c0392b;transparent]Offline]'; }
	return '[[g;#444;transparent]{][[g;#666;transparent]DB Version:] [[g;#888;transparent]'+dbversion+'][[g;#444;transparent]}] [[g;#444;transparent]{][[g;#666;transparent]Status:] '+status+'[[g;#444;transparent]}] [[g;#444;transparent]{][[g;#666;transparent]AI Level:] [[g;#f39c12;transparent]'+note+'][[g;#444;transparent]}]\n';
} 

function header(term) {
	term.echo(
	'[[gb;#cc0000;transparent]'+
	' __      __  _____ _____.___.____ \n'+
	'/  \\    /  \\/  |  |\\__  |   /_   |\n'+
	'\\   \\/\\/   /   |  |_/   |   ||   |\n'+
	' \\        /    ^   /\\____   ||   |\n'+
	'  \\__/\\  /\\____   | / ______||___|\n'+
	'       \\/      |__| \\/            \n'+
	']'+
	'[[g;#770000;transparent]01010111] [[g;#770000;transparent]00110100] [[g;#770000;transparent]01011001] [[g;#770000;transparent]00110001] [[g;#666;transparent]'+program_ver+']\n'+
	'[[g;#666;transparent]An AI program created by] [[gbu;#666;transparent]Heiswayi Nrird] [[g;#666;transparent]as a fragment of his memories.]\n'+
	stats(db_version, online_status, ai_level)+
	'[[g;#666;transparent]@Website https://wayi.me]\n\n'+
	'[[g;#666;transparent]You may type "][[gb;#888;transparent]--help][[g;#666;transparent]" to explore more...]\n\n'
	);
}

function botInit(term) {
	term.echo(botPrompt+' [[g;#770000;transparent]'+elizaInitials[Math.floor(Math.random()*elizaInitials.length)]+']');
}

function showHelp(term) {
	botResponse(term, 'Sorry, I\'m still developing for this part and it will be available soon. ');
}