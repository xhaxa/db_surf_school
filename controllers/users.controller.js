const usersModel = require('../models/users.model')

function getAllUsers(req, res) {
  usersModel.find()
    .then((users) => {
      res.json(users)
    })

    .catch((err) => {
      res.json(err)
    })
}