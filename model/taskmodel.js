const mongoose = require('mongoose')

const TaskModel = mongoose.Schema({
  description: {
    type: String,
    required: true
},
category: {
    type: String,
    required: true
},
task_date: {
    type: String,
    required: true
},
task_time: {
  type: String,
  required: true
},
date_created: {
  type:Date,
  default:Date.now()
}

})

module.exports = mongoose.model('TaskModel', TaskModel)