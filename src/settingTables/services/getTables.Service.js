const repository = require('../repositories/getTables.Repository')
/**
 * Modulo encargado de la logica de negocio
 * @returns {Promise<*>}
 */
module.exports = () => {
    return repository()
}