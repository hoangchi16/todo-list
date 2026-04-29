import React from "react";

function CreateTask() {
    return (
        <div>
            <input type="text" placeholder="Enter Task" className="create-task-input"></input>
            <button className="create-task-button">Add</button>
        </div>
    )
}

export default CreateTask