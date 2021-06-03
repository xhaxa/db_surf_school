const activitiesRouter = require('express').Router()
const { auth, admin } = require('../utils/function')


const {
  getAllActivities,
  getOneActivity,
  deleteActivity,
  createActivity
} = require('../controllers/activities.controller')

activitiesRouter.get('/', getAllActivities)
activitiesRouter.post('/', auth, admin, createActivity)
activitiesRouter.get('/:activityId', getOneActivity)
activitiesRouter.delete('/:activityId', auth, admin, deleteActivity)


module.exports = activitiesRouter