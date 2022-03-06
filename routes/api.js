const router = require('express').Router()

/* Cargar todas las rutas de la configuracion de las tablas */
router.use('/settingTables',[
    require('../src/settingTables/routes/getTables.route'),
    require('../src/settingTables/routes/getTableDetail.route')
])
module.exports = router;
