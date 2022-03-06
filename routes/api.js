const router = require('express').Router()

/* Cargar todas las rutas de la configuracion de las tablas */
router.use('/settingTables',[
    require('../src/settingTables/routes/getTables.route'),
    require('../src/settingTables/routes/getTableDetail.route')
])

/* Cargar todas las rutas del crud de las tablas dinamicas */
router.use('/tablesData',[
    require('../src/tablesData/routes/getTableData.route'),
    require('../src/tablesData/routes/createTableData.route'),
])

module.exports = router;
