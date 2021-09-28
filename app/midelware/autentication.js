const jwt = require('jsonwebtoken');

const generateToken = () => {
	const token = jwt.sign({ check: true }, process.env.KEY_SECRET, {
		expiresIn: 1440
	});

	return token
}

module.exports = {
	generateToken
}