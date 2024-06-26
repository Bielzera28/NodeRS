class UsersController {
  create(request,response) {
    const {name, email, age} = request.body;
    response.json({name, email, age});
  }

}

module.exports = UsersController