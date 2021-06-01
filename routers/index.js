const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const inventaryRouter = require('./inventary.router')
const studentsRouter = require('./students.router')
const activitiesRouter = require('./activities.router')


router.use('/auth', authRouter)
router.use ('/users', usersRouter)
router.use ('/inventary', inventaryRouter)
router.use('/students', studentsRouter)
router.use('/activities', activitiesRouter)

module.exports = router