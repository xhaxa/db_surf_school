const mongoose = require('mongoose')

const wetsuitsSchema = new mongoose.Schema({
  nameItem: {
    type: String,
    required: [true, 'The nameItem cannot be blank.'],
    default: 'Wet-Suits'
  },
  category: { 
    type: String, 
    default: 'Unisex'
  }, 
  brand: {
    type: String,
    enum: ['OneiLl', 'Rip Curl', 'Excel', 'No-brand'],
    default: 'No-brand'
  },
  size: {
    type: String,
    enum: ['4', '6', '8', '10', '12', '14', '16', 'xs', 's', 'm', 'l', 'xl', '2xl', '4xl'],
    default: 'size'
  },
  price: {
    type: Number,
    default: 'To consult'
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "students",
    }
  ]    
})

const wetsuitsModel = mongoose.model('wetsuits', wetsuitsSchema)

module.exports = {
  wetsuitsModel,
  wetsuitsSchema
}