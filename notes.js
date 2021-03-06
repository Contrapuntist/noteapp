

const fs = require('fs');

var fetchNotes = () => {
	try { 
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch(e) { 
		return [];
	}

};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => { 
	var notes = fetchNotes(); 
	var note = {
		title, 
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title );
	if (duplicateNotes.length === 0 ) { 
		notes.push(note); 
		saveNotes(notes);
		return note;
	}

}; 

var getAll = () => {
	//console.log('getting all notes');
	return fetchNotes();
};

var getNote = (title) => { 
	//console.log("getting this note", title ); 
	var notes = fetchNotes(); 
	var foundNote = notes.filter((note) => note.title === title );
	return foundNote[0];
};

var removeNote = (title) => { 
	console.log('removing this note', title);
	var notes = fetchNotes(); 
	var newNotes = notes.filter((note) => { 
		if (note.title !== title) { 
			return note;
		}
	});
	saveNotes(newNotes);
	return notes.length !== newNotes;
};

var logNote = (note) => {
	debugger;
	console.log('---');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
};

module.exports = { 
	addNote, 
	getAll,
	getNote,
	removeNote,
	logNote
};