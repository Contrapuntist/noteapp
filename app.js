
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0]; 
console.log('Command: ' + command); 
// console.log("process: " + process.argv);
console.log('Yargs: ',  argv);

if (command === 'add') { 
	var note = notes.addNote(argv.title, argv.body);
	console.log (note); 
	if (note) { 
		console.log('Note added');
		notes.logNote(note);
	} else { 
		console.log('Note was not added. It might be a duplicate.');
	}
} else if (command === 'list') {
	console.log('listing all notes');
	var allNOtes = notes.getAll();
	console.log(`Printing ${allNOtes.length} note(s)`); 
	allNOtes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
	// console.log('reading these notes');
	var note = notes.getNote(argv.title);
	if (note ) { 
		console.log('Note found'); 
		notes.logNote(note);
	} else { 
		console.log('Note not found');
	}	

} else if (command === 'remove') {
	// console.log('Note has been removed');
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note was not removed';
	console.log(message);
} else { 
	console.log('command not recognized');
} 

