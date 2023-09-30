const express = require("express")
// const route = require("./routes")
const app = express()
const port = 8800

// middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let user = {}

// https:www.slightly-techie.com/api/v1
app.post("/api", (req, res) => {
	const { name, age, country } = req.body

	user.name = name
	user.age = age
	user.country = country

	res.status().json({ user })
})
// app.use("/", route)

app.listen(port, () =>
	console.log(`Server running on port http://localhost$:${port}`)
)
