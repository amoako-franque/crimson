const express = require("express")
require("dotenv").config()
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const fs = require("fs")
const { notFound, errorHandler } = require("./middleware/errorHandler")
const mongoose = require("mongoose")
const dbCon = require("./config/db")

const app = express()
const port = process.env.PORT || 8800

//connect to database
mongoose.set("strictQuery", true)
dbCon()

app.use(cors())
app.use(cookieParser())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

fs.readdirSync("./routes").map((route) => {
	app.use("/", require("./routes/" + route))
})

app.use(notFound)
app.use(errorHandler)

app.listen(port, () =>
	console.log(`Server listening on  http://localhost:${port}`)
)
// mvc
// m-model
// v - view
// c - control
