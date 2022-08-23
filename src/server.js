const express = require("express");

const app = express();

// Dessa forma nós declaramos parametros da requisição no Express
app.get("/message/:id/:user", (request, response) => {

    // Desestruturação
    const { id, user } = request.params

    response.send(`Id da requisição: ${id}.
    Para o usuário: ${user}`)
})

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})