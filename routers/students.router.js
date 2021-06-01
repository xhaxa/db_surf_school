const studentsRouter = require('express').Router()
const {admin, auth} = require('../utils/function')

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




module.exports = studentsRouter