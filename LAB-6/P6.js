// Write a program that creates a folder named my-data using fs.mkdir(). If the folder already 
// exists, show an appropriate message.
const fs = require('fs')

fs.mkdir('my-data', (err)=>{
    if(err){
        if(err.code === 'EEXIST') console.log('Folder already exists');        
        else console.log(err);
    } else {
        console.log('Successfully folder Created.');
    }
})