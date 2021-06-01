const inventaryRouter = require('express').Router()
const {admin, auth} = require('../utils/function')
const {seeInventary, createInventary, addWetsuit}  = require('../controllers/inventary.controller')


inventaryRouter.post('/', auth, admin, createInventary) 
inventaryRouter.get('/', auth, seeInventary) 
//inventaryRouter.post('/wetsuits', addWetsuit)


module.exports = inventaryRouter
