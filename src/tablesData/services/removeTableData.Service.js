const repository = require('../repositories/removeTableData.Repository')
/**
 * Modulo encargado de la logica de negocio
 * @param id {number} codigo del tipo de tabla que se va a consultar
 * @param idItem {number} codigo del registro de la tabla que se va eliminar
 * @returns {Promise<*|*|*>}
 */
module.exports = ({ id, idItem }) => {
    return repository(id, idItem)
}