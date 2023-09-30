1. start here...
   -- requirements
   - you should know
   - HTML, CSS and JavaScript
   - Possible experience with other modules

How NodeJs is different from JavaScript
-- Node runs on the server = not in the browser (backend not frontend)
-- the console is the terminal not dev tools
console.log("hello world")
-- global object instead of window object
console.log(global)
-- has Common Core modules that we will explore
-- Commonjs modules instead of ES6 modules

examples of common core modules
// const os = require('os')
// const path = require('path')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(**dirname) //Users/amoako/Desktop/Backend Classes/backend-road-map/NodeJs-basics
console.log(**filename) /Users/amoako/Desktop/Backend Classes/backend-road-map/NodeJs-basics/readMe.md
console.log(path.dirname(**filename)) /Users/amoako/Desktop/Backend Classes/backend-road-map/NodeJs-basics/readMe.md
console.log(path.basename(**filename))
console.log(path.extname(\_\_filename)) === ".png"

console.log(path.parse(\_\_filename))

// we can create our own modules or install modules created by other people.[talk about this later]

const {add,subtract, multiply, divide} = require('./math')
const math = require('./math')
