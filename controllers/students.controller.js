const {studentsModel} = require('../models/students.model')


//listado de todos los students
function getAllStudents(req, res) {
  studentsModel.find(req.query)
    .then((students) => {
      res.json(students)
    })
    .catch((err) => {
      res.json(err)
    })
}

//ver un student
function getStudent(req, res) {
  const studentId = req.params.studentId 
  studentsModel.findById(studentId)
    .then((student) => res.json(student))
    .catch((err) => res.json(err))
}

//>> coger listado de las surfHouse donde están sus student


//crear students
function createStudent(req, res){
  studentsModel.create(req.body) 
  .then((student) => {
    console.log(student);
    res.json(student)
  })
  .catch((err) => {
    res.json(err)
  })
}

//  Asignarle una actividad a un student
function updateStudent(req, res){
  studentsModel.findByIdAndUpdate(req.params.studentId, req.body, {new : true})
  .then((student) => {
    res.json(student)
  })
  .catch((err) => {
    res.json(err)
  })
}

function deleteStudent(req, res){
  studentsModel.findByIdAndDelete(req.params.studentId)
    .then((student) => {
      res.json(student)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = {
 getAllStudents,
 getStudent,
 updateStudent,
 deleteStudent,
 createStudent
}