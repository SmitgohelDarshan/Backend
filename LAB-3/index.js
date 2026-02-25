const http = require('http')
const {circle} = require('./area')
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write("Hello World<br/>")
    res.write(`${circle(1)}`);
    res.write("Hi<br/>")
    res.end()
});

server.listen(3000,()=>{
    console.log("Server started at 3000 port.")
})