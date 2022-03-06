const repository = require('../repositories/getTableData.Repository')
module.exports = ({ id }) => {
    return repository(id)
}