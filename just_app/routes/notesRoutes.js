const express = require("express")
const {
	fetchNotes,
	createNote,
	fetchNote,
	deleteNote,
} = require("../controllers/noteController")
const router = express.Router()

router.get("/notes", fetchNotes)
router.post("/create", createNote)
router.get("/notes/:id", fetchNote)
router.delete("/notes/:id", deleteNote)

module.exports = router
