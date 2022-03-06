const service = require('../services/createTableData.Service')
module.exports = (req, res, next) => {
    const { params } = req
    const { body } = req
    service(params, body)
        .then((data) =>{
            res.status(200).send(data)
        })
        .catch(next)
}