const router = require('express').Router()
const controller = require('../controllers/getTableDetail.Controller')

/* Obtener el listado de los tipos de tablas. */
router.get('/getTableDetail/:id',controller)
module.exports = router


