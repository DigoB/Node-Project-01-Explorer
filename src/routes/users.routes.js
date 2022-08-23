const { Router } = require("express")

const usersRoutes = Router()


/** Após o index.js chamar esse arquivo, ele vai buscar o método que foi chamado, nesse caso POST,
 * então o endpoint é construido e devolve a resposta como um JSON
 */
usersRoutes.post("/", (request, response) => {

    const { name, email, password } = request.body

    response.json({ name, email, password })
})

/** É necessário exportar as rotas dessa forma para que seja possivel utilizar esse 
 * arquivo em outras partes do projeto
 */
module.exports = usersRoutes;