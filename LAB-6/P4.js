//  Create a program that appends the text into a file named output.txt.
const fs = require('fs')

fs.appendFile('writeFile.txt', ' Append', (err)=>{
    if(err) console.log(err);
    
    console.log('Successfully Append');
})