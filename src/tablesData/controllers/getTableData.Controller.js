const service = require('../services/getTableData.Service')
module.exports = (req, res, next) => {
    const { params } = req
    service(params)
        .then((data) =>{
            res.status(200).send(data)
        })
        .catch(next)
}