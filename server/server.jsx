const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TaskModel = require("./Models/todoList")

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test');

// app.post('/addTask', (req, res) => {

// })

// app.listen(3001, () => {
//     console.log("Server running")
// })