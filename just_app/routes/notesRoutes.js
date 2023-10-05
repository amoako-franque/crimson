const express = require("express")
const {
	fetchNotes,
	createNote,
	fetchNote,
	deleteNote,
	updateNote,
	updateStatus,
} = require("../controllers/noteController")
const router = express.Router()

router.get("/notes", fetchNotes)
router.post("/create", requireSignIn, createNote)
router.get("/notes/:id", fetchNote)
router.put("/notes/:id", updateNote)
router.put("/notes/status/:id", updateStatus)
router.delete("/notes/:id", deleteNote)

module.exports = router
