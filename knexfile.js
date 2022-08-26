const path = require("path");
const connection = require("./src/database/knex");

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    /** Por padrão o SQLite não deleta as tabelas em cascata mesmo que seja definido,
     * para a cascata funcionar, é necessário esa função que habilita o PRAGMA
     */
    pool: {
      afterCreate: (conn, callback) => conn.run("PRAGMA foreing_keys = ON", callback)
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true
  }
};
