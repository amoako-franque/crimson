let num = [1, 2, 3]
let mystery = [1, 2, 3]
let moreNum = num

//They 'look' the same, but refer to different arrays
num === mystery // false

//These two arrays reference the exact same array, so we get true:
num === moreNum //true

const user = {
	username: "CherryGarcia8",
	email: "garcia@gmail.com",
	notifications: ["message", "alert"],
}

//THIS WILL NOT WORK!
if (user.notifications === []) {
	console.log("NO NEW NOTIFICATIONS!")
}

console.log(user.notifications.length)
// THIS VERSION DOES WORK!
if (!user.notifications.length) {
	console.log("NO NEW NOTIFICATIONS!")
}
