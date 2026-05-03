const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TaskModel = mongoose.model("tasks", todoSchema)

module.exports = TaskModel