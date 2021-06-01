const  mongoose = require('mongoose')

const activitiesSchema = new mongoose.Schema({
  description: {
    type: String,
    required :true
  },
  date: {
    type: Date,
    
  }, 
   price: {
    type: String,
    required :true
  },
})

const activitiesModel = mongoose.model('activities', activitiesSchema)

module.exports = {
  activitiesModel,
  activitiesSchema
}