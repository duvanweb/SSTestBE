const service = require('../services/removeTableData.Service')
/**
 * Modulo en cargado de recibir los datos y dar la respuesta a la petición
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
    const { params } = req
    service(params)
        .then((data) =>{
            res.status(200).send({ success: true})
        })
        .catch(next)
}