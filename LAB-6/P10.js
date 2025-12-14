// Write a program using fs.watch() to monitor changes in watchme.txt. Whenever file content 
// changes, print: “File Changed” 

const fs = require('fs')

fs.watch('backup.txt', (eventType, fileName)=>{
    if(fileName){
        console.log(`File: ${fileName} and Event: ${eventType}`);
    }
})