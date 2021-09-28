const express = require('express')
const routerMiddleware = express.Router()
const jwt = require('jsonwebtoken')


routerMiddleware.use( async (req, res, next) => {
	try {
		const headerToken = req.headers['authorization'];
		console.log(headerToken)

		if (headerToken) {
			const validate = await jwt.verify(headerToken, process.env.KEY_SECRET)
			if (validate) {
				next()
			} else {
				res.send({
					error: true,
					content: 'token invalit'
				})
			}
		} else {
			res.send({
				error: true,
				content: 'token no valit'
			})
		}
	} catch (err) {
		console.log(`TOKEN IS ==>  ${err}`)
		res.status(404).send({
			error: true,
			content: 'invalid token please retry wait'
		})
	}
})


module.exports = routerMiddleware