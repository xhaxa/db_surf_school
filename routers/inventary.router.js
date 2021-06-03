const inventaryRouter = require('express').Router()
const {admin, auth} = require('../utils/function')
const {seeInventary, createInventary, addWetsuit, seeWetsuits, addWetsuitToStudent, deleteWetsuit, addSurftable, seeSurftables, deleteSurftable}  = require('../controllers/inventary.controller')



inventaryRouter.get('/', auth, seeInventary) 
inventaryRouter.post('/', auth, admin, createInventary) 
inventaryRouter.post('/:inventaryId/wetsuits', auth, addWetsuit)
inventaryRouter.post('/:inventaryId/surftables', auth, addSurftable)
inventaryRouter.get('/:inventaryId/wetsuits', auth, seeWetsuits)
inventaryRouter.get('/:inventaryId/surftables', auth, seeSurftables)

inventaryRouter.put('/:inventaryId/wetsuits/:wetsuitId', auth, addWetsuitToStudent)

inventaryRouter.delete('/:inventaryId/wetsuits/:wetsuitId', auth, deleteWetsuit)
inventaryRouter.delete('/:inventaryId/surftables/:surftableId', auth, deleteSurftable)

module.exports = inventaryRouter
