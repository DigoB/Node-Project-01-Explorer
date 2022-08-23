require("express-async-errors")

const AppError = require("./utils/AppError")

const express = require("express");

const routes = require("./routes");
const { response } = require("express");

const app = express();

app.use(express.json())

app.use(routes)

app.use(( error, request, response, next) => {
    /** Verificação pelo AppError, valida se o erro vem de alguma informação incorreta do cliente */
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error)
    
    /** Caso não seja erro do lado do cliente, está retornando um 500 para erro do servidor */
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})