const express = require("express");

let publications = [];

const server = express();

server.use(express.json());
// para devolver el mensaje de hola mundo en nuestro server

// server.get('/', function (req, res) {
//     res.status(200).send('Hola mundo!');
//  });


// Para devolver el hola mundo en formato Json
server.get('/', function (req, res) {

	// console.log(req.body)

    var obj = {
       saludo: 'Hola mundo!',
    };
    res.json(obj);
 });

// server.post('/', function (req, res) {
//     var obj = {
//        saludo: 'Hola' + req.body.name,
//     };
//     res.json(obj);
//  });

 let id = 1

 server.post('/posts', (req, res) => {
		//console.log(req.body)
		// console.log(req.hasOwnProperty('body'))
		const {author, title, contents} = req.body
		 if(!author || !title || !contents){
			return res.status(400).json({error: 'No se recibieron los parámetros necesarios para crear la publicación'})
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

server.get('/posts', (req, res) => {
	// const {term} = req.query

	// if(term){
	// 	const getTerm = publications.filter(p => p.title.includes(term)) || p.contents.includes(term)

	// 	return res.status(200).json(getTerm)
	// }	else {
	// 	return res.status(400).json({"error": "No existe ninguna publicación con dicho título y autor indicado"})
	// }

	if(publications.length === 0){
		return res.status(400).json({error: 'No se encontraron publicaciones'})
	}	else {
		return res.status(200).json(publications)
	}
})

server.get('/posts/author/:author', (req, res) => {
	// const {title, contents} = req.body
	// const {author} = req.params

	// if(!author || !title || !contents){
	// 	return res.status(400).json({error: "No existe ninguna publicación con dicho título y autor indicado"})
	// }
	// const newPost = {
	// 	id: id++,
	// 	author,
	// 	title,
	// 	contents
	// }
	// publications.push(newPost)
	// res.status(200).send(publications)

	const {author} = req.params

	const postOfAuthor = publications.filter(p => p.author === author)

	if (postOfAuthor.length) return res.status(200).json(postOfAuthor)
	res.status(400).json({"error": "No existe ninguna publicación del autor indicado"})
 })


 server.put('/posts/:id', (req, res) => {
	// const {id, title, contents} = req.body
	

	// if(!id || !title || !contents){
	// 	res.status(400).json({error: "No se recibieron los parámetros necesarios para modificar la publicación"})
	// }
	// const findPost = publications.find(p => p.id === Number(id))

	// if(findPost){
	// 	findPost.title = title
	// 	findPost.contents = contents
	// 	return res.status(200).json(findPost)
	// }

	// res.status(400).json({error: 'No se recibió el id correcto necesario para modificar la publicación'})

	const {id} = req.params

	const {author, title, contents} = req.body

	const searchPublicationsById = publications.find(pub => pub.id === Number(id))

	//console.log(searchPublicationsById)

	if(!searchPublicationsById){
		return res.status(404).json({error: 'No se recibió el id correcto necesario para modificar la publicación'})
	}

	if(author && title && contents){
		searchPublicationsById.author = author
		searchPublicationsById.title = title
		searchPublicationsById.contents = contents
		res.json(searchPublicationsById)
	}	
	// else{
	// 	throw('falta completar datos')
	// }

 })

 server.delete('/posts', (req, res) => {
	const {id} = req.body

	const findPost = publications.find(p => p.id === Number(id))


	if(!id || !findPost){
		return res.status(400).json({error: "No se recibió el id correcto necesario para eliminar la publicación"})
	}
	publications = publications.filter(p => p.id !== Number(id))
	res.status(200).json({ success: true})
 })
// server

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
