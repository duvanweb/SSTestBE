const { TableData1, TableData2, TableData3 } = require('../../../models')
/**
 * Modulo con acceso a los datos, encargado de guardar los registros en las tablas TableData1, TableData2, TableData3
 * @param id
 * @param data
 * @returns {Promise<Model<any, TModelAttributes>>}
 */
module.exports = async (id, data) => {
    switch (id) {
        case '1':
            return await TableData1.create(data)
            break
        case '2':
            return await TableData2.create(data)
            break
        case '3':
            return await TableData3.create(data)
            break
    }
}