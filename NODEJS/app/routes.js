const express = require("express")
const route = express.Router()

let posts = []

const viewPosts = (req, res) => {
	res.status(200).json({ data: posts })
}

route.get("/posts", viewPosts)

route.post("/add", (req, res) => {
	const { _id, post, created_at } = req.body

	const post_content = {
		_id: _id + 1,
		post,
		created_at,
	}

	posts.push(post_content)

	res.status(201).json(posts)
})

module.exports = route
