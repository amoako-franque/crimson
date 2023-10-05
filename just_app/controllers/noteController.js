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

// http://localhost:8900/note/1283n82u193h129h3912
exports.updateNote = async (req, res) => {
	const { id } = req.params
	const { content, title } = req.body
	const note = await Note.findByIdAndUpdate(id, { content, title })
	res.json({ data: note })
}
exports.updateStatus = async (req, res) => {
	const { id } = req.params
	const { status } = req.body
	const note = await Note.findByIdAndUpdate(id, { isCompleted: status })
	res.json({ data: note })
}
