const studentsRouter = require('express').Router()
const { admin, auth } = require('../utils/function')

const {
  filterAllStudents,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  createStudent,
  addSurfHouseToStudent,
  getSurfHouseOfStudent
 } = require('../controllers/students.controller')

 studentsRouter.get('/', auth, admin, getAllStudents) 
 studentsRouter.get('/filter',auth, admin, filterAllStudents)
 studentsRouter.get('/:studentId', auth, admin, getStudent)

studentsRouter.post('/', auth, admin, createStudent)
studentsRouter.put('/:studentId', auth, admin, updateStudent)
studentsRouter.delete('/:studentId', auth, admin, deleteStudent)
studentsRouter.get('/:studentId/surfhouse', auth, admin, getSurfHouseOfStudent)
studentsRouter.put('/:studentId/surfhouses/add', auth, admin, addSurfHouseToStudent)




module.exports = studentsRouter