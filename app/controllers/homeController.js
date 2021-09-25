const modelUserHome = require('../models/homeUserModel')
const bcrypt = require('bcrypt')


const generateHash = async (pass) => {
	const hash = await bcrypt.hash(pass, 10)
	return hash
}

const validateHash = async (passFront, passBd) => {
	try {
		const validate = await bcrypt.compare(passFront, passBd)
		return validate
	} catch (err) {
		console.log(err)
	} 
}



// Create newUser
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


// login User
const singin = async (req, res) => {
	try {
		const body = req.body;
		const getUser = await modelUserHome.findOne({ email: body.email })
		const validatePass = await validateHash(body.password, getUser.password)

		if (!validatePass) {
			res.json({
				error: true,
				content: 'the data entered is incorrect'
			})
		} else {
			res.status(200).json(validatePass)
		}
	} catch (err) {
		console.log(`ERROR IN SIGN ${err}`)
		res.status(500).json({
			error: true,
			content: 'internal error sorry'
		})
	}
}

const home = (req, res) => {
	res.send('welcome to home')
}


module.exports = {
	singup,
	singin,
	home
}