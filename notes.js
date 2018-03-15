console.log('starting notes.js');

var addNote = (title, body) => { 
	console.log("adding note", title, body);
}; 

var getAll = () => {
	console.log('getting all notes');
}

var getNote = (title) => { 
	console.log("getting this note", title );  
}

var removeNote = (title) => { 
	console.log("removing this note", title);
}

module.exports = { 
	addNote, 
	getAll,
	getNote,
	removeNote
}