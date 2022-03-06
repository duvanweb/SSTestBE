const { TableType } = require('../../../models')
module.exports = async (id) => {
    return await TableType.findAll({
        where: { id: id },
        include: [
            {
                association: 'columns',
                attributes: { exclude: ['tableTypeId'] }
            }
        ]
    })
}