// Use fs.readFileSync() to read info.txt and print the content, Compare execution with the 
// asynchronous version.
const fs = require('fs')

try {
    const data = fs.readFileSync('readFile.txt') // Buffer format
    const data2 = fs.readFileSync('readFile.txt', 'utf-8') // String format
    
    console.log(data);
    console.log(data2);
} catch (err){
    console.log(err);
}