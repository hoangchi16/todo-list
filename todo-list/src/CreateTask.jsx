import React from "react";
import { useState } from "react";
import axios from "axios";

function CreateTask() {
    // const [task, setTask] = useState()
    // async function handleAddTask() {
    //     await axios.post('http://localhost:3001/')
    // }

    return (
        <div>
            <input type="text" placeholder="Enter Task" className="create-task-input"></input>
            <button className="create-task-button">Add</button>
        </div>
    )
}

export default CreateTask