const AppError = require("../utils/AppError")

class UsersController {
  create(request,response) {
    const {name, email, age} = request.body;

    if(!name){
      throw new AppError ("Nome é obrigatório")
    }

    response.status(201).json({name, email, age});
  }

}

module.exports = UsersController