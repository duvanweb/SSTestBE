const service = require('../services/getTables.Service')
module.exports = (req, res, next) => {
    service()
        .then((data) =>{
            res.status(200).send(data)
        })
        .catch(next)
}