const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: String
})

const TaskModel = mongoose.model("todos", todoSchema)

module.exports = TaskModel