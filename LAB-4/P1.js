const path = require("path");

console.log(__dirname); // directory name
console.log(__filename); //full path file name
console.log(path.basename(__filename)); // file name
console.log(path.extname(__filename)); // file extension
console.log(path.dirname(__filename)); // full path