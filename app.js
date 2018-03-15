console.log('starting app'); 

// file system and OS module 
// fs.appendFile 

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0]; 
console.log("Command: " + command); 
// console.log("process: " + process.argv);
console.log("Yargs: ",  argv);

if (command === 'add') { 
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    console.log('listing all notes');
    notes.getAll();
} else if (command === 'read') {
    console.log('reading these notes');
    notes.getNote(argv.title);
} else if (command === 'remove') {
    console.log('Note has been removed');
    notes.removeNote(argv.title);
} else { 
    console.log('command not recognized');
} 

