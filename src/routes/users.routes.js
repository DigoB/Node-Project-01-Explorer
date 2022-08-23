const { Router } = require("express")

const UsersController = require("../controllers/UsersController")
const usersRoutes = Router()

/** 
 * O Middleware é um passo antes de chegar a função de destino, podemos utilizar ele para fazer
 * algum tipo de tratamento dos dados antes chegar a função e ser executada.
 * Pode ser usado por exemplo para um fluxo de autenticação.
 */
function middleware(request, response, next) {

    console.log("Voce passou pelo midleware")
    
    if(!request.body.isAdmin) {
        return response.status(401).json({ message: "User unauthorized"})
    }
    
    next()
}

const usersController = new UsersController()

/** Caso deseje utilizar o middleware para todas as rotas podemos aplica-lo da seguinte forma:
 * usersRoutes.use(middleware)
 * Para isso é necessário analisar se faz sentido a mesma regra para todos os endpoints
 */
usersRoutes.post("/users", middleware, usersController.create)

module.exports = usersRoutes;