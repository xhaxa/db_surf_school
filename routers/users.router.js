const usersRouter = require('express').Router()

const {admin, auth} = require('../utils/function')
const { getAllUsers, seeYourUser, seeOneUser, modifyUser, deleteUser, addStudentToUser, seeUsersStudentList, deleteStudentFromUser } = require('../controllers/users.controller')

usersRouter.get('/', auth, admin, getAllUsers) 
usersRouter.get('/me', auth, seeYourUser)
usersRouter.get('/:userId', auth, admin, seeOneUser)
usersRouter.put('/:userId', auth, admin, modifyUser)
usersRouter.delete('/:userId', auth, admin, deleteUser)
usersRouter.put('/:userId/students/add', auth, admin, addStudentToUser)
usersRouter.get('/:userId/students', auth, admin, seeUsersStudentList)
usersRouter.delete('/:userId/students/delete', auth, admin,  deleteStudentFromUser)




module.exports = usersRouter