const { TableData1, TableData2, TableData3 } = require('../../../models')
/**
 * Modulo con acceso a los datos, encargado de eliminar los registros a las tablas TableData1, TableData2, TableData3
 * @param id
 * @param idItem
 * @returns {Promise<number>}
 */
module.exports = async (id, idItem) => {
    switch (id) {
        case '1':
            return await TableData1.destroy( { where: { id: idItem }} )
            break
        case '2':
            return await TableData2.destroy( { where: { id: idItem }} )
        case '3':
            return await TableData3.destroy( { where: { id: idItem }} )
            break
    }
}