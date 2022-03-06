const repository = require('../repositories/createTableData.Repository')
module.exports = ({ id }, data) => {
    return repository(id, data)
}