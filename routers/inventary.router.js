const inventaryRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const seeInventary  = require('../controllers/inventary.controller')

inventaryRouter.get('/', seeInventary) 



function auth(req, res, next) {
  
   // req.body
   // req.query
   // req.params
   // req.headers // req.headers.token
  

  jwt.verify(
    req.headers.token, 
    process.env.SECRET, 
    (err, insideToken) => {
      if (err) res.json('Token not valid')
      res.locals.id = insideToken.id
      next()
  })
}



module.exports = inventaryRouter
