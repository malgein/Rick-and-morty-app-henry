// const http = require('http')
// // const characters = require('./utils/data')
// const getCharById = require('./controllers/getCharById')

// const PORT = 3001

// http.createServer((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
// 	// console.log(`server raised in port ${PORT}`)

// 	const {url} = req
// 	// console.log(url)
	
// 	if (url.includes('rickandmorty/character')){
// 		const urlId = url.split('/').pop()
// 		console.log(urlId)
// 		getCharById(res, urlId)
// 		// let found = characters.find(
// 		// 	(character) => character.id === Number(urlId)
// 		// )
// 		// res.writeHead(200, {'Content-Type' : 'application/json'}).end(JSON.stringify(found))
// 	}
// }).listen(PORT, 'localhost')

const express = require('express');
const server = express();
const router = require('./routes/')
const PORT = 3001;

server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		 'Access-Control-Allow-Headers',
		 'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header(
		 'Access-Control-Allow-Methods',
		 'GET, POST, OPTIONS, PUT, DELETE'
	);
	next();
});

server.use(express.json())

server.use('/rickandmorty', router)

server.listen(PORT, () => {
	console.log('Server raised in port: ' + PORT);
});
