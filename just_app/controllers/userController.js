const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const slugify = require("slugify")
const { createToken } = require("../utils/generateToken")

//  jack bauer
//  jack-bauer
// https://slghtly.com/

exports.register = asyncHandler(async (req, res) => {
	const { username, email, password, secret } = req.body

	if (!username || !email || !secret) {
		return res.status(400).json({ msg: "please fill all fields" })
	}

	const userExists = await User.findOne({ email })

	if (userExists) {
		return res.status(400).json({ msg: "User already exists. Please login" })
	}

	if (password && password.length < 6) {
		return res
			.status(400)
			.json({ msg: "Password must be at least 6 characters" })
	}

	const slug = slugify(username)

	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)
	const hashedSecret = await bcrypt.hash(secret, salt)

	const user = await User.create({
		username: slug,
		email,
		password: hashedPassword,
		secret: hashedSecret,
	})

	if (user) {
		user.password = undefined
		user.secret = undefined

		res.status(201).json({ msg: "registration completed", data: user })
	} else {
		return res
			.status(500)
			.json({ msg: "Registration failed. Please try again later" })
	}
})

//http://localhost:8900/users/:id
//http://localhost:8900

exports.fetch_users = asyncHandler(async (req, res) => {
	const users = await User.find()

	res.json(users)
})

exports.login = asyncHandler(async (req, res) => {
	//get the username and password from request body

	const { email, password } = req.body
	const user = await User.findOne({ email })

	const match = await bcrypt.compare(password, user.password) // false or true

	if (match) {
		user.password = undefined
		user.secret = undefined

		const userToken = createToken(user._id, user.email)

		res.cookie("token", userToken, {
			httpOnly: true,
			maxAge: 2 * 24 * 60 * 60 * 1000,
			secure: true,
		})

		res
			.status(200)
			.json({ msg: `Welcome back ${user.username}`, reqs: req.headers })
	} else {
		res.status(400).json({ msg: "Invalid credentials" })
	}
})

exports.logout = asyncHandler(async (req, res) => {
	try {
		res.clearCookie("token", {
			httpOnly: true,
			secure: true,
		})

		res.status(200).json({ msg: "Logout successfully" })
	} catch (error) {
		throw new Error("Something went wrong")
	}
})
