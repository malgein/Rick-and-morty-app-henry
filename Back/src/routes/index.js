// const router  = require("express");

const login = require('../controllers/login')
const {postFav, deleteFav} = require('../controllers/handleFavorites.js')
const getCharById = require('../controllers/getCharById')

const router = require('express').Router()

router.get('/character/:id', getCharById)
router.get('/login', login)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router;



