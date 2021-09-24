const express = require('express')
const modelUser = require('../models/userModel.js')


const router = express.Router();


router.get('/user', async (req, res) => {
	const data = req.body;

	const getUsers = await modelUser.find()

	res.send(getUsers)
})

router.post('/user', async (req, res) => {
	const data = req.body;

	const userNew = new modelUser(data);

	userNew.save()

	res.send('user create')
})

router.put('/user/:id', async (req, res) => {
	const idUser = req.params.id;
	const query = { _id: idUser };
	const dataUpdate = req.body;

	const dataDb = await modelUser.findOneAndUpdate(query, dataUpdate);

	res.send('update')
})

router.delete('/user/:id', async (req, res) => {
	const idUser = req.params.id;

	const getUser = await modelUser.findOneAndRemove({ _id: idUser });

	res.send('delete')
})



module.exports = router