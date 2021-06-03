const activitiesRouter = require('express').Router()
const { auth, admin } = require('../utils/function')


const {
  filterActivities,
  getAllActivities,
  getOneActivity,
  deleteActivity,
  createActivity
} = require('../controllers/activities.controller')



activitiesRouter.get('/', auth, getAllActivities)
activitiesRouter.get('/me/filter', auth, filterActivities)
activitiesRouter.get('/:activityId', auth, getOneActivity)
activitiesRouter.post('/', auth, admin, createActivity)
activitiesRouter.delete('/:activityId', auth, admin, deleteActivity)


module.exports = activitiesRouter