const fs = require("fs")

const path = require("path")

// fs.readFile("./testfiles/starter.txt", "utf8", (err, data) => {
// 	if (err) throw err
// 	console.log(data)
// })

//using path
// fs.readFile(
// 	path.join(__dirname, "testfiles", "starter.txt"),
// 	"utf8",
// 	(err, data) => {
// 		if (err) throw err
// 		console.log(data)
// 	}
// )

// //writefile
// fs.writeFile(
// 	path.join(__dirname, "testfiles", "reply.txt"),
// 	"Nice to meet you",
// 	(err) => {
// 		if (err) throw err
// 		console.log("Write operation completed")
// 	}
// )

// //updateFile
// fs.appendFile(
// 	path.join(__dirname, "testfiles", "append.txt"),
// 	"Updating file content",
// 	(err) => {
// 		if (err) throw err
// 		console.log("Append operation completed")
// 	}
// )

// // by order we want
fs.writeFile(
	path.join(__dirname, "testfiles", "reply.txt"),
	"Nice to meet you again",
	(err) => {
		if (err) throw err
		console.log("Write operation completed")

		fs.appendFile(
			path.join(__dirname, "testfiles", "reply.txt"),
			"\n\nUpdating file content",
			(err) => {
				if (err) throw err
				console.log("Append operation completed")

				fs.rename(
					path.join(__dirname, "testfiles", "reply.txt"),
					"newname.txt",
					(err) => {
						if (err) throw err
						console.log("Rename operation completed")
					}
				)
			}
		)
	}
)

// console.log("hello world ...")

process.on("uncaughtException", (err) => {
	console.error("There was an uncaught exception: " + err)
	process.exit(1)
})
