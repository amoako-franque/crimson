const http = require("http")
const port = 8800

const server = http.createServer(function (request, response) {
	// http://localhost:8800/qweasdasdas
	if (request.url === "/") {
		response.writeHead(200, { "Content-Type": "text/html" })
		response.write(
			"<html><body><p>This is the home Page for our great app.</p></body></html>"
		)
		response.end()
	} else if (request.url == "/about") {
		response.writeHead(200, { "Content-Type": "text/html" })
		response.write("<html><body><p>This is about Page.</p></body></html>")
		response.end()
	} else if (request.url == "/admin") {
		response.writeHead(200, { "Content-Type": "text/html" })
		response.write("<html><body><p>This is admin Page.</p></body></html>")
		response.end()
	} else if (request.url == "/data") {
		response.writeHead(200, { "Content-Type": "application/json" })
		response.write(JSON.stringify({ message: "Hello World" }))
		response.end()
	} else response.end("Invalid Request!")
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
