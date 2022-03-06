const { TableData1, TableData2, TableData3 } = require('../../../models')
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