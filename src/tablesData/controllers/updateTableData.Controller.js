const service = require('../services/updateTableData.Service')
/**
 * Modulo en cargado de recibir los datos y dar la respuesta a la petición
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
    const { params } = req
    const { body } = req
    service(params, body)
        .then((data) =>{
            res.status(200).send(data)
        })
        .catch(next)
}