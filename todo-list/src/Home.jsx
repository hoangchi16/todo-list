import React from "react";
import CreateTask from "./CreateTask";
import { useState } from "react";

function Home() {
    const [todos, setTodos] = useState([]);

    return (
        <div  className='Home-Display'>
            <h1>To-do List</h1>
            <CreateTask />
            
            {
                todos.length === 0 
                ? <h2>No record</h2> 
                : todos.map((task) => (
                    <div> {task} </div>
                ))
            }
        </div>
    );
}

export default Home;