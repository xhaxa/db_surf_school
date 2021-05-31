const mongoose = require('mongoose')

const {wetsuitsSchema} = require('./wetsuits.model') 
const {surfTablesSchema} = require('./surftables.model')

const inventarySchema = new mongoose.Schema({
  
  wetsuits: [wetsuitsSchema],
  surftables: [surfTablesSchema]
})

const inventaryModel = mongoose.model('inventary', inventarySchema)

module.exports = inventaryModel
