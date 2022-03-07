const { TableType } = require('../../../models')
/**
 * Modulo con acceso a los datos, encargado de consultar los registros en la tablas TableType
 * @returns {Promise<Model[]>}
 */
module.exports = async () => {
    return await TableType.findAll()
}