const router = require('express').Router()
const controller = require('../controllers/getTableData.Controller')

/* Obtener el listado de los tipos de tablas. */
router.get('/getTableData/:id',controller)
module.exports = router


