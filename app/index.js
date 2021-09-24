const express = require('express');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/pruebaDb')
	try {
		console.log('Coneccion realizada')
	} catch (err) {
		console.log(err)
	}
	
app.use(cors())
app.use(express.json())
app.use('/api', require('./router/index'))



app.listen(PORT, () => {
	console.log(`server run in port ${PORT}`)
})