// Write a program to delete a file named temp.txt using fs.unlink() and display success or error.
const fs = require('fs')

fs.unlink('writeFile.txt', (err)=>{
    if(err) console.log(err);
    
    console.log('Successfully deleted.');
})