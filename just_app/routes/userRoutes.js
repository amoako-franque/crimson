const express = require("express")
const {
	register,
	fetch_users,
	login,
	logout,
} = require("../controllers/userController")
const router = express.Router()

router.get("/users", fetch_users)
router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
// router.get("/notes/:id", fetchNote)
// router.put("/notes/:id", updateNote)
// router.put("/notes/status/:id", updateStatus)
// router.delete("/notes/:id", deleteNote)

module.exports = router
