const mongoose = require("mongoose")

const dbCon = async () => {
	try {
		mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log("MongoDB Connection Succeeded.")
	} catch (error) {
		console.error(`Error in DB connection:: ${error.message}`)
		process.exit(1)
	}
}

module.exports = dbCon
