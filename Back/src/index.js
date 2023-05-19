const http = require('http')
// const characters = require('./utils/data')
const getCharById = require('./controllers/getCharById')

const PORT = 3001

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
	// console.log(`server raised in port ${PORT}`)

	const {url} = req
	// console.log(url)
	
	if (url.includes('rickandmorty/character')){
		const urlId = url.split('/').pop()
		console.log(urlId)
		getCharById(res, urlId)
		// let found = characters.find(
		// 	(character) => character.id === Number(urlId)
		// )
		// res.writeHead(200, {'Content-Type' : 'application/json'}).end(JSON.stringify(found))
	}
}).listen(PORT, 'localhost')