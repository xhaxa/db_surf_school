const { surfHouseModel } = require('../models/surfHouse.model')

function createSurfHouse (req, res){
  surfHouseModel.create(req.body) 
  .then((house) => {
    console.log(house);
    res.json(house)
  })
  .catch((err) => {
    res.json(err)
  })
}

function deleteSurfHouse (req, res){
  surfHouseModel.findByIdAndDelete(req.params.surfHouseId)
    .then((house) => {
      res.json(house)
    })
    .catch((err) => {
      res.json(err)
    })
}



module.exports = {
  createSurfHouse,
  deleteSurfHouse
}