const {Router} = require("express");
const usersRoutes = Router()

/* METODO GET - ROUTE PARAMS
app.get("/:id/:user", (request, response) => {
  const {id, user} = request.params;
  response.send(`Id da mensagem: ${id}. Nome do usuário ${user}`);
}); */

usersRoutes.post("/", (request, response) => {
  const {name, email, age} = request.body;
  response.json({name, email, age});
})

module.exports = usersRoutes;