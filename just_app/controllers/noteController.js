const Note = require("../models/noteModel")

exports.fetchNotes = async (req, res) => {
	const notes = await Note.find({ isCompleted: true })
	res.status(200).json({ data: notes })
}

exports.fetchNote = async (req, res) => {
	const { id } = req.params
	const note = await Note.findById(id)

	if (!note) {
		return res.json({ msg: "no note found" })
	}
	res.json({ data: note })
}

exports.deleteNote = async (req, res) => {
	const { id } = req.params
	const note = await Note.findByIdAndDelete(id)
	res.json({ data: note, msg: "Note has been deleted" })
}

exports.createNote = async (req, res) => {
	const { title, content } = req.body
	const note = await Note.create({ title, content })
	res.json({ data: note })
}

// exports.fetch = async (req, res) => {
// 	const { title, content } = req.body
// 	const note = await Note.create({ title, content })
// 	res.json({ data: note })
// }
