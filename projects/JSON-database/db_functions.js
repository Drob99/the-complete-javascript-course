const fileSystem = require('fs')

function readDb(dbName = 'db.json') {
    // read JSON object from file
    const data = fileSystem.readFileSync(dbName, 'utf-8')

    // parse JSON from JSON to object and return it
    const converted_data = JSON.parse(data)
    return converted_data
}

function writeDb(obj, dbName = 'db.json') {
    // check that a user has passed in an object
    if (!obj)
        return
    try {
        // convert our object to the JSON format
        let converted_data = JSON.stringify(obj)
        fileSystem.writeFileSync(dbName, converted_data)
        console.log('Saved Successfully');
        // save JSON to our JSON database
    } catch (error) {
        console.log('Failed to save data\n', error.message);
    }

}

module.exports = {
    readDb, writeDb
}