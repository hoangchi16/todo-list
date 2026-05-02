import React from "react";
import { useState } from "react";
import axios from "axios";

function CreateTask() {
    const [task, setTask] = useState();
    async function handleAddTask() {
        try {
            const result = await axios.post('http://localhost:3001/addTask', {taskDeet: task});
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <input type="text" placeholder="Enter Task" className="create-task-input" onChange={(e) => setTask(e.target.value)}></input>
            <button className="create-task-button" onClick={handleAddTask}>Add</button>
        </div>
    );
}

export default CreateTask