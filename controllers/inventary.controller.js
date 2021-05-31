
const inventaryModel = require('../models/inventary.model')

//create Inventary..

function seeInventary(req, res) {
  inventaryModel.find()
  .then((inventary) => {
    console.log(inventary.wetsuits);
    res.json(inventary)
  })
  .catch((err) => {
    res.json(err)
  })
}

/*
function addWetsuit(req, res) {
  const wetsuitNew = req.body
  inventaryModel.create(req.body)
    .then((wetsuit) => {
    inventary.wetsuit.push(wetsuit)
    res.json(inventary.wetsuit)
    })
    .catch((err) => {
      res.json(err)
    })
}
*/

module.exports = {
  seeInventary
}


