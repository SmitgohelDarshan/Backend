const fs = require('fs')

fs.readFile('creatFile.txt', (err, data)=>{
    if(err) console.log(err);
    
    else{                
        fs.appendFile('createFile.txt', data, (err)=>{
            if(err) console.log(err);
            console.log('Success');
        })
    }
})