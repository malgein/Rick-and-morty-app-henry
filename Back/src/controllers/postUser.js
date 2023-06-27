const {User} = require('../DB_connection')

const postUser = async(req, res) => {
	const {email, password} = req.body
	try{
		if(email && password){
			const newUser = await User.findOrCreate({
				where: {email, password}
			})
			console.log(newUser[0])
			return res.status(201).json(newUser[0])
		}
		return res.status(400).json({message: 'faltan datos'})
	}catch(error){
		return res.status(500).json({message: error.message})
	}
}

module.exports = postUser