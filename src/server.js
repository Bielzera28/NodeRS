const express = require("express");

const app = express()
app.use(express.json());

/* METODO GET - ROUTE PARAMS
app.get("/:id/:user", (request, response) => {
  const {id, user} = request.params;
  response.send(`Id da mensagem: ${id}. Nome do usuário ${user}`);
}); */

app.post("/users", (request, response) => {
  const {name, email, age} = request.body;
  response.json({name, email, age});
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));