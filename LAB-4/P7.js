const os = require("os")

// 1024 bytes = 1 KB
// 1024 KB = 1 MB
// 1024 MB = 1 GB

console.log(os.totalmem() / (1024 * 1024 * 1024)); // total memory in GB
console.log(os.freemem() / (1024 * 1024 * 1024)); // free memory in GB
