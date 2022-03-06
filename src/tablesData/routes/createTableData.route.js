const router = require('express').Router()
const controller = require('../controllers/createTableData.Controller')

/* Obtener el listado de los tipos de tablas. */
router.post('/createTableData/:id',controller)
module.exports = router


