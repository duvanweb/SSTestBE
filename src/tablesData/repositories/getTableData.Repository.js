const { TableData1, TableData2, TableData3 } = require('../../../models')
module.exports = async (id) => {
    switch (id) {
        case '1':
            return await TableData1.findAll()
            break
        case '2':
            return await TableData2.findAll()
            break
        case '3':
            return await TableData3.findAll()
            break
    }
}