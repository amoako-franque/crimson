const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

exports.requireSignIn = asyncHandler(async (req, res, next) => {
	const authHeader = req.headers.authorization || req.headers.Authorization

	if (!authHeader?.startsWith("Bearer ")) {
		throw new Error("Unauthorized. Please login or contact admin")
	}

	try {
		const token = authHeader.split(" ")[1]

		jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
			if (err) {
				return res.status(400).json({ msg: "Invalid token" })
			}

			const user_id = decoded?.user_id
			const user = await User.findById(user_id).select("-password")

			req.user = user
		})
	} catch (error) {
		throw new Error("Not Authorized token. Login again")
	}
})
