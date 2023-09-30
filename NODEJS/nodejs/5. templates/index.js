const { log } = require("console")
const http = require("http")
const path = require("path")

const user = {
	username: "franque",
	bio: "charging my life",
	contact: "1038131",
	status: "online",
}

const server = http.createServer((request, response) => {
	// response.end("Hello World")
	const url = req.url
	if (url === "/") {
		fs.readFile("./view.ejs", "utf-8")
	}
})

const port = 8090
server.listen(port, "localhost", () => {
	console.log("Server running at http://127.0.0.1:${port}/")
})

log(path.dirname("./index.js"))
log(path.extname("./index.js"))
log(path.parse("./index.js"))
