const sqliteConnection = require("../../sqlite")

const createUsers = require('./createUsers')

/** Migration usada para criar a tabela no banco de dados */
async function runMigration() {
    const schemas = [
        createUsers
    ].join('')

    sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = runMigration