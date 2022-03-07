const { TableType } = require('../../../models')
/**
 * Modulo con acceso a los datos, encargado de consultar los registros en la tablas TableType con el detalle de la tabla TableDetail
 * @param id
 * @returns {Promise<Model<any, TModelAttributes>>}
 */
module.exports = async (id) => {
    return await TableType.findOne({
        where: { id: id },
        include: [
            {
                association: 'columns',
                attributes: { exclude: ['tableTypeId'] }
            }
        ],
        order:[['columns','id','ASC']]
    })
}