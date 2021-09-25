const modelUser = require('../models/userModel')

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
		const user = new modelUser(req.body);
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
		const query = { _id: req.params.id }

		const updateUser = await modelUser.findOneAndUpdate(query, req.body)
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

