const mongoose = require('mongoose')

const {wetsuitsSchema} = require('./wetsuits.model') 
const {surfTablesSchema} = require('./surftables.model')

const inventarySchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  description: {
    type: String,
    default: 'Inventary'
  },
  wetsuits: [wetsuitsSchema],
  surftables: [surfTablesSchema]
})

const inventaryModel = mongoose.model('inventary', inventarySchema)

module.exports = inventaryModel
