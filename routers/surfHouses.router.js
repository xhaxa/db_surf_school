const surfHousesRouter = require('express').Router()

const { admin, auth } = require('../utils/function')

const {
  createSurfHouse,
  deleteSurfHouse
} = require('../controllers/surfHouse.controller')


surfHousesRouter.post('/', auth, admin, createSurfHouse)
surfHousesRouter.delete('/:surfHouseId', auth, admin, deleteSurfHouse)


module.exports = surfHousesRouter