const router = require('express').Router()
const controller = require('../controllers/removeTableData.Controller')

/* Obtener el listado de los tipos de tablas. */
router.delete('/removeTableData/:id/:idItem',controller)
module.exports = router


