const axios = require('axios')

const getCharById = (req, res) =>{
	let {id} = req.params
	console.log(req.params)
	let url = `https://rickandmortyapi.com/api/character/${id}`

		axios.get(url).then(data => {
		//exitoso y entro personajes
		if(data.data.name){

		let {id, name, gender, species, origin, image, status} = data.data

		let charObj = {
			id,
			name,
			gender,
			species,
			origin,
			image,
			status,
		}

		res.status(200).json(charObj)
		
		}
		//exitoso pero no encontro personajes
		else{
			res.status(404).send('Not found')
		}
	})
	//llamada no exitosa
	.catch(err => {
		res.status(500).send(err.message)
		})
	}

module.exports = getCharById
