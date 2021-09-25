const mongoose = require('mongoose');

const schemaUser = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		unique: true
	},
	pass: {
		type: String
	}
})

module.exports = mongoose.model('user', schemaUser)