// Create a program that writes the text into a file named output.txt.
const fs = require('fs')

fs.writeFile('writeFile.txt', 'data', (err)=>{
    if(err) console.log(err);
    
    console.log('Successfully created');
})