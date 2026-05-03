const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TaskModel = require("./Models/todoList")

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/TodoTask');

app.post('/addTask', async (req, res) => {
    // console.log("Attempt to add to mongodb");
    const taskDeet = req.body.taskDeet;
    try {
        const result = await TaskModel.create({
            task: taskDeet
        });
        res.json(result);
    } catch (err) {
        res.json(err);
    }
    
})

app.get('/getTask', async(req, res) => {
    try {
        const result = await TaskModel.find();
        res.json(result);
    } catch (error) {
        res.json(error);
    }
})

app.put('/updateStatus/:id', async(req, res) => {
    const {id} = req.params;
    // console.log(id)
    try {
        const result = await TaskModel.findByIdAndUpdate({_id: id}, {done: true});
        res.json(result);
    } catch (error) {
        res.json(error);
    }
})

app.listen(3001, () => {
    console.log("Server running")
})