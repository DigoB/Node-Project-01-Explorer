const { request } = require("express");
const express = require("express");

const app = express();

// Dessa forma nós declaramos parametros da requisição no Express
// Route params são obrigatórios
app.get("/message/:id/:user", (request, response) => {

    // Desestruturação
    const { id, user } = request.params

    response.send(`Id da requisição: ${id}.
    Para o usuário: ${user}`)
})

/** Query Params, podemos atribuir parametros de pesquisa no endpoint sem necessáriamente
 * eles serem obrigatórios como o Route Params
 */
app.get("/users", (request, response) => {
    const { page, limit } = request.query

    response.send(`Página: ${page}. Limite: ${limit}`)
})

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})