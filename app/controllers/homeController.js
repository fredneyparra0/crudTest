const modelUserHome = require('../models/homeUserModel')
const bcrypt = require('bcrypt')


const generateHash = async (pass) => {
	const hash = await bcrypt.hash(pass, 10)
	return hash
}

const singup = async (req, res) => {
	try {
		const { name, email, password} = req.body;
		const hashPass = await generateHash(password);

		const userHome = new modelUserHome({
			name,
			email,
			password: hashPass
		})
		await userHome.save()
		res.status(200).json({
			error: false,
			content: 'user create sucessfull'
		})
	} catch (err) {
		console.log(err);
		res.status(500).json({
			error: true,
			content: 'server error please again'
		})
	}
}

const singin = (req, res) => {
	res.send('hello sigIn')
}


module.exports = {
	singup,
	singin
}