const mongoose = require('mongoose')

const surfTablesSchema = new mongoose.Schema({
  nameItem: {
    type: String,
    required: [true, 'The nameItem cannot be blank.']
  },
  category: { 
    type: String,
    default: 'Surf-Tables'  
  }, 
  brand: {
    type: String,
    default: 'brand'
  },
  size: {
    type: String,
    required: [true, 'The size in necessary.'],
    default: 'LongBoard'
  },
  price: {
    type: String,
    default: 'To consult'
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "students",
    }
  ]
})

const surfTablesModel = mongoose.model('surftables', surfTablesSchema)
module.exports ={
  surfTablesModel,
  surfTablesSchema
}