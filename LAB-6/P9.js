// Write a program that checks if the file config.json exists in the current directory using 
// fs.existsSync() and prints the result.
const fs = require('fs')

try {
    const data = fs.existsSync('config.json')
    console.log(data);
} catch (err){
    console.log(err);
}