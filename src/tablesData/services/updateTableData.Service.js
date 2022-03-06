const repository = require('../repositories/updateTableData.Repository')
/**
 * Modulo encargado de la logica de negocio
 * @param id {number} codigo del tipo de tabla que se va a consultar
 * @param idItem {number} codigo del registro de la tabla que se va
 * @param data {Object} objeto con la información que se va a actualizar
 * @returns {Promise<*|*|*>}
 */
module.exports = ({ id, idItem }, data) => {
    return repository(id, idItem, data)
}