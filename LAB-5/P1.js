// Write a Node.js program using child_process.exec() to run the shell command to check the 
// current version of node.
const cp = require('child_process');
const { stderr, stdout } = require('process');

cp.exec('node --version', (err, stdout, stderr)=>{
    if(err){
        console.log('err: ',err);
    }
    if(stderr){
        console.log('stderr: ',stderr);
    }
    console.log('output: ',stdout);
})

cp.exec('python p.py', (err, stdout, stderr)=>{
    if(err){
        console.log('err: ',err);
    }
    if(stderr){
        console.log('stderr: ',stderr);
    }
    console.log('output: ',stdout);
})