const router = require('express').Router()

const authRouter = require('./auth.router')

router.use('/auth', authRouter)

module.exports = router