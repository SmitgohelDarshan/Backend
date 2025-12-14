// Write a program that uses child_process.spawn() to run the command to print files and 
// folders of current directory.
const cp = require('child_process');
const { stderr } = require('process');
const child = cp.spawn('cmd.exe', ['/c', 'dir', '/s', 'C:\\'])

child.stderr.on('data', (data)=>{
    console.log('stderr: ', data);
})

child.stdout.on('data', (data)=>{
    console.log('stdout: ', data);
})

child.on('close', (data)=>{
    console.log('close: ', data);
})