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
  //surfHouse: {
    //ref: surfHouse
  //},
  rental: {
    type: String
  },
  // activities: {
  //   ref: activities
  // },
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

module.exports = studentsModel