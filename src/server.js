const express = require("express");

const app = express();

// O Express precisa saber qual o padrao de dados a ser usado
app.use(express.json())

app.post("/users", (request, response) => {

    const { name, email, password } = request.body

    response.json({ name, email, password })
})

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})