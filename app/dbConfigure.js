const mongoose = require('mongoose')

const conectionDb = () => {
	mongoose.connect(process.env.DB_URI)
	try {
		console.log('conected DB !!')
	} catch (err) {
		console.log('err')
	}
}

module.exports = conectionDb