const activitiesRouter = require('express').Router()
const { auth, admin } = require('../utils/function')


const {
  filterActivities,
  getAllActivities,
  getOneActivity,
  deleteActivity,
  createActivity
} = require('../controllers/activities.controller')



activitiesRouter.get('/', getAllActivities)
activitiesRouter.get('/filter', filterActivities)


activitiesRouter.post('/', auth, admin, createActivity)
activitiesRouter.get('/:activityId', getOneActivity)
activitiesRouter.delete('/:activityId', auth, admin, deleteActivity)


module.exports = activitiesRouter