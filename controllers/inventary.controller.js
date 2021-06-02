
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

//FIND BY ID
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

function addSurftable(req, res) {
  
  inventaryModel.find()
    .then((inventary) => {
      console.log(inventary[0].surftables);
      inventary[0].surftables.push(req.body)
      inventary[0].save() 
      res.json(inventary[0])
      console.log(inventary[0].surftables);
    })
    
    .catch((err) => {
      res.json(err)
    })
}

function seeWetsuits(req, res) {
  inventaryModel.find()
  .then((inventary) => {
    res.json(inventary[0].wetsuits)
  })
  .catch((err) => {
    res.json(err)
  })
}

function seeSurftables(req, res) {
  inventaryModel.find()
  .then((inventary) => {
    res.json(inventary[0].surftables)
  })
  .catch((err) => {
    res.json(err)
  })
}
/*
function deleteWetsuit(req, res){
  inventaryModel.find()
  .then((wetsuit) => {

    res.json(inventary[0].wetsuits)
  })
  .catch((err) => {
    res.json(err)
  })
}
*/
/*
function updateWetsuit(req, res) {
  const wetsuitUpdate = req.params.wetsuitId
  inventaryModel.find()
  .then((inventary) => {
    const wetsuitR = inventary[0].wetsuits.filter(
      wetsuit => wetsuit._id === wetsuitUpdate
    )
    wetsuitR =
    
    res.json(inventary[0].wetsuit)
  })
  .catch((err) => {
    res.json(err)
  })
}
*/
/*3

DELETEEEEE
inventaryModel.findByIdAndDelete(req.params.movieId)
.then((movie) => {
  res.json(movie);
})
.catch((err) => {
  res.status(404).json(err);
})

*/

module.exports = {
  seeInventary,
  createInventary,
  addWetsuit,
  seeWetsuits,
  //updateWetsuit,
  addSurftable,
  seeSurftables
}


