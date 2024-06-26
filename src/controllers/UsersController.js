const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersController {
  async create(request,response) {
    const {name, email, password} = request.body;

    /*if(!name){
      throw new AppError ("Nome é obrigatório")
    }

    response.status(201).json({name, email, age});*/
    const database = await sqliteConnection();
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.")
    }

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password]);


    return response.status(201).json();
  }

}

module.exports = UsersController