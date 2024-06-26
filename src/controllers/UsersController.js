class UsersController {
  create(request,response) {
    const {name, email, age} = request.body;
    response.status(201).json({name, email, age});
  }

}

module.exports = UsersController