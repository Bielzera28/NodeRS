const {Router} = require("express");
const usersRoutes = Router()
const UsersController = require("../controllers/UsersController")
const usersController = new UsersController()

function myMiddleware(request, response, next) {
  console.log("Você passou pelo Middleware!")
  
  if(!request.body.isAdmin){
    return response.json("user unauthorized")
  }

  next()
} 

/* METODO GET - ROUTE PARAMS
app.get("/:id/:user", (request, response) => {
  const {id, user} = request.params;
  response.send(`Id da mensagem: ${id}. Nome do usuário ${user}`);
}); */

usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;