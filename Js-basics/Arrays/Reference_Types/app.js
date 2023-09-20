// ===============
// VALUE TYPES
// ===============
//Value Types - the variable stores the actual value:

let x = 100
let y = x
y
x
//If we change x
x = 99
x
y
//y is unchanged
y //100
y = 90
x

// ===============
// REFERENCE TYPES
// ===============

// Array variables do not hold the actual array
//Instead, they store a REFERENCE to the array

let num = [2, 4, 6, 8]
let myNum = num //myNum references the same array

// If we change num
num.push("BOO!")
num
//My num is also changed:
myNum //[2, 4, 6, 8, "BOO!"]
