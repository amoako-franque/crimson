// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' 1+1 - add 1 to i each time through

let arr = [1, 2, 4]
for (let i = 1; i <= arr.length; i++) {
	console.log("HELLO:", i)
}

// Counting by 3's:
for (let i = 1; i <= 10; i += 3) {
	console.log("HELLO:", i)
}

// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
	//num =2
	console.log(`${num}x${num} = ${num * num}`)
}

// Counting DOWN from 200 by intervals of 25:
for (let i = 200; i >= 0; i -= 25) {
	// 1+=6
	console.log(i)
}
console.log("AFTER THE LOOP!")
