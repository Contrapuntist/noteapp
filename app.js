console.log('starting app');

// file system and OS module 
// fs.appendFile 

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');



var user = os.userInfo();


fs.appendFileSync('greetings.txt', `Hello ${user.username}!`); 
// fs.appendFile("greetings.txt", "Hello World", function(err) { 
//     if (err) { 
//         console.log("Err message: " + err);
//     }
// })