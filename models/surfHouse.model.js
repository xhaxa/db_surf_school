const mongoose = require('mongoose')

const surfHouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The House's name is required."]
  },
  address: {
    type: String,
    required: [true, "The House's address is required."]
  },
  capacity: {
    type: Number,
  },
  price: {
    type: String,
  },
  availability: {
    type : Boolean
  },
  activities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "activities" //probar
    }
  ] 
  
})
const surfHouseModel = mongoose.model('surfhouse', surfHouseSchema)

module.exports = {
  surfHouseModel,
  surfHouseSchema
}