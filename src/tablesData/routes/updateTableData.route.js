const router = require('express').Router()
const controller = require('../controllers/updateTableData.Controller')

/* Obtener el listado de los tipos de tablas. */
router.put('/updateTableData/:id/:idItem',controller)
module.exports = router


