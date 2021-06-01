
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

o hacer un post pero con la ruta api/inventary/:inventaryId/wetsuis 

 o hacer un //PUT
function addWetsuit (req, res){
//deberia ser con findByIdAndUpdate (req.params.id, req.bod, {new : true}) y sería así 
/*
  Movies.findByIdAndUpdate(req.params.movieId, req.body, {new : true})
    .then()
    .catch()
*/ 

function addWetsuit(req, res) {
  
  inventaryModel.find()
    .then((inventary) => {
      console.log(inventary[0].wetsuits);
      inventary[0].wetsuits.push(req.body)
      inventary[0].save() 
      res.json(inventary[0])
      console.log(inventary[0].wetsuits);
    })
    
    .catch((err) => {
      res.json(err)
    })
}


module.exports = {
  seeInventary,
  createInventary,
  addWetsuit
}


