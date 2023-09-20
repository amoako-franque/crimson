const user = {
	firstName: "David",
	lastName: "Jones",
	interests: ["Music", "Art"],
	posts: [
		{
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			comment: [
				{
					userId: 12,
					content: "Lorem ipsum dolor sit amet consectetur adipisicing",
				},
			],
			reactions: [],
		},
		{
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			comment: [88],
			reactions: [],
		},
		{
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			comment: [88],
			reactions: [],
		},
		{
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			comment: [88],
			reactions: [],
		},
	],
}

console.log(user.posts.length)

// const student = {
// 	firstName: "David",
// 	lastName: "Jones",
// 	strengths: ["Music", "Art"],
// 	exams: {
// 		midterm: 99,
// 		final: 88,
// 	},
// }

// const { midterm, final } = student.exams

// const stdStg = student.strengths[1]
// stdStg

// const avg = (midterm + final) / 2
// avg

// //const avg = (student.exams.midterm + student.exams.final) / 2;

// const shoppingCart = [
// 	{
// 		product: "Jenga Classic",
// 		price: 6.88,
// 		quantity: 1,
// 	},
// 	{
// 		product: "Echo Dot",
// 		price: 29.99,
// 		quantity: 3,
// 	},
// 	{
// 		product: "Fire Stick",
// 		price: 39.99,
// 		quantity: 2,
// 	},
// ]

// const game = {
// 	player1: {
// 		username: "Blue",
// 		playingAs: "X",
// 	},
// 	player2: {
// 		username: "Muffins",
// 		playingAs: "O",
// 	},
// 	board: [
// 		["O", null, "X"],
// 		["X", "O", "X"],
// 		[null, "O", "X"],
// 	],
// }
