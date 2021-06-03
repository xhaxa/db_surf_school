const {studentsModel} = require('../models/students.model')

function filterAllStudents(req, res) {
  studentsModel.find({ $or: [ 
    { passport : req.query.passport },//revisar si es exacto
    { name : {'$regex': req.query.name, '$options' : 'i' }}//revisar la expresion regular 

    //add to router 
    ]})
    .then((students) => {
      res.json(students)
    })
    .catch((err) => {
      res.json(err)
    })
}

function getAllStudents(req, res) {
  studentsModel.find(req.query)
    .then((students) => {
      res.json(students)
    })
    .catch((err) => {
      res.json(err)
    })
}


function getStudent(req, res) {
  const studentId = req.params.studentId 
  studentsModel.findById(studentId)
    .then((student) => res.json(student))
    .catch((err) => res.json(err))
}



function createStudent(req, res) {
  studentsModel.create(req.body) 
  .then((student) => {
    console.log(student);
    res.json(student)
  })
  .catch((err) => {
    res.json(err)
  })
}


function updateStudent(req, res) {
  studentsModel.findByIdAndUpdate(req.params.studentId, req.body, {new : true})
  .then((student) => {
    res.json(student)
  })
  .catch((err) => {
    res.json(err)
  })
}

function deleteStudent(req, res) {
  studentsModel.findByIdAndDelete(req.params.studentId)
    .then((student) => {
      res.json(student)
    })
    .catch((err) => {
      res.json(err)
    })
}

function addSurfHouseToStudent(req, res) {
  const studentId = req.params.studentId
  const refSurfHouse = req.body._id

  studentsModel.findById(studentId)
  .then((student) => {
    student.surfHouse.push(refSurfHouse)
    student.save()
    res.json(student)
  })
  .catch((err) => {
    res.json(err)
  })
}

function getSurfHouseOfStudent (req,res){
  const studentId = req.params.studentId
  
  studentsModel.findById(studentId)
  .populate('surfHouse')
  .then((student) => {
    res.json(student.surfHouse)
  })
  .catch((err) => {
    res.json(err)
  })
}


module.exports = {
 filterAllStudents,
 getAllStudents,
 getStudent,
 updateStudent,
 deleteStudent,
 createStudent,
 addSurfHouseToStudent,
 getSurfHouseOfStudent
}