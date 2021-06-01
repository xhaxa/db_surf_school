
const inventaryModel = require('../models/inventary.model')

function createInventary(req, res) {
  inventaryModel.create(req.body)
  .then((inventary) => {
    res.json(inventary)
  })
  .catch((err) => {
    res.json(err)
  })
}

function seeInventary(req, res) {
  inventaryModel.find()
  .then((inventary) => {
    res.json(inventary)
  })
  .catch((err) => {
    res.json(err)
  })
}

/*
function addWetsuit(req, res) {
  
  inventaryModel.find()
    .then((inventary) => {
    console.log(inventary[0].wetsuits);
    inventary[0].wetsuits.push(req.body)
    inventary[0].save((err) => {
      if (err) {
        return res.json(err)
      } else {
        res.json(inventary[0])
      }
    })
    console.log(inventary[0].wetsuits);
    })
    .catch((err) => {
      res.json(err)
    })
}
*/

module.exports = {
  seeInventary,
  createInventary,
  //addWetsuit
}


