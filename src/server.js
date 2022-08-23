const express = require("express");

const routes = require("./routes")

const app = express();

// O Express precisa saber qual o padrao de dados a ser usado
app.use(express.json())

/** Quando houver uma requisição para o servidor, vai cair aqui nesse método das rotas
 * Ele foi definido acima para buscar as rotas na pasta ./routes, como não defini qual dos 
 * arquivos a ser buscado, o default é ele procurar pelo index.js
 */
app.use(routes)

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})