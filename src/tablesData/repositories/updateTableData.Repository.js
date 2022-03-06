const { TableData1, TableData2, TableData3 } = require('../../../models')
/**
 * Modulo con acceso a los datos, encargado de actualizar los registros a las tablas TableData1, TableData2, TableData3
 * @param id
 * @param idItem
 * @param data
 * @returns {Promise<*>}
 */
module.exports = async (id, idItem, data) => {
    switch (id) {
        case '1':
            return await TableData1.update(data,{ where: { id: idItem }})
            break
        case '2':
            return await TableData2.update(data,{ where: { id: idItem }})
        case '3':
            return await TableData3.update(data,{ where: { id: idItem }})
            break
    }
}