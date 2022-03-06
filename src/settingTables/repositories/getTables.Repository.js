const { TableType } = require('../../../models')
module.exports = async () => {
    return await TableType.findAll()
}