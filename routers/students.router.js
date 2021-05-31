const studentsRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const {
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  createStudent
 } = require('../controllers/students.controller')

studentsRouter.get('/', auth, getAllStudents) // SOLO PODRÍA VERLO EL ADMIN - HAY QUE HACERLO
studentsRouter.get('/:studentId',auth, getStudent)
studentsRouter.put('/:studentId',auth, updateStudent)
studentsRouter.delete('/:studentId',auth, deleteStudent)
studentsRouter.post('/',auth, createStudent)


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
      next()
  })
}



module.exports = studentsRouter