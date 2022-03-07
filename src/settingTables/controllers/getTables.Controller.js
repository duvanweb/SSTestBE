const service = require('../services/getTables.Service')
/**
 * Modulo en cargado de recibir los datos y dar la respuesta a la petición
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
    service()
        .then((data) =>{
            res.status(200).send(data)
        })
        .catch(next)
}