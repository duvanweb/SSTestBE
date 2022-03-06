const router = require('express').Router()
const controller = require('../controllers/getTables.Controller')

/* Obtener el listado de los tipos de tablas. */
router.get('/getTables',controller)
module.exports = router


