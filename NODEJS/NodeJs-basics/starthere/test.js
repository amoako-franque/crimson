// examples of common core modules
const os = require("os")
const path = require("path")
const { add, subtract, multiply, divide } = require("./math")

let total = add(12, 34)

console.log(total)
// console.log(os)
// console.log(os.version())
// console.log(os.homedir())
// console.log(path)

// console.log(path.dirname("./math.js"))
// console.log(path.basename("./math.js"))
// console.log(path.extname("./math.js"))
console.log(path.parse("./math.js"))
// console.log(**dirname) //Users/amoako/Desktop/Backend Classes/backend-road-map/NodeJs-basics
// console.log(**filename) /Users/amoako/Desktop/Backend Classes/backend-road-map/NodeJs-basics/readMe.md
// console.log(path.dirname(**filename)) /Users/amoako/Desktop/Backend Classes/backend-road-map/NodeJs-basics/readMe.md
// console.log(path.basename(**filename))
// console.log(path.extname(\_\_filename)) === ".png"

// console.log(path.parse(\_\_filename))
