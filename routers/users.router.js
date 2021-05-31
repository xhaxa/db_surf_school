const usersRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const { getAllUsers, seeYourUser, seeOneUser, modifyUser, deleteUser } = require('../controllers/users.controller')

usersRouter.get('/', auth, admin, getAllUsers) 
usersRouter.get('/me', auth, seeYourUser)
usersRouter.get('/:userId',auth, admin, seeOneUser)
usersRouter.put('/:userId',auth, admin, modifyUser)
usersRouter.delete('/:userId',auth, admin, deleteUser)



function auth(req, res, next) {
  /*
    req.body
    req.query
    req.params
    req.headers // req.headers.token
  */

  jwt.verify(
    req.headers.token, 
    process.env.SECRET, 
    (err, insideToken) => {
      if (err) res.json('Token not valid')
      res.locals.id = insideToken.id
      res.locals.admin = insideToken.admin
      next()
  })
}

function admin(req, res, next) {
  console.log(res.locals.admin);
  if (!res.locals.admin) res.json('NO ADMIN') 
  next() 
}


module.exports = usersRouter