const repository = require('../repositories/getTableDetail.Repository')
module.exports = ({ id }) => {
    return repository(id)
}