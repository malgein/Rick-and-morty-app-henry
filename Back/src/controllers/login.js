const axios = require('axios')
const users = require('../utils/users')

const login = (req, res) => {
		// console.log(req.query)
		let { password, email} = req.query

		// console.log(user)
		if(users[0].email === email && users[0].password === 		password) {
		res.status(200).json({access: true})
		}	else res.status(200).json({access: false})
	}

module.exports= login