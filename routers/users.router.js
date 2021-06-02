const usersRouter = require('express').Router()

const {admin, auth} = require('../utils/function')
const { getAllUsers, seeYourUser, seeYourStudents, seeOneYourStudents, seeOneUser, modifyUser, deleteUser, addStudentToUser, seeUsersStudentList, deleteStudentFromUser, seeSurfhouseOfTheirStudents } = require('../controllers/users.controller')

usersRouter.get('/', auth, admin, getAllUsers) 
usersRouter.get('/me', auth, seeYourUser)
usersRouter.get('/me/students', auth, seeYourStudents)
usersRouter.get('/me/students/:studentId', auth, seeOneYourStudents)
usersRouter.get('/me/students/surfhouse', auth, seeSurfhouseOfTheirStudents)
 
usersRouter.get('/:userId', auth, admin, seeOneUser)
usersRouter.put('/:userId', auth, admin, modifyUser)
usersRouter.delete('/:userId', auth, admin, deleteUser)
usersRouter.get('/:userId/students', auth, admin, seeUsersStudentList)
usersRouter.put('/:userId/students/add', auth, admin, addStudentToUser)
usersRouter.put('/:userId/students/delete', auth, admin,  deleteStudentFromUser)




module.exports = usersRouter