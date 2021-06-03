
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


function addWetsuit(req, res) {
  inventaryModel.findById(req.params.inventaryId)
    .then((inventary) => {
      inventary.wetsuits.push(req.body)
      inventary.save() 
      res.json(inventary.wetsuits)
    })
    .catch((err) => {
      res.json(err)
    })
}

function addSurftable(req, res) {
  
  inventaryModel.findById(req.params.inventaryId)
    .then((inventary) => {
      inventary.surftables.push(req.body)
      inventary.save() 
      res.json(inventary.surftables)
    })
    
    .catch((err) => {
      res.json(err)
    })
}

function addWetsuitToStudent(req, res){
  const inventaryId = req.params.inventaryId
  const refStudent = req.body._id

  inventaryModel.findById(inventaryId)
  .then((inventary) => {
    const wetsuitId = inventary.wetsuits.id(req.params.wetsuitId)
    
    wetsuitId.students.push(refStudent)
    inventary.save()
    res.json(inventary.wetsuits)
  })
  .catch((err) => {
    res.json(err)
  })
}


function seeWetsuits(req, res) {
  inventaryModel.findById(req.params.inventaryId)
  .then((inventary) => {
    res.json(inventary.wetsuits)
  })
  .catch((err) => {
    res.json(err)
  })
}

function seeSurftables(req, res) {
  inventaryModel.findById(req.params.inventaryId)
  .then((inventary) => {
    res.json(inventary.surftables)
  })
  .catch((err) => {
    res.json(err)
  })
}


function deleteWetsuit(req, res){
  const inventaryId = req.params.inventaryId
  
  inventaryModel.findById(inventaryId)
  .then((inventary) => {
    const wetsuitId = inventary.wetsuits.id(req.params.wetsuitId)
    wetsuitId.remove()
    inventary.save()
    res.json(inventary.wetsuits)
  })
  .catch((err) => {
    res.json(err)
  })
}


function deleteSurftable(req, res){
  const inventaryId = req.params.inventaryId
  
  inventaryModel.findById(inventaryId)
  .then((inventary) => {
    const surftableId = inventary.surftables.id(req.params.surftableId)
    surftableId.remove()
    inventary.save()
    res.json(inventary.surftables)
  })
  .catch((err) => {
    res.json(err)
  })
}


module.exports = {
  seeInventary,
  createInventary,
  addWetsuit,
  seeWetsuits,
  deleteWetsuit,
  addSurftable,
  seeSurftables,
  deleteSurftable,
  addWetsuitToStudent
}


