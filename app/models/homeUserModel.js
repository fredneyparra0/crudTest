const mongoose = require('mongoose');

const schemaUserHome = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		unique: true
	},
	password: {
		type: String
	},	
	time: { 
		type : Date,
		default: Date.now
	} 
})

module.exports = mongoose.model('userhome', schemaUserHome)