const express = require("express")
require("dotenv").config()
const notesRouter = require("./routes/notesRoutes")
const { notFound, errorHandler } = require("./middleware/errorHandler")
const mongoose = require("mongoose")
const dbCon = require("./config/db")

const app = express()
const port = process.env.PORT || 8800

//connect to database
mongoose.set("strictQuery", true)
dbCon()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", notesRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () =>
	console.log(`Server listening on  http://localhost:${port}`)
)
// mvc
// m-model
// v - view
// c - control
