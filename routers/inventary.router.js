const inventaryRouter = require('express').Router()
const {admin, auth} = require('../utils/function')
const {seeInventary, createInventary, addWetsuit, seeWetsuits, updateWetsuit, addSurftable, seeSurftables}  = require('../controllers/inventary.controller')


inventaryRouter.post('/', auth, admin, createInventary) 
inventaryRouter.get('/', auth, seeInventary) 
inventaryRouter.post('/wetsuits', auth, addWetsuit)

//inventaryRouter.put('/wetsuits/:wetsuitId', auth, updateWetsuit)

inventaryRouter.get('/wetsuits', auth, seeWetsuits)
inventaryRouter.post('/surftables', auth, addSurftable)
inventaryRouter.get('/surftables', auth, seeSurftables)

module.exports = inventaryRouter
