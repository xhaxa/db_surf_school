const usersModel = require('../models/users.model')



function seeYourUser(req, res) {
  const userId = res.locals.id
  usersModel.findById(userId)
    .then((user) => res.json(user))
    .catch((err) => res.json(err))
}

function getAllUsers(req, res) {
  usersModel.find(req.query)
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res.json(err)
    })
}

function seeOneUser(req, res) {
  usersModel.findById(req.params.userId)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.json(err)
    })
}

function modifyUser(req, res){
  usersModel.findByIdAndUpdate(req.params.userId, req.body, {new : true})
    .then((user) => {
      console.log(user);
      res.json(user)
    })
    .catch((err) => {
      res.json(err)
    })
}

function deleteUser(req, res){
  usersModel.findByIdAndDelete(req.params.userId)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.json(err)
    })
}

function addStudentToUser(req, res){
  const userId = req.params.userId
  const refStudent = req.body._id

  usersModel.findById(userId)
    .then((user) => {
    user.students.push(refStudent)
    user.save()
    res.json(user)
  })
  .catch((err) => {
    res.json(err)
  })
}

function seeUsersStudentList(req, res){
  const userId = req.params.userId
  
  usersModel.findById(userId)
    .populate('students')
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.json(err)
    })
}
/*
function deleteStudentFromUser(req, res){ 
  const userId = req.params.userId
  const refStudent = req.body._id

  usersModel.findById(userId)
    .then((user) => {
      user.students.filter(student => {
      student._id !== refStudent
      console.log(user.students);
    })
    user.save()
    console.log(user.students);
    res.json(user.students);
    })
    .catch((err) => {
      res.status(404).json(err);
    })
}
*/
function deleteStudentFromUser(req, res){ 
  const userId = req.params.userId
  const refStudent = req.body._id

  usersModel.findById(userId)
    .then((user) => {
      let found = -1
      for (let i in user.students){
        if (refStudent !== user.students[i]){
          found = i;
        }
      }
      if(found > -1){
        user.students.splice(found, 1)
      }
      user.save()
      console.log(user.students);
      res.json(user.students);
    })
    
    .catch((err) => {
      res.status(404).json(err);
    })
}

module.exports = {
  seeYourUser,
  getAllUsers,
  seeOneUser,
  modifyUser,
  deleteUser,
  addStudentToUser,
  seeUsersStudentList,
  deleteStudentFromUser
}