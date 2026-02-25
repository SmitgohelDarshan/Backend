const path = require("path")

console.log(path.isAbsolute(__filename)) // given path is absolute or relative paths
console.log(path.isAbsolute("\4th sem\BACKEND\LABS\LAB-4")) // false
console.log(path.isAbsolute("\\4th sem\BACKEND\LABS\LAB-4")) // true
