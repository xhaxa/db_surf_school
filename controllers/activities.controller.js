const { activitiesModel } = require('../models/activities.model')

function getAllActivities(req, res) {
  activitiesModel.find(req.query)
    .then((activities) => {
      res.json(activities)
    })
    .catch((err) => {
      res.json(err)
    })
}

function getOneActivity(req, res) {
  activitiesModel.findById(req.params.activityId)
    .then((activity) => {
      res.json(activity)
    })
    .catch((err) => {
      res.json(err)
    })
}

function createActivity (req, res){
  activitiesModel.create(req.body) 
  .then((activity) => {
    console.log(activity);
    res.json(activity)
  })
  .catch((err) => {
    res.json(err)
  })
}


function deleteActivity(req, res){
  activitiesModel.findByIdAndDelete(req.params.activityId)
    .then((activity) => {
      res.json(activity)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = {
  getAllActivities,
  getOneActivity,
  createActivity,
  deleteActivity
}