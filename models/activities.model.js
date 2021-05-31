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
    type: Number,
    required :true
  },
})

