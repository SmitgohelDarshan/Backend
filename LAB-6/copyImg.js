const fs = require('fs')

fs.copyFile('download.png', 'copyimg.png', (err)=>{
    if(err) console.log(err);
    console.log('Success');
})