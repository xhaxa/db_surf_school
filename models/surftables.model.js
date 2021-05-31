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
  },
  size: {
    type: String,
    required: [true, 'The size in necessary.']
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

const surfTablesModel = mongoose.model('surftables', surfTablesSchema)
module.exports ={
  surfTablesModel,
  surfTablesSchema
}