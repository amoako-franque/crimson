const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
			match: [
				/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
				"Please enter a valid email address",
			],
		},
		password: {
			type: String,
			required: true,
		},
		secret: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const User = mongoose.model("User", userSchema)
module.exports = User
