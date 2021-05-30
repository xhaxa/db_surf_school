const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const inventaryRouter = require('./inventary.router')

router.use('/auth', authRouter)
router.use ('/users', usersRouter)
//router.use ('/inventary', inventaryRouter)




module.exports = router