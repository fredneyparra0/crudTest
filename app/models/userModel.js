const mongoose = require('mongoose');

const schemaUser = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String
	},
	pass: {
		type: String
	}
})

module.exports = mongoose.model('user', schemaUser)