// Write a program that copies a file named source.txt to a new file named backup.txt using 
// fs.copyFile().
const fs = require('fs')

fs.copyFile('readFile.txt', 'backup.txt', (err)=>{
    if(err) console.log(err);

    console.log('Successfully Copy data.');
})