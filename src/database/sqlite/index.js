const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const path = require("path")

/** Ao lidar com banco de dados, caso o arquivo não exista ao iniciar o programa
 * ele vai criar, caso exista vai se conectar direto.
 * Por isso a função deve ser assincrona
 */
async function sqliteConnection() {

    /** sqlite é usado para estabelecer a comunicação com o banco de dados */
    const database = await sqlite.open({
        /** __dirname pega de forma automática em qual pasta estamos
         * ".." vai voltar uma pasta
         * Então indicamos qual o arquivo de destino
         * Caso seja configurado corretamente, o arquivo database.db será criado automaticamente
         */
        filename: path.resolve(__dirname, "..", "database.db"),
        /** sqlite3 é o driver que vai estabelecer a comunicação com o banco de dados */
        driver: sqlite3.Database
    })

    return database
}

module.exports = sqliteConnection