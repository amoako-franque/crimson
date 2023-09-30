const http = require("http")
const fs = require("fs")
const { log } = require("console")

for (let index = 0; index < 10000; index++) {
	fs.writeFileSync("file.txt", "techies\n", { flag: "a" })
}

const server = http.createServer((request, response) => {
	const stream = fs.createReadStream("./file.txt", {
		encoding: "utf-8",
		highWaterMark: 10000,
	})
	stream.on("open", () => {
		log("Stream is open and can start streaming data of file")
		stream.pipe(response)
	})
	stream.on("end", () => {
		log("End streaming")
	})
})

server.listen(8081, "localhost", () => {
	log("server running on http://127.0.0.1:8081/")
})
