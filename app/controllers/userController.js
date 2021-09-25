const modelUser = require('../models/userModel')
const bcrypt = require('bcrypt');


const generateHash  = async (password) => {
	try {
		const hashGenerate = await bcrypt.hash(password, 10)
		return hashGenerate
	} catch (err) {
		console.log(`ERROR IN GENERATE HASH!!! ${err}`)
	}
}

const authToken = async (id ,passFront) => {
	try {
		const getUser = await modelUser.findOne({ _id: id });

		const authUser = await bcrypt.compare(passFront, getUser.pass)
		return authUser
	} catch (err) {
		console.log(`ERROR IN VALIDATE TOKEN ${err}`)
	}
}

const getUsers = async (req, res) => {
	try {
		const  usersGet = await modelUser.find({});

		res.status(200).json(usersGet)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			error: true,
			content: 'server internal error'
		})
	}
}

const createUser = async (req, res) => {
	try {
		const { name, email, pass } = req.body;
		const hashPass = await generateHash(pass)

		const user = new modelUser({
			name,
			email,
			pass: hashPass
		});

		await user.save()
		res.status(200).json({
			content: 'user create'
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			error: true,
			content: 'server internal error'
		})
	}
}

const updateUser = async (req, res) => {
	try {
		const passwordSimulateFront = '12345'

		const query = { _id: req.params.id }

		const validateToken = await authToken(req.params.id, passwordSimulateFront)

		//const updateUser = await modelUser.findOneAndUpdate(query, req.body)
		res.status(200).json({
			error: null,
			content: 'data is update succesful'
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			error: true,
			content: 'server internal error'
		})
	}
}

const deleteUser = async (req, res) => {
	try {
		const idUser = req.params.id;

		await modelUser.findOneAndRemove({ _id: idUser })
		res.status(200).json({
			error: null,
			content: 'user is delete succesful'
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			error: true,
			content: 'server internal error'
		})
	}
}


module.exports = {
	getUsers,
	createUser,
	updateUser,
	deleteUser
}

