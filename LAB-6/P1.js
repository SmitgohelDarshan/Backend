// Write a Node.js program that uses fs.readFile() to read a file named data.txt asynchronously 
// and print its content on the console.
const fs = require('fs')

fs.readFile('readFile.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);  // Data in Buffer format
    console.log(data.toString()); // Data in String format
})