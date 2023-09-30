const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			required: [true, "Please provide a note title"],
		},
		content: {
			type: String,
			required: [true, "Please provide a note title"],
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
)

const Note = mongoose.model("Note", noteSchema)
module.exports = Note
