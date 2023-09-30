const express = require("express")
const cors = require("cors")
const app = express()

//cross origin resource sharing
const whitelist = [
	"https://slightly-techie.com",
	"http://127.0.0.1:9800",
	"http://localhost:8080",
]
const corsOptions = {
	origin: (origin) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true)
		} else {
			callback(new Error("Origin not allowed by CORS"))
		}
	},
	optionsSuccessStatusCode: 200,
}
app.use(cors(corsOptions))

// built in middleware to handle urlencoded data
// tin other words form data
// "content-type": application/x-www-form-urlencoded"
app.use(express.urlencoded({ extended: true }))

//built-in middleware for handling json data
app.use(express.json())

// serving static files
app.use(express.static(path.join(__dirname, "public")))

app.set("port", process.env.PORT || 3000)

app.get("/", (req, res, next) => {
	res.send("<h1>Hello world<h1>")
})

//multiple ways to send static files
//option one
// app.get("/", (req, res, next) => {
// 	res.sendFile("./views/index.html", { root: __dirname })
// })

// app.get("^/$|/index(.html)?", (req, res, next) => {
// 	res.sendFile(path.join(__dirname, "views", "index.html"))
// })

// app.get("/new-page(.html)?", (req, res, next) => {
// 	res.redirect(301,"index.html"))
// })

// option two
// app.get("/*", (req, res, next) => {
// 	res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
// })

app.get(
	"/hello",
	(req, res, next) => {
		console.log("A app.get route has been generated")
		next()
	},
	(req, res) => {
		console.log("After next request")
		res.send("Hello world")
	}
)

//chaining route handlers

// const one  = (req, res, next) => {
//     console.log("One has been called");
//     next()
// }
// const two  = (req, res, next) => {
//     console.log("Two has been called");
//     next()
// }
// const three  = (req, res) => {
//     console.log("Three has been called");
//     res.send("All done!")
// }

// app.get('/',[one,two, three], (req, res, ) => {
//     res.send('<h1>Hello world<h1>');
// })

app.all("*", (req, res) => {
	res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.use(function (req, res, next) {
	console.error(err.stack)
	res.status(500).send(err.message)
})

app.listen(app.get("port"), () => {
	console.info(`Server listen on port ${app.get("port")}`)
})
