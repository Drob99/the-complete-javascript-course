const { readDb, writeDb } = require("./db_functions")

// const dataObj = {
//     name: 'omar',
//     favoriteNumbers: [7, 3]
// }

// writeDb(dataObj)

// console.log(readDb());

const saved_data = readDb()

saved_data['numberOfBananas'] = 4

writeDb(saved_data)