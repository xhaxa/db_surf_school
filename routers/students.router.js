const studentsRouter = require('express').Router()
const { admin, auth } = require('../utils/function')

const {
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  createStudent,
  addSurfHouseToStudent,getSurfHouseOfStudent
 } = require('../controllers/students.controller')

studentsRouter.get('/', auth, admin, getAllStudents) 
studentsRouter.get('/:studentId', auth, admin, getStudent)
studentsRouter.put('/:studentId', auth, admin, updateStudent)
studentsRouter.delete('/:studentId', auth, admin, deleteStudent)
studentsRouter.post('/', auth, admin, createStudent)
studentsRouter.put('/:studentId/surfhouses/add', auth, admin, addSurfHouseToStudent)
studentsRouter.get('/:studentId/surfhouse', auth, admin, getSurfHouseOfStudent)




module.exports = studentsRouter