const express = require("express");

let publications = [];

const server = express();

server.use(express.json());
// para devolver el mensaje de hola mundo en nuestro server

// server.get('/', function (req, res) {
//     res.status(200).send('Hola mundo!');
//  });


// Para devolver el hola mundo en formato Json
// server.get('/', function (req, res) {
//     var obj = {
//        saludo: 'Hola mundo!',
//     };
//     res.json(obj);
//  });

// server.post('/', function (req, res) {
//     var obj = {
//        saludo: 'Hola' + req.body.name,
//     };
//     res.json(obj);
//  });

 let id = 1

 server.post('/posts', (req, res) => {
		console.log(req.body)
		// console.log(req.hasOwnProperty('body'))
		const {author, title, contents} = req.body
		 if(!author || !title || !contents){
			return res.status(STATUS_USER_ERROR).json({error: 'No se recibieron los parametros necesarios para crear el Post'})
		}
		const newPost = {
			id: id++,
			author,
			title,
			contents
		}
		publications.push(newPost)
		res.status(200).json(newPost)
	}
)

server.post('/posts/author/:author', (req, res) => {
	const {title, contents} = req.body
	const {author} = req.params

	if(!author || !title || !contents){
		return res.status(STATUS_USER_ERROR).json({error: 'No se recibieron los parametros necesarios para crear el post'})
	}
	const newPost = {
		id: id++,
		author,
		title,
		contents
	}
	publications.push(newPost)
	res.status(200).json(newPost)
})

server





//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
