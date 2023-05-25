const axios = require('axios')
//*Tarea de promises
// const getCharById = ((res, id) => {
// 	axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(response => {
// 		const {id, name, image, gender, species, origin, status} = response.data
// 		res.writeHead(200, {'Content-Type': 'application/json'})
// 		res.end(
// 			JSON.stringify({id, name, image, gender, species, origin, status})
// 		)
// 	}).catch(error => {
// 		res.writeHead(500, {'Content-Type': 'text/plain'})
// 		res.end(error.message)
// 	})
// })

// module.exports = getCharById

// const URL = "https://rickandmortyapi.com/api/character/"

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
