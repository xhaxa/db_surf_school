const mongoose = require('mongoose')

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
  // wetSuit: {
  //   ref: wetsuits  
  //},
  // surfTable:{
  //   ref: surfTable
  // }
})

const studentsModel = mongoose.model('students', studentsSchema);

module.exports = studentsModel