const mongoose = require('mongoose')

const wetsuitsSchema = new mongoose.Schema({
  nameItem: {
    type: String,
    required: [true, 'The nameItem cannot be blank.']
  },
  category: { 
    type: String, 
  }, 
  brand: {
    type: String,
    enum: ['OneiLl', 'Rip Curl', 'Excel'],
  },
  size: {
    type: String,
    enum: ['4', '6', '8', '10', '12', '14', '16', 'xs', 's', 'm', 'l', 'xl', '2xl', '4xl']
  },
  price: {
    type: Number
  },

  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "students",  // mirar bien como brenda pone el nombre del modelo para escribir aqui el correcto
    },
  ]  
})

const wetsuitsModel = mongoose.model('wetsuits', wetsuitsSchema)
module.exports = wetsuitsModel