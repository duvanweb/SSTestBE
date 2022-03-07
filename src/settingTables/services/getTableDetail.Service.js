const repository = require('../repositories/getTableDetail.Repository')
/**
 * Modulo encargado de la logica de negocio
 * @param id {number} codigo del tipo de tabla que se va a consultar
 * @returns {Promise<*>}
 */
module.exports = ({ id }) => {
    return repository(id)
}