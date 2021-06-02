const mongoose = require('mongoose')
// const {surfTablesModel} = require(ruta)?



const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Your username cannot be blank.']
  },
  email: { 
    type: String, 
    lowercase: true,
    unique: true
  }, 
  passport: {
    type: String
  },
  surfHouse: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "surfhouse" //probar
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  activities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "activities" //probar
    }
  ],
  wetSuit: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "wetsuits" //probar
    }
  ] ,
  surfTabe: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "surftables",  // probar
    }
  ]
})

const studentsModel = mongoose.model('students', studentsSchema);

module.exports = {
  studentsModel,
  studentsSchema
}