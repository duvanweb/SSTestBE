const repository = require('../repositories/createTableData.Repository')
/**
 * Modulo encargado de la logica de negocio
 * @param id {number} codigo del tipo de tabla que se va a consultar
 * @param data {Object} objeto con la información que se va a guardar
 * @returns {Promise<*|*|*>}
 */
module.exports = ({ id }, data) => {
    return repository(id, data)
}