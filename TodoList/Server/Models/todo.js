const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task : String
})

const TodoModel = mongoose.model("TodoList" , todoSchema)
module.exports = TodoModel 