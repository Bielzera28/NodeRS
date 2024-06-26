const {Router} = require("express");
const usersRoutes = Router()
const UsersController = require("../controllers/UsersController")
const usersController = new UsersController()

/* METODO GET - ROUTE PARAMS
app.get("/:id/:user", (request, response) => {
  const {id, user} = request.params;
  response.send(`Id da mensagem: ${id}. Nome do usuário ${user}`);
}); */

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;