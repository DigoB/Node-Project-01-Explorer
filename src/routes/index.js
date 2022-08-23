const {Router} = require("express")

const usersRoutes = require("./users.routes")

const router = Router()

/** Quando a requisição vier do server.js, vai procurar qual a requisição 
 * solicitada, nesse caso, está solicitando a /users.
 * Ao encontrar o endereço, o use() vai direcionar para a rota que foi definida
 * no require() acima
 */
router.use("/", usersRoutes)

module.exports = usersRoutes